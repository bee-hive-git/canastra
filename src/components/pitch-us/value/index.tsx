"use client";

import { CSSProperties } from "react";

export default function Value() {
  const HILIGHT = "#FF624D";
  const BORDER = "rgba(255, 98, 77, 0.35)";
  const BG = "rgb(17, 4, 23)";

  const cards = [
    {
      title: "AI Advisory",
      body: "Contamos com referências globais para apoiar nossas investidas na estratégia e no desenvolvimento do roadmap e GTM do produto em IA. Distribuição e diferenciação de produtos de IA estão no centro do que fazemos de melhor.",
    },
    {
      title: "Talent Acquisition",
      body: "Com uma comunidade para atração de talentos em IA e parcerias com UFG, USP e Intel, somos referência no recrutamento de talentos de IA para nossas investidas.",
    },
    {
      title: "Biz Dev",
      body: "Conectamos as startups a clientes e parceiros estratégicos, além de oferecer acesso a uma rede com mais de 35 benefícios exclusivos — incluindo créditos com cloud e Dev Tools.",
    },
    {
      title: "Tech & Product Advisory",
      body: "Escalar um produto do MVP ao Product-Market Fit não é simples. Por isso, contamos com especialistas em tecnologia e produto para apoiar nossos Founders nesse desafio.",
    },
    {
      title: "Board of Advisors",
      body: "Conectamos nossos Founders a Advisors estratégicos que contribuem na construção da visão de produto, no acesso a mercado e na diferenciação da solução.",
    },
    {
      title: "Fundraising",
      body: "Atuamos ao lado dos Founders na estratégia de captação do Seed round, apoiando na preparação de materiais, definição da abordagem e conexão com fundos de primeira linha.",
    },
  ];

  return (
    <section
      id="value"
      className="relative text-white pt-14 pb-20 min-[820px]:pt-24"
      style={{ backgroundColor: BG }}
    >
      <style jsx global>{`
        /* imagem só no desktop */
        @media (min-width: 820px) {
          #value {
            background-image: url("/pitch-us/value/fundo.png");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }
        }

        /* gutters (alinhamento à esquerda com Hero/Time) */
        @media (min-width: 820px) {
          #value .wrap {
            margin-left: 0;
            padding-left: var(--site-padding-left);
            padding-right: var(--site-padding-right);
          }
          #value {
            --gutter-left: var(--site-padding-left);
            --gutter-right: var(--site-padding-right);
          }
        }

        /* Card Hover Animation */
        .value-card {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), 
                      border-color 0.3s ease, 
                      box-shadow 0.3s ease, 
                      background-color 0.3s ease;
          will-change: transform;
        }
        .value-card:hover {
          transform: translateY(-8px);
          border-color: #FF624D !important;
          box-shadow: 0 16px 32px -12px rgba(255, 98, 77, 0.25) !important;
          background-color: rgba(255, 98, 77, 0.03) !important;
        }
      `}</style>

      {/* divisória superior da sessão (apenas TOPO) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.28), rgba(255,255,255,0))",
          opacity: 0.4,
        }}
      />

      {/* mobile */}
      <div className="mx-auto max-w-[560px] px-5 min-[820px]:hidden">
        <header className="text-center">
          <h2
            className="font-bold text-[28px] leading-snug mb-4 fade-up"
            style={{
              fontFamily: '"Crimson Text", serif',
            }}
          >
            Nosso{" "}
            <span
              className="italic"
              style={{ color: HILIGHT, fontWeight: 700 }}
            >
              Value Add
            </span>
          </h2>

          <div
            className="text-white/90 text-[18px] leading-snug mx-auto max-w-none font-normal text-left fade-up-delay"
            style={{
              fontFamily:
                '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Após o investimento, colaboramos com os founders na criação de um
            plano de 100 dias, com reuniões semanais para acompanhar o
            progresso. Atuamos de forma próxima em frentes como Biz Dev, Talent
            Acquisition, GTM, estruturação do quadro de advisors e,
            principalmente, com nosso maior value add: um time de Venture
            Partners formado por referências do setor, que apoia na construção
            da estratégia do roadmap de produto de IA. Nosso foco está no apoio
            prático e contínuo às startups do portfólio.
          </div>
        </header>

        <div
          className="mt-10 space-y-10"
          style={
            {
              "--mCardW": "86%",
              "--mCardH": "240px",
            } as React.CSSProperties
          }
        >
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border px-5 py-5 mx-auto value-card"
              style={{
                width: "var(--mCardW)",
                minHeight: "var(--mCardH)",
                borderColor: BORDER,
                backgroundColor: "transparent",
                boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.12)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <h3
                className="mb-2 leading-tight"
                style={{
                  fontFamily:
                    '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                  fontSize: "18px",
                  letterSpacing: "0.28px",
                }}
              >
                {c.title}
              </h3>
              <p
                className="text-white/85 leading-relaxed"
                style={{
                  fontFamily:
                    '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400,
                  fontSize: "12.5px",
                  letterSpacing: "0.4px",
                }}
              >
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* desktop */}
      <div className="hidden min-[820px]:block">
        {/* wrap SEM max-width: começa no mesmo lugar à esquerda e estica mais pra direita */}
        <div className="wrap min-[820px]:mx-auto min-[820px]:px-0 max-w-none">
          <header className="head max-w-none">
            <h2
              className="font-bold text-[clamp(2.25rem,4vw,3.75rem)] min-[820px]:leading-[1.08] fade-up mb-6"
              style={{
                fontFamily: '"Crimson Text", serif',
              }}
            >
              Nosso{" "}
              <span
                className="italic"
                style={{ color: HILIGHT, fontWeight: 700 }}
              >
                Value Add
              </span>
            </h2>

            <p
              className="text-white/90 font-normal fade-up-delay max-w-none"
              style={{
                fontFamily:
                  '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontSize: "clamp(22px, 1.7vw, 28px)",
                lineHeight: 1.7,
              }}
            >
              Após o investimento, colaboramos com os founders na criação de um
              plano de 100 dias, com reuniões semanais para acompanhar o
              progresso. Atuamos de forma próxima em frentes como Biz Dev, Talent
              Acquisition, GTM, estruturação do quadro de advisors e,
              principalmente, com nosso maior value add: um time de Venture
              Partners formado por referências do setor, que apoia na construção
              da estratégia do roadmap de produto de IA. Nosso foco está no
              apoio prático e contínuo às startups do portfólio.
            </p>
          </header>
        </div>

        <div
          className="relative w-full mt-14"
          style={
            {
              paddingLeft: "var(--gutter-left)",
              paddingRight: "var(--gutter-right)",
              "--gapX": "clamp(44px, 5vw, 96px)",
              "--gapY": "36px",
              // tipografia cards desktop
              "--cardPadX": "24px",
              "--cardPadY": "24px",
              "--title": "clamp(18px, 2.2vw, 31.37px)",
              "--body": "clamp(12.5px, 1.35vw, 18.3px)",
              "--minH": "178px",
              "--cardNarrow": "100%",
            } as CSSProperties
          }
        >
          <div
            className="grid grid-cols-3"
            style={{
              columnGap: "var(--gapX)",
              rowGap: "var(--gapY)",
            }}
          >
            {cards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border mx-auto value-card"
                style={{
                  width: "var(--cardNarrow)",
                  borderColor: BORDER,
                  backgroundColor: "transparent",
                  boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.12)",
                  padding: "var(--cardPadY) var(--cardPadX)",
                  minHeight: "var(--minH)",
                }}
              >
                <h3
                  className="leading-tight mb-2"
                  style={{
                    fontFamily:
                      '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    fontSize: "var(--title)",
                    lineHeight: "1.09",
                    letterSpacing: "0.28px",
                  }}
                >
                  {c.title}
                </h3>
                <p
                  className="text-white/85 leading-relaxed"
                  style={{
                    fontFamily:
                      '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400,
                    fontSize: "var(--body)",
                    lineHeight: "1.16",
                    letterSpacing: "0.58px",
                  }}
                >
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
