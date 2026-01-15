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
      document.querySelectorAll<SVGPathElement>("#team-hero .draw-path")
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
      id="team-hero"
      className="relative text-white pt-12 pb-[45vh] min-[820px]:pb-0 min-h-[100svh] min-[820px]:min-h-[90dvh] min-[820px]:pt-24 overflow-hidden"
      style={{ backgroundColor: BG }}
    >
      <style jsx global>{`
        #team-hero .mountain-img {
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
          #team-hero .mountain-img,
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

      <div className="min-[820px]:hidden absolute inset-x-0 bottom-0 z-0 pointer-events-none select-none flex justify-center items-end h-[40vh]">
        <div className="relative w-full max-w-[600px] h-full">
          <img
            src="/time/hero/montanha-4.svg"
            alt=""
            className="mountain-mobile-img mobile-light-reveal object-contain object-bottom w-full h-full"
            draggable={false}
          />
        </div>
      </div>

      <div className="hidden min-[820px]:block absolute right-0 top-20 z-0 w-[50vw] min-[1280px]:w-[55vw] pointer-events-none select-none">
        <img
          src="/time/hero/montanha-4.svg"
          alt=""
          className="mountain mountain-img w-full h-auto object-contain translate-x-[10%]"
          draggable={false}
        />
      </div>

      <div className="relative z-10 w-full min-[820px]:absolute min-[820px]:inset-x-0 min-[820px]:top-0 min-[820px]:pt-[22vh] pointer-events-none">
        <div className="w-full px-5 min-[820px]:px-0 min-[820px]:pl-[var(--site-padding-left)] min-[820px]:pr-[var(--site-padding-right)]">
          <div
            ref={wrapRef}
            className="wrap pointer-events-auto mx-auto w-full max-w-[560px] py-8 flex flex-col items-center text-center min-[820px]:mx-0 min-[820px]:py-0 min-[820px]:text-left min-[820px]:items-start min-[820px]:max-w-[50%]"
          >
        {/* Mobile Title */}
        <h1
          className="block min-[820px]:hidden font-bold text-[36px] leading-[1.15] mb-4 mobile-fade-up"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          Nosso Time
        </h1>

        {/* H1 – Desktop */}
        <h1
          className="hidden min-[820px]:block font-bold text-[48px] lg:text-[72px] leading-tight mb-3"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          Nosso Time
        </h1>

        {/* H2 – Crimson Text, peso 700, itálico */}
        <h2
          className="hero-heading font-bold italic leading-tight text-[22px] sm:text-[24px] min-[820px]:text-[24px] lg:text-[32px] min-[1280px]:text-[40px] mobile-fade-up delay-100"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          {/* DESKTOP (≥820px) — 2 linhas fixas */}
          <span className="hidden min-[820px]:block">
            Um time que investe nos{" "}
            <span className="text-[#FF624D] italic font-bold">Founders</span> que estão&nbsp;
            construindo o{" "}
            <span className="text-[#FF624D] italic font-bold">
              futuro da IA</span> no&nbsp;Brasil.
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
        <div className="mt-7 min-[820px]:hidden mobile-fade-up delay-300 flex justify-center">
             <a
              href="https://forms.gle/FRAutKQbJt4wvCuR7"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center justify-center gap-2
                rounded-md font-semibold h-12 px-6 min-w-[160px] text-[15px]
                border-2 border-[#FF624D] bg-black text-white
                transition-all duration-200 ease-out whitespace-nowrap
                hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-110
                hover:shadow-md hover:shadow-black/40
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60
                active:translate-y-0
              `}
              style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}
            >
              <Image
                src="/elements/arrow-icon.png"
                width={24}
                height={20}
                alt=""
                className="-ml-1"
              />
              Pitch Us!
            </a>
        </div>
      </div>
        </div>
      </div>

    </section>
  );
}
