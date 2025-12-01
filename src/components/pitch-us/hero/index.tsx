// src/components/pitch-us/hero/index.tsx
"use client";

import type { FC } from "react";
import Lottie from "lottie-react";
import pitchHeroAnimation from "@/../public/lotties/pitch-us/data.json";

const PitchHero: FC = () => {
  const HILIGHT = "#FF624D";
  const BG = "rgb(17, 4, 23)";

  return (
    <section
      id="pitch"
      className="relative text-white min-h-[100dvh] pt-16 min-[1181px]:pt-24"
      style={{ backgroundColor: BG }}
    >
      <style jsx global>{`
        @media (min-width: 1181px) and (max-width: 1439px) {
          #pitch .wrap {
            margin-left: 26px;
          }
        }
        @media (min-width: 1440px) {
          #pitch .wrap {
            margin-left: 40px;
          }
        }

        /* ---- tamanhos maiores só no desktop ≥1181px ---- */
        @media (min-width: 1181px) {
          #pitch .left h1 {
            font-size: clamp(52px, 4.2vw, 76px);
            line-height: 1.12;
          }
          #pitch .left h2 {
            font-size: clamp(26px, 2.1vw, 34px);
            line-height: 1.18;
          }
          #pitch .left p {
            font-size: clamp(18px, 1.3vw, 22px);
            line-height: 1.75;
          }
        }
      `}</style>

      {/* ------------- MOBILE / TABLET (até 1180px) ------------- */}
      <div className="mx-auto max-w-[560px] px-5 text-center flex flex-col items-center justify-start min-h-[100dvh] min-[1181px]:hidden">
        <div className="w-full flex justify-center pt-8">
          <Lottie
            animationData={pitchHeroAnimation}
            loop
            autoplay
            className="w-[72%] max-w-[380px] h-auto"
          />
        </div>

        <div className="w-full flex flex-col items-center mt-auto mb-3">
          <h1
            className="text-[28px] leading-tight mb-2"
            style={{
              fontFamily: '"Crimson Text", serif',
              fontWeight: 700,
            }}
          >
            Pitch Us!
          </h1>

          <h2
            className="text-[18px] leading-snug mb-3"
            style={{
              fontFamily: '"Crimson Text", serif',
              fontWeight: 700,
              fontStyle: "italic",
            }}
          >
            Somos um VC{" "}
            <span style={{ color: HILIGHT }} className="font-semibold">
              Pre-seed
            </span>{" "}
            com foco em{" "}
            <span style={{ color: HILIGHT }} className="font-semibold">
              IA
            </span>
          </h2>

          <p
            className="text-white/85 text-[14px] leading-relaxed max-w-[46ch] mx-auto mb-6"
            style={{
              fontFamily:
                '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 300,
            }}
          >
            Apoiamos fundadores com expertise em inteligência artificial desde o
            início, investindo nas primeiras rodadas de startups AI-First com
            ambição de escalar no Brasil e além.
          </p>

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
              />
              <path
                d="M9 11h7"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
              />
              <path
                d="M16 7l6 4-6 4"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Pitch Us!
          </a>
        </div>
      </div>

      {/* ------------------ DESKTOP (≥1181px) ------------------ */}
      <div className="wrap hidden min-[1181px]:flex min-[1181px]:items-center min-[1181px]:justify-start min-[1181px]:max-w-[1240px] min-[1181px]:mx-auto min-[1181px]:px-8 min-[1181px]:min-h-[calc(100dvh-96px)]">
        {/* ESQUERDA (texto) */}
        <div className="left max-w-[680px] relative z-10">
          <h1
            className="leading-tight mb-3"
            style={{
              fontFamily: '"Crimson Text", serif',
              fontWeight: 700,
            }}
          >
            Pitch Us!
          </h1>

          <h2
            className="leading-snug mb-3"
            style={{
              fontFamily: '"Crimson Text", serif',
              fontWeight: 700,
              fontStyle: "italic",
            }}
          >
            <span className="block whitespace-nowrap">
              Apoiamos{" "}
              <span
                style={{ color: HILIGHT }}
                className="italic font-semibold"
              >
                Founders
              </span>{" "}
              com a ambição de
            </span>
            <span className="block whitespace-nowrap">
              escalar startups de IA no{" "}
              <span
                style={{ color: HILIGHT }}
                className="italic font-semibold"
              >
                Brasil
              </span>{" "}
              e além
            </span>
          </h2>

          <p
            className="text-white/85"
            style={{
              fontFamily:
                '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 300,
            }}
          >
            VC pre-seed especialista em IA
          </p>

          <div className="mt-7">
            <a
              href="#form-pitch"
              className="inline-flex items-center justify-center gap-2 rounded-md font-semibold h-12 px-6 min-w-[200px] text-[14px] border border-gray-400 text-white bg-transparent transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-110 hover:shadow-md hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/40 active:translate-y-0"
            >
              <svg
                width="26"
                height="22"
                viewBox="0 0 26 22"
                aria-hidden="true"
                className="-ml-1 text-gray-400"
              >
                <path
                  d="M2 11h6"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
                <path
                  d="M9 11h7"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
                <path
                  d="M16 7l6 4-6 4"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Pitch Us!
            </a>
          </div>
        </div>
      </div>

      {/* ---------- LOTTIE COMO “GLOBO” À DIREITA (desktop only) ---------- */}
      <div
        aria-hidden
        className="hidden min-[1181px]:flex pointer-events-none absolute inset-y-0 right-[120px] items-center justify-center"
      >
        <Lottie
          animationData={pitchHeroAnimation}
          loop
          autoplay
          className="w-[400px] lg:w-[460px] xl:w-[520px] 2xl:w-[560px] h-auto translate-y-[0px]"
        />
      </div>
    </section>
  );
};

export default PitchHero;
