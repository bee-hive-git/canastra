"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

export default function Napkin() {
  const ACCENT = "#FF624D";
  const BG = "rgb(17, 4, 23)";
  const DESK_IMG = "/pitch-us/napkin/div.png";
  const MOBILE_IMG = "/pitch-us/napkin/dic-mobile.png";

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Animation Variants
  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.25, ease: "easeIn" }
    }
  };

  const modalVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1.0, 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      scale: 0.8, 
      opacity: 0,
      transition: { duration: 0.25, ease: "easeIn" }
    }
  };

  return (
    <section
      id="napkin"
      className="text-white overflow-hidden pt-12 pb-20 min-[1181px]:pt-20"
      style={{ backgroundColor: BG }}
    >
      <style jsx global>{`
        @media (min-width: 1181px) {
          #napkin {
            padding-left: var(--site-padding-left);
            padding-right: var(--site-padding-right);
            padding-bottom: clamp(96px, 14vh, 200px);
          }
        }
      `}</style>

      {/* DESKTOP HEADER */}
      <div className="hidden min-[1181px]:block">
        <div className="wrap max-w-[1120px] mx-auto px-5 text-center">
          <h1
            className="font-serif leading-tight"
            style={{
              fontFamily: '"Crimson Text", serif',
              fontWeight: 700,
            }}
          >
            <span
              className="block text-[32px] xl:text-[40px]"
              style={{
                fontStyle: "normal",
                lineHeight: "0.75",
              }}
            >
              Conheça o nosso
            </span>
            <span
              className="block italic font-semibold text-[40px] xl:text-[52px]"
              style={{
                color: ACCENT,
                fontWeight: 700,
                fontStyle: "italic",
                lineHeight: "1.3",
              }}
            >
              Napkin
            </span>
          </h1>

          <h3
            className="mt-3 mx-auto max-w-[900px] text-center"
            style={{
              fontFamily:
                '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400,
              fontSize: "clamp(22px, 1.7vw, 28px)",
              lineHeight: 1.7,
            }}
          >
            Dê uma olhada no nosso Napkin, onde descrevemos o que buscamos em{" "}
            <span className="italic font-semibold" style={{ color: ACCENT }}>
              startups AI-First
            </span>
            . Nele, você encontrará os{" "}
            <span className="italic font-semibold" style={{ color: ACCENT }}>
              critérios
            </span>{" "}
            que consideramos para investimentos pre-seed, comparados aos que buscamos nas startups que
            se inscrevem no nosso programa de residência (
            <a href="/ai-eir" className="underline decoration-white/30 hover:text-white">
              AI EiR
            </a>
            ).
          </h3>
        </div>
      </div>

      {/* MOBILE HEADER */}
      <div className="mx-auto max-w-[560px] px-5 min-[1181px]:hidden">
        <header className="text-center">
          <h2
            className="text-[28px] leading-tight"
            style={{
              fontFamily: '"Crimson Text", serif',
              fontWeight: 700,
            }}
          >
            Napkin
          </h2>
        </header>

        <h3
          className="text-[18px] leading-snug mt-2 text-center"
          style={{
            fontFamily:
              '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 400,
          }}
        >
          Dê uma olhada no nosso{" "}
          <span className="italic font-semibold" style={{ color: ACCENT }}>
            Napkin
          </span>
          , onde descrevemos o que buscamos em{" "}
          <span className="italic font-semibold" style={{ color: ACCENT }}>
            startups AI-First.
          </span>
        </h3>

        <p className="text-white/85 text-[14px] leading-relaxed max-w-[56ch] mx-auto mt-3 text-center">
          Nele, você encontrará os critérios que consideramos para investimentos pre-seed, comparados
          aos que buscamos nas startups que se inscrevem no nosso programa de residência (
          <a href="/ai-eir" className="underline decoration-white/30 hover:text-white">
            AI EiR
          </a>
          ).
        </p>
      </div>

      {/* DESKTOP IMG + DISCLAIMER */}
      <div className="hidden min-[1181px]:block mt-10">
        <div className="wrap max-w-[1120px] mx-auto px-5">
          <div
            className="rounded-2xl"
            style={{
              width: "100%",
              height: "clamp(500px, 58vw, 640px)",
              backgroundImage: `url(${DESK_IMG})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
            }}
          />
          <p
            className="mt-2 rounded-xl px-4 py-3 text-[13px] leading-relaxed text-white/85"
            style={{
              width: "100%",
              border: `1px solid ${ACCENT}`,
              backgroundColor: "rgba(255,255,255,0.04)",
            }}
          >
            Disclaimer: O Napkin se encaixa perfeitamente na nossa tese, mas seguimos abertos a avaliar
            oportunidades fora do nosso sweet spot, com base em uma análise criteriosa e individual de
            cada caso.
          </p>
        </div>
      </div>

      {/* MOBILE IMG + POPUP + DISCLAIMER */}
      <div className="min-[1181px]:hidden mt-8 px-5">
        <p className="text-center text-[10px] text-white/60 mb-2 uppercase tracking-wide">
          Clique para expandir
        </p>
        
        <div 
          className="cursor-pointer transition-opacity hover:opacity-90 active:scale-95 duration-200"
          onClick={() => setIsModalOpen(true)}
          role="button"
          aria-label="Expandir imagem do Napkin"
          tabIndex={0}
        >
          <Image 
            src={MOBILE_IMG} 
            alt="Napkin Mobile" 
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded-2xl border border-white/10"
          />
        </div>

        <p
          className="mt-6 rounded-xl px-4 py-3 text-[13px] leading-relaxed text-white/85"
          style={{
            border: `1px solid ${ACCENT}`,
            backgroundColor: "rgba(255,255,255,0.04)",
          }}
        >
          <span className="italic font-semibold" style={{ color: ACCENT }}>
            Disclaimer:
          </span>{" "}
          O <span className="italic font-semibold" style={{ color: ACCENT }}>Napkin</span> se encaixa
          perfeitamente na nossa tese, mas seguimos abertos a avaliar oportunidades fora do nosso{" "}
          <span className="italic font-semibold" style={{ color: ACCENT }}>
            sweet spot
          </span>
          , com base em uma análise criteriosa e individual de cada caso.
        </p>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-5 backdrop-blur-sm"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={backdropVariants}
            onClick={() => setIsModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Napkin Expandido"
          >
            <div className="relative w-full max-w-[600px] flex flex-col items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img 
                src={MOBILE_IMG} 
                alt="Napkin Full" 
                className="w-full h-auto rounded-lg shadow-2xl"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()} 
              />
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                exit={{ opacity: 0 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(false);
                }}
                className="mt-4 bg-white/10 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10"
                aria-label="Fechar modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
