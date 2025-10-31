// src/components/ai-eir/whatis/index.tsx
"use client";

export default function WhatIs() {
  return (
    <section
      id="whatis"
      className="relative overflow-hidden text-black"
      style={{
        // fundo PNG (mesmo arquivo para mobile e desktop)
        backgroundImage: "url('/ai-eir/whatis/fundo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* espaçamento (curto) */}
      <div className="mx-auto w-full max-w-[1100px] px-5 py-10 min-[820px]:py-14">
        {/* Conteúdo centralizado como nas prints */}
        <div className="text-center max-w-[920px] mx-auto">
          {/* Título */}
          <h2 className="font-serif font-semibold text-[26px] leading-tight min-[820px]:text-[40px]">
            O que é o{" "}
            <span className="italic text-[#FF624D]">
              AI EiR?
            </span>
          </h2>

          {/* Parágrafo principal */}
          <p className="mt-4 text-[15px] leading-relaxed text-black/90 min-[820px]:text-[18px] min-[820px]:leading-8">
            O AI Entrepreneur in Residence (AI EiR) é nosso programa de
            residência criado para transformar ideias promissoras em startups
            de sucesso. Em 12 semanas de residência, apoiamos equipes a
            validarem hipóteses, construírem seus MVPs e iniciarem vendas para
            primeiros clientes.
          </p>

          {/* CTA — mobile (laranja), desktop (preto) */}
          <div className="mt-5 min-[820px]:mt-6">
            <button
              type="button"
              className={[
                "inline-flex items-center justify-center gap-2 rounded-md font-semibold h-12 px-5 min-w-[160px] text-[14px] transition-all duration-200 ease-out",
                // mobile: mesmo estilo da hero (borda laranja, fundo branco)
                "border-2 border-[#FF624D] bg-white text-black hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-105 hover:shadow-md hover:shadow-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/50 active:translate-y-0",
                // desktop: tudo preto (borda/ícone/texto)
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
                <path d="M2 11h6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
                <path d="M9 11h7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
                <path d="M16 7l6 4-6 4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <span className="min-[820px]:hidden">Apply for AI EIR</span>
              <span className="hidden min-[820px]:inline">Apply AI EIR</span>
            </button>
          </div>

          {/* Linha menor (legenda) */}
          <p className="mt-5 text-[13px] leading-relaxed text-black/80 min-[820px]:text-[14px]">
            Acompanhamento semanal de Fellow Partners que escalaram unicórnios, com momentos
            para decidir e revisar a rota.
          </p>
        </div>
      </div>
    </section>
  );
}
