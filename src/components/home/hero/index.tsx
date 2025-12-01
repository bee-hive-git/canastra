// Hero.tsx
"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  /** Auto-fit apenas no MOBILE (<820px). No desktop usamos classes fixas. */
  useLayoutEffect(() => {
    if (typeof window === "undefined" || window.innerWidth >= 820) return;
    const wrap = wrapRef.current,
      h2 = h2Ref.current;
    if (!wrap || !h2) return;

    const PAD = 10;
    // H2 MOBILE – um pouco maior
    let MIN = 22,
      MAX = 48;
    const w = window.innerWidth,
      h = window.innerHeight;
    if (w <= 330 || h <= 600) {
      MIN = 20;
      MAX = 28;
    }

    const fit = () => {
      const maxW = wrap.clientWidth - PAD;
      let size = MIN;
      h2.style.fontSize = `${size}px`;
      while (size < MAX) {
        h2.style.fontSize = `${size + 1}px`;
        if (h2.scrollWidth > maxW) break;
        size += 1;
      }
      h2.style.fontSize = `${size}px`;
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (typeof window === "undefined" || window.innerWidth >= 820) return;
    const wrap = wrapRef.current,
      p = pRef.current;
    if (!wrap || !p) return;

    const PAD = 10;
    // Parágrafo MOBILE – um pouco maior
    const MIN = 14,
      MAX = 20;
    p.style.whiteSpace = "nowrap";

    const fit = () => {
      const maxW = wrap.clientWidth - PAD;
      let size = MIN;
      p.style.fontSize = `${size}px`;
      while (size < MAX) {
        p.style.fontSize = `${size + 1}px`;
        if (p.scrollWidth > maxW) break;
        size += 1;
      }
      p.style.fontSize = `${size}px`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    (document as any).fonts?.ready?.then(() => {
      window.dispatchEvent(new Event("resize"));
    });
  }, []);

  const BG = "rgb(17, 4, 23)";

  return (
    <section
      id="home"
      className="relative text-white pt-16 min-h-[100dvh] bg-[url('/hero/fundo-mobile.png')] bg-cover bg-bottom bg-no-repeat min-[820px]:pt-24 min-[820px]:bg-[url('/hero/fundo.png')]"
      style={{ backgroundColor: BG }}
    >
      <style jsx global>{`
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
        @media (min-width: 1181px) and (max-width: 1439px) {
          #home .wrap {
            margin-left: 32px;
            padding-left: 52px;
            padding-right: 40px;
            max-width: 960px;
          }
          #home .wrap .hero-heading {
            max-width: 920px;
          }
        }
        @media (min-width: 1440px) {
          #home .wrap {
            margin-left: 40px;
            padding-left: 84px;
            padding-right: 72px;
          }
        }
      `}</style>

      <div
        ref={wrapRef}
        className="wrap relative z-10 mx-auto max-w-[560px] px-5 py-8 text-center flex flex-col items-center min-[820px]:absolute min-[820px]:inset-x-0 min-[820px]:top-1/2 min-[820px]:-translate-y-1/2 min-[820px]:mx-0 min-[820px]:text-left min-[820px]:items-start min-[820px]:max-w-[1080px] min-[820px]:pr-6 min-[820px]:pl-10 lg:pl-8 xl:pl-6 2xl:pl-5"
      >
        <img
          src="/hero/logo.png"
          alt="Logo Canastra"
          className="h-9 w-auto mb-6 min-[820px]:hidden"
        />

        {/* H1 – Crimson Text, peso 700 (bold) */}
        <h1
          className="hidden min-[820px]:block font-bold text-[44px] min-[820px]:text-[64px] leading-tight mb-4 min-[820px]:ml-[1px]"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          Canastra Ventures
        </h1>

        {/* H2 – Crimson Text, peso 700, itálico */}
        <h2
          ref={h2Ref}
          className="hero-heading font-bold italic leading-tight min-[820px]:text-[clamp(32px,2.5vw,38px)] min-[820px]:max-w-[1040px]"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          {/* DESKTOP (≥820px) — 2 linhas fixas */}
          <span className="hidden min-[820px]:block min-[820px]:whitespace-nowrap">
            Guiamos os{" "}
            <span className="text-[#FF624D] italic font-bold">ousados</span> na
            trilha&nbsp;da
          </span>
          <span className="hidden min-[820px]:block min-[820px]:whitespace-nowrap">
            construção de{" "}
            <span className="text-[#FF624D] italic font-bold">
              startups&nbsp;inesquecíveis
            </span>
          </span>

          {/* MOBILE (<820px) — natural, com auto-fit maior agora */}
          <span className="min-[820px]:hidden block">
            Guiamos os{" "}
            <span className="text-[#FF624D] italic font-bold">ousados</span> na
            trilha da
          </span>
          <span className="min-[820px]:hidden block">
            construção de{" "}
            <span className="text-[#FF624D] italic font-bold">
              startups inesquecíveis
            </span>
          </span>
        </h2>

        {/* Parágrafo – Hanken Grotesk, peso 300 (light) */}
        <p
          ref={pRef}
          className="mt-3 text-white/85 font-light min-[820px]:text-[clamp(15px,1vw,18px)] min-[820px]:max-w-[480px]"
          style={{
            fontFamily:
              '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          VC pre-seed especialista em IA
        </p>

        <div className="mt-7 flex items-center justify-center gap-2 min-[820px]:justify-start">
          <a
            href="#ai-eir"
            className="inline-flex items-center justify-center gap-2 rounded-md font-semibold h-[50px] px-5 min-w-[160px] text-[15px] border-2 border-[#FF624D] bg-white text-black min-[820px]:border min-[820px]:border-gray-400 min-[820px]:bg-transparent min-[820px]:text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-105 hover:shadow-md hover:shadow-black/20 min-[820px]:hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60 active:translate-y-0 max-[330px]:min-w-[108px] max-[330px]:px-3"
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
            Join AI EIR!
          </a>

          <a
            href="#pitch"
            className="inline-flex items-center justify-center gap-2 rounded-md font-semibold h-[50px] px-5 min-w-[160px] text-[15px] border-2 border-[#FF624D] bg-black text-white min-[820px]:border min-[820px]:border-gray-400 min-[820px]:bg-transparent transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-110 hover:shadow-md hover:shadow-black/40 min-[820px]:hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60 active:translate-y-0 max-[330px]:min-w-[108px] max-[330px]:px-3"
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
