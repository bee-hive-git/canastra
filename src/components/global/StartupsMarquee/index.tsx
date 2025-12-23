"use client";

import { motion } from "framer-motion";

/**
 * Data for the startups logos.
 * To add a new startup:
 * 1. Add the logo image to public/ai-eir/startups/
 * 2. Add a new object to this array with the name and image path
 */
const STARTUPS = [
  { name: "Evig", logo: "/ai-eir/startups/evig.png" },
  { name: "Quorum", logo: "/ai-eir/startups/quorum.png" },
  { name: "Zonic", logo: "/ai-eir/startups/zonic.png" },
  { name: "Allia", logo: "/ai-eir/startups/allia.png" },
  { name: "Anapfy AI", logo: "/ai-eir/startups/anapfy-ai.png" },
  { name: "Guardia", logo: "/ai-eir/startups/guardia.png", scale: 2.2 },
  { name: "Lagoa", logo: "/ai-eir/startups/lagoa.png" },
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
}: StartupsMarqueeProps) {
  const MarqueeContent = (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex items-center w-max"
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
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
                className="w-[200px] sm:w-[240px] md:w-[280px] h-[120px] sm:h-[140px] border-r border-white/10 flex items-center justify-center px-6 sm:px-10 shrink-0 hover:bg-white/[0.02] transition-colors duration-300"
              >
                <div className="opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 w-full h-full flex items-center justify-center">
                  <img
                    src={startup.logo}
                    alt={`${startup.name} logo`}
                    className="max-h-[50px] sm:max-h-[60px] w-auto max-w-full object-contain transition-transform duration-300"
                    draggable={false}
                    style={{
                      transform: (startup as any).scale
                        ? `scale(${(startup as any).scale})`
                        : undefined,
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
      <div className="w-full px-4 md:px-6 lg:px-8">
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
