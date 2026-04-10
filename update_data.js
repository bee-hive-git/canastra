const fs = require('fs');

const dataTsPath = 'src/components/time/TeamTabs/data.ts';
let dataTs = fs.readFileSync(dataTsPath, 'utf8');
const excel = require('./excel_data.json');

const nameMap = {
  'Larissa Bomfim': 'Larissa Bonfim',
  'Hugo Dias': 'Hugo DIas',
  'Antonio Barczinski': 'Antonio Barczinsk'
};

Object.keys(excel).forEach(k => {
  const tsName = Object.keys(nameMap).find(n => nameMap[n] === k) || k;
  
  // Format bio to be safely inserted into TS
  const bio = excel[k].bio
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n');
    
  const ln = excel[k].linkedin;

  // We want to replace the `description` value for the specific `name` block.
  // Using a regex that matches the object block for that name
  const regex = new RegExp(`(\\{\\s*name:\\s*"${tsName}",[^}]*?description:\\s*")(.*?)("[^}]*?\\})`, 's');
  
  dataTs = dataTs.replace(regex, (match, p1, p2, p3) => {
    let newBlock = p1 + bio + p3;
    
    if (ln) {
      if (newBlock.includes('linkedin:')) {
        // update existing linkedin
        newBlock = newBlock.replace(/linkedin:\s*"[^"]*"/, `linkedin: "${ln}"`);
      } else {
        // append linkedin after image or gridImage
        newBlock = newBlock.replace(/(image:\s*"[^"]*"(?:,\s*gridImage:\s*"[^"]*")?)/, `$1,\n    linkedin: "${ln}"`);
      }
    } else {
      // If no linkedin in excel, maybe remove it if it exists and is # ?
      // If the user wants to keep existing ones, we do nothing.
      // But if it is "#", let's remove it.
      if (newBlock.includes('linkedin: "#"')) {
        newBlock = newBlock.replace(/,\s*linkedin:\s*"#"/, '');
      }
    }
    
    return newBlock;
  });
});

fs.writeFileSync(dataTsPath, dataTs);
console.log('Done updating data.ts');
