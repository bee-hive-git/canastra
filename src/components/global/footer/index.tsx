"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const ACCENT = "#FF624D";
  const BG = "rgb(17, 4, 23)";
  const linkBase =
    "text-white/85 underline decoration-white/40 underline-offset-[3px] transition-colors hover:text-white hover:decoration-white";

  return (
    <footer id="footer" className="text-white" style={{ backgroundColor: BG }}>
      {/* wrap centralizado */}
      <div className="wrap mx-auto max-w-[1400px] px-5 min-[820px]:px-10 lg:px-16 py-12 min-[820px]:py-16 text-left">
        {/* Grid base em ≥820px */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 min-[820px]:grid-cols-12 min-[820px]:gap-10">
          {/* Escritório */}
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

          {/* Contato */}
          <div className="col-span-1 min-[820px]:col-span-3">
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
          </div>

          {/* Links */}
          <div className="col-span-2 min-[820px]:col-span-2">
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
                <Link href="/#newsletter" prefetch className={linkBase}>
                  Recursos
                </Link>
              </li>
            </ul>
          </div>

          {/* Card redes / newsletter */}
          <div className="col-span-2 min-[820px]:col-span-4">
            {/* Desktop */}
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
        <div className="mt-10 min-[820px]:mt-14 text-left">
          <Image
            src="/footer/logo.png"
            alt="Canastra Ventures"
            width={150}
            height={44}
            className="logo h-10 min-[820px]:h-11 w-auto select-none pointer-events-none object-contain"
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
