// Hero.tsx
"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const l1Ref = useRef<HTMLSpanElement>(null);
  const l2Ref = useRef<HTMLSpanElement>(null);
  const pRef  = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current, h2 = h2Ref.current, l1 = l1Ref.current, l2 = l2Ref.current;
    if (!wrap || !h2 || !l1 || !l2) return;

    const PAD = 10;
    let MIN = 18;
    let MAX = 40;
    const w = window.innerWidth;
    const h = window.innerHeight;

    if (w >= 820) MAX = 24;
    if (w <= 330 || h <= 600) { MAX = 20; MIN = 16; }

    h2.style.whiteSpace = "normal";
    l1.style.whiteSpace = "nowrap";
    l2.style.whiteSpace = "nowrap";

    const fit = () => {
      const maxW = wrap.clientWidth - PAD;
      let size = MIN;
      h2.style.fontSize = `${size}px`;
      while (size < MAX) {
        h2.style.fontSize = `${size + 1}px`;
        if (l1.scrollWidth > maxW || l2.scrollWidth > maxW) break;
        size += 1;
      }
      h2.style.fontSize = `${size}px`;
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  useLayoutEffect(() => {
    const wrap = wrapRef.current, p = pRef.current;
    if (!wrap || !p) return;
    const MIN = 12, MAX = 16, PAD = 10;
    p.style.whiteSpace = "nowrap";
    const fit = () => {
      const maxW = wrap.clientWidth - PAD;
      let size = MIN;
      p.style.fontSize = `${size}px`;
      while (size < MAX) {
        p.style.fontSize = `${size + 1}px`;
        if (p.scrollWidth > maxW) break;
        size += 1;
      }
      p.style.fontSize = `${size}px`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    (document as any).fonts?.ready?.then(() => {
      window.dispatchEvent(new Event("resize"));
    });
  }, []);

  return (
    <section
      id="home"
      className="relative text-white pt-16 min-h-[100dvh] bg-[url('/hero/fundo-mobile.png')] bg-cover bg-bottom bg-no-repeat min-[820px]:pt-24 min-[820px]:bg-[url('/hero/fundo.png')]"
      style={{ backgroundColor: "rgb(18, 6, 23)" }}
    >
      <style jsx global>{`
        @media (max-height: 700px) { #home { min-height: 118dvh; } }
        @media (max-height: 620px) { #home { min-height: 126dvh; } }
        @media (max-height: 560px) { #home { min-height: 134dvh; } }
        @media (min-width: 1181px) and (max-width: 1439px) { #home .wrap { margin-left: 26px; } }
        @media (min-width: 1440px) { #home .wrap { margin-left: 40px; } }
      `}</style>

      <div className="absolute inset-0 bg-[#0B0810]/70 pointer-events-none" />

      <div
        ref={wrapRef}
        className="wrap relative z-10 mx-auto max-w-[560px] px-5 py-8 text-center flex flex-col items-center min-[820px]:absolute min-[820px]:inset-x-0 min-[820px]:top-1/2 min-[820px]:-translate-y-1/2 min-[820px]:mx-0 min-[820px]:text-left min-[820px]:items-start min-[820px]:max-w-[1024px] min-[820px]:pr-6 min-[820px]:pl-10 lg:pl-8 xl:pl-6 2xl:pl-5"
      >
        <img src="/hero/logo.png" alt="Logo Canastra" className="h-9 w-auto mb-6 min-[820px]:hidden" />

        <h1 className="hidden min-[820px]:block font-serif text-[40px] leading-tight mb-3 ml-2">Canastra Ventures</h1>

        <h2 ref={h2Ref} className="font-serif leading-tight min-[820px]:max-w-[500px]">
          <span ref={l1Ref} className="block">
            Guiamos os <span className="text-[#FF624D] italic font-semibold">ousados</span> na trilha da
          </span>
          <span ref={l2Ref} className="block">
            construção de <span className="text-[#FF624D] italic font-semibold">startups inesquecíveis</span>
          </span>
        </h2>

        <p ref={pRef} className="mt-3 text-white/85 min-[820px]:max-w-[440px]">VC pre-seed especialista em IA</p>

        <div className="mt-7 flex items-center justify-center gap-2 min-[820px]:justify-start">
          <a
            href="#ai-eir"
            className="inline-flex items-center justify-center gap-2 rounded-md font-semibold h-12 px-5 min-w-[160px] text-[14px] border-2 border-[#FF624D] bg-white text-black min-[820px]:border min-[820px]:border-gray-400 min-[820px]:bg-transparent min-[820px]:text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-105 hover:shadow-md hover:shadow-black/20 min-[820px]:hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60 active:translate-y-0 max-[330px]:min-w-[108px] max-[330px]:px-3"
          >
            <svg width="26" height="22" viewBox="0 0 26 22" aria-hidden="true" className="-ml-1 text-[#FF624D] min-[820px]:text-gray-400">
              <path d="M2 11h6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
              <path d="M9 11h7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
              <path d="M16 7l6 4-6 4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            Join AI EIR!
          </a>

          <a
            href="#pitch"
            className="inline-flex items-center justify-center gap-2 rounded-md font-semibold h-12 px-5 min-w-[160px] text-[14px] border-2 border-[#FF624D] bg-black text-white min-[820px]:border min-[820px]:border-gray-400 min-[820px]:bg-transparent transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-110 hover:shadow-md hover:shadow-black/40 min-[820px]:hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60 active:translate-y-0 max-[330px]:min-w-[108px] max-[330px]:px-3"
          >
            <svg width="26" height="22" viewBox="0 0 26 22" aria-hidden="true" className="-ml-1 text-[#FF624D] min-[820px]:text-gray-400">
              <path d="M2 11h6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
              <path d="M9 11h7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
              <path d="M16 7l6 4-6 4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            Pitch Us!
          </a>
        </div>
      </div>
    </section>
  );
}
