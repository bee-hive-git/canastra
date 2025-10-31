// src/components/ai-eir/hero/index.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function AIHero() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  // Drag-to-scroll (mouse + touch) no carrossel mobile (com progress bar)
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
      className="relative overflow-hidden text-white pt-24 pb-16 min-[820px]:pt-28 min-[820px]:pb-32"
      style={{ backgroundColor: "rgb(17, 4, 23)" }}
    >
      <style jsx global>{`
        #ai-eir-hero { min-height: 105dvh; }
        @media (max-width: 330px), (max-height: 568px) {
          #ai-eir-hero { min-height: 135dvh; }
          #ai-eir-hero .spikes-mobile { bottom: 12px !important; }
        }
        /* UX: arrastar no carrossel */
        #ai-eir-hero .carousel { cursor: grab; touch-action: pan-x; -webkit-user-select: none; user-select: none; }
        #ai-eir-hero .carousel.grabbing, #ai-eir-hero .carousel:active { cursor: grabbing; }
      `}</style>

      {/* gradiente do rodapé */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0"
        style={{
          height: "45vh",
          background:
            "linear-gradient(to bottom, rgba(17,7,23,0) 0%, rgba(17,4,23,0.35) 35%, rgba(17,4,23,0.65) 65%, #110417 100%)",
        }}
      />

      {/* BLOCO DE TEXTO — Desktop à esquerda; Mobile central */}
      <div className="relative z-20 px-5 text-center mx-auto max-w-[640px] min-[820px]:text-left min-[820px]:px-0 min-[820px]:mx-0 min-[820px]:ml-[6vw]">
        {/* H1 DESKTOP */}
        <h1 className="hidden min-[820px]:block font-serif font-semibold mb-3 text-[48px] lg:text-[56px] leading-[1.15]">
          AI <span className="italic">Entrepreneur</span> in{" "}
          <span className="text-[#ff624d] italic">Residence</span>
        </h1>
        {/* H1 MOBILE (EiR com i minúsculo) — maior */}
        <h1 className="min-[820px]:hidden font-serif font-semibold mb-3 text-[30px] leading-[1.15]">
          AI <span className="italic">EiR</span>
        </h1>

        {/* H2 DESKTOP */}
        <h2 className="hidden min-[820px]:block font-serif text-[32px] lg:text-[40px] leading-tight mb-4">
          <span className="italic">
            Do <span className="text-[#ff624d]">zero ao MVP</span> pronto para fundraising em{" "}
            <span className="text-[#ff624d]">12 semanas</span>
          </span>
        </h2>
        {/* H2 MOBILE — maior */}
        <h2 className="min-[820px]:hidden font-serif text-[26px] leading-tight mb-4">
          <span className="italic">
            Do <span className="text-[#ff624d]">zero ao MVP</span> pronto para fundraising em{" "}
            <span className="text-[#ff624d]">12 semanas</span>
          </span>
        </h2>

        {/* PARÁGRAFO DESKTOP (frase curta) */}
        <p className="hidden min-[820px]:block text-white/90 max-w-[60ch]">
          Crie, valide e lance sua startup de IA
        </p>
        {/* PARÁGRAFO MOBILE — maior */}
        <p className="min-[820px]:hidden text-white/90 text-[16px] leading-relaxed mx-auto max-w-[46ch]">
          Transforme sua ideia em uma <span className="text-[#ff624d] font-semibold italic">startup de IA</span>{" "}
          com apoio <span className="text-[#ff624d] font-semibold italic">direto</span> de quem já criou e investiu em{" "}
          <span className="text-[#ff624d] font-semibold italic">startups de sucesso</span>.
        </p>

        {/* CTA */}
        <div className="mt-6">
          <button
            type="button"
            className="cta inline-flex items-center justify-center gap-2 rounded-md font-semibold h-12 px-5 min-w-[170px] text-[15px] border-2 border-[#ff624d] bg-white text-black transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-105 hover:shadow-md hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff624d]/60 active:translate-y-0 min-[820px]:border min-[820px]:border-gray-400 min-[820px]:bg-transparent min-[820px]:text-white min-[820px]:hover:brightness-110"
          >
            <svg width="26" height="22" viewBox="0 0 26 22" aria-hidden="true" className="-ml-1 text-[#ff624d] min-[820px]:text-gray-400">
              <path d="M2 11h6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
              <path d="M9 11h7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
              <path d="M16 7l6 4-6 4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <span className="min-[820px]:hidden">Apply for AI EIR</span>
            <span className="hidden min-[820px]:inline">Apply AI EIR</span>
          </button>
        </div>

        {/* MOBILE: carrossel com IMAGENS */}
        <div className="mt-8 min-[820px]:hidden">
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
              <div className="h-1 rounded-full bg-white transition-[width] duration-150" style={{ width: `${Math.max(8, progress * 100)}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP: imagens abaixo do conteúdo, centralizadas, com tamanhos melhores em telas menores */}
      <div className="hidden min-[980px]:grid grid-cols-3 items-center justify-items-stretch gap-[3vw] xl:gap-[3.5vw] 2xl:gap-[4vw] px-[4vw] min-[980px]:mt-28 mx-auto max-w-[1400px] z-10">
        <img
          src="/ai-eir/hero/box1.png"
          alt=""
          className="justify-self-start w-[24vw] max-w-[460px] xl:w-[20vw] xl:max-w-[440px] 2xl:w-[18vw] 2xl:max-w-[480px] h-auto object-contain"
          draggable={false}
        />
        <img
          src="/ai-eir/hero/box2.png"
          alt=""
          className="justify-self-center w-[24vw] max-w-[460px] xl:w-[20vw] xl:max-w-[440px] 2xl:w-[18vw] 2xl:max-w-[480px] h-auto object-contain"
          draggable={false}
        />
        <img
          src="/ai-eir/hero/box3.png"
          alt=""
          className="justify-self-end w-[24vw] max-w-[460px] xl:w-[20vw] xl:max-w-[440px] 2xl:w-[18vw] 2xl:max-w-[480px] h-auto object-contain"
          draggable={false}
        />
      </div>

      {/* ESPINHOS */}
      <img
        src="/ai-eir/hero/espinhos.png"
        alt=""
        className="spikes-mobile pointer-events-none select-none absolute right-0 bottom-20 w-auto h-auto block min-[820px]:hidden object-contain object-[right_center] z-0"
        draggable={false}
      />
      <div className="spikes-desktop hidden min-[820px]:block absolute top-1/2 -translate-y-1/2 min-[820px]:right-[-16px] lg:right-[-64px] xl:right-[-96px] 2xl:right-[-128px] z-0">
        <div className="min-[820px]:w-[420px] lg:w-[560px] xl:w-[680px] 2xl:w-[800px] max-h-[70vh] xl:max-h-[62vh] 2xl:max-h-[56vh]">
          <img
            src="/ai-eir/hero/espinhos.png"
            alt=""
            className="pointer-events-none select-none w-full h-full object-contain object-[right_center]"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}

/* Slide de imagem (mobile) */
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
