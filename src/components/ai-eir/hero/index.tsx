"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Card } from "./Card";

export default function AIHero() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
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
      ref={sectionRef}
      id="ai-eir-hero"
      className="relative overflow-hidden text-white lg:pt-28 lg:pb-32"
      style={{ backgroundColor: "rgb(17, 4, 23)" }}
    >
      <style jsx global>{`
        #ai-eir-hero {
          /* min-height handled by inner wrapper on mobile */
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
        @media (min-width: 1024px) {
          #ai-eir-hero {
             min-height: 100svh;
          }
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

      {/* IMAGEM desktop (substitui Lottie) */}
      <div className="mountain-desktop pointer-events-none hidden lg:block absolute top-[15vh] right-0 z-0 h-[85vh] flex items-start justify-end">
        <div className="w-[60vw] lg:w-[55vw] max-w-[1200px] h-full flex items-start relative">
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

      {/* Hero Content Wrapper (Mobile: 100svh screen | Desktop: flow) */}
      <div className="relative min-h-[100svh] lg:min-h-0 flex flex-col justify-start lg:block pt-32 lg:pt-[28vh]">
        {/* texto + CTA */}
        <div className="relative z-20 px-5 text-center mx-auto max-w-[640px] lg:text-left lg:px-0 lg:mx-0 lg:ml-[6vw] flex flex-col justify-start items-center lg:items-start lg:min-h-0">

          {/* H1 desktop — corrigido (Residence branco) */}
          <h1
            className="desk-h1 hidden lg:block font-bold mb-3 text-[48px] lg:text-[56px] leading-[1.15]"
            style={{ fontFamily: '"Crimson Text", serif' }}
          >
            AI <span className="italic">Entrepreneur</span><br />
            in <span className="italic">Residence</span>
          </h1>

          {/* H1 mobile — não tinha cor antes, mantido certo */}
          <h1
            className="lg:hidden font-bold mb-3 text-[30px] leading-[1.15]"
            style={{ fontFamily: '"Crimson Text", serif' }}
          >
            AI <span className="italic">EiR</span>
          </h1>

          {/* H2 desktop */}
          <h2
            className="desk-h2 hidden lg:block font-bold italic text-[32px] lg:text-[40px] leading-tight mb-4 max-w-[550px]"
            style={{ fontFamily: '"Crimson Text", serif' }}
          >
            Do <span className="text-[#ff624d]">zero ao MVP</span> pronto para
            <span className="text-[#ff624d]"> <br />fundraising em 12 semanas</span>
          </h2>

          {/* H2 mobile */}
          <h2
            className="lg:hidden font-bold italic text-[26px] leading-tight mb-4"
            style={{ fontFamily: '"Crimson Text", serif' }}
          >
            Do <span className="text-[#ff624d]">zero ao MVP</span> pronto para
            fundraising em <span className="text-[#ff624d]">12 semanas</span>
          </h2>

          {/* p desktop */}
          <p
            className="desk-body hidden lg:block text-white/90 max-w-[60ch] font-normal"
            style={{
              fontFamily:
                '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Transforme sua ideia em uma startup de IA com apoio direto<br />de quem já criou e investiu em startups de sucesso.
          </p>

          {/* p mobile */}
          <p
            className="lg:hidden text-white/90 text-[16px] leading-relaxed mx-auto max-w-[46ch] font-normal"
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
            <a
              href="https://forms.gle/BjEZU9quVQq8LSXg7"
              target="_blank"
              rel="noopener noreferrer"
              className="cta inline-flex items-center justify-center gap-3 rounded-md font-semibold min-h-[48px] h-auto py-2 px-5 min-w-[170px] text-[15px] border-2 border-[#ff624d] bg-white text-black transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-105 hover:shadow-md hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff624d]/60 active:translate-y-0 lg:border lg:border-gray-400 lg:bg-transparent lg:text-white lg:hover:brightness-110"
            >
              <svg
                width="26"
                height="22"
                viewBox="0 0 26 22"
                aria-hidden="true"
                className="-ml-1 text-[#ff624d] lg:text-gray-400"
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
              <span className="lg:hidden">Apply for AI EIR</span>
              <span className="hidden lg:inline">Apply AI EIR</span>
            </a>
          </div>
        </div>

        {/* IMAGEM mobile (moved inside wrapper to be absolute bottom of first screen) */}
        <div className="mountain-mobile pointer-events-none select-none absolute right-0 bottom-0 w-[110%] h-[40vh] block lg:hidden">
          <Image
            src="/hero/montanha-3.svg"
            alt=""
            fill
            className="object-contain object-right-bottom"
            draggable={false}
            sizes="100vw"
          />
        </div>
      </div>

      {/* mobile cards (moved outside text container) */}
      <div className="lg:hidden relative z-20 pb-16 bg-[#110417]">
        <div
          ref={trackRef}
          className="carousel flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 pb-12 scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {[
            {
              imageSrc: "/ai-eir/hero/BOX1.svg",
              title: <></>,
              description: "",
            },
            {
              imageSrc: "/ai-eir/hero/BOX2.svg",
              title: <></>,
              description: "",
            },
            {
              imageSrc: "/ai-eir/hero/BOX3.svg",
              title: <></>,
              description: "",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="shrink-0 snap-start min-w-[85%] max-w-[85%] sm:min-w-[70%] sm:max-w-[70%]"
            >
              <Card
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
        <div className="mt-[-20px] mx-auto max-w-[360px] px-5">
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

      {/* desktop cards */}
      <div className="hidden lg:grid grid-cols-3 items-stretch justify-items-stretch gap-6 px-[4vw] lg:mt-96 mx-auto max-w-[1400px] relative z-20">
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
    </section>
  );
}
