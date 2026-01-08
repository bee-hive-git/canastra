"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function Structure() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Tempo entre cada elemento (Card -> Linha -> Card)
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="structure"
      className="relative overflow-hidden text-white pt-14 pb-24 min-[821px]:pt-20 min-[821px]:pb-28"
      style={{ backgroundColor: "rgb(17, 4, 23)" }}
    >
      {/* divisória superior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.28), rgba(255,255,255,0))",
          opacity: 0.4,
        }}
      />

      {/* divisória inferior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.28), rgba(255,255,255,0))",
          opacity: 0.4,
        }}
      />

      {/* Título */}
      <div className="mx-auto max-w-[860px] px-5 text-center mb-16 min-[821px]:mb-24">
        <h2 className="font-serif font-semibold leading-tight text-[30px] sm:text-[34px] min-[821px]:text-[48px]">
          <span className="block text-[#FF624D]">Conheça a estrutura</span>
          <span className="block italic text-white">do programa</span>
        </h2>

        {/* BOTÃO */}
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            className="
              inline-flex items-center justify-center gap-2 rounded-md font-semibold
              h-12 px-5 min-w-[170px] text-[15px] border-2 transition-all duration-200 ease-out
              bg-white text-black border-[#FF624D]
              hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-105 hover:shadow-md hover:shadow-black/20
              active:translate-y-0
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60

              /* DESKTOP — igual ao Hero */
              min-[821px]:min-w-[220px]
              min-[821px]:h-[50px]
              min-[821px]:px-7
              min-[821px]:text-[15px]
              min-[821px]:border min-[821px]:border-gray-400
              min-[821px]:bg-transparent min-[821px]:text-white
              min-[821px]:hover:brightness-110
            "
          >
            <svg
              width="26"
              height="22"
              viewBox="0 0 26 22"
              aria-hidden="true"
              className="-ml-1 text-[#FF624D] min-[821px]:text-gray-300"
            >
              <path
                d="M2 11h6"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M9 11h7"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M16 7l6 4-6 4"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <span>Cronograma Completo</span>
          </button>
        </div>
      </div>

      {/* ESTRUTURA ANIMADA */}
      <motion.div
        className="relative mx-auto max-w-[1200px] px-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* MOBILE VIEW - Apenas uma imagem */}
        <motion.div 
          className="block min-[821px]:hidden w-full max-w-[500px] mx-auto"
          variants={cardVariants}
        >
          <Image 
            src="/ai-eir/structure/BOX-MOBILE.png" 
            alt="Estrutura do Programa" 
            width={500}
            height={500}
            sizes="100vw"
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* DESKTOP VIEW - SVG Único (arquivo público com linhas pontilhadas) */}
        <motion.div 
          className="hidden min-[821px]:flex justify-center items-center relative w-full max-w-[1200px] mx-auto"
          variants={cardVariants}
        >
          <Image 
            src="/ai-eir/structure/BOX-WEB.png"
            alt="Estrutura do Programa (desktop)"
            width={1200}
            height={800}
            sizes="100vw"
            className="w-full h-auto drop-shadow-2xl"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
