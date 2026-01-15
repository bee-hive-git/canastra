"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CARDS = [
  {
    id: 1,
    src: "/ai-eir/founder/1.svg",
    alt: "Founder 1",
  },
  {
    id: 2,
    src: "/ai-eir/founder/2.svg",
    alt: "Founder 2",
  },
  {
    id: 3,
    src: "/ai-eir/founder/3.svg",
    alt: "Founder 3",
  },
  {
    id: 4,
    src: "/ai-eir/founder/4.svg",
    alt: "Founder 4",
  },
];

const MOBILE_CARDS = [
  {
    id: 1,
    src: "/ai-eir/founder/1-mobile.svg",
    alt: "Founder 1",
  },
  {
    id: 2,
    src: "/ai-eir/founder/2-mobile.svg",
    alt: "Founder 2",
  },
  {
    id: 3,
    src: "/ai-eir/founder/3-mobile.svg",
    alt: "Founder 3",
  },
  {
    id: 4,
    src: "/ai-eir/founder/4-mobile.svg",
    alt: "Founder 4",
  },
];

export default function FounderSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % CARDS.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + CARDS.length) % CARDS.length);
  };

  return (
    <section
      id="ai-eir-founder"
      className="relative bg-[#110417] py-16 md:py-24 overflow-hidden flex flex-col items-center"
    >
      {/* Título */}
      <div className="text-center mb-12 px-4 z-10 relative">
        <h2 className="font-serif text-3xl md:text-5xl text-white font-semibold mb-4">
          O que os <span className="text-[#FF624D] italic">Founders</span> dizem
          sobre nós?
        </h2>
        <p className="text-white/80 text-sm md:text-lg max-w-2xl mx-auto font-light">
          Veja os depoimentos de pessoas que participaram do processo de
          crescimento juntamente com a Canastra Ventures.
        </p>
      </div>

      {/* Mobile Layout (Vertical List) */}
      <div className="md:hidden w-full px-6 flex flex-col gap-6">
        {MOBILE_CARDS.map((card) => (
          <div key={card.id} className="w-full rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={card.src}
              alt={card.alt}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-contain"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Área do Carrossel (Desktop Only) */}
      <div className="hidden md:flex relative w-full max-w-[1400px] items-center justify-center px-0 md:px-12">
        {/* Botão Anterior (Mobile: ajustado posição) */}
        <button
          onClick={prevCard}
          className="absolute left-4 md:left-10 z-30 p-2 md:p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all focus:outline-none backdrop-blur-sm"
          aria-label="Anterior"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="md:w-6 md:h-6"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Display do Card */}
        <div className="w-full md:max-w-[1200px] overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {CARDS.map((card, index) => (
              <div
                key={card.id}
                className="min-w-full flex justify-center px-8 md:px-4"
              >
                <div className="relative w-full max-w-[1000px] rounded-xl overflow-hidden shadow-2xl">
                   <Image
                      src={card.src}
                      alt={card.alt}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto object-contain"
                      draggable={false}
                      priority={index === 0}
                      loading={index === 0 ? undefined : "eager"}
                      quality={100}
                    />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Botão Próximo */}
        <button
          onClick={nextCard}
          className="absolute right-4 md:right-10 z-30 p-2 md:p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all focus:outline-none backdrop-blur-sm"
          aria-label="Próximo"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="md:w-6 md:h-6"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Indicadores (Dots) - Desktop Only */}
      <div className="hidden md:flex gap-2 mt-8">
        {CARDS.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex ? "bg-[#FF624D]" : "bg-white/20"
            }`}
            aria-label={`Ir para card ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
