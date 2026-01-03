// Hero.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const doc = document as Document & { fonts?: { ready: Promise<void> } };
    doc.fonts?.ready?.then(() => {
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
      className="relative text-white pt-24 pb-94 min-h-[85dvh] min-[820px]:min-h-[60dvh] min-[820px]:pt-12 min-[820px]:pb-0 overflow-hidden"
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

      <div className="min-[800px]:hidden absolute left-0 bottom-0 z-0 w-[110%] max-w-none pointer-events-none select-none">
        <Image
          src="/time/hero/montanha-4.svg"
          alt=""
          width={800}
          height={400}
          className="mountain-mobile-img mobile-light-reveal w-full h-auto"
          draggable={false}
          priority
        />
      </div>

      <div className="hidden min-[820px]:block absolute right-0 top-20 z-0 w-[55vw] max-w-[700px] min-[1181px]:max-w-[800px] 2xl:max-w-[900px] pointer-events-none select-none">
        <Image
          src="/time/hero/montanha-4.svg"
          alt=""
          width={1200}
          height={800}
          className="mountain mountain-img w-full h-auto object-contain translate-x-[10%]"
          draggable={false}
          priority
        />
      </div>

      <div
        ref={wrapRef}
        className="wrap relative z-10 w-full max-w-[560px] px-5 py-0 flex flex-col items-center text-center min-[820px]:absolute min-[820px]:inset-x-0 min-[820px]:top-[25%] min-[820px]:mx-0 min-[820px]:text-left min-[820px]:items-start min-[820px]:max-w-[1080px] min-[820px]:pr-6 min-[820px]:pl-10"
      >
        {/* Mobile Title */}
        <h1
          className="block min-[820px]:hidden font-bold text-[42px] leading-tight mb-4 mobile-fade-up"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          Nosso <span className="text-[#FF624D]">Time</span>
        </h1>

        {/* H1 – Desktop */}
        <h1
          className="hidden min-[820px]:block font-bold text-[49.3px] min-[820px]:text-[71.7px] leading-tight mb-3 min-[820px]:ml-[0.8px]"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          Nosso Time
        </h1>

        {/* H2 – Crimson Text, peso 700, itálico */}
        <h2
          className="hero-heading font-bold italic leading-tight text-[clamp(24px,6vw,32px)] min-[820px]:text-[clamp(35.8px,2.8vw,42.6px)] min-[820px]:max-w-[832px] mobile-fade-up delay-100"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          {/* DESKTOP (≥820px) — 2 linhas fixas */}
          <span className="hidden min-[820px]:block min-[820px]:whitespace-nowrap">
            Um time que investe nos{" "}
            <span className="text-[#FF624D] italic font-bold">Founders</span> que estão&nbsp;
          </span>
          <span className="hidden min-[820px]:block min-[820px]:whitespace-nowrap">
            construindo o{" "}
            <span className="text-[#FF624D] italic font-bold">
              futuro da IA</span> no Brasil.&nbsp;
          </span>

          {/* MOBILE (<820px) */}
          <span className="min-[820px]:hidden block">
            Um <span className="text-[#FF624D] italic font-bold">time</span> que investe nos <span className="text-[#FF624D] italic font-bold">Founders</span> que estão construindo o <span className="text-[#FF624D] italic font-bold">futuro da IA no Brasil.</span>
          </span>
        </h2>

        {/* Parágrafo – Hanken Grotesk, peso 300 (light) */}
        <p
          className="mt-6 text-white/85 font-light text-[16px] leading-relaxed min-[820px]:mt-2 min-[820px]:whitespace-normal min-[820px]:text-[clamp(15.6px,1.04vw,18.7px)] min-[820px]:max-w-[599px] mobile-fade-up delay-200"
          style={{
            fontFamily:
              '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          {/* MOBILE */}
          <span className="min-[820px]:hidden">
             Somos <span className="text-[#FF624D]">investidores</span> e também <span className="text-[#FF624D]">empreendemos</span>: entendemos na prática o que é construir do zero e o valor de uma <span className="text-[#FF624D]">parceria</span> que não falha. Criando uma <span className="text-[#FF624D]">startup de IA</span> e buscando seu primeiro cheque? Conte com nosso <span className="text-[#FF624D]">time</span>.
          </span>
          {/* DESKTOP */}
          <span className="hidden min-[820px]:inline">
            Somos investidores e também empreendemos: entendemos na prática
            <br />
            o que é construir do zero e o valor de uma parceria que não falha.
          </span>
        </p>
        
        {/* Mobile Button */}
        <div className="mt-8 min-[820px]:hidden mobile-fade-up delay-300">
             <a
              href="/pitch-us"
              className="inline-flex items-center px-8 py-3 border border-[#FF624D] rounded-lg text-white font-bold text-lg hover:bg-[#FF624D]/10 transition-colors"
              style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}
            >
              <span className="mr-2 text-[#FF624D]">--&gt;</span> Pitch Us!
            </a>
        </div>
      </div>

    </section>
  );
}
