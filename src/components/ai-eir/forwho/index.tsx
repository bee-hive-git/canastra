"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import Image from "next/image";

export default function ForWho() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const desktopImageInitial = { opacity: 0, x: shouldReduceMotion ? 0 : 50 };
  const desktopImageAnimate = { opacity: 1, x: 0 };

  return (
    <section
      id="for-who"
      className="relative overflow-hidden text-white pb-24"
      style={{ backgroundColor: "rgb(17, 4, 23)" }}
    >
      <div className="relative mx-auto w-full max-w-[1600px] px-6 py-10 min-[1280px]:py-0 min-[1280px]:min-h-[86dvh]">
        
        {/* texto */}
        <motion.div
          className="
            relative z-10 w-full flex flex-col items-center justify-center text-center
            min-[1280px]:block min-[1280px]:text-left min-[1280px]:items-start
            min-[1280px]:max-w-[640px] min-[1280px]:mx-5
            min-[980px]:ml-[6vw]
            min-[1280px]:pt-20
          "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* título desktop */}
          <motion.h2 
            className="hidden min-[1280px]:block font-serif font-semibold leading-tight mb-4 text-[48px]"
            variants={itemVariants}
          >
            <span className="block text-[#FF624D]">Para quem</span>
            <span className="block italic">é a residência?</span>
          </motion.h2>

          {/* título mobile */}
          <motion.h2 
            className="min-[1280px]:hidden font-serif font-semibold leading-snug mb-3 text-[30px] sm:text-[34px] text-center"
            variants={itemVariants}
          >
            Para quem é a <span className="italic text-[#FF624D]">Residência?</span>
          </motion.h2>

          {/* parágrafo */}
          <motion.p 
            className="text-white/90 text-[16px] leading-relaxed text-center max-w-[600px] min-[1280px]:text-left min-[1280px]:text-[18px] min-[1280px]:leading-8 min-[1280px]:max-w-[520px]"
            variants={itemVariants}
          >
            Estamos buscando Founders ambiciosos e com profundidade em IA, em
            fase inicial, prontos para transformar ideias ousadas em startups de
            IA em grandes mercados.
          </motion.p>

          {/* imagem mobile — ancorada à direita, ocupando ~80% da tela e mais alta */}
          <motion.div 
            className="mt-10 min-[1280px]:hidden relative ml-auto -mr-6 w-[80vw] aspect-[9/16]"
            variants={imageVariants}
          >
            <Image
              src="/ai-eir/forwho/mobile.png"
              alt=""
              fill
              className="object-contain object-right select-none"
              draggable={false}
              sizes="80vw"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* imagem desktop — NÃO acompanha mais a altura da seção */}
      <motion.div
        className="
          hidden min-[1280px]:block
          absolute top-0 right-0
          w-[50vw]
          h-[86vh]
          pointer-events-none
        "
        aria-hidden
        initial={desktopImageInitial}
        whileInView={desktopImageAnimate}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src="/ai-eir/forwho/desktop.png"
          alt=""
          fill
          className="
            object-contain object-right
            select-none
            origin-right scale-x-[1.14]
          "
          draggable={false}
          sizes="50vw"
        />
      </motion.div>
    </section>
  );
}
