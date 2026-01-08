// src/components/ai-eir/inscreva/index.tsx
"use client";

export default function Inscreva() {
  const HILIGHT = "#FF624D";
  const BG = "rgb(17, 4, 23)";

  return (
    <section id="inscreva" className="relative text-white" style={{ backgroundColor: BG }}>
      <style jsx global>{`
        #inscreva .session-line {
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
        #inscreva .card {
          position: relative;
          border-radius: 16px;
          background: rgba(0, 0, 0, 0.08);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
        }
        #inscreva .card::before,
        #inscreva .card::after {
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
        #inscreva .card::before {
          top: 0;
        }
        #inscreva .card::after {
          bottom: 0;
        }
      `}</style>

      {/* linha superior */}
      <div aria-hidden className="session-line" />

      {/* ------------ MOBILE ------------ */}
      <div className="px-5 py-10 text-center min-[820px]:hidden">
        <div className="mx-auto max-w-[540px]">
          <h1 className="font-serif text-[30px] leading-tight">
            Inscreva-se agora no{" "}
            <span className="italic font-semibold" style={{ color: HILIGHT }}>
              AI EiR
            </span>
          </h1>

          <p className="mt-3 text-[16px] text-white/90">
            Venha construir sua startup de IA com a gente!
          </p>

          <div className="mt-6 flex items-center justify-center gap-5">
            <span className="h-px w-20 bg-white/30" />
            <a
              href="https://forms.gle/BjEZU9quVQq8LSXg7"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center justify-center gap-2
                rounded-md font-semibold h-10 px-4 min-w-[140px] text-[14px]
                border-2 border-[#FF624D] bg-black text-white
                transition-all duration-200 ease-out
                hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-110
                hover:shadow-md hover:shadow-black/40
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60
                active:translate-y-0
              `}
            >
              <svg width="22" height="18" viewBox="0 0 26 22" className="-ml-1 text-[#FF624D]" aria-hidden>
                <path d="M2 11h6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
                <path d="M9 11h7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
                <path d="M16 7l6 4-6 4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              Apply AI EiR
            </a>
            <span className="h-px w-20 bg-white/30" />
          </div>
        </div>
      </div>

      {/* ------------ DESKTOP ------------ */}
      <div className="hidden min-[820px]:block py-12">
        <div className="mx-auto px-6 max-w-[720px]">
          <div className="card px-8 py-10 text-center">
            <h1 className="font-serif text-[40px] leading-tight">
              Inscreva-se agora no{" "}
              <span className="italic font-semibold" style={{ color: HILIGHT }}>
                AI EiR
              </span>
            </h1>

            <p className="mt-3 text-[18px] text-white/90">
              Venha construir sua startup de IA com a gente!
            </p>

            <a
              href="https://forms.gle/BjEZU9quVQq8LSXg7"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                mt-6 inline-flex items-center justify-center gap-2
                rounded-md font-semibold h-12 px-5 min-w-[200px] text-[15px]
                border-2 border-[#FF624D] bg-black text-white
                transition-all duration-200 ease-out
                hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-110
                hover:shadow-md hover:shadow-black/40
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60
                active:translate-y-0
              `}
            >
              <svg width="26" height="22" viewBox="0 0 26 22" className="-ml-1 text-[#FF624D]" aria-hidden>
                <path d="M2 11h6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
                <path d="M9 11h7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
                <path d="M16 7l6 4-6 4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              Apply AI EiR
            </a>
          </div>
        </div>
      </div>

      {/* linha inferior */}
      <div aria-hidden className="session-line" />
    </section>
  );
}
