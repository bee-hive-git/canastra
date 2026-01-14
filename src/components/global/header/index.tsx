"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

type NavItem = { label: string; href: string; exact?: boolean };

const NAV: NavItem[] = [
  { label: "Home", href: "/", exact: true },
  { label: "Time", href: "/time#team-hero" },
  { label: "AI EiR", href: "/ai-eir" },
  { label: "Pitch Us!", href: "/pitch-us" },
  { label: "Recursos", href: "https://canastraventures.notion.site/diskette-by-canastra-ventures" },
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
    const isExternal = href.startsWith("http");

    return (
      <Link
        href={href}
        prefetch={!isAnchor && !isExternal}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
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
      className="fixed inset-x-0 top-0 z-50 pointer-events-none"
    >
      <style jsx global>{`
        /* Universal Padding */
        @media (min-width: 820px) {
           #site-header .deskbar {
             padding-left: var(--site-padding-left);
             padding-right: var(--site-padding-right);
           }
        }

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
          className="absolute right-4 text-white pointer-events-auto"
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
      <div
        className="deskbar hidden min-[820px]:flex h-16 items-center justify-between px-10 pointer-events-auto"
        style={{ backgroundColor: BG }}
      >
        <Link
          href="/"
          prefetch
          aria-label="Ir para a Home"
          className="inline-flex items-center"
        >
          <Image
            src="/header/logo.png"
            alt="Canastra Ventures"
            width={150}
            height={40}
            className="logo w-auto h-[32px] sm:h-[40px] cursor-pointer object-contain"
            priority
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
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 min-[820px]:hidden pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* backdrop escuro */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={close}
            />

            {/* painel laranja à direita */}
            <motion.nav
              aria-label="Menu"
              className="absolute right-0 top-0 h-full w-[78%] max-w-[360px] flex flex-col px-4"
              style={{ backgroundColor: ORANGE }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
            >
              {/* Inner Bordered Grid Container */}
              <div className="relative flex flex-col w-full h-full border-x border-white/40">
                {/* Linha superior extendida */}
                <div className="absolute top-0 left-[-16px] right-[-16px] h-px bg-white/40" />

                {/* topo: x */}
                <div className="relative flex items-center justify-end p-6">
                  <div className="absolute bottom-0 left-[-16px] right-[-16px] h-px bg-white/40" />
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
                <div className="flex-1 px-6 py-6 overflow-y-auto">
                  <ul className="space-y-3">
                    {NAV.map((item) => {
                      const active = isActive(item.href, item.exact);
                      const isAnchor = item.href.startsWith("#");
                      const isExternal = item.href.startsWith("http");
                      return (
                        <li key={`m-${item.label}`}>
                          <Link
                            href={item.href}
                            prefetch={!isAnchor && !isExternal}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            onClick={close}
                            aria-current={active ? "page" : undefined}
                            className={`
                            block 
                            text-white 
                            font-serif 
                            text-xl sm:text-2xl
                            leading-[1.8]
                          `}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* rodapé: redes + texto newsletter */}
                {/* Linha horizontal extendida para fora do container interno */}
                <div className="relative">
                  <div className="absolute top-0 left-[-16px] right-[-16px] h-px bg-white/40" />
                  <div className="absolute bottom-0 left-[-16px] right-[-16px] h-px bg-white/40" />
                  <div className="p-6 flex flex-col gap-3">
                    <div className="flex items-center gap-4">
                      {/* Instagram */}
                      <a
                        href="https://www.instagram.com/canastra.ventures/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Perfil oficial no Instagram"
                        className="text-white opacity-100 hover:opacity-80 transition-opacity duration-300"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </a>

                      {/* LinkedIn */}
                      <a
                        href="https://www.linkedin.com/school/canastra-ventures/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Perfil profissional no LinkedIn"
                        className="text-white opacity-100 hover:opacity-80 transition-opacity duration-300"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </a>

                      {/* Substack */}
                      <a
                        href="https://canastraventures.substack.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Substack"
                        className="text-white opacity-100 hover:opacity-80 transition-opacity duration-300 flex items-center"
                      >
                        <Image
                          src="/elements/substack_wordmark.png"
                          alt="Substack"
                          width={90}
                          height={20}
                          className="h-5 w-auto brightness-0 invert"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
