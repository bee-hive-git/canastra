// Time.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function Time() {
  const PHOTOS = ["/time/p1.png", "/time/p2.png", "/time/p5.png", "/time/p4.png", "/time/p3.png"];
  const NAMES  = ["Pedro Dias", "Márcio Saito", "Larissa Bomfim", "Leonardo Sales", "Paulo Alencastro"];
  const ROLES  = ["Managing Partner", "Venture Partner", "Managing Partner", "Fellow Partner", "Fellow Partner"];

  const HILIGHT = "#FF624D";
  const OVERSCAN_W = 135;
  const OVERSCAN_H = 122;

  // refs
  const railRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [visibleRatio, setVisibleRatio] = useState(0);
  const [trackW, setTrackW] = useState(0);

  // medição do carrossel
  useEffect(() => {
    const rail = railRef.current, track = trackRef.current;
    if (!rail) return;
    const measure = () => {
      const max = Math.max(1, rail.scrollWidth - rail.clientWidth);
      setProgress(Math.min(1, Math.max(0, rail.scrollLeft / max)));
      setVisibleRatio(rail.clientWidth / Math.max(rail.scrollWidth, 1));
      setTrackW(track?.clientWidth ?? 0);
    };
    measure();
    rail.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    ro.observe(rail);
    if (track) ro.observe(track);
    return () => {
      rail.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  // arraste com inércia
  const dragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const lastX = useRef(0);
  const lastT = useRef(0);
  const velocity = useRef(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const el = railRef.current; if (!el) return;
    const stopMomentum = () => { if (raf.current != null) { cancelAnimationFrame(raf.current); raf.current = null; } };
    const momentum = () => {
      const friction = 0.92, minVel = 0.06;
      if (Math.abs(velocity.current) < minVel) { raf.current = null; return; }
      el.scrollLeft -= velocity.current * 16;
      velocity.current *= friction;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft <= 0 || el.scrollLeft >= maxScroll) velocity.current = 0;
      raf.current = requestAnimationFrame(momentum);
    };
    const onDown = (e: PointerEvent) => {
      dragging.current = true;
      el.setPointerCapture?.(e.pointerId);
      startX.current = e.clientX;
      startScroll.current = el.scrollLeft;
      lastX.current = e.clientX;
      lastT.current = e.timeStamp;
      velocity.current = 0;
      stopMomentum();
      (el.style as any).scrollSnapType = "none";
      e.preventDefault();
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      el.scrollLeft = startScroll.current - (e.clientX - startX.current) * 2.1;
      const dt = Math.max(1, e.timeStamp - lastT.current);
      velocity.current = (e.clientX - lastX.current) / dt;
      lastX.current = e.clientX;
      lastT.current = e.timeStamp;
      e.preventDefault();
    };
    const onUp = (e: PointerEvent) => {
      if (!dragging.current) return;
      dragging.current = false;
      try { el.releasePointerCapture?.(e.pointerId); } catch {}
      (el.style as any).scrollSnapType = "x mandatory";
      if (raf.current == null) raf.current = requestAnimationFrame(momentum);
    };
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      stopMomentum();
    };
  }, []);

  const thumbRatio = Math.max(visibleRatio || 0, 0.15);
  const translatePx = progress * Math.max(0, (trackW - trackW * thumbRatio));

  return (
    <section
      id="time"
      className="relative text-white pt-16 pb-24 min-[1181px]:pt-24 min-[1181px]:pb-32 bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{ backgroundImage: "url(/time/fundo.png)", backgroundColor: "rgb(13,7,17)" }}
    >
      {/* ---------- MOBILE + TABLET até 1180px ---------- */}
      <div className="mx-auto max-w-[1120px] px-5 min-[1181px]:hidden">
        <div className="text-center max-w-[46ch] mx-auto">
          <h2 className="font-serif text-[28px] leading-tight mb-3">
            Nosso <span className="italic text-[#FF624D]">Time</span>
          </h2>
          <p className="text-white/85 text-[14px] leading-relaxed">
            Contamos com investidores,{" "}
            <span className="text-[#FF624D] italic font-semibold">world-class founders</span> e especialistas em nossa equipe para apoiar fundadores em todos os seus desafios de construção de uma{" "}
            <span className="text-[#FF624D] italic font-semibold">startup de IA</span>.
          </p>
        </div>

        {/* carrossel */}
        <div
          ref={railRef}
          className="mt-8 no-scrollbar -mx-1.5 px-1.5 flex gap-3 overflow-x-auto snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ touchAction: "pan-x" }}
          aria-label="Time (carrossel)"
        >
          {PHOTOS.map((src, i) => (
            <div
              key={src}
              className="snap-start flex-none basis-[calc(45%-0.375rem)] sm:basis-[calc(40%-0.375rem)] md:basis-[calc(35%-0.375rem)] relative rounded-2xl overflow-hidden"
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
                  {ROLES[i]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* scrollbar */}
        <div className="mt-4 flex items-center justify-center">
          <div ref={trackRef} className="relative h-[6px] w-24 rounded-full bg-white/15 overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full rounded-full bg-white will-change-transform"
              style={{
                width: `${trackW * thumbRatio}px`,
                transform: `translateX(${translatePx}px)`,
                transition: "transform 120ms linear, width 120ms ease",
              }}
            />
          </div>
        </div>
      </div>

      {/* ---------- DESKTOP ≥1181px ---------- */}
      <div className="hidden min-[1181px]:block">
        <div className="wrap mx-auto max-w-[1100px] px-8">
          <div className="max-w-[620px]">
            <h2 className="font-serif leading-[1.15] mb-4 text-[48px]">
              Nosso <span className="italic text-[#FF624D]">Time</span>
            </h2>
            <p className="text-white/85 leading-[1.9] text-[20px]">
              Contamos com investidores, <span className="text-[#FF624D] italic font-semibold">world-class founders</span> e especialistas em nossa equipe para apoiar fundadores em todos os seus desafios de construção de uma{" "}
              <span className="text-[#FF624D] italic font-semibold">startup de IA</span>.
            </p>
          </div>
        </div>

        <div className="grid-outer w-full mx-auto mt-10 px-10">
          <div className="team-grid grid grid-cols-5 gap-8">
            {PHOTOS.map((src, i) => (
              <div
                key={`desk-${src}`}
                className="team-card relative rounded-2xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                style={{
                  aspectRatio: "100 / 135",
                  backgroundImage: `url(${src})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: `${OVERSCAN_W}% ${OVERSCAN_H}%`,
                }}
              >
                <div className="absolute left-[12px] bottom-[12px]">
                  <h3 className="text-white font-semibold leading-tight">{NAMES[i]}</h3>
                  <p className="font-medium leading-snug" style={{ color: HILIGHT }}>
                    {ROLES[i]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
