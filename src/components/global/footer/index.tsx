"use client";

import Link from "next/link";
import Logo from "../../../../public/footer/logo.svg";

export default function Footer() {
  const ACCENT = "#FF624D";
  const BG = "rgb(17, 4, 23)";
  const linkBase =
    "text-white/85 transition-colors hover:text-white";

  return (
    <footer id="footer" className="text-white" style={{ backgroundColor: BG }}>
      <div className="w-full h-[1px] bg-white/20" />
      <div className="wrap w-full px-5 py-12 min-[820px]:py-12 text-left min-[820px]:px-0 min-[820px]:pl-[var(--site-padding-left)] min-[820px]:pr-[var(--site-padding-right)]">
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 min-[820px]:grid-cols-12 min-[820px]:gap-10">
          <div className="col-span-1 min-[820px]:col-span-3">
            <h3
              className="text-[16px] font-semibold"
              style={{ color: ACCENT }}
            >
              Escritório
            </h3>
            <p className="mt-2 text-white/85 text-[15px] leading-relaxed max-[360px]:text-[14px]">
              São Paulo, SP – Brasil
            </p>
          </div>

          <div className="col-span-1 min-[820px]:col-span-3">
            <h3
              className="text-[16px] font-semibold"
              style={{ color: ACCENT }}
            >
              Contato
            </h3>
            <div className="mt-2 text-white/85 text-[15px] leading-relaxed max-[360px]:text-[14px] flex flex-row flex-wrap gap-4 min-[820px]:flex-col min-[820px]:gap-0">
              <span className="text-white/85">contato@canastra.ventures</span>
              <span>+55 31 99457 4757</span>
            </div>
          </div>

          <div className="col-span-1 min-[820px]:col-span-2">
            <h3
              className="text-[16px] font-semibold"
              style={{ color: ACCENT }}
            >
              Links
            </h3>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[15px] max-[360px]:text-[14px] min-[820px]:block">
              <li className="min-[820px]:mb-1">
                <Link href="/" prefetch className={linkBase}>
                  Home
                </Link>
              </li>
              <li className="min-[820px]:mb-1">
                <Link href="/time#team-hero" prefetch className={linkBase}>
                  Time
                </Link>
              </li>
              <li className="min-[820px]:mb-1">
                <Link href="/ai-eir" prefetch className={linkBase}>
                  AI EiR
                </Link>
              </li>
              <li className="min-[820px]:mb-1">
                <Link href="/pitch-us" prefetch className={linkBase}>
                  Pitch Us!
                </Link>
              </li>
              <li className="min-[820px]:mb-0">
                <a
                  href="https://canastraventures.notion.site/floppy-by-canastra-ventures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkBase}
                >
                  Recursos
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 min-[820px]:col-span-4">
            <div className="hidden min-[820px]:block rounded-xl bg-white/6 border border-white/10 p-5 min-[1120px]:p-5">
              <h3
                className="text-[16px] font-semibold"
                style={{ color: ACCENT }}
              >
                Conecte-se com a gente
              </h3>
              <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[15px]">
                <li>
                  <a
                    href="https://www.instagram.com/canastra.ventures/"
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
                <li>
                  <a
                    href="https://luma.com/canastra.ventures?k=c&period=past"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkBase}
                  >
                    Luma
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
                href="https://canastraventures.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkBase} mt-2 inline-block`}
              >
                Canastra Newsletter
              </a>
            </div>

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
                    href="https://www.instagram.com/canastra.ventures/"
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
                <li>
                  <a
                    href="https://luma.com/canastra.ventures?k=c&period=past"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkBase}
                  >
                    Luma
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
                href="https://canastraventures.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkBase} mt-2 inline-block`}
              >
                Canastra Newsletter
              </a>

              <div className="my-5 h-px bg-gradient-to-r from-white/10 via-white/30 to-white/10" />
            </div>
          </div>
        </div>

        <div className="mt-8 min-[820px]:-mt-16 text-left block">
          <Logo
            className="logo h-9 min-[820px]:h-10 w-auto max-w-full select-none pointer-events-none"
            role="img"
            aria-label="Canastra Ventures"
          />

          <p className="legal mt-4 text-white/85 text-[14px]">
            © 2026 Canastra Ventures. Todos os direitos reservados.
          </p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white/20" />
    </footer>
  );
}
