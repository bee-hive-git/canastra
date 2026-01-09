// src/components/pitch-us/ask/index.tsx
"use client";

import Image from "next/image";

export default function Ask() {
  const HILIGHT = "#FF624D";
  const BG = "rgb(17, 4, 23)";

  return (
    <section id="ask" className="relative text-white overflow-x-hidden" style={{ backgroundColor: BG }}>
      <style jsx global>{`
        #ask .session-line {
          height: 1px;
          width: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 98, 77, 0) 0%,
            rgba(255, 98, 77, 0.35) 20%,
            rgba(255, 98, 77, 0.85) 50%,
            rgba(255, 98, 77, 0.35) 80%,
            rgba(255, 98, 77, 0) 100%
          );
        }

        #ask .card {
          position: relative;
          border-radius: 16px;
          background: rgba(0, 0, 0, 0.08);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
        }
        #ask .card::before,
        #ask .card::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(255, 98, 77, 0) 0%,
            rgba(255, 98, 77, 0.35) 20%,
            rgba(255, 98, 77, 0.85) 50%,
            rgba(255, 98, 77, 0.35) 80%,
            rgba(255, 98, 77, 0) 100%
          );
        }
        #ask .card::before {
          top: 0;
        }
        #ask .card::after {
          bottom: 0;
        }

        @media (min-width: 1181px) and (max-width: 1439px) {
          #ask .wrap {
            margin-left: 26px;
          }
        }
        @media (min-width: 1440px) {
          #ask .wrap {
            margin-left: 40px;
          }
        }
      `}</style>

      {/* topo sessão */}
      <div aria-hidden className="session-line" />

      {/* MOBILE */}
      <div className="min-[820px]:hidden px-5 py-10">
        <div className="mx-auto max-w-[560px] text-center">
          <h2
            className="text-[26px] leading-snug"
            style={{
              fontFamily: '"Crimson Text", serif',
              fontWeight: 700,
            }}
          >
            Em busca do seu
            <br />
            <span className="italic font-semibold" style={{ color: HILIGHT }}>
              primeiro cheque?
            </span>
          </h2>

          <p
            className="mt-3 text-white/90 text-[16px]"
            style={{
              fontFamily: '"Hanken Grotesk", sans-serif',
              fontWeight: 300,
              lineHeight: "1.3",
            }}
          >
            Envie seu pitch e fale com nosso time de investimento!
          </p>

          <div className="mt-6 flex items-center justify-center gap-5">
            <span className="h-px w-20 bg-white/30" />
            <a
              href="https://forms.gle/FRAutKQbJt4wvCuR7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md font-semibold h-12 px-6 min-w-[160px] text-[15px] border-2 border-[#FF624D] bg-black text-white transition-all duration-200 ease-out whitespace-nowrap hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-110 hover:shadow-md hover:shadow-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60 active:translate-y-0"
            >
              <Image
                src="/elements/arrow-icon.png"
                width={26}
                height={22}
                alt=""
                className="-ml-1"
              />
              Inscreva-se
            </a>
            <span className="h-px w-20 bg-white/30" />
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden min-[820px]:block py-10">
        <div className="mx-auto px-8 max-w-[920px]">
          <div className="card px-10 py-8 text-center">
            <h1
              className="leading-tight text-[32px]"
              style={{
                fontFamily: '"Crimson Text", serif',
                fontWeight: 700,
              }}
            >
              Em busca do seu{" "}
              <span className="italic" style={{ color: HILIGHT }}>
                primeiro cheque?
              </span>
            </h1>

            <p
              className="mt-2 text-white/90 text-[17px]"
              style={{
                fontFamily: '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 300,
                lineHeight: "1.09",
                textAlign: "center",
              }}
            >
              Envie seu pitch e fale com nosso time de investimento!
            </p>

            <a
              href="https://forms.gle/FRAutKQbJt4wvCuR7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-md font-semibold h-12 px-6 min-w-[200px] text-[14px] border-2 border-[#FF624D] bg-black text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-110 hover:shadow-md hover:shadow-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60 active:translate-y-0"
            >
              <Image
                src="/elements/arrow-icon.png"
                width={26}
                height={22}
                alt=""
                className="-ml-1"
              />
              Inscreva-se
            </a>
          </div>
        </div>
      </div>

      {/* base sessão */}
      <div aria-hidden className="session-line" />
    </section>
  );
}
