"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string; exact?: boolean };

const NAV: NavItem[] = [
  { label: "Home", href: "/", exact: true },
  { label: "Time", href: "/time" },
  { label: "AI EiR", href: "/ai-eir" },
  { label: "Pitch Us!", href: "/pitch-us" },      // penúltimo
  { label: "Recursos", href: "#nascers" },        // placeholder
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  const BG = "rgb(17, 4, 23)";
  const ORANGE = "#FF624D";

  // Fecha o menu ao trocar de rota
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Rota ativa
  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : href !== "/" && pathname?.startsWith(href);

  const Item = ({ label, href, exact }: NavItem) => {
    const active = isActive(href, exact);
    const base =
      "transition-colors text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm";
    const isAnchor = href.startsWith("#");

    return (
      <Link
        href={href}
        prefetch={!isAnchor}
        aria-current={active ? "page" : undefined}
        className={base + (active ? " text-white" : "")}
      >
        {label}
      </Link>
    );
  };

  return (
    <header
      id="site-header"
      data-edge-section
      className="fixed inset-x-0 top-0 z-50"
      style={{ backgroundColor: BG }}
    >
      <style jsx global>{`
        @media (min-width: 1181px) and (max-width: 1439px) {
          #site-header .deskbar {
            height: 78px;
          }
          #site-header .logo {
            height: 42px;
          }
        }
        @media (min-width: 1440px) {
          #site-header .deskbar {
            height: 92px;
          }
          #site-header .logo {
            height: 48px;
          }
        }
      `}</style>

      {/* MOBILE TOP BAR */}
      <div className="relative h-16 min-[820px]:hidden">
        <button
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
          className="absolute right-4 text-white"
          style={{ top: "1.9rem" }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M3 5h18M3 9h18M3 13h18M3 17h18"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>
      </div>

      {/* DESKTOP */}
      <div className="deskbar hidden min-[820px]:flex h-16 items-center justify-between px-10">
        <Link
          href="/"
          prefetch
          aria-label="Ir para a Home"
          className="inline-flex items-center"
        >
          <img
            src="/header/logo.png"
            alt="Canastra Ventures"
            className="logo w-auto cursor-pointer"
          />
        </Link>

        <nav aria-label="Menu desktop">
          <ul className="flex items-center gap-8 text-sm">
            {NAV.map((item) => (
              <li key={item.label}>
                <Item {...item} />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* MOBILE: OVERLAY + LATERAL (mesma largura de antes) */}
      {open && (
        <div className="fixed inset-0 z-50 min-[820px]:hidden">
          {/* backdrop escuro */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={close}
          />

          {/* painel laranja à direita */}
          <nav
            aria-label="Menu"
            className="absolute right-0 top-0 h-full w-[78%] max-w-[360px] border-l border-white/10 p-6 flex flex-col"
            style={{ backgroundColor: ORANGE }}
          >
            {/* topo: x */}
            <div className="flex items-center justify-end mb-6">
              <button
                aria-label="Fechar menu"
                onClick={close}
                className="text-white"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </button>
            </div>

            {/* links grandes */}
            <ul className="space-y-3 flex-1">
              {NAV.map((item) => {
                const active = isActive(item.href, item.exact);
                const isAnchor = item.href.startsWith("#");
                return (
                  <li key={`m-${item.label}`}>
                    <Link
                      href={item.href}
                      prefetch={!isAnchor}
                      onClick={close}
                      aria-current={active ? "page" : undefined}
                      className={`
                        block 
                        text-white 
                        font-serif 
                        text-[26px]
                        leading-[1.8]
                      `}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* rodapé: redes + texto newsletter */}
            <div className="mt-6 pt-4 border-t border-white/40 flex flex-col gap-3">
              <div className="flex items-center gap-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/canastra.ventures/?hl=br"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Canastra Ventures"
                  className="text-white"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      fill="none"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      fill="none"
                    />
                    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/school/canastra-ventures/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Canastra Ventures"
                  className="text-white"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      fill="none"
                    />
                    <rect x="7" y="10" width="2" height="7" fill="currentColor" />
                    <circle cx="8" cy="7" r="1.2" fill="currentColor" />
                    <path
                      d="M12 17v-4.1c0-1 0.7-1.9 1.9-1.9 1.3 0 2.1.9 2.1 2.3V17"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </a>
              </div>

              <span className="text-[11px] tracking-[0.18em] uppercase text-white/90">
                CANASTRA NEWSLETTER
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
