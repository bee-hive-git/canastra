// src/components/pitch-us/ask/index.tsx
"use client";

export default function Ask() {
  const HILIGHT = "#FF624D";
  const BG = "rgb(17, 4, 23)";

  return (
    <section id="ask" className="relative text-white" style={{ backgroundColor: BG }}>
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
            Construindo uma{" "}
            <span className="italic font-semibold" style={{ color: HILIGHT }}>
              startup de IA
            </span>{" "}
            e em busca do primeiro cheque? Queremos muito te conhecer.
          </h2>

          <div className="mt-6 flex items-center justify-center gap-5">
            <span className="h-px w-20 bg-white/30" />
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
              href="#form-pitch"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-md font-semibold h-12 px-6 min-w-[200px] text-[14px] border-2 border-[#FF624D] bg-black text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-110 hover:shadow-md hover:shadow-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60 active:translate-y-0"
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
      </div>

      {/* base sessão */}
      <div aria-hidden className="session-line" />
    </section>
  );
}
