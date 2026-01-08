// src/components/ai-eir/whatelse/index.tsx
"use client";

import { motion, Variants } from "framer-motion";

export default function WhatElse() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="whatelse"
      className="relative text-white"
      style={{ backgroundColor: "rgb(17, 4, 23)" }}
    >
      <div className="w-full px-5 py-14 sm:py-16 lg:py-20 min-[820px]:px-0 min-[820px]:pl-[var(--site-padding-left)] min-[820px]:pr-[var(--site-padding-right)]">
        {/* Título */}
        <motion.header
          className="text-center mb-10 sm:mb-12 lg:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
        >
          <h2
            className="
              font-bold font-serif leading-[0.94]
              text-[clamp(34px,6vw,65px)]
            "
            style={{
              fontFamily: '"Crimson Text", serif',
              letterSpacing: "-1.63px",
            }}
          >
            <span className="block">
              O que mais você terá{" "}
              <span className="italic text-[#FF624D]">acesso</span>
            </span>

            <span className="block italic">
              durante o{" "}
              <span className="text-[#FF624D] not-italic">programa</span>
            </span>
          </h2>
        </motion.header>

        {/* Grade */}
        <motion.div
          className="grid grid-cols-1 gap-5 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <Card
            title="Acesso a Capital"
            text="Oportunidade de investimento da Canastra Ventures de até R$800 mil na primeira rodada institucional e conexões com outros VCs e anjos."
            variants={cardVariants}
          />
          <Card
            title="Office Hours"
            text="Sessões individuais (1:1) e em grupo semanais com os Fellow Partners para tomada de decisão e revisão da rota com quem viveu e superou os mesmos desafios."
            variants={cardVariants}
          />
          <Card
            title="Rede de Mentores e Perks Exclusivos"
            text="Acesse mentores especialistas em IA, produto, vendas e receba créditos e benefícios exclusivos em ferramentas e serviços essenciais."
            variants={cardVariants}
          />
          <Card
            title="Recrutamento Estratégico e Advisor Network"
            text="Facilitamos o recrutamento dos primeiros talentos-chave e advisors."
            variants={cardVariants}
          />
          <Card
            title="C-Launch: Lançamento da sua StartUp"
            text="Lançamos oficialmente a sua startup no ecossistema com divulgação nas nossas plataformas e um evento presencial em São Paulo ao final do programa."
            variants={cardVariants}
          />
          <Card
            title="Quartas de Conteúdo com Líderes de IA e Negócios"
            text="Talks, workshops e mesas redondas com experts em IA, produto e VC."
            variants={cardVariants}
          />
        </motion.div>
      </div>

      {/* divisória inferior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.28), rgba(255,255,255,0))",
          opacity: 0.36,
        }}
      />
    </section>
  );
}

/* Card */
function Card({ title, text, variants }: { title: string; text: string; variants?: Variants }) {
  return (
    <motion.div
      variants={variants}
      className="
        w-[92vw] max-w-[380px] mx-auto
        lg:w-auto lg:max-w-none lg:mx-0
        min-h-[220px]
        rounded-xl border border-[#FF624D]/70 bg-transparent
        p-6 shadow-[0_0_0_1px_rgba(255,98,77,0.06)]
        transition hover:border-[#FF624D] hover:shadow-[0_0_0_1px_rgba(255,98,77,0.22)]
      "
    >
      <h3 className="text-[#FF624D] font-semibold text-[18px] sm:text-[19px] leading-snug mb-2">
        {title}
      </h3>
      <p className="text-white/85 text-[14px] sm:text-[15px] leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}
