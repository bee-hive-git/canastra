// Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

type NavItem = { label: string; href: string; inert?: boolean };

const NAV: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Time", href: "#time" },
  { label: "AI EiR", href: "", inert: true },
  { label: "Portfolio", href: "#sobre" },
  { label: "Pitch us!", href: "", inert: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const Item = ({ label, href, inert }: NavItem) => {
    const common = "hover:text-white transition-colors";
    if (inert) {
      return (
        <a href="" onClick={(e) => e.preventDefault()} className={common + " text-white/80"} role="link" aria-label={label}>
          {label}
        </a>
      );
    }
    return (
      <Link href={href} className={common + " text-white/80"}>
        {label}
      </Link>
    );
  };

  return (
    <header id="site-header" className="fixed inset-x-0 top-0 z-50" style={{ backgroundColor: "rgb(13, 7, 17)" }}>
      <style jsx global>{`
        /* mantém a altura do header; aumenta só a logo */
        @media (min-width: 1181px) and (max-width: 1439px) {
          #site-header .deskbar { height: 78px; }
          #site-header .logo { height: 42px; }   /* antes 36px */
        }
        @media (min-width: 1440px) {
          #site-header .deskbar { height: 92px; }
          #site-header .logo { height: 48px; }   /* antes 40px */
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
      <div className="deskbar hidden min-[820px]:flex h-16 items-center justify-between px-8">
        <img src="/header/logo.png" alt="Canastra Ventures" className="logo w-auto" />
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
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} />
          <nav aria-label="Menu" className="absolute right-0 top-0 h-full w-[78%] max-w-[360px] bg-[#120E14] border-l border-white/10 p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white/80 text-sm">Menu</span>
              <button aria-label="Fechar menu" onClick={close} className="text-white">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </button>
            </div>
            <ul className="space-y-1">
              {NAV.map((item) => (
                <li key={`m-${item.label}`}>
                  {item.inert ? (
                    <a
                      href=""
                      onClick={(e) => { e.preventDefault(); close(); }}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/5"
                      role="link"
                      aria-label={item.label}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={close}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/5"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
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
