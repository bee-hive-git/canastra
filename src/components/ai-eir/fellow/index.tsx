// src/components/ai-eir/fellow/index.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function Fellow() {
  const PHOTOS = [
    "/ai-eir/fellow/1.png",
    "/ai-eir/fellow/2.png",
    "/ai-eir/fellow/3.png",
    "/ai-eir/fellow/4.png",
  ];

  const HILIGHT = "#FF624D";

  const railRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [visibleRatio, setVisibleRatio] = useState(0);
  const [trackW, setTrackW] = useState(0);

  useEffect(() => {
    const rail = railRef.current;
    const track = trackRef.current;
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

  const dragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const lastX = useRef(0);
  const lastT = useRef(0);
  const velocity = useRef(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    const stopMomentum = () => {
      if (raf.current != null) {
        cancelAnimationFrame(raf.current);
        raf.current = null;
      }
    };

    const momentum = () => {
      const friction = 0.92;
      const minVel = 0.06;
      if (Math.abs(velocity.current) < minVel) {
        raf.current = null;
        return;
      }
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
      el.scrollLeft = startScroll.current - (e.clientX - startX.current) * 2;
      const dt = Math.max(1, e.timeStamp - lastT.current);
      velocity.current = (e.clientX - lastX.current) / dt;
      lastX.current = e.clientX;
      lastT.current = e.timeStamp;
      e.preventDefault();
    };

    const onUp = (e: PointerEvent) => {
      if (!dragging.current) return;
      dragging.current = false;
      try {
        el.releasePointerCapture?.(e.pointerId);
      } catch {}
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

  const thumbRatio = Math.max(visibleRatio || 0, 0.18);
  const translatePx = progress * Math.max(0, trackW - trackW * thumbRatio);

  return (
    <section
      id="fellow"
      className="relative overflow-hidden text-white pt-16 pb-24 lg:pt-24 lg:pb-32"
      style={{ backgroundColor: "rgb(17, 4, 23)" }}
    >
      <style jsx global>{`
        #fellow .title {
          font-size: 30px;
          line-height: 1.15;
        }
        #fellow .subtitle {
          font-size: 38px;
          line-height: 1.08;
        }
        #fellow p.lead {
          font-size: 16px;
          line-height: 1.9;
        }

        @media (min-width: 820px) and (max-width: 1279px) {
          #fellow .title {
            font-size: 34px;
          }
          #fellow .subtitle {
            font-size: 48px;
          }
          #fellow p.lead {
            font-size: 18px;
          }
        }
        @media (min-width: 1280px) {
          #fellow .title {
            font-size: 36px;
          }
          #fellow .subtitle {
            font-size: 56px;
          }
          #fellow p.lead {
            font-size: 20px;
          }
        }

        /* ---- esconder scrollbar nativa apenas aqui ---- */
        #fellow .no-scrollbar {
          -ms-overflow-style: none; /* IE/Edge */
          scrollbar-width: none; /* Firefox */
        }
        #fellow .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Edge (WebKit/Blink) */
        }
      `}</style>

      {/* cabeçalho */}
      <div className="mx-auto max-w-[1120px] px-5 text-center">
        <h2 className="font-serif title mb-2">Conheça os</h2>
        <div className="font-serif subtitle italic text-[#FF624D] mb-4">
          Fellow Partners
        </div>
        <p className="lead text-white/85 max-w-[70ch] mx-auto">
          Os residentes possuem acesso a{" "}
          <span style={{ color: HILIGHT }} className="italic font-semibold">
            world-class founders
          </span>
          , que trabalham lado a lado dos empreendedores na construção de{" "}
          <span style={{ color: HILIGHT }} className="italic font-semibold">
            startups de IA
          </span>{" "}
          inesquecíveis.
        </p>
      </div>

      {/* Mobile + Tablet (até 1024px): carrossel */}
      <div className="mx-auto max-w-[1120px] px-5 max-[1024px]:block hidden">
        <div
          ref={railRef}
          className="mt-8 -mx-1.5 px-1.5 flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing justify-start"
          style={{ touchAction: "pan-x" }}
          aria-label="Fellow Partners (carrossel)"
        >
          {PHOTOS.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              className="snap-start shrink-0 rounded-2xl w-[85vw] max-w-[440px] aspect-[100/120] object-cover select-none pointer-events-none"
              draggable={false}
            />
          ))}
        </div>

        {/* barra custom de progresso */}
        <div className="mt-5 flex itemscenter justify-center">
          <div
            ref={trackRef}
            className="relative h-[6px] w-28 rounded-full bg-white/15 overflow-hidden"
          >
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

      {/* Desktop (a partir de 1025px): grid */}
      <div className="hidden min-[1025px]:block">
        <div className="mx-auto max-w-[1240px] px-6 mt-10">
          <div className="grid grid-cols-4 gap-6">
            {PHOTOS.map((src) => (
              <img
                key={`desk-${src}`}
                src={src}
                alt=""
                className="rounded-2xl w-full h-auto aspect-[100/115] object-cover select-none pointer-events-none"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>

      {/* divisória inferior da seção */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.28), rgba(255,255,255,0))",
          opacity: 0.4,
        }}
      />
    </section>
  );
}
