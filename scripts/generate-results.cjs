// Script para ler a planilha do curso e gerar/atualizar a aba RESULTADOS
// Uso: node scripts/generate-results.cjs

const path = require('path');
const fs = require('fs');
const XLSX = require('xlsx');

// Caminho do arquivo na pasta public
const FILE_RELATIVE = path.join('public', 'DIÁRIO ATUALIZADO CURSO HUIOS AVANÇADO_COM_RESULTADOS.xlsx');
const FILE_PATH = path.join(process.cwd(), FILE_RELATIVE);

// Função utilitária para obter o valor de uma célula como texto
function cellVal(cell) {
  if (!cell) return '';
  const v = cell.v ?? cell.w ?? '';
  return typeof v === 'string' ? v.trim() : String(v).trim();
}

// Procura a linha de cabeçalho onde aparece "Nome Aluno(a)"
function findHeaderRow(sheet) {
  const range = XLSX.utils.decode_range(sheet['!ref']);
  for (let r = range.s.r; r <= range.e.r; r++) {
    for (let c = range.s.c; c <= range.e.c; c++) {
      const addr = XLSX.utils.encode_cell({ r, c });
      const v = cellVal(sheet[addr]);
      if (v.toLowerCase().includes('nome aluno')) {
        return r; // linha do cabeçalho
      }
    }
  }
  return null;
}

// Encontra a coluna pela palavra-chave, buscando em um intervalo de linhas
function findColumnByKeyword(sheet, keyword, fromRow, toRow) {
  const range = XLSX.utils.decode_range(sheet['!ref']);
  const startR = fromRow != null ? fromRow : range.s.r;
  const endR = toRow != null ? toRow : Math.min(range.e.r, startR + 10); // buscar próximo ao cabeçalho
  const kw = keyword.toLowerCase();
  for (let r = startR; r <= endR; r++) {
    for (let c = range.s.c; c <= range.e.c; c++) {
      const addr = XLSX.utils.encode_cell({ r, c });
      const v = cellVal(sheet[addr]).toLowerCase();
      if (v.includes(kw)) {
        return c;
      }
    }
  }
  return null;
}

// Lê uma aba de módulo e devolve um mapa: nome -> { presenca, faltas, nota }
function parseModuleSheet(sheet) {
  const headerRow = findHeaderRow(sheet);
  if (headerRow == null) {
    return new Map();
  }
  const range = XLSX.utils.decode_range(sheet['!ref']);

  // Descobrir índices das colunas importantes
  const headers = {};
  // Nome da coluna
  headers.nome = findColumnByKeyword(sheet, 'nome aluno', headerRow, headerRow);
  // As demais podem estar em linhas acima/abaixo devido a mesclagens
  headers.presenca = findColumnByKeyword(sheet, 'presen', headerRow - 2, headerRow + 4);
  headers.faltas = findColumnByKeyword(sheet, 'falta', headerRow - 2, headerRow + 4);
  headers.nota = findColumnByKeyword(sheet, 'nota', headerRow - 2, headerRow + 4);

  const map = new Map();
  // Linhas de dados começam na próxima linha
  for (let r = headerRow + 1; r <= range.e.r; r++) {
    const nomeCell = XLSX.utils.encode_cell({ r, c: headers.nome });
    const nome = cellVal(sheet[nomeCell]);
    if (!nome) continue; // ignora linhas vazias

    const presenca = headers.presenca != null ? cellVal(sheet[XLSX.utils.encode_cell({ r, c: headers.presenca })]) : '';
    const faltas = headers.faltas != null ? cellVal(sheet[XLSX.utils.encode_cell({ r, c: headers.faltas })]) : '';
    const notaRaw = headers.nota != null ? cellVal(sheet[XLSX.utils.encode_cell({ r, c: headers.nota })]) : '';

    // Trata nota: converter "9,00" -> 9.00; manter '?' como vazio
    let nota = '';
    if (notaRaw && notaRaw !== '?' && notaRaw !== '??') {
      const normalized = notaRaw.replace(',', '.');
      const n = Number(normalized);
      nota = Number.isFinite(n) ? n : '';
    }

    // Presença e Faltas como números quando possível
    const presNum = presenca === '' ? NaN : Number(presenca);
    const faltNum = faltas === '' ? NaN : Number(faltas);

    map.set(nome, {
      presenca: Number.isFinite(presNum) ? presNum : (presenca === '' ? '' : presenca),
      faltas: Number.isFinite(faltNum) ? faltNum : (faltas === '' ? '' : faltas),
      nota,
    });
  }
  return map;
}

