"use client";

export default function ForWho() {
  return (
    <section
      id="for-who"
      className="relative overflow-hidden text-white pb-24"
      style={{ backgroundColor: "rgb(17, 4, 23)" }}
    >
      <div className="relative mx-auto w-full max-w-[1600px] px-6 py-10 min-[1280px]:py-0 min-[1280px]:min-h-[86dvh]">
        
        {/* texto */}
        <div
          className="
            relative z-10 w-full flex flex-col items-center justify-center text-center
            min-[1280px]:block min-[1280px]:text-left min-[1280px]:items-start
            min-[1280px]:max-w-[640px] min-[1280px]:mx-5
            min-[980px]:ml-[6vw]
            min-[1280px]:pt-20
          "
        >
          {/* título desktop */}
          <h2 className="hidden min-[1280px]:block font-serif font-semibold leading-tight mb-4 text-[48px]">
            <span className="block text-[#FF624D]">Para quem</span>
            <span className="block italic">é a residência?</span>
          </h2>

          {/* título mobile */}
          <h2 className="min-[1280px]:hidden font-serif font-semibold leading-snug mb-3 text-[30px] sm:text-[34px] text-center">
            Para quem é a <span className="italic text-[#FF624D]">Residência?</span>
          </h2>

          {/* parágrafo */}
          <p className="text-white/90 text-[16px] leading-relaxed text-center max-w-[600px] min-[1280px]:text-left min-[1280px]:text-[18px] min-[1280px]:leading-8 min-[1280px]:max-w-[520px]">
            Estamos buscando fundadores ambiciosos e com profundidade em IA, em
            fase inicial, prontos para transformar ideias ousadas em startups de
            IA em grandes mercados.
          </p>

          {/* imagem mobile */}
          <div className="mt-8 min-[1280px]:hidden overflow-hidden flex justify-center">
            <img
              src="/ai-eir/forwho/mobile.png"
              alt=""
              className="block w-[88vw] max-w-[420px] h-auto object-contain select-none"
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* imagem desktop — NÃO acompanha mais a altura da seção */}
      <div
        className="
          hidden min-[1280px]:block
          absolute top-0 right-0
          w-[50vw]
          pointer-events-none
        "
        aria-hidden
      >
        <img
          src="/ai-eir/forwho/desktop.png"
          alt=""
          className="
            absolute top-0 right-0
            max-h-[86vh]   /* ← altura máxima definida */
            h-auto         /* ← NÃO cresce junto com o section */
            w-auto
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
