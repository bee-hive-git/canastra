// src/components/ai-eir/whatis/index.tsx
"use client";

export default function WhatIs() {
  return (
    <section
      id="whatis"
      className="relative overflow-hidden text-black"
      style={{
        backgroundImage: "url('/ai-eir/whatis/fundo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto w-full max-w-[1100px] px-5 py-10 min-[820px]:py-14">
        <div className="text-center max-w-[920px] mx-auto">

          {/* Título */}
          <h2
            className="font-bold text-[26px] leading-tight min-[820px]:text-[40px]"
            style={{ fontFamily: '"Crimson Text", serif' }}
          >
            O que é o{" "}
            <span className="italic text-[#FF624D]">AI EiR?</span>
          </h2>

          {/* Parágrafo principal com quebras ajustadas */}
          <p
            className="
              mt-4 text-[15px] leading-relaxed text-black 
              min-[820px]:text-[18px] min-[820px]:leading-8 
              font-medium mx-auto
            "
            style={{
              fontFamily:
                '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              maxWidth: "78ch",
            }}
          >
            {/* MOBILE — fluxo natural */}
            <span className="min-[820px]:hidden">
              O AI Entrepreneur in Residence (AI EiR) é nosso programa de
              residência criado para transformar ideias promissoras em startups
              de sucesso. Em 12 semanas de residência, apoiamos equipes a
              validarem hipóteses, construírem seus MVPs e iniciarem vendas para
              primeiros clientes.
            </span>

            {/* DESKTOP — quebras perfeitas */}
            <span className="hidden min-[820px]:block">
              O AI Entrepreneur in Residence (AI EiR) é nosso programa de residência,{" "}
              criado para transformar ideias promissoras em <span className="whitespace-nowrap">startups de sucesso</span>.
              <br />
              Em 12 semanas de residência, apoiamos equipes a validarem hipóteses,{" "}
              construírem seus MVPs e iniciarem vendas para <span className="whitespace-nowrap">primeiros clientes</span>.
            </span>
          </p>

          {/* CTA */}
          <div className="mt-5 min-[820px]:mt-6">
            <button
              type="button"
              className={[
                "inline-flex items-center justify-center gap-2 rounded-md font-semibold h-12 px-5 min-w-[160px] text-[14px] transition-all duration-200 ease-out",
                "border-2 border-[#FF624D] bg-white text-black hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-105 hover:shadow-md hover:shadow-black/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/50 active:translate-y-0",
                "min-[820px]:border-black min-[820px]:text-black min-[820px]:bg-transparent min-[820px]:hover:brightness-100",
              ].join(" ")}
            >
              <svg
                width="26"
                height="22"
                viewBox="0 0 26 22"
                aria-hidden="true"
                className="-ml-1 text-[#FF624D] min-[820px]:text-black"
              >
                <path d="M2 11h6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                <path d="M9 11h7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                <path d="M16 7l6 4-6 4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="min-[820px]:hidden">Apply for AI EIR</span>
              <span className="hidden min-[820px]:inline">Apply AI EIR</span>
            </button>
          </div>

          {/* Parágrafo menor — quebra arrumada */}
          <p
            className="
              mt-5 text-[13px] leading-relaxed text-black/80 
              min-[820px]:text-[15px] min-[820px]:leading-[1.6]
            "
            style={{ maxWidth: "60ch", marginInline: "auto" }}
          >
            {/* MOBILE natural */}
            <span className="min-[820px]:hidden">
              Acompanhamento semanal de Fellow Partners que escalaram unicórnios,
              com momentos para decidir e revisar a rota.
            </span>

            {/* DESKTOP alinhado bonito */}
            <span className="hidden min-[820px]:block">
              Acompanhamento semanal de Fellow Partners que escalaram unicórnios,{" "}
              <br />
              com momentos para decidir e revisar a rota.
            </span>
          </p>

        </div>
      </div>
    </section>
  );
}
