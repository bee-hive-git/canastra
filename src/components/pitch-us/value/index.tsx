// src/components/pitch-us/value/index.tsx
"use client";

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

        /* gutters */
        @media (min-width: 1181px) && (max-width: 1439px) {
          #value .wrap {
            margin-left: 26px;
          }
          #value {
            --gutter-left: calc(26px + 32px);
          }
        }
        @media (min-width: 1440px) {
          #value .wrap {
            margin-left: 40px;
          }
          #value {
            --gutter-left: calc(40px + 32px);
          }
        }
        @media (min-width: 820px) and (max-width: 1180px) {
          #value {
            --gutter-left: 32px;
          }
        }

        /* ----- AUMENTO DE TAMANHO (somente desktop ≥1181px) ----- */
        @media (min-width: 1181px) {
          #value .head h2 {
            font-size: clamp(48px, 4.1vw, 72px);
            line-height: 1.12;
          }
          #value .head p {
            font-size: clamp(22px, 1.6vw, 26px);
            line-height: 1.78;
          }
        }
      `}</style>

      {/* mobile */}
      <div className="mx-auto max-w-[560px] px-5 min-[820px]:hidden">
        <header className="text-center">
          <h2 className="font-serif text-[28px] leading-tight">
            Nosso{" "}
            <span
              className="italic font-semibold"
              style={{ color: HILIGHT }}
            >
              Value Add
            </span>
          </h2>
          <div className="mt-3 mx-auto text-[14px] leading-relaxed text-white/85 text-left">
            Após o investimento, colaboramos com os founders na criação de um
            plano de 100 dias, com reuniões semanais para acompanhar o
            progresso. Atuamos{" "}
            <span
              className="italic font-semibold"
              style={{ color: HILIGHT }}
            >
              de forma próxima
            </span>{" "}
            em frentes como Biz Dev, Talent Acquisition, GTM, estruturação do
            quadro de advisors e, principalmente, com nosso maior value add: um
            time de Venture Partners formado por referências do setor, que apoia
            na construção da estratégia do roadmap de produto de IA. Nosso foco
            está no apoio{" "}
            <span
              className="italic font-semibold"
              style={{ color: HILIGHT }}
            >
              prático e contínuo
            </span>{" "}
            às startups do portfólio.
          </div>
        </header>

        <div
          className="mt-10 space-y-10"
          style={
            {
              ["--mCardW" as any]: "86%",
              ["--mCardH" as any]: "240px",
            } as React.CSSProperties
          }
        >
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border px-5 py-5 mx-auto"
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
              <h3 className="font-serif font-semibold text-[16px] leading-tight mb-2">
                {c.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-white/85">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* desktop */}
      <div className="hidden min-[820px]:block">
        <div className="wrap min-[820px]:max-w-[1120px] min-[820px]:mx-auto min-[820px]:px-8">
          <header className="head max-w-none pr-8">
            <h2 className="font-serif text-[40px] leading-tight">
              Nosso{" "}
              <span
                className="italic font-semibold"
                style={{ color: HILIGHT }}
              >
                Value Add
              </span>
            </h2>
            <p
              className="mt-3 text-white/85 leading-relaxed"
              style={{ maxWidth: 1360 }}
            >
              Após o investimento, colaboramos com os founders na criação de um
              plano de 100 dias, com reuniões semanais para acompanhar o
              progresso. Atuamos{" "}
              <span
                className="italic font-semibold"
                style={{ color: HILIGHT }}
              >
                de forma próxima
              </span>{" "}
              em frentes como Biz Dev, Talent Acquisition, GTM, estruturação do
              quadro de advisors e, principalmente, com nosso maior value add:
              um time de Venture Partners formado por referências do setor, que
              apoia na construção da estratégia do roadmap de produto de IA.
              Nosso foco está no apoio{" "}
              <span
                className="italic font-semibold"
                style={{ color: HILIGHT }}
              >
                prático e contínuo
              </span>{" "}
              às startups do portfólio.
            </p>
          </header>
        </div>

        <div
          className="relative left-[calc(50%-50vw)] right-[calc(50%-50vw)] w-screen mt-14"
          style={
            {
              paddingLeft: "var(--gutter-left)",
              paddingRight: "24px",
              ["--gapX" as any]: "clamp(44px, 5vw, 96px)",
              ["--gapY" as any]: "36px",
              ["--cardPadX" as any]: "24px",
              ["--cardPadY" as any]: "24px",
              ["--title" as any]: "18px",
              ["--body" as any]: "17px",
              ["--minH" as any]: "178px",
              ["--cardNarrow" as any]: "88%",
            } as React.CSSProperties
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
                className="rounded-2xl border mx-auto"
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
                  className="font-serif font-semibold leading-tight mb-2"
                  style={{ fontSize: "var(--title)" }}
                >
                  {c.title}
                </h3>
                <p
                  className="text-white/85 leading-relaxed"
                  style={{ fontSize: "var(--body)" }}
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
