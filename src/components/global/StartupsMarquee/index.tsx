"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ResponsiveScale {
  xs?: number; // < 480px
  base?: number; // 480px - 640px
  sm?: number; // >= 640px
  md?: number; // >= 768px
  lg?: number; // >= 1024px
  xl?: number; // >= 1280px
}

interface Startup {
  name: string;
  logo: string;
  scale?: number;
  responsiveScale?: ResponsiveScale;
}

/**
 * Data for the startups logos.
 * To add a new startup:
 * 1. Add the logo image to public/ai-eir/startups/
 * 2. Add a new object to this array with the name and image path
 */
const STARTUPS: Startup[] = [
  { 
    name: "Evig", 
    logo: "/ai-eir/startups/evig.png", 
    scale: 1.5,
    responsiveScale: { xs: 0.7, base: 0.8, sm: 1.0, md: 1.2, lg: 0.9 }
  },
  { 
    name: "Quorum", 
    logo: "/ai-eir/startups/quorum.png", 
    scale: 1.5,
    responsiveScale: { xs: 0.7, base: 0.6, sm: 1.0, md: 1.0, lg: 0.9 }
  },
  { 
    name: "Zonic", 
    logo: "/ai-eir/startups/zonic.png", 
    scale: 1.5,
    responsiveScale: { xs: 0.7, base: 0.8, sm: 1.0, md: 1.2, lg: 0.9 }
  },
  { 
    name: "Allia", 
    logo: "/ai-eir/startups/allia.png", 
    scale: 1.5,
    responsiveScale: { xs: 0.7, base: 0.8, sm: 1.0, md: 1.2, lg: 0.8 }
  },
  { 
    name: "Anapfy AI", 
    logo: "/ai-eir/startups/anapfy-ai.png", 
    scale: 2,
    responsiveScale: { xs: 0.9, base: 1.1, sm: 1.4, md: 1.6, lg: 1.2 }
  },
  { 
    name: "Guardia", 
    logo: "/ai-eir/startups/guardia.png", 
    scale: 2,
    responsiveScale: { xs: 0.9, base: 1.1, sm: 1.4, md: 1.6, lg: 1.4 }
  },
  { 
    name: "Lagoa", 
    logo: "/ai-eir/startups/lagoa.png", 
    scale: 1.3,
    responsiveScale: { xs: 0.6, base: 0.7, sm: 0.9, md: 1.0, lg: 0.8 }
  },
];

export interface StartupsMarqueeProps {
  /**
   * Speed of the marquee animation in seconds.
   * @default 80
   */
  speed?: number;
  /**
   * Direction of the marquee animation.
   * @default "left"
   */
  direction?: "left" | "right";
  /**
   * Layout variant:
   * - "contained": Constrained width with padding and full border.
   * - "full": Full width with top/bottom borders only.
   * @default "contained"
   */
  variant?: "contained" | "full";
  /**
   * Optional class name to override styles of the container.
   * Useful for adjusting max-width in "contained" variant.
   */
  className?: string;
  perLogoScale?: Record<string, ResponsiveScale>;
}

/**
 * A reusable marquee component displaying startup logos.
 * Supports contained and full-width layouts.
 *
 * @example
 * <StartupsMarquee variant="full" speed={60} />
 */
export default function StartupsMarquee({
  speed = 80,
  direction = "left",
  variant = "contained",
  className,
  perLogoScale,
}: StartupsMarqueeProps) {
  const [viewportWidth, setViewportWidth] = React.useState<number>(1024);
  React.useEffect(() => {
    const update = () => setViewportWidth(window.innerWidth || 1024);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const getScaleFor = (name: string, startup: Startup) => {
    const cfg = perLogoScale?.[name] ?? startup.responsiveScale;
    
    // Se não houver config específica, aplica redução automática baseada na largura
    if (!cfg) {
      const base = startup.scale ?? 1;
      // Ajuste fino para mobile para evitar logos "gigantes"
      if (viewportWidth < 480) return base * 0.45;
      if (viewportWidth < 640) return base * 0.55;
      if (viewportWidth < 1024) return base * 0.7;
      return base;
    }

    const w = viewportWidth;
    if (w >= 1280) return cfg.xl ?? cfg.lg ?? cfg.md ?? cfg.sm ?? cfg.base ?? startup.scale;
    if (w >= 1024) return cfg.lg ?? cfg.md ?? cfg.sm ?? cfg.base ?? startup.scale;
    if (w >= 768) return cfg.md ?? cfg.sm ?? cfg.base ?? startup.scale;
    if (w >= 640) return cfg.sm ?? cfg.base ?? startup.scale;
    
    // Suporte para XS (< 480px) se definido
    if (w < 480 && cfg.xs !== undefined) return cfg.xs;

    return cfg.base ?? startup.scale;
  };
  const MarqueeContent = (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex items-center w-max"
        initial={{ x: direction === "left" ? "-25%" : "-75%" }}
        animate={{ x: direction === "left" ? "-75%" : "-25%" }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* We duplicate the set of logos to ensure infinite loop */}
        {/* We create a sequence long enough to ensure smoothness without gaps */}
        {[...Array(2)].map((_, outerIndex) => (
          <div key={outerIndex} className="flex items-center shrink-0">
            {[...STARTUPS, ...STARTUPS].map((startup, innerIndex) => (
              <div
                key={`${outerIndex}-${innerIndex}-${startup.name}`}
                className="relative w-[140px] min-[400px]:w-[180px] sm:w-[240px] md:w-[280px] h-[80px] min-[400px]:h-[100px] sm:h-[140px] border-r border-white/10 flex items-center justify-center px-3 min-[400px]:px-5 sm:px-10 shrink-0 hover:bg-white/[0.02] transition-colors duration-300"
              >
                <div className="opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 w-full h-full flex items-center justify-center relative">
                  <Image
                    src={startup.logo}
                    alt={`${startup.name} logo`}
                    fill
                    /*Ajuste tamanho do logo*/
                    className="object-contain transition-transform duration-300 px-6 py-4 sm:px-10 sm:py-6"
                    draggable={false}
                    sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, 280px"
                    priority={outerIndex === 0}
                    loading={outerIndex === 0 ? undefined : "eager"}
                    quality={100}
                    style={{
                      transform: (() => {
                        const s = getScaleFor(startup.name, startup);
                        return s ? `scale(${s})` : undefined;
                      })(),
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );

  if (variant === "contained") {
    return (
      <div className="w-full">
        <div className={`mx-auto border border-white/10 bg-white/[0.02] ${className ?? "max-w-[1440px]"}`}>
          {MarqueeContent}
        </div>
      </div>
    );
  }

  // variant === "full"
  return (
    <div className={`w-full border-y border-white/10 bg-white/[0.02] ${className ?? ""}`}>
      {MarqueeContent}
    </div>
  );
}
