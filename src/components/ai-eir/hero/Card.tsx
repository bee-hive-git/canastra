import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  iconSrc: string;
  iconAlt?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  delay?: number;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  iconSrc,
  iconAlt = "",
  title,
  description,
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      className={`relative w-full h-auto cursor-pointer group ${className}`}
      initial="initial"
      whileInView="whileInView"
      whileHover="whileHover"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      variants={{
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        whileHover: {
          scale: 1.04,
          y: -8,
          transition: { type: "spring", stiffness: 300, damping: 22 },
        },
      }}
    >
      <div className="relative w-full h-full rounded-[27px] border border-[#F05941]/40 bg-black/10 shadow-[7px_10px_15px_rgba(0,0,0,0.6)] overflow-hidden">
        <div className="flex h-full flex-col px-8 pt-8 pb-10">
          <div className="mb-6">
            <img
              src={iconSrc}
              alt={iconAlt}
              className="w-10 h-10 object-contain invert brightness-0"
              draggable={false}
            />
          </div>

          <div className="flex-1 flex flex-col justify-start gap-4">
            <div
              className="text-[26px] md:text-[28px] leading-snug"
              style={{
                fontFamily:
                  '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400,
              }}
            >
              {title}
            </div>

            <div
              className="text-white/85 text-[15px] leading-relaxed"
              style={{
                fontFamily:
                  '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              {description}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
