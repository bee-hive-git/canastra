// Hero.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/header/logo.svg";
import StartupsMarquee from "@/components/global/StartupsMarquee";

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
      className="relative text-white pt-12 min-h-[100svh] min-[820px]:min-h-[90dvh] min-[820px]:pt-24 overflow-hidden"
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

        #home .hero-mobile-img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          image-rendering: high-quality;
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
      `}</style>

      {/* 
        MOBILE IMAGE (<820px)
      */}
      <div className="min-[820px]:hidden absolute inset-x-0 bottom-0 z-0 pointer-events-none select-none h-[42vh]">
        <img
          src="/hero/montanha-1.svg"
          alt="Paisagem montanhosa"
          className="hero-mobile-img mobile-light-reveal object-contain object-bottom translate-y-16 w-full h-full"
          draggable={false}
        />
      </div>

      {/* 
        DESKTOP IMAGE (>=820px)
      */}
      <div className="hidden min-[820px]:block absolute inset-x-0 bottom-0 z-0 w-full h-[85vh] pointer-events-none select-none">
        <img
          src="/hero/montanha-1.svg"
          alt="Paisagem montanhosa detalhada"
          className="mountain mountain-img object-contain object-right-bottom translate-y-12 w-full h-full"
          draggable={false}
        />
      </div>

      <div className="relative z-10 w-full min-[820px]:absolute min-[820px]:inset-x-0 min-[820px]:top-0 min-[820px]:pt-[22vh] pointer-events-none">
        <div className="w-full px-5 min-[820px]:px-0 min-[820px]:pl-[var(--site-padding-left)] min-[820px]:pr-[var(--site-padding-right)]">
          <div
            ref={wrapRef}
            className="wrap pointer-events-auto mx-auto max-w-[560px] py-8 text-center flex flex-col items-center min-[820px]:mx-0 min-[820px]:py-0 min-[820px]:text-left min-[820px]:items-start min-[820px]:max-w-none"
          >
            <Logo
              className="h-14 sm:h-22 w-auto mb-14 sm:mb-12 min-[820px]:hidden mobile-fade-up object-contain"
              role="img"
              aria-label="Logo Canastra"
            />
            {/* H1 – Crimson Text, peso 700 (bold) */}
            <h1
              className="hidden min-[820px]:block font-bold text-[clamp(36px,4.5vw,72px)] leading-tight mb-3 min-[820px]:ml-[0.8px]"
              style={{ fontFamily: '"Crimson Text", serif' }}
            >
              Canastra Ventures
            </h1>

            {/* H2 – Crimson Text, peso 700, itálico */}
            <h2
              className="hero-heading font-bold italic leading-tight text-[clamp(24px,6vw,32px)] min-[820px]:text-[clamp(22px,2.4vw,40px)] min-[820px]:max-w-[832px] mobile-fade-up delay-100"
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
              className="mt-2 text-white/85 font-light text-[16px] leading-relaxed whitespace-nowrap min-[820px]:whitespace-normal min-[820px]:text-[clamp(14px,1.1vw,18px)] min-[820px]:max-w-[499px] mobile-fade-up delay-200"
              style={{
                fontFamily:
                  '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              VC pre-seed especialista em IA
            </p>

            <div className="mt-7 flex items-center justify-center gap-3 lg:gap-4 min-[820px]:justify-start mobile-fade-up delay-300">
              <Link
                href="/ai-eir"
                className="inline-flex items-center justify-center gap-2 rounded-md font-semibold h-[38px] px-4 min-w-[120px] text-[13.5px] border-2 border-black !bg-white text-black min-[820px]:border min-[820px]:border-gray-400 min-[820px]:!bg-transparent min-[820px]:text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-110 hover:shadow-md hover:shadow-black/40 min-[820px]:hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60 active:translate-y-0 max-[330px]:min-w-[100px] max-[330px]:px-3 whitespace-nowrap"
              >
                <Image
                  src="/elements/arrow-icon.png"
                  width={18}
                  height={15}
                  alt=""
                  className="-ml-1 min-[820px]:hidden"
                />
                <Image
                  src="/elements/arrow-white-icon.png"
                  width={18}
                  height={15}
                  alt=""
                  className="-ml-1 hidden min-[820px]:block"
                />
                Join AI EiR!
              </Link>

              <Link
                href="/pitch-us"
                className="inline-flex items-center justify-center gap-2 rounded-md font-semibold h-[38px] px-4 min-w-[120px] text-[13.5px] border-2 border-[#FF624D] bg-black text-white min-[820px]:border min-[820px]:border-gray-400 min-[820px]:bg-transparent transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-110 hover:shadow-md hover:shadow-black/40 min-[820px]:hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60 active:translate-y-0 max-[330px]:min-w-[100px] max-[330px]:px-3 whitespace-nowrap"
              >
                <Image
                  src="/elements/arrow-icon.png"
                  width={18}
                  height={15}
                  alt=""
                  className="-ml-1 min-[820px]:hidden"
                />
                <Image
                  src="/elements/arrow-white-icon.png"
                  width={18}
                  height={15}
                  alt=""
                  className="-ml-1 hidden min-[820px]:block"
                />
                Pitch Us!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
