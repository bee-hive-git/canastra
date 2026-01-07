// Hero.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
      className="relative text-white pt-12 min-h-[100svh] min-[820px]:pt-24 overflow-x-hidden"
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
        @media (min-width: 1181px) and (max-width: 1439px) {
          #home .wrap {
            margin-left: 0;
            padding-left: var(--site-padding-left);
            padding-right: var(--site-padding-right);
            max-width: 960px;
          }
          #home .wrap .hero-heading {
            max-width: 920px;
          }
        }
        @media (min-width: 1440px) {
          #home .wrap {
            margin-left: 0;
            padding-left: var(--site-padding-left);
            padding-right: var(--site-padding-right);
          }
        }
      `}</style>

      {/* 
        MOBILE IMAGE (<820px)
      */}
      <div className="min-[820px]:hidden absolute inset-x-0 bottom-0 z-0 pointer-events-none select-none flex justify-center items-end h-[50vh]">
        <div className="relative w-full max-w-[600px] h-full">
          <Image
            src="/hero/monatnha-1-mobile.svg"
            alt="Paisagem montanhosa"
            fill
            className="mobile-light-reveal object-contain object-bottom"
            draggable={false}
            priority
            sizes="(max-width: 820px) 100vw"
            unoptimized
          />
        </div>
      </div>

      {/* 
        DESKTOP IMAGE (>=820px)
      */}
      <div className="hidden min-[820px]:block absolute right-0 bottom-0 z-0 w-[60vw] lg:w-[55vw] xl:w-[50vw] max-w-[1400px] h-[85vh] pointer-events-none select-none">
        <Image
          src="/hero/montanha-1.svg"
          alt="Paisagem montanhosa detalhada"
          fill
          className="mountain mountain-img object-contain object-right-bottom"
          draggable={false}
          priority
          sizes="(min-width: 820px) 60vw, (min-width: 1024px) 55vw, (min-width: 1280px) 50vw"
          unoptimized
          style={{ imageRendering: 'auto' }}
        />
      </div>

      <div
        ref={wrapRef}
        className="wrap relative z-10 mx-auto max-w-[560px] px-5 py-8 text-center flex flex-col items-center min-[820px]:absolute min-[820px]:inset-x-0 min-[820px]:top-1/2 min-[820px]:-translate-y-1/2 min-[820px]:mx-0 min-[820px]:text-left min-[820px]:items-start min-[820px]:pl-[5%] lg:pl-[8%] xl:pl-[10%] min-[820px]:max-w-none"
      >
        <Image
        src="/header/logo.png"
        alt="Logo Canastra"
        width={150}
        height={36}
        className="h-14 sm:h-22 w-auto mb-14 sm:mb-12 min-[820px]:hidden mobile-fade-up object-contain"
        priority
      />
        {/* H1 – Crimson Text, peso 700 (bold) */}
        <h1
          className="hidden min-[820px]:block font-bold text-[49.3px] min-[820px]:text-[71.7px] leading-tight mb-3 min-[820px]:ml-[0.8px]"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          Canastra Ventures
        </h1>

        {/* H2 – Crimson Text, peso 700, itálico */}
        <h2
          className="hero-heading font-bold italic leading-tight text-[clamp(18px,5.5vw,26px)] min-[820px]:text-[clamp(35.8px,2.8vw,42.6px)] min-[820px]:max-w-[832px] mobile-fade-up delay-100"
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
            construção de startups{" "}
            <span className="text-[#FF624D] italic font-bold">
              inesquecíveis
            </span>
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

        <div className="mt-7 flex items-center justify-center gap-3 lg:gap-4 min-[820px]:justify-start mobile-fade-up delay-300">
          <a
            href="https://forms.gle/BjEZU9quVQq8LSXg7"
            target="_blank"
            rel="noopener noreferrer"
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
            Join AI EiR!
          </a>

          <a
            href="https://forms.gle/FRAutKQbJt4wvCuR7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md font-semibold h-[52px] px-5 min-w-[166px] text-[15.6px] border-2 border-[#FF624D] bg-black text-white min-[820px]:border min-[820px]:border-gray-400 min-[820px]:bg-transparent transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-110 hover:shadow-md hover:shadow-black/40 min-[820px]:hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60 active:translate-y-0 max-[330px]:min-w-[112px] max-[330px]:px-3"
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

    </section>
  );
}
 
