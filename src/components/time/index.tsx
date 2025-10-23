// Time.tsx
"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Time() {
  const PHOTOS = ["/time/p1.png", "/time/p2.png", "/time/p3.png", "/time/p4.png", "/time/p5.png"];
  const NAMES = ["Pedro Dias", "Márcio Saito", "Paulo Alencastro", "Leonardo Sales", "Larissa Bomfim"];
  const ROLES_BASE = ["Managing Partner", "Former Tech Sr Director", "Co-Founder da Unico", "Co-Founder da", "Managing Partner"];
  const HILIGHT = "#FF624D"; const OVERSCAN_W = 135; const OVERSCAN_H = 122;

  const railRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [visibleRatio, setVisibleRatio] = useState(0);
  const [trackW, setTrackW] = useState(0);

  useEffect(() => {
    const rail = railRef.current; const track = trackRef.current; if (!rail) return;
    const measure = () => {
      const max = Math.max(1, rail.scrollWidth - rail.clientWidth);
      setProgress(Math.min(1, Math.max(0, rail.scrollLeft / max)));
      setVisibleRatio(rail.clientWidth / Math.max(rail.scrollWidth, 1));
      setTrackW(track?.clientWidth ?? 0);
    };
    measure();
    rail.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure); ro.observe(rail); if (track) ro.observe(track);
    return () => { rail.removeEventListener("scroll", measure); window.removeEventListener("resize", measure); ro.disconnect(); };
  }, []);

  const dragging = useRef(false); const startX = useRef(0); const startScroll = useRef(0);
  const lastX = useRef(0); const lastT = useRef(0); const velocity = useRef(0); const raf = useRef<number | null>(null);

  useEffect(() => {
    const el = railRef.current; if (!el) return;
    const stopMomentum = () => { if (raf.current != null) { cancelAnimationFrame(raf.current); raf.current = null; } };
    const momentum = () => {
      const friction = 0.92; const minVel = 0.06;
      if (Math.abs(velocity.current) < minVel) { raf.current = null; return; }
      el.scrollLeft -= velocity.current * 16; velocity.current *= friction;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft <= 0 || el.scrollLeft >= maxScroll) velocity.current = 0;
      raf.current = requestAnimationFrame(momentum);
    };
    const onDown = (e: PointerEvent) => {
      dragging.current = true; el.setPointerCapture?.(e.pointerId);
      startX.current = e.clientX; startScroll.current = el.scrollLeft;
      lastX.current = e.clientX; lastT.current = e.timeStamp; velocity.current = 0;
      stopMomentum(); (el.style as any).scrollSnapType = "none"; e.preventDefault();
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      const dx = e.clientX - startX.current; const speed = 2.1;
      el.scrollLeft = startScroll.current - dx * speed;
      const dt = Math.max(1, e.timeStamp - lastT.current);
      const dxStep = e.clientX - lastX.current;
      velocity.current = dxStep / dt; lastX.current = e.clientX; lastT.current = e.timeStamp; e.preventDefault();
    };
    const onUp = (e: PointerEvent) => {
      if (!dragging.current) return;
      dragging.current = false; try { el.releasePointerCapture?.(e.pointerId); } catch {}
      (el.style as any).scrollSnapType = "x mandatory";
      if (raf.current == null) raf.current = requestAnimationFrame(momentum);
    };
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => { el.removeEventListener("pointerdown", onDown); el.removeEventListener("pointermove", onMove); window.removeEventListener("pointerup", onUp); stopMomentum(); };
  }, []);

  const thumbRatio = Math.max(visibleRatio || 0, 0.15);
  const thumbW = trackW * thumbRatio;
  const translatePx = progress * Math.max(0, trackW - thumbW);

  const containerRef = useRef<HTMLDivElement>(null);
  const desktopRowRef = useRef<HTMLDivElement>(null);
  const desktopHeaderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const apply = () => {
      const row = desktopRowRef.current; const head = desktopHeaderRef.current; const cont = containerRef.current;
      if (!row || !head || !cont) return;
      if (window.innerWidth < 820) { head.style.marginLeft = "0px"; return; }
      const contRect = cont.getBoundingClientRect();
      const rowRect = row.getBoundingClientRect();
      const offsetLeft = Math.max(0, Math.round(rowRect.left - contRect.left));
      const w = window.innerWidth; let nudge = 0;
      if (w >= 820 && w <= 1023) nudge = 10;
      else if (w <= 1365) nudge = -6;
      else if (w <= 1919) nudge = -8;
      else nudge = -12;
      head.style.marginLeft = `${offsetLeft + nudge}px`;
    };
    apply();
    const ro = new ResizeObserver(apply);
    if (containerRef.current) ro.observe(containerRef.current);
    if (desktopRowRef.current) ro.observe(desktopRowRef.current);
    window.addEventListener("resize", apply);
    window.addEventListener("orientationchange", apply);
    return () => { ro.disconnect(); window.removeEventListener("resize", apply); window.removeEventListener("orientationchange", apply); };
  }, []);

  return (
    <section
      id="time"
      className="relative text-white pt-16 pb-24 min-[820px]:pt-20 min-[820px]:pb-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/time/fundo.png)", backgroundColor: "rgb(13,7,17)" }}
    >
      <style jsx global>{`
        @media (max-height: 700px) { #time { padding-top: 18dvh; padding-bottom: 22dvh; } }
        @media (max-height: 620px) { #time { padding-top: 20dvh; padding-bottom: 24dvh; } }

        /* ≥1440: aumenta AINDA MAIS o conteúdo e a altura da seção */
        @media (min-width: 1440px) {
          #time { padding-top: 30dvh; padding-bottom: 38dvh; }
          #time .desk-head { max-width: 720px; }
          #time .desk-head h2 { font-size: 60px; line-height: 1.14; }
          #time .desk-head p  { font-size: 22px; line-height: 1.9; }
          #time .desk-cta     { height: 4.2rem; min-width: 260px; font-size: 19px; }
          #time .desk-card    { width: clamp(200px, 21vw, 300px) !important; }
        }
      `}</style>

      {/* mobile */}
      <div className="mx-auto max-w-[1120px] px-5 min-[820px]:hidden">
        <div className="text-center max-w-[46ch] mx-auto">
          <h2 className="font-serif text-[28px] leading-tight mb-3">
            Nosso <span className="italic text-[#FF624D]">Time</span>
          </h2>
          <p className="text-white/85 text-[14px] leading-relaxed">
            Contamos com investidores, <span className="text-[#FF624D] italic font-semibold">world-class founders</span> e especialistas em nossa equipe para apoiar fundadores em todos os seus desafios de construção de uma <span className="text-[#FF624D] italic font-semibold">startup de IA</span>.
          </p>
          <div className="mt-6">
            <a
              href="#time"
              className="inline-flex items-center justify-center gap-2 rounded-md font-semibold h-12 px-5 min-w-[160px] text-[14px] border-2 border-[#FF624D] bg-black text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-110 hover:shadow-md hover:shadow-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60 active:translate-y-0 max-[330px]:min-w-[108px] max-[330px]:px-3"
            >
              <svg width="26" height="22" viewBox="0 0 26 22" aria-hidden="true" className="-ml-1 text-[#FF624D]">
                <path d="M2 11h6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
                <path d="M9 11h7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
                <path d="M16 7l6 4-6 4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <span>Conhecer Time</span>
            </a>
          </div>
        </div>

        <div
          ref={railRef}
          className="mt-8 no-scrollbar -mx-1.5 px-1.5 flex gap-3 overflow-x-auto snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ touchAction: "pan-x" }}
          aria-label="Time (carrossel)"
        >
          {PHOTOS.map((src, i) => (
            <div
              key={src}
              className="snap-start flex-none basis-[calc(49%-0.375rem)] relative rounded-2xl overflow-hidden"
              style={{
                aspectRatio: "1 / 1.35",
                backgroundImage: `url(${src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: `${OVERSCAN_W}% ${OVERSCAN_H}%`,
              }}
            >
              <div className="absolute left-[10px] bottom-[10px]">
                <h3 className="text-white text-[14px] font-semibold leading-tight">{NAMES[i]}</h3>
                <p className="text-[12px] font-medium leading-snug" style={{ color: HILIGHT }}>
                  {i === 1 ? (
                    <>
                      Former Tech Sr Director<br />Google
                    </>
                  ) : i === 3 ? (
                    <>
                      Co-Founder da<br />Movile
                    </>
                  ) : (
                    ROLES_BASE[i]
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center">
          <div ref={trackRef} className="relative h-[6px] w-24 rounded-full bg-white/15 overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full rounded-full bg-white will-change-transform"
              style={{ width: `${trackW ? trackW * thumbRatio : 0}px`, transform: `translateX(${translatePx}px)`, transition: "transform 120ms linear, width 120ms ease" }}
            />
          </div>
        </div>
      </div>

      {/* desktop */}
      <div ref={containerRef} className="hidden min-[820px]:block mx-auto max-w-[1120px] px-5">
        <div ref={desktopHeaderRef} className="desk-head text-left max-w-[540px]">
          <h2 className="font-serif text-[28px] leading-tight mb-3">
            Nosso <span className="italic text-[#FF624D]">Time</span>
          </h2>
          <p className="text-white/85 text-[14px] leading-relaxed">
            Contamos com investidores, <span className="text-[#FF624D] italic font-semibold">world-class founders</span> e especialistas em nossa equipe para apoiar fundadores em todos os seus desafios de construção de uma <span className="text-[#FF624D] italic font-semibold">startup de IA</span>.
          </p>
          <div className="mt-6">
            <a
              href="#time"
              className="desk-cta inline-flex items-center justify-center gap-2 rounded-md font-semibold h-11 px-6 min-w-[200px] text-[14px] border border-gray-400 text-white bg-transparent transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-110 hover:shadow-md hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/40 active:translate-y-0"
            >
              <svg width="26" height="22" viewBox="0 0 26 22" aria-hidden="true" className="-ml-1 text-gray-400">
                <path d="M2 11h6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
                <path d="M9 11h7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
                <path d="M16 7l6 4-6 4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <span className="tracking-[0.01em]">Conhecer Time</span>
            </a>
          </div>
        </div>

        <div ref={desktopRowRef} className="mt-10 flex justify-center gap-4">
          {PHOTOS.map((src, i) => (
            <div
              key={`desk-${src}`}
              className="desk-card relative rounded-2xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
              style={{
                width: "clamp(130px, 16.6vw, 200px)",
                aspectRatio: "1 / 1.35",
                backgroundImage: `url(${src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: `${OVERSCAN_W}% ${OVERSCAN_H}%`,
              }}
            >
              <div className="absolute left-[10px] bottom-[10px]">
                <h3 className="text-white text-[14px] font-semibold leading-tight">{NAMES[i]}</h3>
                <p className="text-[12px] font-medium leading-snug" style={{ color: HILIGHT }}>
                  {i === 1 ? (
                    <>
                      Former Tech Sr Director<br />Google
                    </>
                  ) : i === 3 ? (
                    <>
                      Co-Founder da<br />Movile
                    </>
                  ) : (
                    ROLES_BASE[i]
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
