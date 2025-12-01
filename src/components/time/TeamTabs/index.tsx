"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type TabKey = "team" | "venture-partners" | "fellow-partners" | "advisors" | "mentors";

export default function TeamTabs() {
  // cores
  const PAGE_BG = "rgb(17, 4, 23)";
  const COLOR_BG = "#191919";
  const COLOR_ACCENT = "#F05941";

  // faixa/abas
  const BTN_H = 56;
  const STRIP_EXTRA_TOP = 7;
  const STRIP_EXTRA_BOTTOM = 7;
  const STRIP_H = BTN_H + STRIP_EXTRA_TOP + STRIP_EXTRA_BOTTOM;

  // setas
  const ARROW_SIZE = 32;
  const ARROW_INSET_BASE = 24;
  const ARROW_EXTRA_SHIFT = 12; // “puxa” para dentro
  const ARROW_LEFT_X = ARROW_INSET_BASE + ARROW_EXTRA_SHIFT;
  const ARROW_RIGHT_X = ARROW_INSET_BASE + ARROW_EXTRA_SHIFT;
  const RAIL_SIDE_PADDING =
    ARROW_INSET_BASE + ARROW_EXTRA_SHIFT + ARROW_SIZE + 8;

  // viewport
  const [vw, setVw] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1440
  );
  useEffect(() => {
    const onR = () => setVw(window.innerWidth);
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, []);

  // largura dos botões das abas (overflow garantido)
  const BTN_W = useMemo(() => {
    if (vw >= 1440) return 440;
    if (vw >= 1181) return 400;
    if (vw >= 820) return 320;
    return 240;
  }, [vw]);

  // FIGMA base
  const FIGMA_W = 360.35;
  const FIGMA_H = 520.4;
  const AR = FIGMA_H / FIGMA_W;

  // mobile/tablet cards (carrossel)
  const CARD = useMemo(() => {
    if (vw >= 1181) return { w: FIGMA_W, h: FIGMA_H }; // desktop não usa esse caminho
    if (vw >= 820) return { w: FIGMA_W * 0.86, h: FIGMA_H * 0.86 }; // tablet
    return { w: FIGMA_W * 0.72, h: FIGMA_H * 0.72 }; // mobile
  }, [vw]);

  // tabs
  const TABS: { key: TabKey; label: string; count: number }[] = [
    { key: "team", label: "Team", count: 4 },
    { key: "venture-partners", label: "Venture Partners", count: 3 },
    { key: "fellow-partners", label: "Fellow Partners", count: 4 },
    { key: "advisors", label: "Advisors", count: 1 },
    { key: "mentors", label: "Mentors", count: 17 },
  ];

  const [active, setActive] = useState<TabKey>("team");
  const photos = useMemo(
    () =>
      Array.from(
        { length: TABS.find((t) => t.key === active)!.count },
        (_, i) => `/time/${active}/${i + 1}.png`
      ),
    [active]
  );

  // barra de abas
  const railTabsRef = useRef<HTMLDivElement>(null);
  const recalcArrows = () => {
    const el = railTabsRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth - 1;
    setCanLeft(el.scrollLeft > 0);
    setCanRight(el.scrollLeft < max);
  };
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const scrollTabsBy = (delta: number) =>
    railTabsRef.current?.scrollBy({ left: delta, behavior: "smooth" });

  useEffect(() => {
    const el = railTabsRef.current;
    if (!el) return;
    recalcArrows();
    const onScroll = () => recalcArrows();
    const onResize = () => recalcArrows();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // centraliza a etiqueta ativa
    const idx = TABS.findIndex((t) => t.key === active);
    if (idx >= 0) {
      const targetX = idx * (BTN_W + 1) - el.clientWidth / 2 + BTN_W / 2;
      el.scrollTo({ left: Math.max(0, targetX), behavior: "smooth" });
    }
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [active, BTN_W]);

  // carrossel mobile
  const railRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [visibleRatio, setVisibleRatio] = useState(0);
  const [trackW, setTrackW] = useState(0);

  useEffect(() => {
    const rail = railRef.current,
      track = trackRef.current;
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
  }, [active]);

  // drag/inércia mobile
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
    const stop = () => {
      if (raf.current != null) {
        cancelAnimationFrame(raf.current);
        raf.current = null;
      }
    };
    const momentum = () => {
      const friction = 0.92,
        minVel = 0.06;
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
      stop();
      (el.style as any).scrollSnapType = "none";
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
    const onUp = () => {
      if (!dragging.current) return;
      dragging.current = false;
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
      stop();
    };
  }, [active]);

  const thumbRatio = Math.max(visibleRatio || 0, 0.15);
  const translatePx = progress * Math.max(0, trackW - trackW * thumbRatio);

  // Desktop menor: cards que nunca cortam e sempre centralizados
  const SAFE_PAD = 48; // margem lateral
  const DESK_COL_W = useMemo(() => {
    if (vw < 1181) return FIGMA_W;
    const usable = Math.max(320, vw - SAFE_PAD * 2);
    return Math.min(FIGMA_W, Math.floor(usable / 4));
  }, [vw]);

  const DESK_COL_H = useMemo(() => DESK_COL_W * AR, [DESK_COL_W]);
  const USE_FIGMA_SIZE = vw >= 1600;
  const COL_W = USE_FIGMA_SIZE ? FIGMA_W : DESK_COL_W;
  const COL_H = USE_FIGMA_SIZE ? FIGMA_H : DESK_COL_H;
  const GRID_W = COL_W * 4;

  return (
    <section
      id="team-tabs"
      className="relative text-white pt-8 pb-24 min-[1181px]:pt-10 min-[1181px]:pb-28"
      style={{ backgroundColor: PAGE_BG }}
    >
      {/* faixa de abas */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen px-0">
        <div
          className="relative w-full overflow-hidden rounded-md"
          style={{
            background: COLOR_BG,
            height: STRIP_H,
            boxShadow: `inset 0 0 0 1px ${hexA(COLOR_ACCENT, 0.22)}`,
          }}
        >
          {/* setas */}
          <button
            aria-label="Anterior"
            onClick={() => scrollTabsBy(-BTN_W * 1.5)}
            className="absolute z-10 top-1/2 -translate-y-1/2 h-8 w-8 rounded-md"
            style={{
              left: ARROW_LEFT_X,
              background: COLOR_BG,
              boxShadow: `0 0 0 1px ${hexA(COLOR_ACCENT, 0.22)}`,
              transition: "background 160ms ease, box-shadow 160ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = mix(
                COLOR_BG,
                COLOR_ACCENT,
                0.08
              );
              e.currentTarget.style.boxShadow = `0 0 0 1px ${hexA(
                COLOR_ACCENT,
                0.36
              )}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = COLOR_BG;
              e.currentTarget.style.boxShadow = `0 0 0 1px ${hexA(
                COLOR_ACCENT,
                0.22
              )}`;
            }}
            disabled={!canLeft}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="mx-auto"
              aria-hidden="true"
            >
              <path
                d="M15 6l-6 6 6 6"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            aria-label="Próximo"
            onClick={() => scrollTabsBy(BTN_W * 1.5)}
            className="absolute z-10 top-1/2 -translate-y-1/2 h-8 w-8 rounded-md"
            style={{
              right: ARROW_RIGHT_X,
              background: COLOR_BG,
              boxShadow: `0 0 0 1px ${hexA(COLOR_ACCENT, 0.22)}`,
              transition: "background 160ms ease, box-shadow 160ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = mix(
                COLOR_BG,
                COLOR_ACCENT,
                0.08
              );
              e.currentTarget.style.boxShadow = `0 0 0 1px ${hexA(
                COLOR_ACCENT,
                0.36
              )}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = COLOR_BG;
              e.currentTarget.style.boxShadow = `0 0 0 1px ${hexA(
                COLOR_ACCENT,
                0.22
              )}`;
            }}
            disabled={!canRight}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="mx-auto"
              aria-hidden="true"
            >
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* trilho das abas */}
          <div
            ref={railTabsRef}
            className="absolute inset-0 flex items-stretch overflow-x-auto no-scrollbar"
            style={{
              top: STRIP_EXTRA_TOP,
              height: BTN_H,
              paddingLeft: RAIL_SIDE_PADDING,
              paddingRight: RAIL_SIDE_PADDING,
              scrollSnapType: "x mandatory",
              gap: "1px",
            }}
            onScroll={recalcArrows}
          >
            {TABS.map((t) => {
              const is = t.key === active;
              return (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className="flex-none flex items-center justify-center select-none outline-none"
                  style={{
                    width: BTN_W,
                    height: BTN_H,
                    scrollSnapAlign: "start",
                    background: COLOR_BG,
                    color: is ? "#fff" : "rgba(255,255,255,0.85)",
                    boxShadow: is
                      ? `inset 0 0 0 1px ${hexA(COLOR_ACCENT, 0.36)}`
                      : `inset 0 0 0 1px ${hexA(COLOR_ACCENT, 0.22)}`,
                    transition:
                      "background 140ms ease, box-shadow 140ms ease, color 140ms ease",
                    fontFamily: `"Crimson Text", serif`,
                    fontWeight: 400,
                    fontSize: "clamp(16px, 2.4vw, 33.2px)",
                    lineHeight: "1.3",
                    textAlign: "center",
                    paddingInline: 8,
                  }}
                  onMouseEnter={(e) => {
                    if (!is) {
                      e.currentTarget.style.background = mix(
                        COLOR_BG,
                        COLOR_ACCENT,
                        0.06
                      );
                      e.currentTarget.style.boxShadow = `inset 0 0 0 1px ${hexA(
                        COLOR_ACCENT,
                        0.36
                      )}`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!is) {
                      e.currentTarget.style.background = COLOR_BG;
                      e.currentTarget.style.boxShadow = `inset 0 0 0 1px ${hexA(
                        COLOR_ACCENT,
                        0.22
                      )}`;
                    }
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* mobile/tablet – carrossel */}
      <div className="mx-auto max-w-[1120px] px-4 mt-8 min-[1181px]:hidden">
        <div
          ref={railRef}
          className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ touchAction: "pan-x", gap: 0 }}
          aria-label={`${active} (carrossel)`}
        >
          {photos.map((src) => (
            <div
              key={src}
              className="snap-start flex-none relative rounded-2xl overflow-hidden"
              style={{
                width: `${CARD.w}px`,
                height: `${CARD.h}px`,
                backgroundImage: `url(${src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            />
          ))}
        </div>

        {/* barra de progresso */}
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
                transition: "transform 120ms linear, width 120ms ease",
              }}
            />
          </div>
        </div>
      </div>

      {/* desktop – grid 4 colunas */}
      <div className="hidden min-[1181px]:block">
        <div className="w-full mx-auto mt-10 px-4">
          <div className="flex justify-center w-full overflow-x-hidden">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(4, ${COL_W}px)`,
                gap: 0,
                width: `${GRID_W}px`,
              }}
            >
              {photos.map((src) => (
                <div
                  key={`desk-${src}`}
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    width: `${COL_W}px`,
                    height: `${COL_H}px`,
                    backgroundImage: `url(${src})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* utils */
function hexA(hex: string, a: number) {
  const clamp = (x: number, min: number, max: number) =>
    Math.max(min, Math.min(max, x));
  const alpha = clamp(Math.round(a * 255), 0, 255);
  return hex + alpha.toString(16).padStart(2, "0");
}
function mix(hex1: string, hex2: string, t = 0.5) {
  const c1 = parseInt(hex1.slice(1), 16);
  const c2 = parseInt(hex2.slice(1), 16);
  const r = Math.round((c1 >> 16) * (1 - t) + (c2 >> 16) * t);
  const g = Math.round(
    ((c1 >> 8) & 0xff) * (1 - t) + ((c2 >> 8) & 0xff) * t
  );
  const b = Math.round((c1 & 0xff) * (1 - t) + (c2 & 0xff) * t);
  return `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)}`;
}
