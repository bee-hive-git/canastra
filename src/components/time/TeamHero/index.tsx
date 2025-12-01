"use client";

export default function TeamHero() {
  const HILIGHT = "#FF624D";
  const BG = "rgb(17, 4, 23)";

  return (
    <section
      id="team-hero"
      data-edge-section
      className="relative text-white pt-8 pb-8 min-[820px]:pt-10 min-[820px]:pb-10"
      style={{ backgroundColor: BG }}
    >
      <style jsx global>{`
        @media (min-width: 1181px) and (max-width: 1439px) {
          #team-hero .wrap {
            margin-left: 26px;
            padding-left: 56px;
            padding-right: 64px;
          }
        }
        @media (min-width: 1440px) {
          #team-hero .wrap {
            margin-left: 40px;
            padding-left: 84px;
            padding-right: 72px;
          }
        }
      `}</style>

      {/* ---------- MOBILE ---------- */}
      <div className="mx-auto max-w-[560px] px-5 py-4 text-center flex flex-col items-center min-[820px]:hidden">
        <h1 className="font-serif text-[30px] leading-tight mb-2">Nosso Time</h1>

        <h2 className="font-serif text-[20px] leading-snug mb-2">
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

        <p className="text-white/85 text-[15px] leading-relaxed max-w-[46ch] mx-auto mb-4">
          Somos <em>investidores</em> e também <em>empreendemos</em>:
          entendemos na prática o valor de uma <em>parceria</em>.
        </p>

        <a
          href="/pitch-us#form-pitch"
          className="inline-flex items-center justify-center gap-2 rounded-md font-semibold h-12 px-5 min-w-[160px] text-[15px] border-2 border-[#FF624D] bg-black text-white transition-all duration-200 ease-out"
        >
          Pitch Us!
        </a>
      </div>

      {/* ---------- DESKTOP ---------- */}
      <div className="wrap hidden min-[820px]:flex min-[820px]:items-center min-[820px]:justify-between min-[820px]:gap-10 min-[820px]:max-w-[1840px] min-[820px]:mx-auto min-[820px]:px-5 min-[820px]:pl-10 min-[820px]:pr-6 lg:pl-8 xl:pl-6 2xl:pl-5">
        
        {/* ESQUERDA: TEXTOS */}
        <div className="flex-[0_0_50%] max-w-[680px]">
          <h1 className="font-serif leading-tight mb-3 text-[52px] min-[1181px]:text-[clamp(64px,5vw,80px)]">
            Nosso Time
          </h1>

          <h2 className="font-serif text-[26px] min-[1181px]:text-[clamp(30px,2.6vw,38px)] leading-snug mb-4">
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

          <p className="mt-1 text-white/85 text-[18px] min-[1181px]:text-[clamp(20px,1.7vw,22px)] leading-relaxed">
            <span className="block whitespace-nowrap">
              Somos <em>investidores</em> e também <em>empreendemos</em>:
            </span>
            <span className="block whitespace-nowrap">
              entendemos na prática o que é construir do zero.
            </span>
          </p>
        </div>

        {/* DIREITA: IMAGEM GRANDE & ENCOSTADA */}
        <div className="flex-1 flex items-center justify-end pr-0 lg:pr-4 xl:pr-6 2xl:pr-8 mr-0 lg:mr-[-32px] xl:mr-[-64px] 2xl:mr-[-96px]">
          <img
            src="/time/hero/time.png"
            alt="Ilustração do time da Canastra"
            className="w-auto h-[58vh] min-[1024px]:h-[62vh] min-[1440px]:h-[68vh] max-h-[760px] object-contain"
            loading="eager"
            decoding="async"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
