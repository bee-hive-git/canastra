// src/components/ai-eir/faq/index.tsx
"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };
type FaqGroup = { heading: string; items: FaqItem[] };

const HILIGHT = "#FF624D";
const BG = "rgb(17, 4, 23)";

/* =============================
   CONTEÚDO DO FAQ
============================= */
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
        a: "Buscamos startups de IA com potencial para escala acelerada, especialmente em setores como fintech, saúde, salestech, martech, legaltech, edtech, deeptech, regtech e soluções SaaS B2B. Startups de outros setores com forte componente de IA também são bem-vindas.",
      },
    ],
  },
  {
    heading: "Detalhes do Programa e Metodologia",
    items: [
      {
        q: "Como funcionam as Office Hours?",
        a: "As sessões semanais (individuais e em grupo) são práticas, hands-on, lideradas por Fellow Partners da Canastra Ventures e world-class founders.",
      },
      {
        q: "O programa é presencial ou remoto?",
        a: "O programa é remoto, com encontros presenciais opcionais — como o Demo Day no Canastra Summit, que conecta founders a investidores.",
      },
      {
        q: "Quais são os principais entregáveis esperados no fim do programa?",
        a: "MVP validado e em produção, clientes iniciais pagantes ou usuários ativos e pitch deck pronto para captação.",
      },
      {
        q: "Qual é a carga horária esperada para participantes?",
        a: "Dedicação integral (full-time) durante as 12 semanas, com cerca de 3 a 4 horas semanais de encontros síncronos.",
      },
    ],
  },
  {
    heading: "Nosso modelo de Equity Share Agreement",
    items: [
      {
        q: "Quanto custa participar do AI EiR?",
        a: "O programa não possui custo inicial. Após a primeira etapa, caso haja alinhamento, a Canastra recebe 1,5% de equity somente se você captar nos 24 meses seguintes.",
      },
      {
        q: "Sou obrigado a ceder equity logo no início?",
        a: "Não. O modelo de equity só entra em vigor após a primeira etapa se ambas as partes quiserem seguir juntas.",
      },
      {
        q: "Preciso ter CNPJ para me inscrever?",
        a: "Não é obrigatório no início, mas é recomendável que esteja pronto para formalizar até o fim da primeira etapa.",
      },
    ],
  },
  {
    heading: "Benefícios e Recursos do Programa",
    items: [
      {
        q: "Que benefícios extras terei como participante do programa?",
        a: "Créditos exclusivos, rede de recrutamento estratégico, apoio técnico, advisors e conexões com investidores.",
      },
      {
        q: "Como funcionam as Quartas de Conteúdo?",
        a: "Workshops, webinars e mesas redondas com referências nacionais e internacionais em IA, produto e investimento.",
      },
      {
        q: "O que é o C-Launch?",
        a: "O lançamento oficial das startups ao mercado pelos canais da Canastra.",
      },
    ],
  },
  {
    heading: "Após o Programa",
    items: [
      {
        q: "Que tipo de suporte existe após o fim do programa?",
        a: "Apoio ao fundraising, acesso vitalício à comunidade de founders, mentorias pontuais e conexões estratégicas.",
      },
      {
        q: "Vocês fazem intros para outros investidores?",
        a: "Sim. Conectamos startups com anjos, fundos nacionais e internacionais parceiros.",
      },
      {
        q: "Posso divulgar que participei do AI EiR?",
        a: "Sim. Recomendamos fortemente que use a chancela Canastra como sinal de credibilidade.",
      },
    ],
  },
];

/* =============================
   COMPONENTE FAQ
============================= */

export default function FAQ() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  return (
    <section id="faq" className="text-white" style={{ backgroundColor: BG }}>
      <div className="mx-auto max-w-[1100px] px-5 pt-20 pb-14">
        {/* ===== H1 ===== */}
        <header className="mb-16 text-center">
          <h1
            className="font-bold leading-[0.75] text-[clamp(40px,6vw,84.45px)]"
            style={{ fontFamily: '"Crimson Text", serif' }}
          >
            <span>Frequently Asked </span>
            <span className="italic" style={{ color: HILIGHT }}>
              Questions
            </span>
          </h1>
        </header>

        {/* ===== GRUPOS ===== */}
        <div className="space-y-12">
          {GROUPS.map((g, gIdx) => (
            <section key={g.heading}>
              {/* Título do Grupo */}
              <h2 className="text-white/60 text-[18px] min-[820px]:text-[20px] font-semibold mb-5 text-center">
                {g.heading}
              </h2>

              <ul className="space-y-4">
                {g.items.map((item, iIdx) => {
                  const n = String(iIdx + 1).padStart(2, "0");
                  const key = `${gIdx}-${iIdx}`;
                  const isOpen = !!open[key];

                  return (
                    <li key={key}>
                      <div className="rounded-[10px] bg-[#1A1A1A] px-4 sm:px-5 py-4 sm:py-5 border border-white/10">
                        <button
                          type="button"
                          onClick={() =>
                            setOpen((s) => ({ ...s, [key]: !s[key] }))
                          }
                          className="w-full flex items-center gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                          aria-expanded={isOpen}
                        >
                          {/* Número */}
                          <span
                            className="select-none text-white"
                            style={{
                              fontFamily: '"Crimson Text", serif',
                              fontWeight: 600,
                              fontSize: "clamp(26px, 2.8vw, 63.46px)",
                              lineHeight: "0.93",
                              letterSpacing: "-1.46px",
                            }}
                          >
                            {n}
                          </span>

                          {/* Pergunta */}
                          <span
                            className="flex-1 text-white"
                            style={{
                              fontFamily: '"Hanken Grotesk", sans-serif',
                              fontWeight: 600,
                              fontSize: "clamp(15px, 1.4vw, 20px)",
                              lineHeight: "1.05",
                              letterSpacing: "-0.7px",
                            }}
                          >
                            {item.q}
                          </span>

                          {/* Ícone */}
                          <span
                            aria-hidden
                            className="grid place-items-center h-9 w-9 rounded-full border border-white/50 text-white hover:bg-white/10 transition"
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

                        {/* Resposta */}
                        <div
                          className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="pt-3 text-white text-[14px] sm:text-[15px] leading-relaxed">
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
