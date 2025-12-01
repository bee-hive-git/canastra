// src/components/ai-eir/structure/index.tsx
"use client";

export default function Structure() {
  return (
    <section
      id="structure"
      className="relative overflow-hidden text-white pt-14 pb-24 min-[821px]:pt-20 min-[821px]:pb-28"
      style={{ backgroundColor: "rgb(17, 4, 23)" }}
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

      {/* Título */}
      <div className="mx-auto max-w-[860px] px-5 text-center">
        <h2 className="font-serif font-semibold leading-tight text-[30px] sm:text-[34px] min-[821px]:text-[48px]">
          <span className="block text-[#FF624D]">Conheça a estrutura</span>
          <span className="block italic text-white">do programa</span>
        </h2>

        {/* BOTÃO — idêntico ao botão da última Hero */}
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            className="
              inline-flex items-center justify-center gap-2 rounded-md font-semibold
              h-12 px-5 min-w-[170px] text-[15px] border-2 transition-all duration-200 ease-out
              bg-white text-black border-[#FF624D]
              hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-105 hover:shadow-md hover:shadow-black/20
              active:translate-y-0
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60

              /* DESKTOP — igual ao Hero */
              min-[821px]:min-w-[220px]
              min-[821px]:h-[50px]
              min-[821px]:px-7
              min-[821px]:text-[15px]
              min-[821px]:border min-[821px]:border-gray-400
              min-[821px]:bg-transparent min-[821px]:text-white
              min-[821px]:hover:brightness-110
            "
          >
            <svg
              width="26"
              height="22"
              viewBox="0 0 26 22"
              aria-hidden="true"
              className="-ml-1 text-[#FF624D] min-[821px]:text-gray-300"
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

      {/* IMAGENS */}
      <div className="mt-14 px-4 min-[821px]:hidden">
        <img
          src="/ai-eir/structure/mobile.png"
          alt=""
          className="block mx-auto w-[92%] max-w-[640px] h-auto object-contain select-none pointer-events-none"
          draggable={false}
        />
      </div>

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
