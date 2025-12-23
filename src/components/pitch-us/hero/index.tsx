// Hero.tsx
"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (document as any).fonts?.ready?.then(() => {
      window.dispatchEvent(new Event("resize"));
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const paths = Array.from(
      document.querySelectorAll<SVGPathElement>("#home .draw-path")
    );
    paths.forEach((p, i) => {
      try {
        const len = p.getTotalLength();
        p.style.strokeDasharray = `${len} ${len}`;
        p.style.strokeDashoffset = `${len}`;
        p.style.animationDelay = `${0.2 + i * 0.12}s`;
      } catch {}
    });
  }, []);

  const BG = "rgb(17, 4, 23)";

  return (
    <section
      id="home"
      className="relative text-white pt-12 min-h-[100dvh] min-[820px]:pt-24 overflow-x-hidden"
      style={{ backgroundColor: BG }}
    >
      <style jsx global>{`
        #home .mountain-img {
          -webkit-mask-image: linear-gradient(to bottom, black 0%, black 100%);
          mask-image: linear-gradient(to bottom, black 0%, black 100%);
          -webkit-mask-size: 100% 0%;
          mask-size: 100% 0%;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          animation: revealSmooth 1.8s ease-out 0.15s forwards;
          will-change: mask-size, opacity;
          opacity: 0;
        }
        @keyframes revealSmooth {
          to {
            -webkit-mask-size: 100% 100%;
            mask-size: 100% 100%;
            opacity: 1;
          }
        }

        /* Mobile Light Reveal Animation */
        @keyframes mobileLightReveal {
          from {
            -webkit-mask-size: 0% 100%;
            mask-size: 0% 100%;
            opacity: 0;
          }
          to {
            -webkit-mask-size: 120% 100%;
            mask-size: 120% 100%;
            opacity: 1;
          }
        }
        .mobile-light-reveal {
          -webkit-mask-image: linear-gradient(to right, black 80%, transparent 100%);
          mask-image: linear-gradient(to right, black 80%, transparent 100%);
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: left center;
          mask-position: left center;
          animation: mobileLightReveal 1.8s ease-out 0.2s forwards;
          will-change: mask-size, opacity;
          opacity: 0;
        }

        /* Mobile Fade Animations */
        @media (max-width: 819px) {
          @keyframes mobileFadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .mobile-fade-up {
            opacity: 0;
            animation: mobileFadeUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
            will-change: opacity, transform;
          }
          .delay-100 { animation-delay: 100ms; }
          .delay-200 { animation-delay: 200ms; }
          .delay-300 { animation-delay: 300ms; }
        }

        @media (prefers-reduced-motion: reduce) {
          #home .mountain-img,
          .mobile-light-reveal,
          .mobile-fade-up {
            animation: none !important;
            -webkit-mask-image: none !important;
            mask-image: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
        @media (max-height: 700px) {
          #home {
            min-height: 118dvh;
          }
        }
        @media (max-height: 620px) {
          #home {
            min-height: 126dvh;
          }
        }
        @media (max-height: 560px) {
          #home {
            min-height: 134dvh;
          }
        }
        @media (min-width: 820px) {
          #home .wrap {
            margin-left: 0;
            padding-left: var(--site-padding-left);
            padding-right: var(--site-padding-right);
          }
        }

        @media (min-width: 1181px) and (max-width: 1439px) {
          #home .wrap {
            max-width: 960px;
          }
          #home .wrap .hero-heading {
            max-width: 920px;
          }
        }
      `}</style>

      <img
        aria-hidden
        src="/hero/monatnha-1-mobile.svg"
        alt=""
        className="min-[800px]:hidden mountain-mobile-img mobile-light-reveal select-none pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 z-0 w-[100%] max-w-none h-auto"
        draggable={false}
      />

      <img
        aria-hidden
        src="/hero/montanha-3.svg"
        alt=""
       className="hidden min-[820px]:block mountain mountain-img select-none pointer-events-none absolute right-0 bottom-30 z-0 w-[72.8vw] max-w-[548.8px] min-[820px]:w-[51.52vw] min-[820px]:max-w-[816.8px] min-[1181px]:right-[40px] lg:right-[80px] xl:right-[120px] 2xl:right-[30px] h-auto"
        draggable={false}
      />

      <div
        ref={wrapRef}
        className="wrap relative z-10 mx-auto max-w-[560px] px-5 py-8 text-center flex flex-col items-center min-[820px]:absolute min-[820px]:inset-x-0 min-[820px]:top-1/2 min-[820px]:-translate-y-1/2 min-[820px]:mx-0 min-[820px]:text-left min-[820px]:items-start min-[820px]:max-w-[1080px]"
      >
        <img
          src="/hero/logo.png"
          alt="Logo Canastra"
          className="h-9 w-auto mb-6 min-[820px]:hidden mobile-fade-up"
        />
        {/* H1 – Crimson Text, peso 700 (bold) */}
        <h1
          className="hidden min-[820px]:block font-bold text-[49.3px] min-[820px]:text-[71.7px] leading-tight mb-3 min-[820px]:ml-[0.8px]"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          Pitch Us!
        </h1>

        {/* H2 – Crimson Text, peso 700, itálico */}
        <h2
          className="hero-heading font-bold italic leading-tight text-[clamp(18px,5.5vw,26px)] min-[820px]:text-[clamp(35.8px,2.8vw,42.6px)] min-[820px]:max-w-[832px] mobile-fade-up delay-100"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          {/* DESKTOP (≥820px) — 2 linhas fixas */}
          <span className="hidden min-[820px]:block min-[820px]:whitespace-nowrap">
            Apoiamos{" "}
            <span className="text-[#FF624D] italic font-bold">Founders</span> com a ambição&nbsp;
          </span>
          <span className="hidden min-[820px]:block min-[820px]:whitespace-nowrap">
            de escalar startups de IA no{" "}
            <span className="text-[#FF624D] italic font-bold">
              Brasil
            </span> e além&nbsp;
          </span>

          {/* MOBILE (<820px) — natural, com auto-fit maior agora */}
          <span className="min-[840px]:hidden block">
            Apoiamos{" "}
            <span className="text-[#FF624D] italic font-bold">Founders</span> com a ambição de&nbsp;
          </span>
          <span className="min-[840px]:hidden block">
            escalar startups de IA no{" "}
            <span className="text-[#FF624D] italic font-bold">
              Brasil
            </span> e além&nbsp;
          </span>
        </h2>

        {/* Parágrafo – Hanken Grotesk, peso 300 (light) */}
        <p
          className="mt-2 text-white/85 font-light text-[clamp(12px,3.5vw,16px)] whitespace-nowrap min-[820px]:whitespace-normal min-[820px]:text-[clamp(15.6px,1.04vw,18.7px)] min-[820px]:max-w-[499px] mobile-fade-up delay-200"
          style={{
            fontFamily:
              '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          VC pre-seed especialista em IA
        </p>

        <div className="mt-7 flex items-center justify-center gap-2 min-[820px]:justify-start mobile-fade-up delay-300">
          <a
            href="#ai-eir"
            className="inline-flex items-center justify-center gap-2 rounded-md font-semibold h-[52px] px-5 min-w-[166px] text-[15.6px] border-2 border-[#FF624D] bg-white text-black min-[820px]:border min-[820px]:border-gray-400 min-[820px]:bg-transparent min-[820px]:text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-105 hover:shadow-md hover:shadow-black/20 min-[820px]:hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60 active:translate-y-0 max-[330px]:min-w-[112px] max-[330px]:px-3"
          >
            <svg
              width="27"
              height="23"
              viewBox="0 0 26 22"
              aria-hidden="true"
              className="-ml-1 text-[#FF624D] min-[820px]:text-gray-400"
            >
              <path
                d="M2 11h6"
                stroke="currentColor"
                strokeWidth="2.08"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M9 11h7"
                stroke="currentColor"
                strokeWidth="2.08"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M16 7l6 4-6 4"
                stroke="currentColor"
                strokeWidth="2.08"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            Pitch Us!
          </a>
        </div>
      </div>

      {/* divisória inferior da seção (igual Time/Footer, só na base) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.28), rgba(255,255,255,0))",
          opacity: 0.4,
        }}
      />
    </section>
  );
}
 