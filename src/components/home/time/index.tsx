// Time.tsx
"use client";

export default function Time() {
  const PHOTOS = [
    "/time/p1.png",
    "/time/p2.png",
    "/time/p5.png",
    "/time/p4.png",
    "/time/p3.png",
  ];
  const NAMES = [
    "Pedro Dias",
    "Márcio Saito",
    "Larissa Bomfim",
    "Leonardo Sales",
    "Paulo Alencastro",
  ];
  const ROLES = [
    "Managing Partner",
    "Venture Partner",
    "Managing Partner",
    "Fellow Partner",
    "Fellow Partner",
  ];

  const HILIGHT = "#FF624D";
  const OVERSCAN_W = 135;
  const OVERSCAN_H = 122;

  return (
    <section
      id="time"
      className="relative text-white pt-16 pb-20 min-[1181px]:pt-24 min-[1181px]:pb-28 bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{
        backgroundImage: "url(/time/fundo.png)",
        backgroundColor: "rgb(13,7,17)",
      }}
    >
      <style jsx global>{`
        /* Esconder barra de scroll */
        .hide-scroll {
          -ms-overflow-style: none; /* IE/Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scroll::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }

        /* Alinhamento responsivo com Header/Menu */
        @media (min-width: 820px) {
          #time .wrap {
            padding-left: var(--site-padding-left);
            padding-right: var(--site-padding-right);
          }
        }
      `}</style>

      {/* Linhas divisórias */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.28), rgba(255,255,255,0))",
          opacity: 0.4,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.28), rgba(255,255,255,0))",
          opacity: 0.4,
        }}
      />

      {/* Container Principal Unificado */}
      <div className="wrap w-full px-5">
        <div className="w-full">
          {/* Header (Texto + CTA) */}
          {/* A partir de 820px (min-[820px]), alinhamos à esquerda para bater com o menu */}
          <div className="flex flex-col items-center min-[820px]:items-start text-center min-[820px]:text-left mb-12 min-[1181px]:mb-16">
            <div className="max-w-[46ch] min-[1181px]:max-w-[680px]">
              <h2
                className="font-bold leading-tight mb-3 min-[1181px]:mb-4 text-[28px] min-[1181px]:text-[clamp(44px,3.6vw,62px)]"
                style={{ fontFamily: '"Crimson Text", serif' }}
              >
                Nosso <span className="text-[#FF624D] font-bold">Time</span>
              </h2>
              <p
                className="text-white/85 leading-relaxed font-normal text-[15px] min-[1181px]:text-[clamp(21px,1.6vw,28px)] min-[1181px]:leading-[1.9]"
                style={{
                  fontFamily:
                    '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Contamos com investidores,{" "}
                <span className="text-[#FF624D] italic font-semibold">
                  world-class founders
                </span>{" "}
                e especialistas em nossa equipe para apoiar fundadores em
                todos os seus desafios de construção de uma{" "}
                <span className="text-[#FF624D] italic font-semibold">
                  startup de IA
                </span>
                .
              </p>

              {/* CTA */}
              <div className="mt-6 min-[1181px]:mt-8">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-md font-semibold h-12 px-5 min-w-[160px] text-[14px] border-2 border-[#FF624D] bg-white text-black transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-105 hover:shadow-md hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60 active:translate-y-0 min-[1181px]:min-w-[260px] min-[1181px]:h-[52px] min-[1181px]:px-8 min-[1181px]:text-[16px] min-[1181px]:border min-[1181px]:border-gray-400 min-[1181px]:bg-transparent min-[1181px]:text-white min-[1181px]:hover:brightness-110"
                >
                  <svg
                    width="26"
                    height="22"
                    viewBox="0 0 26 22"
                    aria-hidden="true"
                    className="-ml-1 text-[#FF624D] min-[1181px]:text-gray-400"
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
                  Conheça o Time
                </button>
              </div>
            </div>
          </div>

          {/* Grid de Fotos - Híbrido: Scroll (Mobile) / Grid (Desktop) */}
          <div className="flex flex-nowrap overflow-x-auto lg:grid lg:grid-cols-5 lg:overflow-visible pb-4 -mx-5 px-5 lg:mx-0 lg:px-0 gap-4 lg:gap-6 xl:gap-8 hide-scroll snap-x snap-mandatory">
            {PHOTOS.map((src, i) => (
              <div
                key={src}
                /* 
                  Layout Híbrido:
                  - Mobile/Tablet (<1024px): Largura fixa para Scroll Horizontal.
                  - Desktop (>=1024px): Grid automático (w-auto) com 5 colunas.
                    Isso elimina cálculos manuais e garante alinhamento perfeito e distribuição igual.
                */
                className="relative rounded-2xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.08)] flex-shrink-0 snap-center w-[220px] sm:w-[260px] lg:w-auto"
                style={{
                  aspectRatio: "100 / 135",
                  backgroundImage: `url(${src})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: `${OVERSCAN_W}% ${OVERSCAN_H}%`,
                }}
              >
                <div className="absolute left-[12px] bottom-[12px] z-10">
                  <h3 className="text-white font-semibold leading-tight text-[16px] min-[1181px]:text-[18px]">
                    {NAMES[i]}
                  </h3>
                  <p
                    className="font-medium leading-snug text-[14px] min-[1181px]:text-[15px]"
                    style={{ color: HILIGHT }}
                  >
                    {ROLES[i]}
                  </p>
                </div>
                {/* Gradiente para legibilidade do texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
