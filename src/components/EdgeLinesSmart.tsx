"use client";
import React, { useEffect, useState } from "react";

type Props = {
  startIndex?: number;
  startSelector?: string;
  offsetPx?: number;
  widthPx?: number;
  className?: string;
  footerSelector?: string;
  footerFadeRatio?: number;
  hideBelowWidth?: number; // largura mínima para mostrar
};

export default function EdgeLinesSmart({
  startIndex = 1,
  startSelector,
  offsetPx = 30,
  widthPx = 1,
  className,
  footerSelector,
  footerFadeRatio = 0.5,
  hideBelowWidth = 1024, // iPad Air e abaixo somem
}: Props) {
  const [top, setTop] = useState(0);
  const [hasAnchor, setHasAnchor] = useState(false);
  const [maskBottomPx, setMaskBottomPx] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > hideBelowWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [hideBelowWidth]);

  useEffect(() => {
    if (!isVisible) return;

    const getAnchor = (): HTMLElement | null => {
      if (startSelector) return document.querySelector<HTMLElement>(startSelector);
      const list = Array.from(document.querySelectorAll<HTMLElement>("[data-edge-section]"));
      return list[startIndex] ?? list[0] ?? null;
    };

    const getFooter = (): HTMLElement | null =>
      (footerSelector
        ? document.querySelector<HTMLElement>(footerSelector)
        : document.querySelector<HTMLElement>("footer") ||
          document.querySelector<HTMLElement>("[data-footer]")) ?? null;

    let anchor = getAnchor();
    let footer = getFooter();
    setHasAnchor(!!anchor);

    const update = () => {
      if (!isVisible) return;

      anchor = anchor ?? getAnchor();
      if (anchor) {
        const t = anchor.getBoundingClientRect().top;
        setTop(Math.max(t, 0));
      }

      footer = footer ?? getFooter();
      if (footer) {
        const fr = footer.getBoundingClientRect();
        const vh = window.innerHeight;
        const overlap = Math.max(0, vh - fr.top);
        const fadeHeight = Math.max(0, fr.height * footerFadeRatio);
        setMaskBottomPx(Math.min(overlap, fadeHeight));
      } else {
        setMaskBottomPx(0);
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [startIndex, startSelector, footerSelector, footerFadeRatio, isVisible]);

  if (!hasAnchor || !isVisible) return null;

  const styleVars: React.CSSProperties = {
    ["--edge-line-offset" as any]: `${offsetPx}px`,
    ["--edge-line-width" as any]: `${widthPx}px`,
    ["--edge-mask-bottom" as any]: `${maskBottomPx}px`,
  };

  const maskStyle: React.CSSProperties = {
    WebkitMaskImage:
      "linear-gradient(to bottom, black 0%, black calc(100% - var(--edge-mask-bottom,0px)), transparent 100%)",
    maskImage:
      "linear-gradient(to bottom, black 0%, black calc(100% - var(--edge-mask-bottom,0px)), transparent 100%)",
  };

  return (
    <div
      aria-hidden
      className={`fixed left-0 right-0 bottom-0 z-[var(--edge-line-z)] pointer-events-none ${className ?? ""}`}
      style={{ top, ...styleVars }}
    >
      <div
        className="absolute top-0 bottom-0"
        style={{
          left: "var(--edge-line-offset)",
          width: "var(--edge-line-width)",
          backgroundImage: "linear-gradient(to bottom, var(--edge-line-color-top), var(--edge-line-color-bot))",
          ...maskStyle,
        }}
      />
      <div
        className="absolute top-0 bottom-0"
        style={{
          right: "var(--edge-line-offset)",
          width: "var(--edge-line-width)",
          backgroundImage: "linear-gradient(to bottom, var(--edge-line-color-top), var(--edge-line-color-bot))",
          ...maskStyle,
        }}
      />
    </div>
  );
}
