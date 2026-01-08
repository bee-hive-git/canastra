"use client";

import Image from "next/image";
import { Card } from "./Card";

export default function AIHero() {
  return (
    <section
      id="ai-eir-hero"
      className="relative text-white pt-12 pb-0 min-[820px]:pt-4 min-[820px]:pb-20 overflow-hidden"
      style={{ backgroundColor: "rgb(17, 4, 23)" }}
    >
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
        <div className="mountain-desktop pointer-events-none hidden min-[820px]:block absolute top-[10vh] min-[820px]:right-[var(--site-padding-right)] z-0 h-[85vh] w-[60vw] lg:w-[55vw] xl:w-[50vw] flex items-start justify-end">
          <div className="w-full h-full relative">
            <Image
              src="/ai-eir/hero/montanha-5.svg"
              alt=""
              fill
              className="object-contain object-right-top"
              draggable={false}
              sizes="60vw"
            />
          </div>
        </div>

        {/* Hero Content Wrapper */}
        <div className="relative z-20 w-full max-w-[560px] flex flex-col items-center text-center mx-auto px-5 py-8 min-[820px]:py-0 min-[820px]:absolute min-[820px]:inset-x-0 min-[820px]:top-1/2 min-[820px]:-translate-y-1/2 min-[820px]:mx-0 min-[820px]:text-left min-[820px]:items-start min-[820px]:pl-[var(--site-padding-left)] min-[820px]:max-w-none">
          {/* H1 desktop */}
          <h1
            className="desk-h1 hidden min-[820px]:block font-bold mb-3 text-[48px] lg:text-[56px] leading-[1.15]"
            style={{ fontFamily: '"Crimson Text", serif' }}
          >
            AI <span className="italic">Entrepreneur</span>
            <br />
            in <span className="italic">Residence </span>
            (AI EiR)
          </h1>

          {/* H1 mobile */}
          <h1
            className="min-[820px]:hidden font-bold mb-3 text-[30px] leading-[1.15]"
            style={{ fontFamily: '"Crimson Text", serif' }}
          >
            AI <span className="italic">EiR</span>
          </h1>

          {/* H2 desktop */}
          <h2
            className="desk-h2 hidden min-[820px]:block font-bold italic leading-tight text-[clamp(24px,6vw,32px)] min-[820px]:text-[clamp(22px,2.4vw,40px)] mb-4 max-w-[550px]"
            style={{ fontFamily: '"Crimson Text", serif' }}
          >
            Do <span className="text-[#ff624d]">zero ao MVP</span> validado,
            pronto para fundraising em apenas
            <span className="text-[#ff624d]"> 12 semanas</span>
          </h2>

          {/* H2 mobile */}
          <h2
            className="min-[820px]:hidden font-bold italic text-[clamp(24px,6vw,32px)] leading-tight mb-4"
            style={{ fontFamily: '"Crimson Text", serif' }}
          >
            Do <span className="text-[#ff624d]">zero ao MVP</span> pronto para
            fundraising em <span className="text-[#ff624d]">12 semanas</span>
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
              Transforme sua ideia em uma startup de IA com apoio direto
              <br className="hidden min-[1181px]:block" />
              de quem já criou e investiu em startups de sucesso.
            </span>

            {/* Mobile Content */}
            <span className="min-[820px]:hidden">
              Transforme sua ideia em uma{" "}
              <span className="text-[#ff624d] font-semibold italic">
                startup de IA
              </span>{" "}
              com apoio{" "}
              <span className="text-[#ff624d] font-semibold italic">
                direto
              </span>{" "}
              de quem já criou e investiu em{" "}
              <span className="text-[#ff624d] font-semibold italic">
                startups de sucesso
              </span>
              .
            </span>
          </p>

          {/* CTA */}
          <div className="mt-7">
            <a
              href="https://forms.gle/BjEZU9quVQq8LSXg7"
              target="_blank"
              rel="noopener noreferrer"
              className="cta inline-flex items-center justify-center gap-3 rounded-md font-semibold min-h-[48px] h-auto py-2 px-5 min-w-[170px] text-[15px] border-2 border-[#ff624d] bg-white text-black transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-105 hover:shadow-md hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff624d]/60 active:translate-y-0 min-[820px]:border min-[820px]:border-gray-400 min-[820px]:bg-transparent min-[820px]:text-white min-[820px]:hover:brightness-110 whitespace-nowrap"
            >
              <svg
                width="26"
                height="22"
                viewBox="0 0 26 22"
                aria-hidden="true"
                className="-ml-1 text-[#ff624d] min-[820px]:text-gray-400"
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
              <span className="min-[820px]:hidden">Apply AI EiR</span>
              <span className="hidden min-[820px]:inline">Apply AI EiR</span>
            </a>
          </div>

          </div>

        {/* IMAGEM mobile - New Location */}
        <div className="min-[820px]:hidden absolute inset-x-0 bottom-0 z-0 pointer-events-none select-none flex justify-center items-end h-[50svh]">
          <div className="relative w-full max-w-[600px] h-full">
            <Image
              src="/ai-eir/hero/montanha-5.svg"
              alt=""
              fill
              className="object-contain object-bottom"
              draggable={false}
              sizes="(max-width: 820px) 100vw"
            />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-[1400px] mx-auto px-5 min-[820px]:px-10 lg:px-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20">
          <Card
            imageSrc="/ai-eir/hero/BOX1.svg"
            title={<></>}
            description=""
            delay={0.1}
          />
          <Card
            imageSrc="/ai-eir/hero/BOX2.svg"
            title={<></>}
            description=""
            delay={0.3}
          />
          <Card
            imageSrc="/ai-eir/hero/BOX3.svg"
            title={<></>}
            description=""
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
}
