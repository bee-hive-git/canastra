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
        /* alinhar início/fim do conteúdo com Hero e Time no DESKTOP */
        @media (min-width: 1181px) and (max-width: 1439px) {
          #footer .wrap {
            margin-left: 26px;
            padding-left: 56px;
            padding-right: 64px;
          }
        }
        @media (min-width: 1440px) {
          #footer .wrap {
            margin-left: 40px;
            padding-left: 84px;
            padding-right: 72px;
          }
        }

        /* ajustes de tipografia e respiro para telas grandes (seu código original) */
        @media (min-width: 1440px) {
          #footer .col h3 {
            font-size: 18px;
          }
          #footer .col p,
          #footer .col a {
            font-size: 17px;
            line-height: 1.9;
          }
          #footer .logo {
            height: 52px;
          }
          #footer .legal {
            font-size: 15px;
          }
          #footer .wrap {
            padding-top: 80px;
            padding-bottom: 80px;
          }
        }
      `}</style>

      {/* wrap agora ocupa a mesma “largura útil” do Time/Hero no desktop */}
      <div className="wrap mx-auto max-w-[1840px] px-5 py-12 min-[820px]:py-16">
        {/* Grid base em ≥820px */}
        <div className="min-[820px]:grid min-[820px]:grid-cols-12 min-[820px]:gap-10">
          {/* Escritório */}
          <div className="col min-[820px]:col-span-3">
            <h3
              className="text-[16px] font-semibold"
              style={{ color: ACCENT }}
            >
              Escritório
            </h3>
            <p className="mt-2 text-white/85 text-[15px] leading-relaxed max-[360px]:text-[14px]">
              Rua Dr. Renato Paes de Barros, 33 – 14º andar |
              <br />
              Itaim Bibi | São Paulo/SP | CEP 01239-030
            </p>
            <div className="my-5 h-px bg-gradient-to-r from-white/10 via-white/30 to-white/10 min-[820px]:hidden" />
          </div>

          {/* Contato */}
          <div className="col min-[820px]:col-span-3">
            <h3
              className="text-[16px] font-semibold"
              style={{ color: ACCENT }}
            >
              Contato
            </h3>
            <p className="mt-2 text-white/85 text-[15px] leading-relaxed max-[360px]:text-[14px]">
              <span className="text-white/85">contato@canastra.ventures</span>
              <br />
              +55 31 99457 4757
            </p>
            <div className="my-5 h-px bg-gradient-to-r from-white/10 via-white/30 to-white/10 min-[820px]:hidden" />
          </div>

          {/* Links */}
          <div className="col min-[820px]:col-span-3 min-[1120px]:col-span-2">
            <h3
              className="text-[16px] font-semibold"
              style={{ color: ACCENT }}
            >
              Links
            </h3>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[15px] max-[360px]:text-[14px] min-[820px]:block">
              <li className="min-[820px]:mb-1">
                <Link href="/time" prefetch className={linkBase}>
                  Time
                </Link>
              </li>
              <li className="min-[820px]:mb-1">
                <Link href="/ai-eir" prefetch className={linkBase}>
                  AI EiR
                </Link>
              </li>
              <li className="min-[820px]:mb-1">
                <Link href="/portfolio" prefetch className={linkBase}>
                  Portfólio
                </Link>
              </li>
              <li className="min-[820px]:mb-1">
                <Link href="/pitch-us" prefetch className={linkBase}>
                  Pitch us!
                </Link>
              </li>
              <li className="min-[820px]:mb-0">
                {/* placeholder, ainda não leva para página real */}
                <Link href="#nascers" prefetch={false} className={linkBase}>
                  Recursos
                </Link>
              </li>
            </ul>
            <div className="my-5 h-px bg-gradient-to-r from-white/10 via-white/30 to-white/10 min-[820px]:hidden" />
          </div>

          {/* Card redes / newsletter */}
          <div className="col min-[820px]:col-span-3 min-[1120px]:col-span-4">
            {/* Desktop */}
            <div className="hidden min-[820px]:block rounded-xl bg-white/6 border border-white/10 p-5 min-[1120px]:p-5">
              <h3
                className="text-[16px] font-semibold"
                style={{ color: ACCENT }}
              >
                Conecte-se com a gente
              </h3>
              <ul className="mt-2 space-y-1 text-[15px] min-[1120px]:space-y-[2px]">
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

              <div className="my-4 h-px bg-gradient-to-r from-white/10 via-white/30 to-white/10 min-[1120px]:my-3" />

              <h3
                className="text-[16px] font-semibold"
                style={{ color: ACCENT }}
              >
                Inscreva-se na nossa newsletter
              </h3>
              <a
                href="#newsletter"
                className={`${linkBase} mt-2 inline-block`}
              >
                Canastra Newsletter
              </a>
            </div>

            {/* Mobile/Tablet */}
            <div className="min-[820px]:hidden">
              <h3
                className="text-[16px] font-semibold"
                style={{ color: ACCENT }}
              >
                Conecte-se com a gente
              </h3>
              <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[15px] max-[360px]:text-[14px]">
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

              <h3
                className="text-[16px] font-semibold"
                style={{ color: ACCENT }}
              >
                Inscreva-se na nossa newsletter
              </h3>
              <a
                href="#newsletter"
                className={`${linkBase} mt-2 inline-block`}
              >
                Canastra Newsletter
              </a>

              <div className="my-5 h-px bg-gradient-to-r from-white/10 via-white/30 to-white/10" />
            </div>
          </div>
        </div>

        {/* Logo + copyright */}
        <div className="mt-10 min-[820px]:mt-14">
          <img
            src="/footer/logo.png"
            alt="Canastra Ventures"
            className="logo h-10 min-[820px]:h-11 w-auto select-none pointer-events-none"
            draggable={false}
          />
          <p className="legal mt-4 text-white/85 text-[14px]">
            © 2025 Canastra Ventures. Todos os direitos reservados.
          </p>
        </div>

        {/* Linha final */}
        <div className="mt-8 h-px bg-gradient-to-r from-white/10 via-white/30 to-white/10" />
      </div>
    </footer>
  );
}
