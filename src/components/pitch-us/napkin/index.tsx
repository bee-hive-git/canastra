// src/components/pitch-us/napkin/index.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function Napkin() {
  const ACCENT = "#FF624D";
  const BG = "rgb(17, 4, 23)";
  const DESK_IMG = "/pitch-us/napkin/div.png";

  const railRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [trackW, setTrackW] = useState(160);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      const p = max > 0 ? el.scrollLeft / max : 0;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    let lastX = 0;
    let lastT = 0;
    let vel = 0;
    let raf: number | null = null;

    const stop = () => {
      if (raf != null) {
        cancelAnimationFrame(raf);
        raf = null;
      }
    };

    const momentum = () => {
      const friction = 0.92;
      const minVel = 0.06;
      if (Math.abs(vel) < minVel) {
        raf = null;
        return;
      }
      el.scrollLeft -= vel * 16;
      vel *= friction;
      const max = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft <= 0 || el.scrollLeft >= max) vel = 0;
      raf = requestAnimationFrame(momentum);
    };

    const onDown = (e: PointerEvent) => {
      isDown = true;
      el.setPointerCapture?.(e.pointerId);
      startX = e.clientX;
      startScroll = el.scrollLeft;
      lastX = e.clientX;
      lastT = e.timeStamp;
      vel = 0;
      el.classList.add("grabbing");
      stop();
      e.preventDefault();
    };

    const onMove = (e: PointerEvent) => {
      if (!isDown) return;
      el.scrollLeft = startScroll - (e.clientX - startX) * 2.1;
      const dt = Math.max(1, e.timeStamp - lastT);
      vel = (e.clientX - lastX) / dt;
      lastX = e.clientX;
      lastT = e.timeStamp;
      e.preventDefault();
    };

    const end = (e: PointerEvent) => {
      if (!isDown) return;
      isDown = false;
      try {
        el.releasePointerCapture?.(e.pointerId);
      } catch {}
      el.classList.remove("grabbing");
      if (raf == null) raf = requestAnimationFrame(momentum);
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", end);
    el.addEventListener("pointercancel", end);
    el.addEventListener("pointerleave", end);

    return () => {
      stop();
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", end);
      el.removeEventListener("pointercancel", end);
      el.removeEventListener("pointerleave", end);
    };
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => setTrackW(el.clientWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section
      id="napkin"
      className="text-white overflow-hidden py-14 min-[820px]:py-20"
      style={{ backgroundColor: BG }}
    >
      <style jsx global>{`
        /* Aumentos apenas no desktop "real" + respiro inferior reduzido */
        @media (min-width: 1181px) and (max-width: 1439px) {
          #napkin .desk-head h1 .t1 {
            font-size: clamp(40px, 3vw, 55px);
          }
          #napkin .desk-head h1 .t2 {
            font-size: clamp(60px, 4.2vw, 100px);
          }
          #napkin .desk-head p {
            font-size: clamp(20px, 2vw, 34.62px);
            line-height: 1.3;
          }
          #napkin {
            padding-bottom: clamp(100px, 12vh, 200px);
          }
        }
        @media (min-width: 1440px) {
          #napkin .desk-head h1 .t1 {
            font-size: clamp(44px, 3.1vw, 55px);
          }
          #napkin .desk-head h1 .t2 {
            font-size: clamp(64px, 4.4vw, 100px);
          }
          #napkin .desk-head p {
            font-size: clamp(22px, 2.1vw, 34.62px);
            line-height: 1.3;
          }
          #napkin {
            padding-bottom: clamp(120px, 14vh, 240px);
          }
        }

        /* mobile rail */
        #napkin .rail {
          touch-action: pan-x;
          -webkit-user-select: none;
          user-select: none;
          cursor: grab;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior-x: contain;
        }
        #napkin .rail.grabbing {
          cursor: grabbing;
        }
        #napkin .hide-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        #napkin .hide-scroll::-webkit-scrollbar {
          width: 0;
          height: 0;
          display: none;
        }
      `}</style>

      {/* DESKTOP HEADER */}
      <div className="hidden min-[820px]:block">
        <div className="desk-head max-w-[1120px] mx-auto px-5 text-center">
          <h1
            className="font-serif leading-tight"
            style={{
              fontFamily: '"Crimson Text", serif',
              fontWeight: 700,
            }}
          >
            <span
              className="t1 block text-[32px] xl:text-[40px]"
              style={{
                fontStyle: "normal",
                lineHeight: "0.75",
              }}
            >
              Conheça o nosso
            </span>
            <span
              className="t2 block italic font-semibold text-[40px] xl:text-[52px]"
              style={{
                color: ACCENT,
                fontWeight: 700,
                fontStyle: "italic",
                lineHeight: "1.3",
              }}
            >
              Napkin
            </span>
          </h1>

          <p
            className="mt-3 text-white/90 leading-relaxed text-[16px] xl:text-[18px] max-w-[900px] mx-auto"
            style={{
              fontFamily:
                '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400,
              lineHeight: 1.3,
            }}
          >
            Dê uma olhada no nosso Napkin, onde descrevemos o que buscamos em{" "}
            <span className="italic font-semibold" style={{ color: ACCENT }}>
              startups AI-First
            </span>
            . Nele, você encontrará os{" "}
            <span className="italic font-semibold" style={{ color: ACCENT }}>
              critérios
            </span>{" "}
            que consideramos para investimentos pre-seed, comparados aos que buscamos nas startups que
            se inscrevem no nosso programa de residência (
            <a href="/ai-eir" className="underline decoration-white/30 hover:text-white">
              AI EiR
            </a>
            ).
          </p>
        </div>
      </div>

      {/* MOBILE HEADER */}
      <div className="min-[820px]:hidden px-5 text-center">
        <h1
          className="font-serif italic font-semibold text-[40px] leading-tight"
          style={{ color: ACCENT }}
        >
          Napkin
        </h1>

        <h2 className="font-serif text-[24px] leading-snug mt-2">
          Dê uma olhada no nosso{" "}
          <span className="italic font-semibold" style={{ color: ACCENT }}>
            Napkin
          </span>
          , onde descrevemos o que buscamos em{" "}
          <span className="italic font-semibold" style={{ color: ACCENT }}>
            startups AI-First.
          </span>
        </h2>

        <p className="mt-3 text-white/90 text-[16px] leading-relaxed">
          Nele, você encontrará os critérios que consideramos para investimentos pre-seed, comparados
          aos que buscamos nas startups que se inscrevem no nosso programa de residência (
          <a href="/ai-eir" className="underline decoration-white/30 hover:text-white">
            AI EiR
          </a>
          ).
        </p>
      </div>

      {/* DESKTOP IMG + DISCLAIMER */}
      <div className="hidden min-[820px]:block mt-10">
        <div className="max-w-[1120px] mx-auto px-5">
          <div
            className="mx-auto rounded-2xl"
            style={{
              width: "100%",
              height: "clamp(500px, 58vw, 640px)",
              backgroundImage: `url(${DESK_IMG})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
            }}
          />
          <p
            className="mt-2 rounded-xl px-4 py-3 text-[13px] leading-relaxed text-white/85"
            style={{
              width: "100%",
              border: `1px solid ${ACCENT}`,
              backgroundColor: "rgba(255,255,255,0.04)",
            }}
          >
            Disclaimer: O Napkin se encaixa perfeitamente na nossa tese, mas seguimos abertos a avaliar
            oportunidades fora do nosso sweet spot, com base em uma análise criteriosa e individual de
            cada caso.
          </p>
        </div>
      </div>

      {/* MOBILE IMG (mesmo tamanho do desktop) + DISCLAIMER */}
      <div className="min-[820px]:hidden mt-8 px-5">
        <div
          ref={railRef}
          className="rail relative overflow-x-auto hide-scroll"
          style={{ touchAction: "pan-x" }}
        >
          <div
            className="rounded-2xl"
            style={{
              width: "1120px",
              height: "640px",
              backgroundImage: `url(${DESK_IMG})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
            }}
          />
        </div>

        <div
          ref={trackRef}
          className="relative mt-3 mx-auto w-40 h-[6px] rounded-full bg-white/18 overflow-hidden"
        >
          <div
            className="absolute top-0 left-0 h-[6px] rounded-full bg-white/70"
            style={{
              width: `${trackW * 0.33}px`,
              transform: `translateX(${
                progress * (trackW - trackW * 0.33)
              }px)`,
            }}
          />
        </div>

        <p
          className="mt-6 rounded-xl px-4 py-3 text-[13px] leading-relaxed text-white/85"
          style={{
            border: `1px solid ${ACCENT}`,
            backgroundColor: "rgba(255,255,255,0.04)",
          }}
        >
          <span className="italic font-semibold" style={{ color: ACCENT }}>
            Disclaimer:
          </span>{" "}
          O <span className="italic font-semibold" style={{ color: ACCENT }}>Napkin</span> se encaixa
          perfeitamente na nossa tese, mas seguimos abertos a avaliar oportunidades fora do nosso{" "}
          <span className="italic font-semibold" style={{ color: ACCENT }}>
            sweet spot
          </span>
          , com base em uma análise criteriosa e individual de cada caso.
        </p>
      </div>

      {/* Espaçador extra só no desktop para "mais fundo vazio" (reduzido) */}
      <div
        aria-hidden
        className="hidden min-[1181px]:block"
        style={{ height: "clamp(80px, 10vh, 180px)" }}
      />
    </section>
  );
}
