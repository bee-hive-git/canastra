// src/components/ai-eir/whatis/index.tsx
"use client";

import { motion } from "framer-motion";

export default function WhatIs() {
  return (
    <section
      id="whatis"
      className="relative overflow-hidden text-black"
      style={{
        backgroundImage: "url('/ai-eir/whatis/fundo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto w-full max-w-[1100px] px-5 py-10 min-[820px]:py-14">
        <div className="text-center max-w-[920px] mx-auto">

          {/* Título */}
          <motion.h2
            className="font-bold text-[26px] leading-tight min-[820px]:text-[40px]"
            style={{ fontFamily: '"Crimson Text", serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            O que é o{" "}
            <span className="italic text-[#FF624D]">AI EiR?</span>
          </motion.h2>

          {/* Parágrafo principal com quebras ajustadas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <p
              className="
                mt-4 text-[15px] leading-relaxed text-black 
                min-[820px]:text-[18px] min-[820px]:leading-8 
                font-medium mx-auto
              "
              style={{
                fontFamily:
                  '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                maxWidth: "78ch",
              }}
            >
              {/* MOBILE — fluxo natural */}
              <span className="min-[820px]:hidden">
                epreneur in Residence (AI EiR) é nosso programa de
                residência criado para transformar ideias promissoras em startups
                de sucesso. Em 12 semanas de residência, apoiamos equipes a
                validarem hipóteses, construírem seus MVPs e iniciarem vendas para
                primeiros clientes.
              </span>

              {/* DESKTOP — quebras perfeitas */}
              <span className="hidden min-[820px]:block">
                O AI Entrepreneur in Residence (AI EiR) é nosso programa de residência,{" "}
                criado para transformar ideias promissoras em <span className="whitespace-nowrap">startups de sucesso</span>.
                
                Em 12 semanas de residência, apoiamos equipes a validarem hipóteses,{" "}
                construírem seus MVPs e iniciarem vendas para <span className="whitespace-nowrap">primeiros clientes</span>.
              </span>
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="mt-5 min-[820px]:mt-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <a
              href="https://forms.gle/BjEZU9quVQq8LSXg7"
              target="_blank"
              rel="noopener noreferrer"
              className={[
                "inline-flex items-center justify-center gap-2 rounded-md font-semibold h-12 px-5 min-w-[160px] text-[14px] transition-all duration-200 ease-out",
                "border-2 border-[#FF624D] bg-white text-black hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-105 hover:shadow-md hover:shadow-black/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/50 active:translate-y-0",
                "min-[820px]:border-black min-[820px]:text-black min-[820px]:bg-transparent min-[820px]:hover:brightness-100",
              ].join(" ")}
            >
              <svg
                width="26"
                height="22"
                viewBox="0 0 26 22"
                aria-hidden="true"
                className="-ml-1 text-[#FF624D] min-[820px]:text-black"
              >
                <path d="M2 11h6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                <path d="M9 11h7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                <path d="M16 7l6 4-6 4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="min-[820px]:hidden">Apply for AI EIR</span>
              <span className="hidden min-[820px]:inline">Apply AI EIR</span>
            </a>
          </motion.div>

          {/* Texto de apoio */}
          <motion.p
            className="mt-6 text-[13px] leading-snug text-gray-800 min-[820px]:text-[15px] font-medium max-w-[600px] mx-auto"
            style={{
              fontFamily: '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            As startups formadas contam com suporte contínuo para fundraising após o programa.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
