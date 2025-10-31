// src/components/ai-eir/faq/index.tsx
"use client";

import { useState } from "react";

type FaqGroup = { heading: string; items: { q: string; a?: string }[] };

const HILIGHT = "#FF624D";
const BG = "rgb(17, 4, 23)";

// Perguntas fixas
const QUESTIONS = [
  { q: "Elegibilidade e Perfil dos Founders" },
  { q: "Detalhes do Programa e Metodologia" },
  { q: "Nosso modelo de Equity Share Agreement" },
  { q: "Benefícios e Recursos do Programa" },
  { q: "Após o Programa" },
];

// Títulos (tópicos)
const TOPICS = [
  "Elegibilidade e Perfil dos Founders",
  "Detalhes do Programa e Metodologia",
  "Nosso modelo de Equity Share Agreement",
  "Benefícios e Recursos do Programa",
  "Após o Programa",
];

const GROUPS: FaqGroup[] = TOPICS.map((heading) => ({
  heading,
  items: QUESTIONS,
}));

export default function FAQ() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  return (
    <section id="faq" className="text-white" style={{ backgroundColor: BG }}>
      <div className="mx-auto max-w-[1100px] px-5 py-14">
        {/* H1 */}
        <header className="text-center mb-10">
          <h1 className="font-serif text-[34px] leading-tight min-[820px]:text-[56px]">
            Frequently<br className="min-[820px]:hidden" />
            Asked <span className="italic" style={{ color: HILIGHT }}>Questions</span>
          </h1>
        </header>

        {/* LISTAS DE TÓPICOS */}
        <div className="space-y-20">
          {GROUPS.map((g, gIdx) => (
            <section key={g.heading}>
              {/* título do tópico */}
              <h2 className="text-center text-white/80 text-[18px] min-[820px]:text-[22px] mb-5">
                {g.heading}
              </h2>

              <ul className="space-y-4">
                {g.items.map((item, iIdx) => {
                  const n = String(iIdx + 1).padStart(2, "0");
                  const key = `${gIdx}-${iIdx}`;
                  const isOpen = !!open[key];

                  return (
                    <li key={key}>
                      <div className="rounded-[10px] bg-black/35 px-4 sm:px-5 py-4 sm:py-5 border border-white/10">
                        <button
                          type="button"
                          onClick={() => setOpen((s) => ({ ...s, [key]: !s[key] }))}
                          className="w-full flex items-center gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                          aria-expanded={isOpen}
                        >
                          <span className="font-serif text-[28px] sm:text-[32px] leading-none select-none">
                            {n}
                          </span>

                          <span className="flex-1 text-[16px] sm:text-[18px]">
                            {item.q}
                          </span>

                          <span
                            aria-hidden
                            className="grid place-items-center h-9 w-9 rounded-full border border-white/30 text-white/90 hover:bg-white/10 transition"
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              className={`transition-transform ${isOpen ? "rotate-45" : ""}`}
                            >
                              <path
                                d="M12 5v14M5 12h14"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                fill="none"
                              />
                            </svg>
                          </span>
                        </button>

                        {/* resposta */}
                        <div
                          className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="pt-3 text-white/80 text-[15px] leading-relaxed">
                              {item.a ??
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, augue quis aliquet aliquam, metus augue malesuada justo, vitae bibendum lectus nibh id velit."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
