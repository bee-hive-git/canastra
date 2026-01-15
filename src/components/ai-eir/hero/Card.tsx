import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  imageSrc: string;
  title: React.ReactNode;
  description: string;
  delay?: number;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  imageSrc,
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
          scale: 1.05,
          y: -10,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        },
      }}
    >
      <motion.div
        className="relative w-full aspect-[484/458]"
        variants={{
          whileHover: { filter: "brightness(1.1)" },
        }}
      >
        <img
          src={imageSrc}
          alt=""
          className="object-contain w-full h-full"
          draggable={false}
        />
      </motion.div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end px-8 pb-10 text-left">
        {/* Title */}
        <div
          className="mb-3 font-bold text-[22px] lg:text-[24px] leading-tight"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          {title}
        </div>
        {/* Description */}
        <div
          className="text-white/80 text-[14px] lg:text-[15px] leading-relaxed font-sans"
          style={{
            fontFamily:
              '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          {description}
        </div>
      </div>
    </motion.div>
  );
};
