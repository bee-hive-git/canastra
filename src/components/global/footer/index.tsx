"use client";

import Link from "next/link";

export default function Footer() {
  const ACCENT = "#FF624D";
  const BG = "rgb(17, 4, 23)";
  const linkBase =
    "text-white/85 underline decoration-white/40 underline-offset-[3px] transition-colors hover:text-white hover:decoration-white";

  return (
    <footer id="footer" className="text-white" style={{ backgroundColor: BG }}>
      <style jsx global>{`
        @media (min-width: 1440px) {
          #footer .col h3 { font-size: 17px; }
          #footer .col p, #footer .col a { font-size: 16px; line-height: 1.8; }
          #footer .logo { height: 48px; }
          #footer .legal { font-size: 14px; }
          #footer .wrap { padding-top: 72px; padding-bottom: 72px; }
        }
      `}</style>

      <div className="wrap mx-auto max-w-[1120px] px-5 py-10 min-[820px]:py-14">
        <div className="min-[820px]:grid min-[820px]:grid-cols-12 min-[820px]:gap-10">
          <div className="col min-[820px]:col-span-3">
            <h3 className="text-[15px] font-semibold" style={{ color: ACCENT }}>Escritório</h3>
            <p className="mt-2 text-white/85 text-[14px] leading-relaxed max-[360px]:text-[13px]">
              Rua Dr. Renato Paes de Barros, 33 – 14º andar |
              <br className="max-[820px]:block hidden" />
              Itaim Bibi | São Paulo/SP | CEP 01239-030
            </p>
            <div className="my-5 h-px bg-gradient-to-r from-white/10 via-white/30 to-white/10 min-[820px]:hidden" />
          </div>

          <div className="col min-[820px]:col-span-3">
            <h3 className="text-[15px] font-semibold" style={{ color: ACCENT }}>Contato</h3>
            <p className="mt-2 text-white/85 text-[14px] leading-relaxed max-[360px]:text-[13px]">
              <span className="text-white/85">contato@canastra.ventures</span>
              <br />
              +55 31 99457 4757
            </p>
            <div className="my-5 h-px bg-gradient-to-r from-white/10 via-white/30 to-white/10 min-[820px]:hidden" />
          </div>

          <div className="col min-[820px]:col-span-3">
            <h3 className="text-[15px] font-semibold" style={{ color: ACCENT }}>Links</h3>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[14px] max-[360px]:text-[13px] min-[820px]:block">
              <li className="min-[820px]:mb-1">
                {/* ✅ Link para /time */}
                <Link href="/time" prefetch className={linkBase}>Time</Link>
              </li>
              <li className="min-[820px]:mb-1">
                <Link href="/ai-eir" prefetch className={linkBase}>AI EiR</Link>
              </li>
              <li className="min-[820px]:mb-1">
                <Link href="/portfolio" prefetch className={linkBase}>Portfólio</Link>
              </li>
              <li className="min-[820px]:mb-0">
                <Link href="/pitch-us" prefetch className={linkBase}>Pitch us!</Link>
              </li>
            </ul>
            <div className="my-5 h-px bg-gradient-to-r from-white/10 via-white/30 to-white/10 min-[820px]:hidden" />
          </div>

          <div className="col min-[820px]:col-span-3">
            <div className="hidden min-[820px]:block rounded-xl bg-white/6 border border-white/10 p-5">
              <h3 className="text-[15px] font-semibold" style={{ color: ACCENT }}>Conecte-se com a gente</h3>
              <ul className="mt-2 space-y-1 text-[14px]">
                <li>
                  <a
                    href="https://www.instagram.com/canastra.ventures/?hl=br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkBase}
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/school/canastra-ventures/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkBase}
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>

              <div className="my-4 h-px bg-gradient-to-r from-white/10 via-white/30 to-white/10" />

              <h3 className="text-[15px] font-semibold" style={{ color: ACCENT }}>Inscreva-se na nossa newsletter</h3>
              <a href="#newsletter" className={`${linkBase} mt-2 inline-block`}>Canastra Newsletter</a>
            </div>

            <div className="min-[820px]:hidden">
              <h3 className="text-[15px] font-semibold" style={{ color: ACCENT }}>Conecte-se com a gente</h3>
              <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[14px] max-[360px]:text-[13px]">
                <li>
                  <a
                    href="https://www.instagram.com/canastra.ventures/?hl=br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkBase}
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/school/canastra-ventures/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkBase}
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>

              <div className="my-5 h-px bg-gradient-to-r from-white/10 via-white/30 to-white/10" />

              <h3 className="text-[15px] font-semibold" style={{ color: ACCENT }}>Inscreva-se na nossa newsletter</h3>
              <a href="#newsletter" className={`${linkBase} mt-2 inline-block`}>Canastra Newsletter</a>

              <div className="my-5 h-px bg-gradient-to-r from-white/10 via-white/30 to-white/10" />
            </div>
          </div>
        </div>

        <div className="mt-8 min-[820px]:mt-12">
          <img
            src="/footer/logo.png"
            alt="Canastra Ventures"
            className="logo h-9 min-[820px]:h-10 w-auto select-none pointer-events-none"
            draggable={false}
          />
          <p className="legal mt-4 text-white/85 text-[13px]">© 2025 Canastra Ventures. Todos os direitos reservados.</p>
        </div>

        <div className="my-6 h-px bg-gradient-to-r from-white/10 via-white/30 to-white/10" />

        <p className="col text-white/70 text-[13px] leading-relaxed max-w-[92ch] max-[360px]:text-[12px]">
          Atuamos como consultores especializados de fundos de investimento, oferecendo serviços na identificação,
          análise, estruturação e negociação de oportunidades de investimento. Também apoiamos empreendedores por meio
          de programas de residência, mentorias estratégicas e conexões com o ecossistema. Participamos de comitês
          estratégicos das empresas investidas e auxiliamos o fundo na preparação das informações exigidas para relatórios,
          conforme previsto no regulamento desses fundos. Para saber mais sobre a nossa atuação, entre em contato.
        </p>

        <div className="mt-6 h-px bg-gradient-to-r from-white/10 via-white/30 to-white/10" />
      </div>
    </footer>
  );
}
