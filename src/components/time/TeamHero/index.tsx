"use client";

export default function TeamHero() {
  const HILIGHT = "#FF624D";
  const BG = "rgb(17, 4, 23)";

  return (
    <section
      id="team-hero"
      className="relative text-white min-h-[100dvh] pt-16 min-[820px]:pt-24"
      style={{ backgroundColor: BG }}
    >
      <style jsx global>{`
        @media (min-width: 1181px) and (max-width: 1439px) {
          #team-hero .wrap {
            margin-left: 26px;
          }
        }
        @media (min-width: 1440px) {
          #team-hero .wrap {
            margin-left: 40px;
          }
        }
      `}</style>

      {/* ---------- MOBILE / TABLET (até 819px) ---------- */}
      <div className="mx-auto max-w-[560px] px-5 py-8 text-center flex flex-col items-center min-[820px]:hidden">
        <h1 className="font-serif text-[28px] leading-tight mb-3">
          Nosso Time
        </h1>

        <h2 className="font-serif text-[18px] leading-snug mb-3">
          Um time que investe nos{" "}
          <span className="italic font-semibold" style={{ color: HILIGHT }}>
            Founders
          </span>{" "}
          que estão construindo o{" "}
          <span className="italic font-semibold" style={{ color: HILIGHT }}>
            futuro da IA
          </span>{" "}
          no Brasil.
        </h2>

        <p className="text-white/85 text-[14px] leading-relaxed max-w-[46ch] mx-auto mb-6">
          Somos <em>investidores</em> e também <em>empreendemos</em>:
          entendemos na prática o que é construir do zero e o valor de uma{" "}
          <em>parceria</em> que não falha. Criando uma{" "}
          <em>startup de IA</em> e buscando seu primeiro cheque? Conte com
          nosso <em>time</em>.
        </p>

        <a
          href="/pitch-us#form-pitch"
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

      {/* ---------- DESKTOP (≥ 820px) ---------- */}
      <div className="wrap hidden min-[820px]:flex min-[820px]:items-center min-[820px]:justify-between min-[820px]:max-w-[1120px] min-[820px]:mx-auto min-[820px]:px-8 min-[820px]:min-h-[calc(100dvh-96px)]">
        {/* ESQUERDA: textos */}
        <div className="max-w-[700px]">
          {/* H1 maior, todo branco */}
          <h1 className="font-serif leading-tight mb-4 text-[52px] min-[1181px]:text-[clamp(64px,5vw,80px)]">
            Nosso Time
          </h1>

          {/* H2: duas linhas fixas, bem grande */}
          <h2 className="font-serif text-[26px] min-[1181px]:text-[clamp(30px,2.6vw,38px)] leading-snug mb-5">
            <span className="block whitespace-nowrap">
              Um time que investe nos{" "}
              <span
                className="italic font-semibold"
                style={{ color: HILIGHT }}
              >
                Founders
              </span>{" "}
              que estão
            </span>
            <span className="block whitespace-nowrap">
              construindo o{" "}
              <span
                className="italic font-semibold"
                style={{ color: HILIGHT }}
              >
                futuro da IA
              </span>{" "}
              no Brasil.
            </span>
          </h2>

          {/* Parágrafo: duas linhas fixas, maior também */}
          <p className="mt-1 text-white/85 text-[18px] min-[1181px]:text-[clamp(20px,1.7vw,22px)] leading-relaxed">
            <span className="block whitespace-nowrap">
              Somos <em>investidores</em> e também{" "}
              <em>empreendemos</em>: entendemos na prática
            </span>
            <span className="block whitespace-nowrap">
              o que é construir do zero e o valor de uma{" "}
              <em>parceria</em> que não falha.
            </span>
          </p>
        </div>

        {/* DIREITA: ilustração ocupando a faixa vertical */}
        <div className="select-none pointer-events-none flex items-center justify-end pr-2 lg:pr-6 xl:pr-10 2xl:pr-14">
          <img
            src="/time/hero/illustration.png"
            alt=""
            className="h-[78vh] max-h-[680px] w-auto object-contain"
            loading="eager"
            decoding="async"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
