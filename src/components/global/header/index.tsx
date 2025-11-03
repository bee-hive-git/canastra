"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string; exact?: boolean };

const NAV: NavItem[] = [
  { label: "Home", href: "/", exact: true },
  { label: "Time", href: "/time" },
  { label: "AI EiR", href: "/ai-eir" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pitch us!", href: "/pitch-us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  const BG = "rgb(17, 4, 23)";

  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : (href !== "/" && pathname.startsWith(href));

  const Item = ({ label, href, exact }: NavItem) => {
    const active = isActive(href, exact);
    const base =
      "transition-colors text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm";
    return (
      <Link
        href={href}
        prefetch
        aria-current={active ? "page" : undefined}
        className={base + (active ? " text-white" : "")}
      >
        {label}
      </Link>
    );
  };

  return (
    // 👇 Adiciona data-edge-section aqui
    <header
      id="site-header"
      data-edge-section
      className="fixed inset-x-0 top-0 z-50"
      style={{ backgroundColor: BG }}
    >
      <style jsx global>{`
        @media (min-width: 1181px) and (max-width: 1439px) {
          #site-header .deskbar { height: 78px; }
          #site-header .logo { height: 42px; }
        }
        @media (min-width: 1440px) {
          #site-header .deskbar { height: 92px; }
          #site-header .logo { height: 48px; }
        }
      `}</style>

      {/* mobile */}
      <div className="relative h-16 min-[820px]:hidden">
        <button
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
          className="absolute right-4 text-white"
          style={{ top: "1.9rem" }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 5h18M3 9h18M3 13h18M3 17h18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          </svg>
        </button>
      </div>

      {/* desktop */}
      <div className="deskbar hidden min-[820px]:flex h-16 items-center justify-between px-10"> 
        {/* ↑ aumentei o padding de px-8 → px-10 para deslocar a logo ligeiramente à direita */}

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

      {open && (
        <div className="fixed inset-0 z-50 min-[820px]:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={close}
          />
          <nav
            aria-label="Menu"
            className="absolute right-0 top-0 h-full w-[78%] max-w-[360px] border-l border-white/10 p-6 flex flex-col"
            style={{ backgroundColor: BG }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-white/80 text-sm">Menu</span>
              <button aria-label="Fechar menu" onClick={close} className="text-white">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </button>
            </div>
            <ul className="space-y-1">
              {NAV.map((item) => {
                const active = isActive(item.href, item.exact);
                return (
                  <li key={`m-${item.label}`}>
                    <Link
                      href={item.href}
                      prefetch
                      onClick={close}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-lg px-3 py-3 text-base font-medium hover:text-white hover:bg-white/5 ${
                        active ? "text-white" : "text-white/90"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-auto pt-6 text-xs text-white/50">
              © 2025 <span className="font-medium">Canastra Ventures</span>. Todos os direitos reservados.
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
