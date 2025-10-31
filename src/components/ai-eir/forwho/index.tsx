// src/components/ai-eir/forwho/index.tsx
"use client";

export default function ForWho() {
  return (
    <section
      id="for-who"
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: "rgb(17, 4, 23)" }} // mesma cor do Header
    >
      <div className="relative mx-auto w-full max-w-[1600px] px-5 py-10 min-[1280px]:py-0 min-[1280px]:min-h-[86dvh]">
        {/* TEXTO — mobile central; desktop à esquerda */}
        <div className="relative z-10 max-w-[640px] mx-auto text-center min-[1280px]:text-left min-[1280px]:mx-0 min-[1280px]:ml-[0vw] min-[1280px]:pt-20">
          {/* Título desktop */}
          <h2 className="hidden min-[1280px]:block font-serif font-semibold leading-tight mb-4 text-[48px]">
            <span className="block text-[#FF624D]">Para quem</span>
            <span className="block italic">é a residência?</span>
          </h2>

          {/* Título mobile (maior) */}
          <h2 className="min-[1280px]:hidden font-serif font-semibold leading-snug mb-3 text-[30px] sm:text-[34px]">
            Para quem é a <span className="italic text-[#FF624D]">Residência?</span>
          </h2>

          {/* Parágrafo (maior no mobile e no desktop) */}
          <p className="text-white/90 text-[16px] leading-relaxed min-[1280px]:text-[18px] min-[1280px]:leading-8 min-[1280px]:max-w-[520px]">
            Estamos buscando fundadores ambiciosos e com profundidade em IA, em
            fase inicial, prontos para transformar ideias ousadas em startups de
            IA em grandes mercados.
          </p>

          {/* IMAGEM MOBILE — abaixo do conteúdo (mantém offset à direita) */}
          <div className="mt-8 min-[1280px]:hidden overflow-hidden">
            <img
              src="/ai-eir/forwho/mobile.png"
              alt=""
              className="
                block w-[88vw] max-w-[420px] h-auto
                object-contain select-none
                translate-x-[22vw]
              "
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* IMAGEM DESKTOP — só ≥1280px; posição fixa e “esticada” para a direita sem mover */}
      <div
        className="
          hidden min-[1280px]:block
          absolute top-0 right-0 h-full w-[50vw]
          pointer-events-none
        "
        aria-hidden
      >
        <img
          src="/ai-eir/forwho/desktop.png"
          alt=""
          className="
            absolute top-0 right-0
            h-full w-auto
            object-contain object-right
            select-none
            origin-right scale-x-[1.14]
          "
          draggable={false}
        />
      </div>
    </section>
  );
}
