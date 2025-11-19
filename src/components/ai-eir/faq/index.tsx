// src/components/ai-eir/faq/index.tsx
"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };
type FaqGroup = { heading: string; items: FaqItem[] };

const HILIGHT = "#FF624D";
const BG = "rgb(17, 4, 23)";

// === CONTEÚDO REAL DO FAQ (pelas suas prints) ===
const GROUPS: FaqGroup[] = [
  {
    heading: "Elegibilidade e Perfil dos Founders",
    items: [
      {
        q: "Quem pode participar do AI EiR da Canastra Ventures?",
        a: "Equipes early-stage com 2 a 4 founders, sendo obrigatória a presença de pelo menos um fundador técnico.",
      },
      {
        q: "Posso participar sozinho?",
        a: "Não. Não investimos em startups com apenas 1 founder. Recomendamos que você busque co-founders antes ou durante o processo seletivo.",
      },
      {
        q: "Preciso já ter um MVP ou produto desenvolvido?",
        a: "Não. O AI EiR foi criado justamente para apoiar a validação inicial de tese e o desenvolvimento do MVP durante o programa.",
      },
      {
        q: "Meu projeto pode estar em stealth (não divulgado publicamente)?",
        a: "Sim. Projetos em stealth são bem-vindos, desde que haja dedicação full-time de ao menos um fundador ao programa desde o início.",
      },
      {
        q: "Que tipo de startups a Canastra Ventures busca nesta edição?",
        a: "Buscamos startups de IA com potencial para escala acelerada, especialmente em setores como fintech, saúde, salestech, martech, legaltech, edtech, deeptech, regtech e soluções SaaS B2B. Startups de outros setores com forte componente de IA também são bem-vindas. Também investimos no que chamamos de AI Tech Stack, que são APIs, modelos, dados, segurança e demais ferramentas para construção de aplicações de IA.",
      },
    ],
  },
  {
    heading: "Detalhes do Programa e Metodologia",
    items: [
      {
        q: "Como funcionam as Office Hours?",
        a: "As sessões semanais (individuais e em grupo) são práticas, hands-on, lideradas por Fellow Partners da Canastra Ventures e world-class founders, com o objetivo de acelerar decisões, refinar estratégias e desbloquear desafios de negócio.",
      },
      {
        q: "O programa é presencial ou remoto?",
        a: "O programa é remoto, com encontros presenciais opcionais e estratégicos — como o Demo Day no Canastra Summit (28/11, em SP), que encerra a residência conectando founders a investidores e à comunidade Canastra.",
      },
      {
        q: "Quais são os principais entregáveis esperados no fim do programa?",
        a: "Os principais entregáveis são: MVP validado e em produção, clientes iniciais pagantes ou usuários ativos e um pitch deck validado e pronto para captação no Demo Day.",
      },
      {
        q: "Qual é a carga horária esperada para participantes?",
        a: "Esperamos dedicação integral (full-time) durante as 12 semanas, devido à intensidade e profundidade do programa. Os encontros síncronos do programa demandarão entre 3 a 4 horas semanais.",
      },
    ],
  },
  {
    heading: "Nosso modelo de Equity Share Agreement",
    items: [
      {
        q: "Quanto custa participar do AI EiR?",
        a: "O programa não possui nenhum custo inicial. Para as startups que avançarem para a segunda etapa do AI EiR, a Canastra Ventures entra como parceira no modelo equity: recebemos 1,5% de participação societária (equity) apenas se você captar investimento nos 24 meses seguintes ao programa. Além disso, temos a opção adicional de co-investir até R$ 800 mil, com um desconto de 20% sobre o valuation da 1ª rodada.",
      },
      {
        q: "Sou obrigado a ceder equity logo no início?",
        a: "Não. O programa é dividido em duas etapas. A primeira parte serve para que tanto você quanto a Canastra Ventures avaliem se há alinhamento de visão, ritmo e construção conjunta. Somente ao final dessa etapa, se ambas as partes concordarem em seguir, o modelo de equity entra em vigor.",
      },
      {
        q: "Preciso ter CNPJ para me inscrever?",
        a: "Não é obrigatório ter uma empresa formalizada no momento da inscrição, mas é recomendável que você esteja pronto para formalizá-la até o fim da 1ª etapa do programa.",
      },
    ],
  },
  {
    heading: "Benefícios e Recursos do Programa",
    items: [
      {
        q: "Que benefícios extras terei como participante do programa?",
        a: "Os benefícios extras incluem: créditos exclusivos (cloud, ferramentas de IA, plataformas legais e contratação), rede de recrutamento estratégico (advisors e primeiros colaboradores-chave), conexão com investidores anjos estratégicos e fundos parceiros — para startups que demonstrarem tração e estejam preparadas para captar — e suporte técnico especializado sob demanda (Build Clinic).",
      },
      {
        q: "Como funcionam as Quartas de Conteúdo?",
        a: "Toda quarta-feira promovemos workshops, webinars, mesas redondas e talks com referências nacionais e internacionais em IA, empreendedorismo, investimento e produto, geralmente abertos à comunidade da Canastra Ventures. São momentos fundamentais de inspiração, aprendizado prático e networking qualificado.",
      },
      {
        q: "O que é o C-Launch (lançamento das startups)?",
        a: "O C-Launch é o momento em que lançamos oficialmente as startups ao mercado através de nossos canais oficiais.",
      },
    ],
  },
  {
    heading: "Após o Programa",
    items: [
      {
        q: "Que tipo de suporte a Canastra Ventures oferece após o fim do AI EiR?",
        a: "Para startups formadas e que seguirem para o Demoday, apoiaremos com o fundraising. Além disso, todas as startups do programa seguem com acesso vitalício à comunidade de founders, mentorias pontuais, conexões estratégicas com investidores e parceiros, além de possibilidade de co-investimento de até R$ 800 mil da Canastra Ventures na primeira rodada.",
      },
      {
        q: "Vocês fazem intros para outros fundos e investidores após o programa?",
        a: "Sim. Ajudamos as startups formadas ativamente na conexão com investidores-anjo, fundos nacionais e internacionais parceiros, buscando aumentar suas chances de captação e acelerar o crescimento pós-programa (para startups aprovadas no Demoday).",
      },
      {
        q: "Posso citar publicamente que participei do AI EiR da Canastra Ventures?",
        a: "Sim. Incentivamos fortemente que você utilize a chancela Canastra Ventures como sinal de credibilidade para investidores, clientes e parceiros. É uma vantagem adicional importante após o programa.",
      },
    ],
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  return (
    <section id="faq" className="text-white" style={{ backgroundColor: BG }}>
      <div className="mx-auto max-w-[1100px] px-5 py-14">
        {/* Título */}
        <header className="mb-10">
          <h1 className="font-serif text-[30px] leading-tight min-[820px]:text-[40px]">
            FAQ
          </h1>
        </header>

        {/* Grupos */}
        <div className="space-y-12">
          {GROUPS.map((g, gIdx) => (
            <section key={g.heading}>
              <h2 className="text-white/90 text-[18px] min-[820px]:text-[20px] font-semibold mb-5">
                {g.heading}
              </h2>

              <ul className="space-y-4">
                {g.items.map((item, iIdx) => {
                  const n = String(iIdx + 1).padStart(2, "0");
                  const key = `${gIdx}-${iIdx}`;
                  const isOpen = !!open[key];

                  return (
                    <li key={key}>
                      <div className="rounded-[10px] bg-[#262626] px-4 sm:px-5 py-4 sm:py-5 border border-white/15">
                        <button
                          type="button"
                          onClick={() =>
                            setOpen((s) => ({ ...s, [key]: !s[key] }))
                          }
                          className="w-full flex items-center gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                          aria-expanded={isOpen}
                        >
                          <span className="font-serif text-[22px] sm:text-[24px] leading-none select-none text-white/70">
                            {n}
                          </span>

                          <span className="flex-1 text-[15px] sm:text-[17px]">
                            {item.q}
                          </span>

                          <span
                            aria-hidden
                            className="grid place-items-center h-9 w-9 rounded-full border border-white/30 text-white/90 hover:bg-white/10 transition"
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              className={`transition-transform ${
                                isOpen ? "rotate-45" : ""
                              }`}
                            >
                              <path
                                d="M12 5v14M5 12h14"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                fill="none"
                              />
                            </svg>
                          </span>
                        </button>

                        {/* resposta */}
                        <div
                          className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="pt-3 text-white/80 text-[14px] sm:text-[15px] leading-relaxed">
                              {item.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
