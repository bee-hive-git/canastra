"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { VENTURE_PARTNERS_DATA, TEAM_DATA, FELLOW_PARTNERS_DATA, ADVISORS_DATA, MENTORS_DATA, MemberData } from "./data";
import TeamMemberModal from "./TeamMemberModal";

type TabKey = "team" | "venture-partners" | "fellow-partners" | "advisors" | "mentors";

// cores
const PAGE_BG = "rgb(17, 4, 23)";
const COLOR_BG = "#191919";
const COLOR_ACCENT = "#F05941";

// faixa/abas
const BTN_H = 56;
const STRIP_EXTRA_TOP = 7;
const STRIP_EXTRA_BOTTOM = 7;
const STRIP_H = BTN_H + STRIP_EXTRA_TOP + STRIP_EXTRA_BOTTOM;

// FIGMA base
const FIGMA_W = 360.35;
const FIGMA_H = 520.4;
const AR = FIGMA_H / FIGMA_W;

const TABS: { key: TabKey; label: string; count: number }[] = [
  { key: "team", label: "Team", count: 4 },
  { key: "venture-partners", label: "Venture Partners", count: 3 },
  { key: "fellow-partners", label: "Fellow Partners", count: 3 },
  { key: "advisors", label: "Advisors", count: 1 },
  { key: "mentors", label: "Mentors", count: 16 },
];

// tabs
export default function TeamTabs() {
  // viewport
  const [vw, setVw] = useState<number>(1440);
  useEffect(() => {
    // Atualiza apenas no cliente após montagem para evitar hydration mismatch
    setVw(window.innerWidth);
    
    const onR = () => setVw(window.innerWidth);
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, []);

  // mobile/tablet cards (carrossel)
  const CARD = useMemo(() => {
    if (vw >= 1181) return { w: FIGMA_W, h: FIGMA_H }; // desktop não usa esse caminho
    if (vw >= 820) return { w: FIGMA_W * 0.86, h: FIGMA_H * 0.86 }; // tablet
    return { w: FIGMA_W * 0.72, h: FIGMA_H * 0.72 }; // mobile
  }, [vw]);


  const [active, setActive] = useState<TabKey>("team");
  const [selectedMember, setSelectedMember] = useState<MemberData | null>(null);

  // Recupera a aba ativa do localStorage ao carregar
  useEffect(() => {
    const saved = localStorage.getItem("canastra_team_active_tab") as TabKey;
    if (saved && TABS.some((t) => t.key === saved)) {
      setActive(saved);
    }
  }, []);

  // Salva a aba ativa no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("canastra_team_active_tab", active);
  }, [active]);

  const handleCardClick = (index: number) => {
    let member: MemberData | undefined;

    if (active === "venture-partners") {
      member = VENTURE_PARTNERS_DATA[index];
    } else if (active === "team") {
      member = TEAM_DATA[index];
    } else if (active === "fellow-partners") {
      member = FELLOW_PARTNERS_DATA[index];
    } else if (active === "advisors") {
      member = ADVISORS_DATA[index];
    } else if (active === "mentors") {
      member = MENTORS_DATA[index];
    }

    if (member) {
      setSelectedMember(member);
    }
  };

  const photos = useMemo(() => {
    if (active === "mentors") {
      return MENTORS_DATA.map((m) => m.gridImage || m.image);
    }
    return Array.from(
      { length: TABS.find((t) => t.key === active)!.count },
      (_, i) => `/time/${active}/${i + 1}.png`
    );
  }, [active]);

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
      el.style.setProperty("scroll-snap-type", "none");
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
      el.style.setProperty("scroll-snap-type", "x mandatory");
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
      className="relative text-white pt-4 pb-24 min-[1181px]:pt-0 min-[1181px]:pb-28 overflow-hidden"
      style={{ backgroundColor: PAGE_BG }}
    >
      {/* faixa de abas */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen px-0">
        <div
          className="relative w-full overflow-hidden rounded-md flex justify-center"
          style={{
            background: COLOR_BG,
            height: STRIP_H,
            boxShadow: `inset 0 0 0 1px ${hexA(COLOR_ACCENT, 0.22)}`,
          }}
        >
          {/* trilho das abas */}
          <div
            className="flex w-full max-w-[1440px] items-stretch justify-between px-2 sm:px-4"
            style={{
              marginTop: STRIP_EXTRA_TOP,
              height: BTN_H,
              gap: "2px",
            }}
          >
            {TABS.map((t) => {
              const is = t.key === active;
              return (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={`flex-1 flex items-center justify-center select-none outline-none border rounded-md transition-all duration-150 ${
                    is
                      ? "border-[#F05941] text-white"
                      : "bg-transparent border-transparent text-white/60 hover:bg-[#F05941]/5 hover:text-white/90"
                  }`}
                  style={{
                    background: is
                      ? "linear-gradient(180deg, rgba(240, 89, 65, 0.24) 0%, rgba(240, 89, 65, 0) 100%)"
                      : undefined,
                    height: BTN_H,
                    fontFamily: `"Crimson Text", serif`,
                    fontWeight: 400,
                    fontSize: "clamp(10px, 1.4vw, 22px)",
                    lineHeight: "1.1",
                    textAlign: "center",
                    paddingInline: 4,
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
          {photos.map((src, i) => (
            <div
              key={src}
              onClick={() => handleCardClick(i)}
              className={`snap-start flex-none relative rounded-2xl overflow-hidden ${
                (active === "venture-partners" || active === "team" || active === "fellow-partners" || active === "advisors" || active === "mentors") ? "cursor-pointer active:scale-95 transition-transform" : ""
              }`}
              style={{
                width: `${CARD.w}px`,
                height: `${CARD.h}px`,
              }}
            >
              <Image
                src={src}
                alt={`${active} member ${i + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 820px) 260px, 360px"
                draggable={false}
                priority={i < 2}
              />
            </div>
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
          <div className="flex justify-center w-full py-4">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(4, ${COL_W}px)`,
                gap: 0,
                width: `${GRID_W}px`,
              }}
            >
              {photos.map((src, i) => (
                <div
                  key={`desk-${src}`}
                  onClick={() => handleCardClick(i)}
                  className={`relative rounded-2xl overflow-hidden ${
                    (active === "venture-partners" || active === "team" || active === "fellow-partners" || active === "advisors" || active === "mentors")
                      ? "cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                      : ""
                  }`}
                  style={{
                    width: `${COL_W}px`,
                    height: `${COL_H}px`,
                  }}
                >
                  <Image
                    src={src}
                    alt={`${active} member ${i + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1600px) 25vw, 360px"
                    draggable={false}
                    priority={i < 4}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <TeamMemberModal
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
      />
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
