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
          #team-hero .wrap { margin-left: 26px; }
        }
        @media (min-width: 1440px) {
          #team-hero .wrap { margin-left: 40px; }
        }
      `}</style>

      {/* MOBILE (conteúdo + botão preto/laranja) */}
      <div className="mx-auto max-w-[560px] px-5 py-8 text-center flex flex-col items-center min-[820px]:hidden">
        <h1 className="font-serif text-[28px] leading-tight mb-3">
          Nosso <span className="italic font-semibold" style={{ color: HILIGHT }}>Time</span>
        </h1>

        <h2 className="font-serif text-[18px] leading-snug mb-3">
          Um <span className="italic" style={{ color: HILIGHT }}>time</span> que investe nos{" "}
          <span className="italic font-semibold" style={{ color: HILIGHT }}>Founders</span> que estão construindo o{" "}
          <span className="italic font-semibold" style={{ color: HILIGHT }}>futuro da IA</span> no Brasil.
        </h2>

        <p className="text-white/85 text-[14px] leading-relaxed max-w-[46ch] mx-auto mb-6">
          Somos <em>investidores</em> e também <em>empreendemos</em>: entendemos na prática o que é construir do zero
          e o valor de uma <em>parceria</em> que não falha. Criando uma <em>startup de IA</em> e buscando seu primeiro
          cheque? Conte com nosso <em>time</em>.
        </p>

        <a
          href="/pitch-us#form-pitch"
          className="inline-flex items-center justify-center gap-2 rounded-md font-semibold h-12 px-5 min-w-[160px] text-[14px] border-2 border-[#FF624D] bg-black text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-110 hover:shadow-md hover:shadow-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60 active:translate-y-0"
        >
          <svg width="26" height="22" viewBox="0 0 26 22" aria-hidden="true" className="-ml-1 text-[#FF624D]">
            <path d="M2 11h6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
            <path d="M9 11h7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
            <path d="M16 7l6 4-6 4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          Pitch Us!
        </a>
      </div>

      {/* DESKTOP (com botão transparente/borda cinza-claro) */}
      <div className="wrap hidden min-[820px]:flex min-[820px]:items-center min-[820px]:justify-between min-[820px]:max-w-[1120px] min-[820px]:mx-auto min-[820px]:px-8 min-[820px]:min-h-[calc(100dvh-96px)]">
        {/* Esquerda: textos */}
        <div className="max-w-[620px]">
          <h1 className="font-serif text-[40px] leading-tight mb-3">
            Nosso <span className="italic font-semibold" style={{ color: HILIGHT }}>Time</span>
          </h1>
          <h2 className="font-serif text-[22px] leading-snug">
            <span className="block">
              Um time que investe nos <span className="italic font-semibold" style={{ color: HILIGHT }}>Founders</span>
            </span>
            <span className="block">
              que estão construindo o <span className="italic font-semibold" style={{ color: HILIGHT }}>futuro da IA</span> no Brasil.
            </span>
          </h2>
          <p className="mt-3 text-white/85 text-[15px] leading-relaxed max-w-[56ch]">
            Somos <em>investidores</em> e também <em>empreendemos</em>: entendemos na prática o que é construir do zero
            e o valor de uma <em>parceria</em> que não falha.
          </p>

          {/* Botão desktop (mesmo estilo do seu PitchHero desktop) */}
          <div className="mt-7">
            <a
              href="/pitch-us#form-pitch"
              className="inline-flex items-center justify-center gap-2 rounded-md font-semibold h-12 px-6 min-w-[200px] text-[14px] border border-gray-400 text-white bg-transparent transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-110 hover:shadow-md hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/40 active:translate-y-0"
            >
              <svg width="26" height="22" viewBox="0 0 26 22" aria-hidden="true" className="-ml-1 text-gray-400">
                <path d="M2 11h6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
                <path d="M9 11h7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
                <path d="M16 7l6 4-6 4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              Pitch Us!
            </a>
          </div>
        </div>

        {/* Direita: ilustração */}
        <div className="select-none pointer-events-none pr-2 lg:pr-6 xl:pr-10 2xl:pr-14">
          <img
            src="/time/hero/illustration.png"
            alt=""
            className="w-[440px] lg:w-[520px] xl:w-[600px] 2xl:w-[660px] h-auto object-contain"
            loading="eager"
            decoding="async"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
