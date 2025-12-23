"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";

export default function DataSection() {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98], // Curva de easing suave e premium
        delay: 0.2
      }
    }
  };

  return (
    <motion.section 
      id="ai-eir-data" 
      className="relative bg-[#110417] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      <picture>
        {/* Mobile */}
        <source
          media="(max-width: 767px)"
          srcSet="/ai-eir/data/fundo-mobile.png"
        />
        {/* Desktop */}
        <img
          src="/ai-eir/data/fundo.png"
          alt=""
          aria-hidden
          className="w-full h-auto object-contain md:object-cover"
          draggable={false}
        />
      </picture>

      <style jsx>{`
        @media (max-width: 767px) {
          #ai-eir-data {
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          #ai-eir-data picture,
          #ai-eir-data img {
            width: 100%;
            height: auto;
            display: block;
          }
        }
      `}</style>
    </motion.section>
  );
}
