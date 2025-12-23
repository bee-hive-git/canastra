"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Definição dos cards
const CARDS = [
  {
    id: 1,
    preview: "/ai-eir/founder/CARD-1.svg",
    expanded: "/ai-eir/founder/CARD-1-EXPANDIDO.svg",
    alt: "Sergio VerdeSelva",
    hasReadMore: true,
  },
  {
    id: 2,
    preview: "/ai-eir/founder/CARD-2.svg",
    expanded: "/ai-eir/founder/CARD-2.svg", // Fallback caso não exista a versão expandida
    alt: "Founder 2",
    hasReadMore: false,
  },
  {
    id: 3,
    preview: "/ai-eir/founder/CARD-3.svg",
    expanded: "/ai-eir/founder/CARD-3-EXPANDIDO.svg",
    alt: "Founder 3",
    hasReadMore: true,
  },
  {
    id: 4,
    preview: "/ai-eir/founder/CARD-4.svg",
    expanded: "/ai-eir/founder/CARD-4-EXPANDIDO.svg",
    alt: "Founder 4",
    hasReadMore: true,
  },
];

export default function FounderSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  // Navegação
  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % CARDS.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + CARDS.length) % CARDS.length);
  };

  // Abrir Modal
  const openModal = (id: number) => {
    setSelectedCardId(id);
    setModalOpen(true);
    document.body.style.overflow = "hidden"; // Bloqueia scroll
  };

  // Fechar Modal
  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedCardId(null), 300); // Limpa após animação
    document.body.style.overflow = ""; // Restaura scroll
  };

  // Handler de tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modalOpen) closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  const activeCard = CARDS.find((c) => c.id === selectedCardId);

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

      {/* Área do Carrossel (Stack) */}
      <div className="relative w-full max-w-[900px] h-[350px] md:h-[450px] flex items-center justify-center z-10 perspective-1000">
        {/* Botão Anterior */}
        <button
          onClick={prevCard}
          className="absolute left-2 md:left-0 top-[30%] -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors focus:outline-none"
          aria-label="Anterior"
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Stack de Cards */}
        <div className="relative w-[85%] md:w-[700px] h-full flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {CARDS.map((card, index) => {
              // Lógica de posição relativa
              // 0 = Active, 1 = Next, 2 = Next+1
              const offset = (index - activeIndex + CARDS.length) % CARDS.length;
              
              if (offset > 2) return null; 

              return (
                <motion.div
                  key={card.id}
                  layout
                  initial={{ 
                    scale: 0.9, 
                    y: 20, 
                    x: 20,
                    opacity: 0,
                    zIndex: 0 
                  }}
                  animate={{
                    scale: 1 - offset * 0.05, // 1, 0.95, 0.90
                    y: offset * 18, // Deslocamento vertical para baixo
                    x: offset * 25, // Deslocamento horizontal para a direita (Escada)
                    opacity: 1 - offset * 0.2, // 1, 0.8, 0.6
                    zIndex: 3 - offset, // 3, 2, 1
                  }}
                  exit={{ 
                    scale: 0.95, 
                    opacity: 0, 
                    x: -50, // Sai levemente para a esquerda
                    zIndex: 0 
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className={`absolute w-full top-0 shadow-2xl rounded-xl origin-top ${
                    card.hasReadMore ? "cursor-pointer" : "cursor-default"
                  }`}
                  onClick={() => offset === 0 && card.hasReadMore && openModal(card.id)}
                >
                  <div className="relative w-full">
                     {/* Imagem do Card */}
                    <Image
                      src={card.preview}
                      alt={card.alt}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto object-contain drop-shadow-xl"
                      draggable={false}
                    />
                    
                    {/* Botão Ler Mais (Apenas no card frontal e se permitido) */}
                    {offset === 0 && card.hasReadMore && (
                      <button
                        className="absolute bottom-6 left-8 text-black font-bold text-sm md:text-base border-b-2 border-transparent hover:border-black transition-all"
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(card.id);
                        }}
                      >
                        Ler mais
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Botão Próximo */}
        <button
          onClick={nextCard}
          className="absolute right-2 md:right-0 top-[30%] -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors focus:outline-none"
          aria-label="Próximo"
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Paginação (Dots) */}
      <div className="flex gap-3 -mt-30 z-40 relative">
        {CARDS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              i === activeIndex ? "bg-[#FF624D]" : "bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Ir para card ${i + 1}`}
          />
        ))}
      </div>

      {/* Modal Expandido */}
      <AnimatePresence>
        {modalOpen && activeCard && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop Blur */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            />

            {/* Conteúdo do Modal */}
            <motion.div
              className="relative w-full max-w-[800px] bg-transparent rounded-xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar no card
            >
              {/* Imagem Expandida */}
              <Image
                src={activeCard.expanded}
                alt={`${activeCard.alt} Expandido`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-contain"
              />

              {/* Botão Fechar (X) */}
              <motion.button
                onClick={closeModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute bottom-4 right-4 p-2 bg-black/5 hover:bg-black/10 rounded-full text-black transition-colors"
                aria-label="Fechar"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </motion.button>

              {/* Botão Ler Menos (no rodapé da imagem ou sobreposto) */}
               <button
                  className="absolute bottom-8 left-10 text-black font-bold text-sm md:text-base border-b-2 border-black hover:opacity-70 transition-all"
                  onClick={closeModal}
                >
                  Ler menos
                </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Linha de separação final */}
      <div className="absolute bottom-0 w-full h-[1px] bg-white/10 z-10" />

      {/* Fundo decorativo (opcional, mantendo o estilo dark) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle at center, #2a0a3a 0%, #110417 70%)"
        }}
      />
    </section>
  );
}
