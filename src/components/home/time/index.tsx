// Time.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function Time() {
  const PHOTOS = [
    "/time/p1.png",
    "/time/p2.png",
    "/time/p5.png",
    "/time/p4.png",
    "/time/p3.png",
  ];
  const NAMES = [
    "Pedro Dias",
    "Márcio Saito",
    "Larissa Bomfim",
    "Leonardo Sales",
    "Paulo Alencastro",
  ];
  const ROLES = [
    "Managing Partner",
    "Venture Partner",
    "Managing Partner",
    "Fellow Partner",
    "Fellow Partner",
  ];

  const HILIGHT = "#FF624D";
  const OVERSCAN_W = 135;
  const OVERSCAN_H = 122;

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

  // drag com inércia (MOBILE)
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
      if (el.scrollLeft <= 0 || el.scrollLeft >= maxScroll) {
        velocity.current = 0;
      }

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
      (el.style as any).scrollSnapType = "none";
      stopMomentum();
      e.preventDefault();
    };

    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      el.scrollLeft =
        startScroll.current - (e.clientX - startX.current) * 2.1;

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

      if (raf.current == null) {
        raf.current = requestAnimationFrame(momentum);
      }
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
  const translatePx =
    progress * Math.max(0, trackW - trackW * thumbRatio);

  return (
    <section
      id="time"
      className="relative text-white pt-16 pb-20 min-[1181px]:pt-24 min-[1181px]:pb-28 bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{
        backgroundImage: "url(/time/fundo.png)",
        backgroundColor: "rgb(13,7,17)",
      }}
    >
      <style jsx global>{`
        /* Esconder apenas a barrinha de scroll, sem desativar o scroll */
        #time .hide-scroll {
          -ms-overflow-style: none; /* IE/Edge */
          scrollbar-width: none; /* Firefox */
        }
        #time .hide-scroll::-webkit-scrollbar {
          width: 0;
          height: 0;
          display: none; /* Chrome / Safari */
        }

        /* alinhar com a Hero no desktop */
        @media (min-width: 1181px) and (max-width: 1439px) {
          #time .wrap {
            margin-left: 26px;
            padding-left: 56px;
            padding-right: 64px;
          }
        }
        @media (min-width: 1440px) {
          #time .wrap {
            margin-left: 40px;
            padding-left: 84px;
            padding-right: 72px;
          }
        }
      `}</style>

      {/* linhas divisórias */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.28), rgba(255,255,255,0))",
          opacity: 0.4,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.28), rgba(255,255,255,0))",
          opacity: 0.4,
        }}
      />

      {/* MOBILE + TABLET */}
      <div className="mx-auto max-w-[1120px] px-5 min-[1181px]:hidden">
        <div className="text-center max-w-[46ch] mx-auto">
          <h2
            className="font-bold text-[28px] leading-tight mb-3"
            style={{ fontFamily: '"Crimson Text", serif' }}
          >
            Nosso{" "}
            <span className="text-[#FF624D] font-bold">Time</span>
          </h2>
          <p
            className="text-white/85 text-[15px] leading-relaxed font-normal"
            style={{
              fontFamily:
                '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Contamos com investidores,{" "}
            <span className="text-[#FF624D] italic font-semibold">
              world-class founders
            </span>{" "}
            e especialistas em nossa equipe para apoiar fundadores em
            todos os seus desafios de construção de uma{" "}
            <span className="text-[#FF624D] italic font-semibold">
              startup de IA
            </span>
            .
          </p>
        </div>

        <div
          ref={railRef}
          className="mt-8 -mx-1.5 px-1.5 flex gap-3 overflow-x-auto snap-x snap-mandatory cursor-grab active:cursor-grabbing hide-scroll"
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
                <h3 className="text-white text-[14px] font-semibold leading-tight">
                  {NAMES[i]}
                </h3>
                <p
                  className="text-[12px] font-medium leading-snug"
                  style={{ color: HILIGHT }}
                >
                  {ROLES[i]}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center">
          <div
            ref={trackRef}
            className="relative h-[6px] w-24 rounded-full bg-white/15 overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 h-full rounded-full bg-white will-change-transform"
              style={{
                width: `${trackW * thumbRatio}px`,
                transform: `translateX(${translatePx}px)`,
                transition:
                  "transform 120ms linear, width 120ms ease",
              }}
            />
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden min-[1181px]:block">
        <div className="wrap mx-auto max-w-[1840px] px-5 min-[1181px]:pr-6 min-[1181px]:pl-10 lg:pl-8 xl:pl-6 2xl:pl-5">
          {/* texto + botão */}
          <div className="max-w-[680px]">
            <h2
              className="font-bold leading-[1.15] mb-4 text-[48px] min-[1181px]:text-[clamp(44px,3.6vw,62px)]"
              style={{ fontFamily: '"Crimson Text", serif' }}
            >
              Nosso{" "}
              <span className="text-[#FF624D] font-bold">Time</span>
            </h2>
            <p
              className="text-white/85 leading-[1.9] text-[20px] min-[1181px]:text-[clamp(21px,1.6vw,28px)] font-normal"
              style={{
                fontFamily:
                  '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Contamos com investidores,{" "}
              <span className="text-[#FF624D] italic font-semibold">
                world-class founders
              </span>{" "}
              e especialistas em nossa equipe para apoiar fundadores em
              todos os seus desafios de construção de uma{" "}
              <span className="text-[#FF624D] italic font-semibold">
                startup de IA
              </span>
              .
            </p>

            <div className="mt-6 min-[1181px]:mt-8">
              <button
                type="button"
                aria-disabled
                className="cta inline-flex items-center justify-center gap-2 rounded-md font-semibold h-12 px-5 min-w-[160px] text-[14px] border-2 border-[#FF624D] bg-white text-black transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-105 hover:shadow-md hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60 active:translate-y-0 min-[820px]:min-w-[260px] min-[820px]:h-[52px] min-[820px]:px-8 min-[820px]:text-[16px] min-[820px]:border min-[820px]:border-gray-400 min-[820px]:bg-transparent min-[820px]:text-white min-[820px]:hover:brightness-110"
              >
                <svg
                  width="26"
                  height="22"
                  viewBox="0 0 26 22"
                  aria-hidden="true"
                  className="-ml-1 text-[#FF624D] min-[820px]:text-gray-400"
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
                Conheça o Time
              </button>
            </div>
          </div>

          {/* GRID DESKTOP (já no layout que você aprovou) */}
          <div className="mt-12">
            <div className="grid grid-cols-5 gap-x-10 gap-y-10">
              {PHOTOS.map((src, i) => (
                <div
                  key={`desk-${src}`}
                  className="relative rounded-2xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                  style={{
                    aspectRatio: "100 / 135",
                    backgroundImage: `url(${src})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: `${OVERSCAN_W}% ${OVERSCAN_H}%`,
                  }}
                >
                  <div className="absolute left-[12px] bottom-[12px]">
                    <h3 className="text-white font-semibold leading-tight">
                      {NAMES[i]}
                    </h3>
                    <p
                      className="font-medium leading-snug"
                      style={{ color: HILIGHT }}
                    >
                      {ROLES[i]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
