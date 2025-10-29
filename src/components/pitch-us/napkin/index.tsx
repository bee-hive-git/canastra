// src/components/pitch-us/napkin/index.tsx
"use client";

export default function Napkin() {
  const ACCENT = "#FF624D";
  const BG = "rgb(17, 4, 23)";
  const DESK_IMG = "/pitch-us/napkin/div.png";

  return (
    <section
      id="napkin"
      className="text-white overflow-hidden py-14 min-[820px]:py-20"
      style={{ backgroundColor: BG }}
    >
      {/* DESKTOP HEADER */}
      <div className="hidden min-[820px]:block">
        <div className="max-w-[1120px] mx-auto px-5 text-center">
          <h1 className="font-serif leading-tight">
            <span className="block text-[32px] xl:text-[40px]">Conheça o nosso</span>
            <span
              className="block italic font-semibold text-[40px] xl:text-[52px]"
              style={{ color: ACCENT }}
            >
              Napkin
            </span>
          </h1>

          <p className="mt-3 text-white/90 leading-relaxed text-[16px] xl:text-[18px] max-w-[900px] mx-auto">
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
            <a href="/ai-eir" className="underline decoration-white/30 hover:text-white">
              AI EiR
            </a>
            ).
          </p>
        </div>
      </div>

      {/* MOBILE HEADER */}
      <div className="min-[820px]:hidden px-5 text-center">
        <h1
          className="font-serif italic font-semibold text-[40px] leading-tight"
          style={{ color: ACCENT }}
        >
          Napkin
        </h1>

        <h2 className="font-serif text-[24px] leading-snug mt-2">
          Dê uma olhada no nosso{" "}
          <span className="italic font-semibold" style={{ color: ACCENT }}>
            Napkin
          </span>
          , onde descrevemos o que buscamos em{" "}
          <span className="italic font-semibold" style={{ color: ACCENT }}>
            startups AI-First.
          </span>
        </h2>

        <p className="mt-3 text-white/90 text-[16px] leading-relaxed">
          Nele, você encontrará os critérios que consideramos para investimentos pre-seed, comparados
          aos que buscamos nas startups que se inscrevem no nosso programa de residência (
          <a href="/ai-eir" className="underline decoration-white/30 hover:text-white">
            AI EiR
          </a>
          ).
        </p>
      </div>

      {/* DESKTOP IMG + DISCLAIMER */}
      <div className="hidden min-[820px]:block mt-10">
        <div className="max-w-[1120px] mx-auto px-5">
          <div
            className="mx-auto rounded-2xl"
            style={{
              width: "100%",
              height: "clamp(500px, 58vw, 640px)",
              backgroundImage: `url(${DESK_IMG})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
            }}
          />
          <p
            className="mt-2 rounded-xl px-4 py-3 text-[13px] leading-relaxed text-white/85"
            style={{
              width: "100%",
              border: `1px solid ${ACCENT}`,
              backgroundColor: "rgba(255,255,255,0.04)",
            }}
          >
            Disclaimer: O Napkin se encaixa perfeitamente na nossa tese, mas seguimos abertos a avaliar
            oportunidades fora do nosso sweet spot, com base em uma análise criteriosa e individual de
            cada caso.
          </p>
        </div>
      </div>

      {/* MOBILE IMG (mesmo tamanho do desktop) + DISCLAIMER */}
      <div className="min-[820px]:hidden mt-8 px-5">
        {/* scroll horizontal só dentro deste contêiner */}
        <div className="relative overflow-x-auto">
          <div
            className="rounded-2xl"
            style={{
              // mesmo tamanho máximo do desktop para evitar “achatamento”
              width: "1120px",
              height: "640px",
              backgroundImage: `url(${DESK_IMG})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
            }}
          />
        </div>

        {/* indicador simples */}
        <div className="mt-3 mx-auto w-40 h-[6px] rounded-full bg-white/18 overflow-hidden">
          <div className="h-full w-1/3 rounded-full bg-white/70" />
        </div>

        <p
          className="mt-6 rounded-xl px-4 py-3 text-[13px] leading-relaxed text-white/85"
          style={{ border: `1px solid ${ACCENT}`, backgroundColor: "rgba(255,255,255,0.04)" }}
        >
          <span className="italic font-semibold" style={{ color: ACCENT }}>
            Disclaimer:
          </span>{" "}
          O <span className="italic font-semibold" style={{ color: ACCENT }}>Napkin</span> se encaixa
          perfeitamente na nossa tese, mas seguimos abertos a avaliar oportunidades fora do nosso{" "}
          <span className="italic font-semibold" style={{ color: ACCENT }}>
            sweet spot
          </span>
          , com base em uma análise criteriosa e individual de cada caso.
        </p>
      </div>
    </section>
  );
}
