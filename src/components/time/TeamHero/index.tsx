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
      className="relative text-white pt-32 pb-24 min-h-[85dvh] min-[820px]:min-h-[90dvh] min-[820px]:pt-24 min-[820px]:pb-0 overflow-hidden min-[820px]:flex min-[820px]:items-center"
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

      <div className="hidden min-[820px]:block absolute right-0 top-20 z-0 w-[55vw] pointer-events-none select-none">
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
        className="wrap relative z-10 w-full max-w-[560px] px-5 py-0 flex flex-col items-center text-center min-[820px]:mx-0 min-[820px]:text-left min-[820px]:items-start min-[820px]:max-w-[50%] min-[820px]:pl-[5vw]"
      >
        {/* Mobile Title */}
        <h1
          className="block min-[820px]:hidden font-bold text-[42px] leading-[1.15] mb-4 mobile-fade-up"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          Nosso <span className="text-[#FF624D]">Time</span>
        </h1>

        {/* H1 – Desktop */}
        <h1
          className="hidden min-[820px]:block font-bold text-[clamp(36px,4.5vw,72px)] leading-tight mb-3"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          Nosso Time
        </h1>

        {/* H2 – Crimson Text, peso 700, itálico */}
        <h2
          className="hero-heading font-bold italic leading-tight text-[clamp(24px,6vw,32px)] min-[820px]:text-[clamp(22px,2.4vw,40px)] mobile-fade-up delay-100"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          {/* DESKTOP (≥820px) — 2 linhas fixas */}
          <span className="hidden min-[820px]:block">
            Um time que investe nos{" "}
            <span className="text-[#FF624D] italic font-bold">Founders</span> que estão&nbsp;
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
          className="mt-6 text-white/85 font-light text-[16px] leading-relaxed min-[820px]:mt-4 min-[820px]:whitespace-normal min-[820px]:text-[clamp(14px,1.1vw,18px)] min-[820px]:max-w-none mobile-fade-up delay-200"
          style={{
            fontFamily:
              '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          {/* MOBILE */}
          <span className="min-[820px]:hidden">
             Somos investidores, sim. Mas também somos empreendedores, operadores, cientistas e pesquisadores
              — gente que vive na pele o que é construir algo do zero e sabe, na prática, o valor de uma parceria 
              verdadeira e de um apoio que não falha.
          </span>
          {/* DESKTOP */}
          <span className="hidden min-[820px]:inline">
            Somos investidores, sim. Mas também somos empreendedores, operadores, cientistas e 
            <br className="hidden min-[1181px]:block" />
            pesquisadores — gente que vive na pele o que é construir algo do zero e sabe,
             <br className="hidden min-[1181px]:block" />
            na prática, o valor de uma parceria verdadeira e de um apoio que não falha.
          </span>
        </p>
        
        {/* Mobile Button */}
        <div className="mt-8 min-[820px]:hidden mobile-fade-up delay-300">
             <a
              href="https://forms.gle/FRAutKQbJt4wvCuR7"
              target="_blank"
              rel="noopener noreferrer"
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
