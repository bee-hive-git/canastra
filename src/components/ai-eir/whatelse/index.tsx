// src/components/ai-eir/whatelse/index.tsx
"use client";

export default function WhatElse() {
  return (
    <section
      id="whatelse"
      className="relative text-white"
      style={{ backgroundColor: "rgb(17, 4, 23)" }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:py-16 lg:py-20">
        {/* Título */}
        <header className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="font-serif font-semibold leading-tight">
            <span className="block text-[28px] sm:text-[32px] lg:text-[40px]">
              O que mais você terá <span className="text-[#FF624D] italic">acesso</span>
            </span>
            <span className="block text-[26px] sm:text-[30px] lg:text-[38px] italic">
              durante o <span className="text-[#FF624D]">programa</span>
            </span>
          </h2>
        </header>

        {/* Grade (mobile: 1 col, desktop: 3 col) */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <Card
            title="Acesso a Capital"
            text="Oportunidade de investimento da Canastra Ventures de até R$800 mil na primeira rodada institucional e conexões com outros VCs e anjos."
          />
          <Card
            title="Office Hours"
            text="Sessões individuais (1:1) e em grupo semanais com os Fellow Partners."
          />
          <Card
            title="Rede de Mentores e Perks Exclusivos"
            text="Acesse mentores especialistas em IA, produto, vendas e receba créditos e benefícios exclusivos em ferramentas e serviços essenciais."
          />
          <Card
            title="Recrutamento Estratégico e Advisor Network"
            text="Facilitamos o recrutamento dos primeiros talentos-chave e advisors."
          />
          <Card
            title="C-Launch: Lançamento da sua StartUp"
            text="Lançamos oficialmente a sua startup no ecossistema com divulgação nas nossas plataformas e um evento presencial em São Paulo ao final do programa."
          />
          <Card
            title="Quartas de Conteúdo com Líderes de IA e Negócios"
            text="Talks, workshops e mesas redondas com experts em IA, produto e VC."
          />
        </div>
      </div>
    </section>
  );
}

/* Card com dimensões de “desktop” aplicadas também no mobile */
function Card({ title, text }: { title: string; text: string }) {
  return (
    <div
      className="
        /* — largura/altura de card de desktop também no mobile — */
        w-[92vw] max-w-[380px] mx-auto            /* mobile: fica do tamanho do card desktop, centralizado */
        lg:w-auto lg:max-w-none lg:mx-0           /* desktop: ocupa a célula da grade */
        min-h-[220px]                              /* mesma altura mínima do desktop */
        rounded-xl border border-[#FF624D]/70 bg-transparent
        p-6 shadow-[0_0_0_1px_rgba(255,98,77,0.06)]
        transition hover:border-[#FF624D] hover:shadow-[0_0_0_1px_rgba(255,98,77,0.22)]
      "
    >
      <h3 className="text-[#FF624D] font-semibold text-[18px] sm:text-[19px] leading-snug mb-2">
        {title}
      </h3>
      <p className="text-white/85 text-[14px] sm:text-[15px] leading-relaxed">
        {text}
      </p>
    </div>
  );
}