// Determina situação final conforme regras fornecidas
function calcularSituacao(modulos) {
  // modulos: array de { presenca, faltas, nota } por módulo (tamanho até 7)
  const totalModulos = 7;
  const completos = modulos.filter(m => m != null).length;

  // Regra de cursando: se não tiver dados de todos os 7 módulos
  if (completos < totalModulos) {
    // Ainda pode haver reprovação por faltas se já tiver algum módulo com 3 faltas
    const reprovouPorFaltas = modulos.some(m => m && Number(m.faltas) === 3);
    return reprovouPorFaltas ? 'Reprovado (faltou todas as aulas em um módulo)' : 'Cursando';
  }

  // Regra 1: 3 faltas em todos os 7 módulos -> reprova
  const faltouTodos = modulos.every(m => m && Number(m.faltas) === 3);
  if (faltouTodos) {
    return 'Reprovado (3 faltas em todos os 7 módulos)';
  }

  // Regra 2 (interpretação): se teve 3 faltas em qualquer módulo -> reprova
  const algumModuloCom3Faltas = modulos.some(m => m && Number(m.faltas) === 3);
  if (algumModuloCom3Faltas) {
    return 'Reprovado (3 faltas em algum módulo)';
  }

  // Sem regra explícita de nota, considerar aprovado
  return 'Aprovado';
}

function main() {
  if (!fs.existsSync(FILE_PATH)) {
    console.error('Arquivo não encontrado:', FILE_PATH);
    process.exit(1);
  }

  const wb = XLSX.readFile(FILE_PATH);

  // Identificar abas de módulo (nomes contendo "MÓDULO" ou "MODULO")
  const moduleSheets = wb.SheetNames.filter(name => name.toLowerCase().includes('módulo') || name.toLowerCase().includes('modulo'));

  // Mapear dados por módulo
  const modulosData = moduleSheets.map(name => parseModuleSheet(wb.Sheets[name]));

  // Conjunto de todos os alunos
  const alunos = new Set();
  modulosData.forEach(map => {
    map.forEach((_, nome) => alunos.add(nome));
  });

  // Cabeçalho da aba RESULTADOS
  const header = ['Nome'];
  for (let i = 1; i <= 7; i++) {
    header.push(`M${i} Presença`);
    header.push(`M${i} Nota`);
  }
  header.push('Situação');

  const aoa = [header];

  // Montar linhas por aluno
  alunos.forEach(nome => {
    const row = [nome];
    const modulosParaSituacao = [];
    for (let i = 0; i < 7; i++) {
      const map = modulosData[i];
      const dados = map ? map.get(nome) : null;
      if (dados) {
        row.push(dados.presenca);
        row.push(dados.nota === '' ? '' : dados.nota);
        modulosParaSituacao.push({ presenca: dados.presenca, faltas: dados.faltas, nota: dados.nota });
      } else {
        row.push('');
        row.push('');
        modulosParaSituacao.push(null);
      }
    }
    const situacao = calcularSituacao(modulosParaSituacao);
    row.push(situacao);
    aoa.push(row);
  });

  // Criar/atualizar a aba RESULTADOS
  const resultadosSheet = XLSX.utils.aoa_to_sheet(aoa);
  wb.Sheets['RESULTADOS'] = resultadosSheet;
  if (!wb.SheetNames.includes('RESULTADOS')) wb.SheetNames.push('RESULTADOS');

  // Salvar no mesmo arquivo
  XLSX.writeFile(wb, FILE_PATH);

  console.log('Aba RESULTADOS atualizada com sucesso em:', FILE_PATH);
}

main();