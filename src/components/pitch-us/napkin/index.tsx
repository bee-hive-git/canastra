"use client";

export default function Napkin() {
  const ACCENT = "#FF624D";
  const BG = "rgb(17, 4, 23)";
  const DESK_IMG = "/pitch-us/napkin/div.png";

  const rows = [
    {
      label: "Receita anual \n (ARR)",
      aiEir: "R$0 - R$500k",
      preSeed: ">\u2009R$0 (early revenue) - R$1M",
    },
    {
      label: "Tração",
      aiEir: "-",
      preSeed: "Visibilidade para chegar no Seed Round em 24 meses",
    },
    {
      label: "Tamanho \n da rodada",
      aiEir: "-",
      preSeed: "R$500k - R$2M",
    },
    {
      label: "Valuation \n (Pre-Money)",
      aiEir: "-",
      preSeed: "R$5M - R$20M",
    },
    {
      label: "Captable ideal",
      aiEir: "Idealmente, 100% com os Founders",
      preSeed: "+95% com os Founders (c/SOP)",
    },
    {
      label: "Produto",
      aiEir: "Tese com base em produto de AI-First",
      preSeed:
        "MVP de AI-First validado c/ visibilidade para atingir PMF em 18-24 meses",
    },
    {
      label: "Pessoas",
      aiEir: "2-4 Co-Founders, com ao menos 1 Tech-Founder (CTO)",
      preSeed: "2-4 Co-Founders, com ao menos 1 Tech-Founder (CTO)",
    },
    {
      label: "GTM",
      aiEir: "-",
      preSeed:
        "Estratégia de GTM bem definida, com pilotos já executados e validados",
    },
  ];

  return (
    <section
      id="napkin"
      className="text-white overflow-hidden pt-12 pb-20 min-[1181px]:pt-20"
      style={{ backgroundColor: BG }}
    >
      <style jsx global>{`
        @media (min-width: 1181px) {
          #napkin {
            padding-left: var(--site-padding-left);
            padding-right: var(--site-padding-right);
            padding-bottom: clamp(96px, 14vh, 200px);
          }
        }
      `}</style>

      {/* DESKTOP HEADER */}
      <div className="hidden min-[1181px]:block">
        <div className="wrap max-w-[1120px] mx-auto px-5 text-center">
          <h1
            className="font-serif leading-tight"
            style={{
              fontFamily: '"Crimson Text", serif',
              fontWeight: 700,
            }}
          >
            <span
              className="block text-[32px] xl:text-[40px]"
              style={{
                fontStyle: "normal",
                lineHeight: "0.75",
              }}
            >
              Conheça o nosso
            </span>
            <span
              className="block italic font-semibold text-[48px] xl:text-[62px]"
              style={{
                color: ACCENT,
                fontWeight: 700,
                fontStyle: "italic",
                lineHeight: "1.3",
              }}
            >
              Napkin
            </span>
          </h1>

          <h3
            className="mt-3 mx-auto max-w-[900px] text-center"
            style={{
              fontFamily:
                '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400,
              lineHeight: 1.7,
            }}
          >
            Dê uma olhada no nosso Napkin, onde descrevemos o que buscamos em{" "}
            <span className="italic font-semibold" style={{ color: ACCENT }}>
              startups AI-First
            </span>
            . Nele, você encontrará os{" "}
            <span className="italic font-semibold" style={{ color: ACCENT }}>
              critérios
            </span>{" "}
            que consideramos para investimentos pre-seed, comparados aos que buscamos nas startups que
            se inscrevem no nosso programa de residência (
            <a
              href="https://forms.gle/BjEZU9quVQq8LSXg7"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/30 hover:text-white"
            >
              AI EiR
            </a>
            ).
          </h3>
        </div>
      </div>

      {/* MOBILE HEADER */}
      <div className="mx-auto max-w-[560px] px-5 min-[1181px]:hidden">
        <header className="text-center">
          <h2
            className="leading-tight"
            style={{
              fontFamily: '"Crimson Text", serif',
              fontWeight: 700,
            }}
          >
            <span
              className="block text-[32px] text-white"
              style={{
                fontStyle: "normal",
                lineHeight: "0.75",
              }}
            >
              Conheça o nosso
            </span>
            <span
              className="block italic font-semibold text-[48px]"
              style={{
                color: ACCENT,
                fontWeight: 700,
                fontStyle: "italic",
                lineHeight: "1.3",
              }}
            >
              Napkin
            </span>
          </h2>
        </header>

        <div
          className="text-[18px] leading-snug mt-2 text-center"
          style={{
            fontFamily:
              '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 400,
          }}
        >
          <p className="mb-3">
            Dê uma olhada no nosso{" "}
            <span className="italic font-semibold" style={{ color: ACCENT }}>
              Napkin
            </span>
            , onde descrevemos o que buscamos em{" "}
            <span className="italic font-semibold" style={{ color: ACCENT }}>
              startups AI-First.
            </span>
          </p>

          <p className="text-white/85 max-w-[56ch] mx-auto text-center">
            Nele, você encontrará os critérios que consideramos para investimentos pre-seed, comparados
            aos que buscamos nas startups que se inscrevem no nosso programa de residência (
            <a
              href="https://forms.gle/BjEZU9quVQq8LSXg7"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/30 hover:text-white"
            >
              AI EiR
            </a>
            ).
          </p>
        </div>
      </div>

      {/* DESKTOP IMG + DISCLAIMER */}
      <div className="hidden min-[1181px]:block mt-10">
        <div className="wrap max-w-[1120px] mx-auto px-5">
          <div
            className="rounded-2xl"
            style={{
              width: "100%",
              height: "clamp(500px, 58vw, 640px)",
              backgroundImage: `url(${DESK_IMG})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
            }}
          />

        </div>
      </div>

      {/* MOBILE TABLE (Cards Layout) */}
      <div className="min-[1181px]:hidden mt-10 px-2 pb-10">
        <div
          className="rounded-[24px] border border-[#F05941]/20 bg-[#15051C] px-2 py-4 shadow-[0_0_20px_-5px_rgba(240,89,65,0.15)] overflow-hidden"
          style={{
            fontFamily: 'var(--font-crimson-text), serif',
          }}
        >
          <div className="relative">
          <div className="pointer-events-none absolute -top-4 -bottom-4 left-[66.6%] w-px bg-white/60" />

          {/* Header */}
          <div className="grid grid-cols-3 gap-1 mb-1 relative z-10">
            <div></div>
            <div className="flex items-end justify-center pb-1 border-b border-[#F05941]/20 mx-1">
              <h4 className="text-white text-[16px] leading-tight font-bold">AI EiR</h4>
            </div>
            <div className="flex items-end justify-center pb-1 border-b border-[#F05941]/20 mx-1">
              <h4 className="text-white text-[16px] leading-tight font-bold">Pre-Seed</h4>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 relative z-10">
            {rows.map((row) => (
              <div key={row.label} className="grid grid-cols-3 gap-1.5">
                  <div className="border-[0.5px] border-[#F05941] rounded-[8px] bg-[#150A1B] p-1 flex items-center justify-center text-center h-[72px]">
                    <span className="text-white font-bold text-[16px] leading-[1.1] whitespace-pre-line">
                      {row.label}
                    </span>
                  </div>

                  <div className="border-[0.5px] border-[#F05941] rounded-[8px] bg-[#150A1B] p-1 flex items-center justify-center text-center h-[72px]">
                    <span className="text-white/90 text-[11px] leading-[1.1] break-words w-full font-medium">
                      {row.aiEir}
                    </span>
                  </div>

                  <div className="border-[0.5px] border-[#F05941] rounded-[8px] bg-[#150A1B] p-1 flex items-center justify-center text-center h-[72px]">
                    <span className="text-white/90 text-[11px] leading-[1.1] break-words w-full font-medium">
                      {row.preSeed}
                    </span>
                  </div>
                </div>
              ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
