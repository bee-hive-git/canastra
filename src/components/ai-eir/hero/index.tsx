// src/components/ai-eir/hero/index.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import aiEirHeroAnimation from "@/../public/lotties/ai-eir/data.json";

export default function AIHero() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  // drag-to-scroll mobile
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let startScrollLeft = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDown = true;
      el.classList.add("grabbing");
      startX = e.clientX;
      startScrollLeft = el.scrollLeft;
      el.setPointerCapture?.(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      el.scrollLeft = startScrollLeft - dx;
    };

    const endDrag = () => {
      isDown = false;
      el.classList.remove("grabbing");
    };

    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      const p = max > 0 ? el.scrollLeft / max : 0;
      setProgress(Math.min(1, Math.max(0, p)));
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", endDrag);
    el.addEventListener("pointerleave", endDrag);
    el.addEventListener("scroll", onScroll, { passive: true });

    onScroll();
    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", endDrag);
      el.removeEventListener("pointercancel", endDrag);
      el.removeEventListener("pointerleave", endDrag);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      id="ai-eir-hero"
      className="relative overflow-hidden text-white pt-24 pb-16 min-[1280px]:pt-28 min-[1280px]:pb-32"
      style={{ backgroundColor: "rgb(17, 4, 23)" }}
    >
      <style jsx global>{`
        #ai-eir-hero {
          min-height: 105dvh;
        }
        @media (max-width: 330px), (max-height: 568px) {
          #ai-eir-hero {
            min-height: 135dvh;
          }
          #ai-eir-hero .spikes-mobile {
            bottom: 12px !important;
          }
        }

        #ai-eir-hero .carousel {
          cursor: grab;
          touch-action: pan-x;
          -webkit-user-select: none;
          user-select: none;
        }
        #ai-eir-hero .carousel.grabbing,
        #ai-eir-hero .carousel:active {
          cursor: grabbing;
        }

        /* ===== DESKTOP: aumentar textos ===== */
        @media (min-width: 1280px) {
          #ai-eir-hero .desk-h1 {
            font-size: clamp(52px, 4.4vw, 65px);
            line-height: 1.08;
          }
          #ai-eir-hero .desk-h2 {
            font-size: clamp(32px, 2.5vw, 44px);
            line-height: 1.2;
          }
          #ai-eir-hero .desk-body {
            font-size: clamp(18px, 1.3vw, 21px);
            line-height: 1.7;
            max-width: 66ch;
          }
        }
      `}</style>

      {/* gradiente */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
        style={{
          height: "45vh",
          background:
            "linear-gradient(to bottom, rgba(17,7,23,0) 0%, rgba(17,4,23,0.35) 35%, rgba(17,4,23,0.65) 65%, #110417 100%)",
        }}
      />

      {/* texto + CTA */}
      <div className="relative z-20 px-5 text-center mx-auto max-w-[640px] min-[1280px]:text-left min-[1280px]:px-0 min-[1280px]:mx-0 min-[1280px]:ml-[6vw]">

        {/* H1 desktop — corrigido (Residence branco) */}
        <h1
          className="desk-h1 hidden min-[1280px]:block font-bold mb-3 text-[48px] lg:text-[56px] leading-[1.15]"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          AI <span className="italic">Entrepreneur</span> in{" "}
          <span className="italic">Residence</span>
        </h1>

        {/* H1 mobile — não tinha cor antes, mantido certo */}
        <h1
          className="min-[1280px]:hidden font-bold mb-3 text-[30px] leading-[1.15]"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          AI <span className="italic">EiR</span>
        </h1>

        {/* H2 desktop */}
        <h2
          className="desk-h2 hidden min-[1280px]:block font-bold italic text-[32px] lg:text-[40px] leading-tight mb-4"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          Do <span className="text-[#ff624d]">zero ao MVP</span> pronto para
          fundraising em <span className="text-[#ff624d]">12 semanas</span>
        </h2>

        {/* H2 mobile */}
        <h2
          className="min-[1280px]:hidden font-bold italic text-[26px] leading-tight mb-4"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          Do <span className="text-[#ff624d]">zero ao MVP</span> pronto para
          fundraising em <span className="text-[#ff624d]">12 semanas</span>
        </h2>

        {/* p desktop */}
        <p
          className="desk-body hidden min-[1280px]:block text-white/90 max-w-[60ch] font-normal"
          style={{
            fontFamily:
              '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          Crie, valide e lance sua startup de IA
        </p>

        {/* p mobile */}
        <p
          className="min-[1280px]:hidden text-white/90 text-[16px] leading-relaxed mx-auto max-w-[46ch] font-normal"
          style={{
            fontFamily:
              '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          Transforme sua ideia em uma{" "}
          <span className="text-[#ff624d] font-semibold italic">
            startup de IA
          </span>{" "}
          com apoio{" "}
          <span className="text-[#ff624d] font-semibold italic">direto</span> de
          quem já criou e investiu em{" "}
          <span className="text-[#ff624d] font-semibold italic">
            startups de sucesso
          </span>
          .
        </p>

        {/* CTA */}
        <div className="mt-6">
          <button
            type="button"
            className="cta inline-flex items-center justify-center gap-3 rounded-md font-semibold h-12 px-5 min-w-[170px] text-[15px] border-2 border-[#ff624d] bg-white text-black transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-105 hover:shadow-md hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff624d]/60 active:translate-y-0 min-[1280px]:border min-[1280px]:border-gray-400 min-[1280px]:bg-transparent min-[1280px]:text-white min-[1280px]:hover:brightness-110"
          >
            <svg
              width="26"
              height="22"
              viewBox="0 0 26 22"
              aria-hidden="true"
              className="-ml-1 text-[#ff624d] min-[1280px]:text-gray-400"
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
            <span className="min-[1280px]:hidden">Apply for AI EIR</span>
            <span className="hidden min-[1280px]:inline">Apply AI EIR</span>
          </button>
        </div>

        {/* mobile cards */}
        <div className="mt-8 min-[1280px]:hidden">
          <div
            ref={trackRef}
            className="carousel flex gap-4 overflow-x-auto snap-x snap-mandatory px-1 scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            <SlideImage src="/ai-eir/hero/box1.png" alt="" />
            <SlideImage src="/ai-eir/hero/box2.png" alt="" />
            <SlideImage src="/ai-eir/hero/box3.png" alt="" />
          </div>
          <div className="mt-4 mx-auto max-w-[360px]">
            <div className="h-1 rounded-full bg-white/15">
              <div
                className="h-1 rounded-full bg-white transition-[width] duration-150"
                style={{
                  width: `${Math.max(8, progress * 100)}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* desktop cards */}
      <div className="hidden min-[1280px]:grid grid-cols-3 items-center justify-items-stretch gap-[4vw] xl:gap-[3vw] 2xl:gap-[3.5vw] px-[4vw] min-[1280px]:mt-28 mx-auto max-w-[1400px] z-20">
        <img
          src="/ai-eir/hero/box1.png"
          alt=""
          className="justify-self-start w-[24vw] max-w-[440px] xl:w-[20vw] xl:max-w-[420px] 2xl:w-[18vw] 2xl:max-w-[460px] h-auto object-contain translate-x-[2vw] xl:translate-x-[1vw] 2xl:translate-x-0"
          draggable={false}
        />
        <img
          src="/ai-eir/hero/box2.png"
          alt=""
          className="justify-self-center w-[24vw] max-w-[440px] xl:w-[20vw] xl:max-w-[420px] 2xl:w-[18vw] 2xl:max-w-[460px] h-auto object-contain"
          draggable={false}
        />
        <img
          src="/ai-eir/hero/box3.png"
          alt=""
          className="justify-self-end w-[24vw] max-w-[440px] xl:w-[20vw] xl:max-w-[420px] 2xl:w-[18vw] 2xl:max-w-[460px] h-auto object-contain -translate-x-[2vw] xl:-translate-x-[1vw] 2xl:-translate-x-0"
          draggable={false}
        />
      </div>

      {/* LOTTIE mobile */}
      <div
        aria-hidden
        className="spikes-mobile pointer-events-none select-none absolute left-1/2 -translate-x-1/2 bottom-16 min-[1280px]:hidden z-0"
      >
        <Lottie
          animationData={aiEirHeroAnimation}
          loop
          autoplay
          className="w-[130vw] max-w-[520px] h-auto"
        />
      </div>

      {/* LOTTIE desktop */}
      <div
        aria-hidden
        className="spikes-desktop pointer-events-none select-none hidden min-[1280px]:block absolute top-1/2 -translate-y-1/2 right-[-120px] lg:right-[-160px] xl:right-[-200px] 2xl:right-[-240px] z-0"
      >
        <Lottie
          animationData={aiEirHeroAnimation}
          loop
          autoplay
          className="min-[1280px]:w-[420px] lg:w-[560px] xl:w-[680px] 2xl:w-[800px] h-auto max-h-[70vh] xl:max-h-[62vh] 2xl:max-h-[56vh]"
        />
      </div>
    </section>
  );
}

function SlideImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="shrink-0 snap-start min-w-[82%] max-w-[82%] sm:min-w-[70%] sm:max-w-[70%] rounded-2xl overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain pointer-events-none select-none"
        draggable={false}
      />
    </div>
  );
}
