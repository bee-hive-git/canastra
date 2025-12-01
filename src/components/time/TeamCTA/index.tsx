"use client";

export default function TeamCta() {
  const HILIGHT = "#FF624D";
  const BG = "rgb(17, 4, 23)";

  return (
    <section id="team-cta" className="relative text-white" style={{ backgroundColor: BG }}>
      <style jsx global>{`
        /* scrollbar */
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        #team-cta .session-line {
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

        #team-cta .card {
          position: relative;
          border-radius: 16px;
          background: rgba(0, 0, 0, 0.08);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
        }

        #team-cta .card::before,
        #team-cta .card::after {
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

        #team-cta .card::before {
          top: 0;
        }
        #team-cta .card::after {
          bottom: 0;
        }

        /* Tipografia base */
        #team-cta .title {
          font-family: "Crimson Text", serif;
          font-weight: 700;
          text-align: center;
          line-height: 1.18;
        }

        #team-cta .subtitle {
          font-family: "Hanken Grotesk", sans-serif;
          font-weight: 300;
          text-align: center;
          line-height: 1.3;
        }

        /* DESKTOP — versão moderada, SEM QUEBRAS */
        @media (min-width: 820px) {
          #team-cta .title {
            font-size: clamp(28px, 2.4vw, 42px);
          }

          #team-cta .subtitle {
            font-size: clamp(16px, 1.6vw, 28px);
          }
        }
      `}</style>

      <div aria-hidden className="session-line" />

      <div className="py-8 min-[820px]:py-10">
        <div className="mx-auto px-5 min-[820px]:px-8 max-w-[920px]">
          <div className="card px-6 py-6 min-[820px]:px-10 min-[820px]:py-8 text-center">
            {/* TÍTULO */}
            <h1 className="title text-[22px] min-[820px]:text-[28px]">
              Em busca do seu{" "}
              <span className="italic font-semibold" style={{ color: HILIGHT }}>
                primeiro cheque?
              </span>
            </h1>

            {/* SUBTÍTULO */}
            <p className="subtitle mt-2 text-[14px] min-[820px]:text-[16px] text-white/90">
              Envie seu pitch e fale com nosso time de investimento!
            </p>

            <a
              href="/pitch-us#form-pitch"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-md font-semibold h-12 px-6 min-w-[200px] text-[14px] border-2 border-[#FF624D] bg-black text-white transition-all"
            >
              <svg width="26" height="22" viewBox="0 0 26 22" aria-hidden="true" className="-ml-1 text-[#FF624D]">
                <path d="M2 11h6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
                <path d="M9 11h7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
                <path d="M16 7l6 4-6 4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              Pitch Us!
            </a>
          </div>
        </div>
      </div>

      <div aria-hidden className="session-line" />
    </section>
  );
}
