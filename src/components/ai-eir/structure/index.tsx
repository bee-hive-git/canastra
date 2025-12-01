// src/components/ai-eir/structure/index.tsx
"use client";

export default function Structure() {
  return (
    <section
      id="structure"
      className="relative overflow-hidden text-white pt-14 pb-24 min-[821px]:pt-20 min-[821px]:pb-28"
      style={{ backgroundColor: "rgb(17, 4, 23)" }} // mesmo BG do Header
    >
      {/* divisória superior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.28), rgba(255,255,255,0))",
          opacity: 0.4,
        }}
      />

      {/* divisória inferior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.28), rgba(255,255,255,0))",
          opacity: 0.4,
        }}
      />

      {/* Título (duas linhas) */}
      <div className="mx-auto max-w-[860px] px-5 text-center">
        <h2 className="font-serif font-semibold leading-tight text-[30px] sm:text-[34px] min-[821px]:text-[48px]">
          <span className="block text-[#FF624D]">Conheça a estrutura</span>
          <span className="block italic text-white">do programa</span>
        </h2>

        {/* Botão — mobile (filled) / desktop (outline) */}
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            className="
              inline-flex items-center gap-2 rounded-md font-semibold
              h-11 px-5 text-[15px] border-2 transition-all duration-200 ease-out
              min-[821px]:h-11 min-[821px]:px-5
              /* mobile filled */
              border-[#FF624D] bg-white text-black
              /* desktop outline */
              min-[821px]:border-white min-[821px]:bg-transparent min-[821px]:text-white
              hover:-translate-y-0.5 hover:brightness-110
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40
            "
          >
            <svg
              width="24"
              height="20"
              viewBox="0 0 26 22"
              aria-hidden="true"
              className="-ml-0.5 text-[#FF624D] min-[821px]:text-white"
            >
              <path
                d="M2 11h6"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M9 11h7"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M16 7l6 4-6 4"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <span>Cronograma Completo</span>
          </button>
        </div>
      </div>

      {/* CONTEÚDO COMO IMAGEM */}
      {/* Mobile (até iPad Air) – imagem mais abaixo, responsiva e sem esticar */}
      <div className="mt-14 px-4 min-[821px]:hidden">
        <img
          src="/ai-eir/structure/mobile.png"
          alt=""
          className="block mx-auto w-[92%] max-w-[640px] h-auto object-contain select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Desktop (iPad Air pra cima) – imagem abaixo com respiro maior */}
      <div className="hidden min-[821px]:block mt-16">
        <img
          src="/ai-eir/structure/desktop.png"
          alt=""
          className="block mx-auto w-[68vw] max-w-[1140px] h-auto object-contain select-none pointer-events-none"
          draggable={false}
        />
      </div>
    </section>
  );
}
