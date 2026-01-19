"use client";

import Image from "next/image";
import { Card } from "./Card";

export default function AIHero() {
  return (
    <section
      id="ai-eir-hero"
      className="relative text-white pt-12 pb-24 min-[820px]:pt-4 min-[820px]:pb-32 overflow-hidden"
      style={{ backgroundColor: "rgb(17, 4, 23)" }}
    >
      <style jsx global>{`
        #ai-eir-hero .mountain-img {
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

        #ai-eir-hero .hero-mobile-img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          image-rendering: high-quality;
        }

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
          .delay-100 {
            animation-delay: 100ms;
          }
          .delay-200 {
            animation-delay: 200ms;
          }
          .delay-300 {
            animation-delay: 300ms;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #ai-eir-hero .mountain-img,
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
      {/* gradiente */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
        style={{
          height: "45svh",
          background:
            "linear-gradient(to bottom, rgba(17,7,23,0) 0%, rgba(17,4,23,0.35) 35%, rgba(17,4,23,0.65) 65%, #110417 100%)",
        }}
      />

      {/* Main Hero Area Wrapper - Full Width */}
      <div className="relative w-full min-h-[100svh] mb-24 min-[820px]:min-h-0 min-[820px]:h-[85dvh] min-[820px]:mb-40">
        <div className="mountain-desktop pointer-events-none hidden min-[820px]:block absolute top-[10vh] min-[820px]:right-[var(--site-padding-right)] z-0 h-[76vh] w-[54vw] lg:w-[50vw] xl:w-[45vw] flex items-start justify-end">
          <div className="w-full h-full relative">
            <img
              src="/ai-eir/hero/montanha-5.svg"
              alt=""
              className="mountain mountain-img object-contain object-right-top w-full h-full"
              draggable={false}
            />
          </div>
        </div>

        {/* Hero Content Wrapper */}
        <div className="relative z-10 w-full min-[820px]:absolute min-[820px]:inset-x-0 min-[820px]:top-0 min-[820px]:pt-[22vh] pointer-events-none">
          <div className="w-full px-5 min-[820px]:px-0 min-[820px]:pl-[var(--site-padding-left)] min-[820px]:pr-[var(--site-padding-right)]">
            <div className="pointer-events-auto w-full max-w-[560px] flex flex-col items-center text-center mx-auto py-8 min-[820px]:py-0 min-[820px]:mx-0 min-[820px]:items-start min-[820px]:text-left">
              {/* H1 desktop */}
              <h1
                className="desk-h1 hidden min-[820px]:block font-bold mb-3 text-[36px] lg:text-[56px] leading-[1.15]"
                style={{ fontFamily: '"Crimson Text", serif' }}
              >
                AI <span className="italic">Entrepreneur</span>
                <br />
                in <span className="italic">Residence </span>
              </h1>

              {/* H1 mobile */}
              <h1
          className="block min-[820px]:hidden font-bold text-[36px] leading-[1.15] mb-4 mobile-fade-up"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          AI Entrepreneur in Residence
        </h1>

              {/* H2 desktop */}
              <h2
                className="desk-h2 hidden min-[820px]:block font-bold italic leading-tight text-[22px] lg:text-[32px] min-[1280px]:text-[40px] mb-4 max-w-[550px]"
                style={{ fontFamily: '"Crimson Text", serif' }}
              >
                Do <span className="text-[#ff624d]">zero ao MVP</span> validado,
                pronto para <br />fundraising em apenas
                <span className="text-[#ff624d]"> 12 semanas</span>
              </h2>

              {/* H2 mobile */}
              <h2
                className="min-[820px]:hidden font-bold italic text-[22px] sm:text-[24px] leading-tight mb-4"
                style={{ fontFamily: '"Crimson Text", serif' }}
              >
                Do <span className="text-[#ff624d]">zero ao MVP</span> pronto para
                fundraising em apenas <span className="text-[#ff624d]">12 semanas</span>
              </h2>

              {/* p (Unified Desktop + Mobile) */}
              <p
                className="mt-6 text-white/85 font-light text-[16px] leading-relaxed min-[820px]:mt-4 min-[820px]:whitespace-normal min-[820px]:text-[clamp(14px,1.1vw,18px)] min-[820px]:max-w-none mobile-fade-up delay-200"
                style={{
                  fontFamily:
                    '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                {/* Desktop Content */}
                <span className="hidden min-[820px]:inline">
                  Transforme sua ideia em uma startup de IA com apoio direto <br />de quem já criou e investiu em startups de sucesso.
                </span>

                {/* Mobile Content */}
                <span className="min-[820px]:hidden">
                  Transforme sua ideia em uma{" "}
                  startup de IA{" "}
                  com apoio{" "}
                  direto{" "}
                  de quem já criou e investiu em{" "}
                  startups de sucesso.
                </span>
              </p>

              {/* CTA */}
              <div className="mt-7">
                <a
                  href="https://forms.gle/BjEZU9quVQq8LSXg7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md font-semibold h-[38px] px-4 min-w-[120px] text-[13.5px] border-2 border-[#FF624D] bg-black text-white min-[820px]:border min-[820px]:border-gray-400 min-[820px]:bg-transparent transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-110 hover:shadow-md hover:shadow-black/40 min-[820px]:hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60 active:translate-y-0 max-[330px]:min-w-[100px] max-[330px]:px-3"
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
                  Apply AI EiR
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGEM mobile - New Location */}
        <div className="min-[820px]:hidden absolute inset-x-0 bottom-0 z-0 pointer-events-none select-none flex justify-center items-end h-[38svh]">
          <div className="relative w-full max-w-[600px] h-full">
            <img
              src="/ai-eir/hero/montanha-5.svg"
              alt=""
              className="hero-mobile-img mobile-light-reveal object-contain object-bottom w-full h-full"
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-[1400px] mx-auto px-5 min-[820px]:px-10 lg:px-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20">
          <Card
            iconSrc="/ai-eir/hero/icone-card-1.png"
            title={
              <>
                <span className="text-white">Go </span>
                <span className="text-[#FF624D]">all in</span>
                <span className="text-white"> and</span>
                <br />
                <span className="text-[#FF624D]">move fast</span>
              </>
            }
            description={
              <>
                São 160+ founders, 25+ mentores especialistas e acesso direto a
                investidores que conhecem os desafios de construir uma startup
                de IA. Aqui, troca real de conhecimento e apoio mútuo fazem
                parte do dia a dia.
              </>
            }
            delay={0.1}
          />
          <Card
            iconSrc="/ai-eir/hero/icone-card-2.png"
            title={
              <>
                <span className="text-white">Elite</span>{" "}
                <span className="text-[#FF624D]">AI</span>
                <br />
                <span className="text-[#FF624D]">Community</span>
              </>
            }
            description={
              <>
                Você vai construir seu produto em ritmo acelerado, com apoio
                prático na definição de tese, no desenho do MVP e nos primeiros
                experimentos de go-to-market. Menos teoria, mais execução.
              </>
            }
            delay={0.3}
          />
          <Card
            iconSrc="/ai-eir/hero/icone-card-3.png"
            title={
              <>
                <span className="text-white">Build with</span>{" "}
                <span className="text-[#FF624D]">Best</span>
                <br />
                <span className="text-[#FF624D]">Founders</span>
              </>
            }
            description={
              <>
                Você terá acompanhamento semanal de Fellow Partners que criaram
                e escalaram unicórnios. Momentos estratégicos para tomada de
                decisão e revisão de rota com quem já viveu e superou os mesmos
                desafios de fundar e escalar.
              </>
            }
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
}
