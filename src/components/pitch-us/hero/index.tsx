// Hero.tsx
"use client";

import { useEffect, useRef } from "react";
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
        - Uses aspect-ratio container to prevent layout shift
        - object-fit: contain ensures full image visibility without cropping
        - Centered horizontally, anchored to bottom
      */}
      <div className="min-[820px]:hidden absolute inset-x-0 bottom-0 z-0 pointer-events-none select-none flex justify-center items-end">
        <div className="relative w-full max-w-[600px] aspect-[440/346]">
          <Image
            src="/hero/montanha-3.svg"
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
        - Positioned absolute right-bottom to match design
        - Uses standard CSS positioning (no transforms that might cause clipping)
        - Width scales with viewport (vw) to maintain proportions
        - object-fit: contain ensures the mountain is never cut off
        - max-width constraints prevent it from becoming overwhelming on ultra-wide screens
      */}
      <div className="hidden min-[820px]:block absolute right-0 -top-[5%] lg:-top-[10%] z-0 w-[50vw] max-w-[1400px] h-[110%] pointer-events-none select-none">
        <Image
          src="/hero/montanha-3.svg"
          alt="Paisagem montanhosa detalhada"
          fill
          className="mountain mountain-img object-contain object-right"
          draggable={false}
          priority
          sizes="(min-width: 820px) 50vw, (min-width: 1024px) 55vw, (min-width: 1280px) 50vw"
          unoptimized
          style={{ imageRendering: 'auto' }}
        />
      </div>

      <div className="relative z-10 w-full min-[820px]:absolute min-[820px]:inset-x-0 min-[820px]:top-0 min-[820px]:pt-[22vh] pointer-events-none">
        <div className="w-full px-5 min-[820px]:px-0 min-[820px]:pl-[var(--site-padding-left)] min-[820px]:pr-[var(--site-padding-right)]">
          <div
            ref={wrapRef}
            className="wrap pointer-events-auto mx-auto max-w-[560px] py-8 text-center flex flex-col items-center min-[820px]:mx-0 min-[820px]:py-0 min-[820px]:text-left min-[820px]:items-start min-[820px]:max-w-[1080px]"
          >
        {/* H1 – Crimson Text, peso 700 (bold) */}
        <h1
          className="block font-bold text-[32px] min-[820px]:text-[clamp(36px,4.5vw,72px)] leading-tight mb-3 min-[820px]:ml-[0.8px]"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          Pitch Us!
        </h1>

        {/* H2 – Crimson Text, peso 700, itálico */}
        <h2
          className="hero-heading font-bold italic leading-tight text-[22px] sm:text-[24px] min-[820px]:text-[22px] lg:text-[32px] min-[1280px]:text-[40px] min-[820px]:max-w-[832px] mobile-fade-up delay-100"
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

          {/* MOBILE (<820px) */}
          <span className="min-[820px]:hidden block text-[20px]">
            Apoiamos{" "}
            <span className="text-[#FF624D] italic font-bold">Founders</span> com a ambição{" "}de escalar startups de IA no 
            <span className="text-[#FF624D] italic font-bold"> Brasil</span> e alem
          </span>
        </h2>

        {/* Parágrafo – Hanken Grotesk, peso 300 (light) */}
        <p
          className="mt-4 text-white/85 font-light text-[16px] leading-relaxed max-w-[320px] mx-auto min-[820px]:mx-0 min-[820px]:text-[clamp(14px,1.1vw,18px)] min-[820px]:max-w-[580px] lg:max-w-[640px] mobile-fade-up delay-200"
          style={{
            fontFamily:
              '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          Apoiamos founders com profunda expertise em inteligência artificial desde os estágios iniciais, investindo nas primeiras rodadas de startups AI-First que tenham o Brasil como um de seus mercados-alvo, mas que já nascem com ambição global, visão de longo prazo e potencial para disruptar grandes mercados.
        </p>

        <div className="mt-7 flex items-center justify-center gap-3 lg:gap-4 min-[820px]:justify-start mobile-fade-up delay-300">
         

          <a
            href="https://forms.gle/FRAutKQbJt4wvCuR7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md font-semibold h-12 px-6 min-w-[160px] text-[15px] border-2 border-[#FF624D] bg-black text-white min-[820px]:h-[38px] min-[820px]:px-4 min-[820px]:min-w-[120px] min-[820px]:text-[13.5px] min-[820px]:border min-[820px]:border-gray-400 min-[820px]:bg-transparent transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-110 hover:shadow-md hover:shadow-black/40 min-[820px]:hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60 active:translate-y-0 whitespace-nowrap"
          >
            <Image
              src="/elements/arrow-icon.png"
              width={27}
              height={23}
              alt=""
              className="-ml-1 min-[820px]:hidden"
            />
            <Image
              src="/elements/arrow-white-icon.png"
              width={27}
              height={23}
              alt=""
              className="-ml-1 hidden min-[820px]:block"
            />
            Inscreva-se
          </a>
        </div>
      </div>
        </div>
      </div>


    </section>
  );
}
