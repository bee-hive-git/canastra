// Sobre.tsx
"use client";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden text-white pt-16 pb-36 min-[820px]:pt-24"
      style={{ backgroundColor: "rgb(13, 7, 17)" }}
    >
      <style jsx global>{`
        #sobre { min-height: 100dvh; }

        @media (max-width: 330px), (max-height: 568px) {
          #sobre { min-height: 150dvh; }
          #sobre .spikes-mobile { bottom: 12px !important; }
        }

        @media (min-width: 820px) and (max-width: 1180px) {
          #sobre { min-height: 110dvh; padding-bottom: 120dvh; }
          #sobre .wrap { top: 58%; }
          #sobre .spikes-desktop { top: 50%; }
        }

        /* MacBook Air */
        @media (min-width: 1181px) and (max-width: 1439px) {
          #sobre { min-height: 108dvh; padding-bottom: 94dvh; }
          #sobre .wrap { top: 46%; margin-left: 26px; }             /* → mais à direita */
          #sobre .spikes-desktop { top: calc(50% - 24px); }
          #sobre .wrap h2 { font-size: 38px; line-height: 1.2; }
          #sobre .wrap p { font-size: 17px; line-height: 1.72; }
          #sobre .wrap .cta { height: 3.35rem; min-width: 192px; font-size: 15px; }
        }

        /* Desktop ≥1440px */
        @media (min-width: 1440px) {
          #sobre { min-height: 110dvh; padding-bottom: 96dvh; }
          #sobre .wrap { top: 45%; margin-left: 40px; }             /* → ainda mais à direita */
          #sobre .spikes-desktop { top: calc(50% - 24px); }
          #sobre .wrap h2 { font-size: 48px; line-height: 1.16; }
          #sobre .wrap p { font-size: 20px; line-height: 1.8; }
          #sobre .wrap .cta { height: 3.8rem; min-width: 220px; font-size: 17px; }
        }
      `}</style>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0"
        style={{
          height: "55vh",
          background:
            "linear-gradient(to bottom, rgba(17,7,23,0) 0%, rgba(17,4,23,0.35) 35%, rgba(17,4,23,0.65) 65%, #110417 100%)",
        }}
      />

      <div className="wrap relative z-10 mx-auto max-w-[640px] px-5 text-center min-[820px]:text-left min-[820px]:max-w-[1100px] min-[820px]:px-8 min-[820px]:pl-20 lg:pl-20 xl:pl-12 2xl:pl-10 min-[820px]:absolute min-[820px]:inset-x-0 min-[820px]:top-[58%] lg:top-[59%] xl:top-[60%] 2xl:top-[60%] min-[820px]:-translate-y-1/2 min-[820px]:max-[1180px]:pl-8">
        <h2 className="font-serif text-[28px] leading-snug mb-4 lg:text-[32px] min-[820px]:max-[1180px]:text-[24px] min-[820px]:max-[1180px]:leading-[1.2]">
          <span className="italic font-semibold">Nosso</span>{" "}
          <span className="text-[#FF624D] italic font-semibold">Portfólio</span>
        </h2>

        <p className="text-white/90 text-base leading-relaxed mx-auto max-w-[46ch] min-[820px]:mx-0 lg:text-[16px] min-[820px]:max-[1180px]:text-[14px] min-[820px]:max-[1180px]:leading-[1.6]">
          Projetos, cases e teses que acompanhamos de perto. Em breve, mais detalhes públicos aqui.
        </p>

        <div className="mt-6 min-[820px]:mt-7">
          <button
            type="button"
            aria-disabled
            className="cta inline-flex items-center justify-center gap-2 rounded-md font-semibold h-12 px-5 min-w-[160px] text-[14px] border-2 border-[#FF624D] bg-white text-black transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-105 hover:shadow-md hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60 active:translate-y-0 min-[820px]:border min-[820px]:border-gray-400 min-[820px]:bg-transparent min-[820px]:text-white min-[820px]:hover:brightness-110"
          >
            <svg width="26" height="22" viewBox="0 0 26 22" aria-hidden="true" className="-ml-1 text-[#FF624D] min-[820px]:text-gray-400">
              <path d="M2 11h6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
              <path d="M9 11h7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
              <path d="M16 7l6 4-6 4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            Join AI EiR!
          </button>
        </div>
      </div>

      <img
        src="/sobre/espinhos-mobile.png"
        alt=""
        className="spikes-mobile pointer-events-none select-none absolute right-0 bottom-20 w-auto h-auto block min-[820px]:hidden object-contain object-[right_center]"
        draggable={false}
      />

      <div className="spikes-desktop hidden min-[820px]:block absolute top-1/2 -translate-y-1/2 min-[820px]:right-[-16px] lg:right-[-64px] xl:right-[-96px] 2xl:right-[-128px]">
        <div className="min-[820px]:w-[420px] lg:w-[560px] xl:w-[680px] 2xl:w-[800px] max-h-[70vh] xl:max-h-[62vh] 2xl:max-h-[56vh]">
          <img
            src="/sobre/espinhos.png"
            alt=""
            className="pointer-events-none select-none w-full h-full object-contain object-[right_center]"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
