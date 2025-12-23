// src/components/pitch-us/overview/index.tsx
"use client";

import { motion, Variants } from "framer-motion";

type Item = { num: number; title: string; body: string };

export default function Overview() {
  const HILIGHT = "#FF624D";
  const BG = "rgb(17, 4, 23)";

  const items: Item[] = [
    {
      num: 1,
      title: "AI Founders",
      body: "Investimos em Founders, preferencialmente brasileiros, que estão criando startups AI-First.",
    },
    {
      num: 2,
      title: "Equipes Técnicas",
      body: "Equipes complementares, técnicas e com profundidade em IA. A equipe deve ser composta por 2–4 Co-Founders, com ao menos 1 Tech Founder (CTO).",
    },
    {
      num: 3,
      title: "MVP Validado",
      body: "Startups com indícios de tração (early revenue, POCs em andamento, contratos assinados, primeiras vendas, etc.) e MVP validado.",
    },
    {
      num: 4,
      title: "Mercado Grande",
      body: "Agnósticos de setor, desde que o mercado seja grande e tenha o Brasil como mercado target.",
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0, originX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  const verticalLineVariants: Variants = {
    hidden: { scaleY: 0, originY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section
      id="overview"
      className="relative text-white pt-12 pb-20 min-[1181px]:pt-20 overflow-x-hidden"
      style={{ backgroundColor: BG }}
    >
      <style jsx global>{`
        @media (min-width: 1181px) and (max-width: 1439px) {
          #overview .wrap {
            margin-left: 0;
            padding-left: var(--site-padding-left);
            padding-right: var(--site-padding-right);
          }
          #overview {
            --gutter-left: var(--site-padding-left);
          }
        }
        @media (min-width: 1440px) {
          #overview .wrap {
            margin-left: 0;
            padding-left: var(--site-padding-left);
            padding-right: var(--site-padding-right);
          }
          #overview {
            --gutter-left: var(--site-padding-left);
          }
        }

        /* Desktop: aumentar apenas título e parágrafo do bloco superior */
        @media (min-width: 1181px) {
          #overview .head h2 {
            font-size: clamp(44px, 3.6vw, 62px);
            line-height: 1.12;
          }
          #overview .head h3 {
            font-size: clamp(22px, 1.7vw, 28px); /* parágrafo maior */
            line-height: 1.7;
          }

          /* Linha temporal bem mais abaixo dos textos (desktop only) */
          #overview .timeline {
            margin-top: clamp(96px, 14vh, 200px);
          }
        }
      `}</style>

      {/* divisória superior da sessão */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.28), rgba(255,255,255,0))",
          opacity: 0.4,
        }}
      />

      {/* divisória inferior da sessão */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.28), rgba(255,255,255,0))",
          opacity: 0.4,
        }}
      />

      {/* mobile/tablet (≤ iPad Air, inclusive) */}
      <div className="mx-auto max-w-[560px] px-5 min-[1181px]:hidden">
        <header className="text-center">
          <h2
            className="text-[28px] leading-tight"
            style={{
              fontFamily: '"Crimson Text", serif',
              fontWeight: 700,
            }}
          >
            Overview da{" "}
            <span
              className="italic font-semibold"
              style={{ color: HILIGHT }}
            >
              tese
            </span>
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
          Investimos <span className="font-normal not-italic">pre-seed</span>{" "}
          em{" "}
          <span
            className="italic font-semibold"
            style={{ color: HILIGHT }}
          >
            startups
          </span>{" "}
          de inteligência artificial (AI-First).
        </h3>
        <p className="text-white/85 text-[14px] leading-relaxed max-w-[56ch] mx-auto mt-3 text-center">
          Nossa{" "}
          <span
            className="italic font-semibold"
            style={{ color: HILIGHT }}
          >
            missão
          </span>{" "}
          é guiar os ousados na trilha da construção de startups
          inesquecíveis.
        </p>

        {/* botão centralizado */}
        <div className="mt-6 flex justify-center">
          <a
            href="#form-pitch"
            className="inline-flex items-center justify-center gap-2 rounded-md font-semibold h-12 px-5 min-w-[160px] text-[14px] border-2 border-[#FF624D] bg-black text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-110 hover:shadow-md hover:shadow-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60 active:translate-y-0"
          >
            <svg
              width="26"
              height="22"
              viewBox="0 0 26 22"
              aria-hidden="true"
              className="-ml-1 text-[#FF624D]"
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
            Pitch Us!
          </a>
        </div>

        <motion.div
          className="mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {items.map((it, idx) => (
            <motion.div
              key={it.num}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center py-8"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center border text-white select-none"
                style={{ borderColor: HILIGHT }}
              >
                <span className="font-semibold text-[14px]">
                  {it.num}
                </span>
              </div>
              <h4 className="font-serif text-[16px] leading-tight mt-3">
                {it.title}
              </h4>
              <p className="text-white/80 text-[14px] leading-relaxed mt-2 max-w-[60ch] px-3">
                {it.body}
              </p>
              {idx < items.length - 1 && (
                <motion.div
                  aria-hidden
                  className="w-px mt-8"
                  variants={verticalLineVariants}
                  style={{ height: 84, backgroundColor: HILIGHT }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* desktop (≥ 1181px) */}
      <div className="hidden min-[1181px]:block">
        <div className="wrap min-[1181px]:max-w-[1120px]">
          {/* max-width maior para empurrar mais para a direita */}
          <div className="head max-w-[900px]">
            <h2
              className="text-[40px] leading-tight mb-3"
              style={{
                fontFamily: '"Crimson Text", serif',
                fontWeight: 700,
              }}
            >
              Overview da{" "}
              <span
                className="italic font-semibold"
                style={{ color: HILIGHT }}
              >
                tese
              </span>
            </h2>

            {/* PARÁGRAFO EM 3 LINHAS FIXAS + MAIOR */}
            <h3
              className="text-[22px] leading-snug"
              style={{
                fontFamily:
                  '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400,
              }}
            >
              <span className="block">
                Investimos{" "}
                <span className="font-normal not-italic">pre-seed</span>{" "}
                em{" "}
                <span
                  className="italic font-semibold"
                  style={{ color: HILIGHT }}
                >
                  startups
                </span>{" "}
                de inteligência artificial (AI-First).
              </span>
              <span className="block mt-1">
                Nossa{" "}
                <span
                  className="italic font-semibold"
                  style={{ color: HILIGHT }}
                >
                  missão
                </span>{" "}
                é guiar os ousados na trilha da
              </span>
              <span className="block">
                construção de startups inesquecíveis.
              </span>
            </h3>
          </div>
        </div>

        {/* Linha temporal — margem-top grande controlada por .timeline */}
        <div
          className="timeline relative w-full"
          style={
            {
              paddingLeft: "var(--gutter-left)",
              paddingRight: "var(--gutter-left)",
              "--dot": "56px",
              "--num": "17px",
              "--h4": "19px",
              "--p": "16px",
              "--stroke": "2px",
              "--gapL": "32px",
              "--gapR": "12px",
              "--col-gap": "clamp(140px, 12vw, 360px)",
            } as React.CSSProperties
          }
        >
          <motion.div
            className="grid grid-cols-4"
            style={{ gap: "var(--col-gap)" }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {items.map((it, idx) => (
              <motion.div
                key={it.num}
                className="relative text-center px-2"
                variants={itemVariants}
              >
                {idx < items.length - 1 && (
                  <motion.span
                    aria-hidden
                    className="absolute"
                    variants={lineVariants}
                    style={{
                      top: "calc((var(--dot) / 2) - (var(--stroke) / 2))",
                      left: "calc(50% + (var(--dot) / 2) + var(--gapL))",
                      width:
                        "calc(100% + var(--col-gap) - var(--dot) - var(--gapL) - var(--gapR))",
                      height: "var(--stroke)",
                      backgroundColor: HILIGHT,
                    }}
                  />
                )}

                <div
                  className="mx-auto rounded-full flex items-center justify-center border text-white select-none"
                  style={{
                    width: "var(--dot)",
                    height: "var(--dot)",
                    borderColor: HILIGHT,
                    fontSize: "var(--num)",
                    lineHeight: 1,
                  }}
                >
                  <span className="font-semibold">{it.num}</span>
                </div>

                <h4
                  className="font-serif leading-tight mt-3"
                  style={{ fontSize: "var(--h4)" }}
                >
                  {it.title}
                </h4>
                <p
                  className="text-white/80 leading-relaxed mt-2"
                  style={{ fontSize: "var(--p)" }}
                >
                  {it.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
