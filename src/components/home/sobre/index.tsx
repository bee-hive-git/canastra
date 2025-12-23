// Sobre.tsx
"use client";
import { useEffect, useRef } from "react";

export default function Sobre() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting) {
          el.classList.add("in-view");
          obs.unobserve(el);
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -80% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      id="sobre"
      data-edge-section
      className="relative overflow-hidden text-white pt-16 pb-36 min-[820px]:pt-24"
      style={{ backgroundColor: "rgb(17, 4, 23)" }}
    >
      <style jsx global>{`
        #sobre {
          min-height: 100dvh;
        }

        @media (max-width: 330px), (max-height: 568px) {
          #sobre {
            min-height: 150dvh;
          }
          #sobre .mountain-mobile {
            bottom: 12px !important;
          }
        }

        @media (min-width: 820px) and (max-width: 1180px) {
          #sobre {
            min-height: 110dvh;
            padding-bottom: 120dvh;
          }
          #sobre .wrap {
            top: 58%;
          }
          #sobre .mountain-desktop {
            top: 50%;
          }
        }

        /* Desktop menor — mesmo offset do Hero */
        @media (min-width: 1181px) and (max-width: 1439px) {
          #sobre {
            min-height: 108dvh;
            padding-bottom: 94dvh;
          }
          #sobre .wrap {
            top: 46%;
            margin-left: 26px;
            padding-left: 56px;
            padding-right: 64px;
          }
          #sobre .mountain-desktop {
            top: calc(50% - 24px);
          }
        }

        /* Desktop ≥1440px — mesmo offset do Hero */
        @media (min-width: 1440px) {
          #sobre {
            min-height: 110dvh;
            padding-bottom: 96dvh;
          }
          #sobre .wrap {
            top: 45%;
            margin-left: 40px;
            padding-left: 84px;
            padding-right: 72px;
          }
          #sobre .mountain-desktop {
            top: calc(50% - 24px);
          }
        }

        /* Animação da imagem (apenas Desktop) */
        @media (min-width: 820px) {
          #sobre .img-reveal {
            -webkit-mask-image: linear-gradient(to bottom, black 0%, black 100%);
            mask-image: linear-gradient(to bottom, black 0%, black 100%);
            -webkit-mask-size: 100% 0%;
            mask-size: 100% 0%;
            -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
            will-change: mask-size, opacity;
            opacity: 0;
          }
          #sobre.in-view .img-reveal {
            animation: sobreReveal 1.6s ease-out 0.2s forwards;
          }
          @keyframes sobreReveal {
            to {
              -webkit-mask-size: 100% 100%;
              mask-size: 100% 100%;
              opacity: 1;
            }
          }
        }
        /* Animações de texto (apenas Desktop) */
        @media (min-width: 820px) {
          #sobre .fade-up {
            opacity: 0;
            transform: translateY(10px);
          }
          #sobre .fade-up-delay {
            opacity: 0;
            transform: translateY(10px);
          }
          #sobre .fade-up-delay2 {
            opacity: 0;
            transform: translateY(10px);
          }
          #sobre.in-view .fade-up {
            animation: sobreFadeUp 0.6s ease-out 0.25s forwards;
          }
          #sobre.in-view .fade-up-delay {
            animation: sobreFadeUp 0.6s ease-out 0.45s forwards;
          }
          #sobre.in-view .fade-up-delay2 {
            animation: sobreFadeUp 0.6s ease-out 0.65s forwards;
          }
        }
        @keyframes sobreFadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          #sobre .img-reveal,
          #sobre .fade-up,
          #sobre .fade-up-delay,
          #sobre .fade-up-delay2,
          #sobre.in-view .img-reveal,
          #sobre.in-view .fade-up,
          #sobre.in-view .fade-up-delay,
          #sobre.in-view .fade-up-delay2 {
            animation: none;
            opacity: 1;
            transform: none;
            -webkit-mask-image: none;
            mask-image: none;
          }
        }
      `}</style>

      {/* gradiente de fundo na base */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0"
        style={{
          height: "55vh",
          background:
            "linear-gradient(to bottom, rgba(17,4,23,0) 0%, rgba(17,4,23,0.35) 35%, rgba(17,4,23,0.65) 65%, rgb(17,4,23) 100%)",
        }}
      />

      <div className="wrap relative z-10 mx-auto max-w-[640px] px-5 text-center min-[820px]:text-left min-[820px]:max-w-[1200px] min-[820px]:absolute min-[820px]:inset-x-0 min-[820px]:-translate-y-1/2">
        {/* H2 — Crimson Text, 700 Bold */}
        <h2
          data-anim="h2"
          className="font-bold text-[28px] leading-snug mb-4 min-[820px]:mb-6 min-[820px]:text-[36px] lg:text-[44px] xl:text-[52px] 2xl:text-[60px] min-[820px]:leading-[1.08] fade-up"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          {/* DESKTOP (≥820px) — Quebra forçada conforme imagem */}
          <span className="hidden min-[820px]:block">
            <span className="block font-bold">
              AI Entrepreneur
            </span>
            <span className="block">
              in{" "}
              <span className="text-[#FF624D] font-bold">
                Residence
              </span>
            </span>
          </span>

          {/* MOBILE (<820px) — Quebra natural ou forçada se necessário */}
          <span className="min-[820px]:hidden block">
            <span className="font-bold">AI Entrepreneur</span> <br />
            <span className="font-bold">
              in <span className="text-[#FF624D]">Residence</span>
            </span>
          </span>
        </h2>

        {/* Parágrafo — Hanken Grotesk, 400 Regular */}
        <p
          className="text-white/90 text-[15px] leading-relaxed mx-auto max-w-[46ch] min-[820px]:mx-0 min-[820px]:text-[clamp(21px,1.6vw,28px)] min-[820px]:leading-[1.7] font-normal fade-up-delay"
          style={{
            fontFamily:
              '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          {/* DESKTOP: Quebras de linha manuais para replicar exatamente a imagem */}
          <span className="min-[820px]:block min-[820px]:whitespace-nowrap">
            Ao longo de 12 semanas, os residentes terão
          </span>
          <span className="min-[820px]:block min-[820px]:whitespace-nowrap">
            apoio hands-on com{" "}
            <span className="text-[#FF624D] font-semibold">Fellow Partners</span>,
            orientação
          </span>
          <span className="min-[820px]:block min-[820px]:whitespace-nowrap">
            de mentores e conexões estratégicas para validar
          </span>
          <span className="min-[820px]:block min-[820px]:whitespace-nowrap">
            a tese, criar o MVP e alcançar os primeiros sinais de
          </span>
          <span className="min-[820px]:block min-[820px]:whitespace-nowrap">
            tração rumo ao{" "}
            <span className="text-[#FF624D] font-semibold">primeiro cheque</span>.
          </span>

          {/* MOBILE: Texto corrido (ou quebras mais suaves) */}
          <span className="min-[820px]:hidden">
            Ao longo de 12 semanas, os residentes terão apoio hands-on com{" "}
            <span className="text-[#FF624D] font-semibold">Fellow Partners</span>,
            orientação de mentores e conexões estratégicas para validar a tese,
            criar o MVP e alcançar os primeiros sinais de tração rumo ao{" "}
            <span className="text-[#FF624D] font-semibold">primeiro cheque</span>.
          </span>
        </p>

        {/* Botão — mantido */}
        <div className="mt-6 min-[820px]:mt-8 fade-up-delay2">
          <button
            type="button"
            aria-disabled
            className="cta inline-flex items-center justify-center gap-2 rounded-md font-semibold h-12 px-5 min-w-[160px] text-[14px] border-2 border-[#FF624D] bg-white text-black transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-105 hover:shadow-md hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60 active:translate-y-0 min-[820px]:min-w-[260px] min-[820px]:h-[52px] min-[820px]:px-8 min-[820px]:text-[16px] min-[820px]:border min-[820px]:border-gray-400 min-[820px]:bg-transparent min-[820px]:text-white min-[820px]:hover:brightness-110"
          >
            <svg
              width="26"
              height="22"
              viewBox="0 0 26 22"
              aria-hidden="true"
              className="-ml-1 text-[#FF624D] min-[820px]:text-gray-400"
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
            Join AI EiR!
          </button>
        </div>
      </div>

      {/* imagens decorativas */}
      <img
        src="ai-eir/hero/montanha-5.svg"
        alt=""
        className="mountain-mobile pointer-events-none select-none absolute right-0 bottom-0 w-[110%] h-auto block min-[820px]:hidden object-contain object-right-bottom img-reveal"
        draggable={false}
      />

      <div className="mountain-desktop hidden min-[820px]:block absolute top-1/2 -translate-y-1/2 min-[820px]:right-0 lg:right-[-24px] xl:right-[-48px] 2xl:right-[22px]">
        <div className="min-[720px]:w-[52vw] lg:w-[55vw] xl:w-[58vw] 2xl:w-[60vw] max-w-[770px] max-h-[70vh] xl:max-h-[62vh] 2xl:max-h-[86vh]">
          <img
            src="ai-eir/hero/montanha-5.svg"
            alt=""
            className="pointer-events-none select-none w-full h-full object-contain object-right img-reveal"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
