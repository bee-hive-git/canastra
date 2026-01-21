"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CARDS = [
  {
    id: 1,
    type: "html",
    name: "Sergio VerdeSelva",
    role: "Co-Founder & CEO @ LagoaSystems (R2’25)",
    logo: "/ai-eir/founder/lagoa-logo.svg",
    quote:
      "Encerro meu segundo ciclo na Canastra com equipe formada, protótipo funcional e arquitetura técnica definida, fruto de uma colaboração profunda com o time da casa. Tive papel ativo nas decisões de tecnologia para estruturar minha tese de IA voltada ao novo regulatório de sustentabilidade da CVM, que entra em vigor em 2026 e transformará o mercado financeiro. Os programas — do matchmaking à residência — foram o ponto alto do meu ano e o acelerador definitivo para transformar uma ideia inicial em uma tese madura e pronta para o mercado. Essa evolução técnica e estratégica foi fundamental para garantir que o projeto nascesse com o rigor exigido pelo setor.",
    profileSrc: "/ai-eir/founder/1-perfil.jpg",
    alt: "Sergio VerdeSelva",
  },
  {
    id: 2,
    type: "html",
    name: "Alexandre Scortecci",
    role: "Co-Founder & CEO @ Allia (R2’25)",
    logo: "/ai-eir/founder/allia-logo.svg",
    quote:
      "A gente participou do evento de aceleração da Canastra. Foram 12 semanas super interessantes. A Canastra ajuda a gente a passar por cada um dos temas críticos que precisam ser discutidos no lançamento de uma startup com foco em inteligência artificial.",
    profileSrc: "/ai-eir/founder/2-perfil.png",
    alt: "Alexandre Scortecci",
    minHeight: "min-h-[400px]",
  },
  {
    id: 3,
    type: "html",
    name: "Matehus Rosa",
    role: "Co-Founder &CEO @ Quorum Saúde (R2’25)",
    logo: "/ai-eir/founder/quorum-logo .svg",
    quote:
      "Participamos do Cohort R2’25 do AI EiR da Canastra e foi uma experiência incrível. Foram 12 semanas intensas, com muita mão na massa e apoio próximo de sócios, mentores e parceiros. A Canastra nos ajuda a passar por todos os temas críticos que precisam ser discutidos no lançamento de uma startup com foco em inteligência artificial, desde a definição da tese até a captação da primeira rodada de investimento. Recomendo fortemente o programa para founders que estão na fase de validação e buscam uma iniciativa que realmente acelere os estágios iniciais do negócio.",
    profileSrc: "/ai-eir/founder/3-perfil.jpg",
    alt: "Matehus Rosa",
  },
  {
    id: 4,
    type: "html",
    name: "Thais Silva",
    role: "Co-Founder & CEO @ Zonic (R2’25)",
    logo: "/ai-eir/founder/zonic-logo.svg",
    quote:
      "Se você é founder e busca clareza sobre a tese ou o direcionamento do negócio, recomendo o programa da Canastra. Em cerca de quatro meses, saímos de R$ 8 mil para mais de R$ 100 mil em faturamento mensal, com apoio direto do programa. A Canastra foi fundamental na abertura de portas, no fundraising e na estruturação da tese, do modelo financeiro e da primeira rodada com fundos alinhados. Além disso, oferece um processo de matchmaking para formação de equipes. Para founders em fase inicial, a residência da Canastra é altamente recomendada.",
    profileSrc: "/ai-eir/founder/4-perfil.jpg",
    alt: "Thais Silva",
  },
];

const MOBILE_CARDS = [
  {
    id: 1,
    type: "html",
    name: "Sergio VerdeSelva",
    role: "Co-Founder & CEO @ LagoaSystems (R2’25)",
    logo: "/ai-eir/founder/lagoa-logo.svg",
    quote:
      "Encerro meu segundo ciclo na Canastra com equipe formada, protótipo funcional e arquitetura técnica definida, fruto de uma colaboração profunda com o time da casa. Tive papel ativo nas decisões de tecnologia para estruturar minha tese de IA voltada ao novo regulatório de sustentabilidade da CVM, que entra em vigor em 2026 e transformará o mercado financeiro. Os programas — do matchmaking à residência — foram o ponto alto do meu ano e o acelerador definitivo para transformar uma ideia inicial em uma tese madura e pronta para o mercado. Essa evolução técnica e estratégica foi fundamental para garantir que o projeto nascesse com o rigor exigido pelo setor.",
    profileSrc: "/ai-eir/founder/1-perfil.jpg",
    alt: "Sergio VerdeSelva",
  },
  {
    id: 2,
    type: "html",
    name: "Alexandre Scortecci",
    role: "Co-Founder & CEO @ Allia (R2’25)",
    logo: "/ai-eir/founder/allia-logo.svg",
    quote:
      "A gente participou do evento de aceleração da Canastra. Foram 12 semanas super interessantes. A Canastra ajuda a gente a passar por cada um dos temas críticos que precisam ser discutidos no lançamento de uma startup com foco em inteligência artificial.",
    profileSrc: "/ai-eir/founder/2-perfil.png",
    alt: "Alexandre Scortecci",
    minHeight: "min-h-[400px]",
  },
  {
    id: 3,
    type: "html",
    name: "Matehus Rosa",
    role: "Co-Founder &CEO @ Quorum Saúde (R2’25)",
    logo: "/ai-eir/founder/quorum-logo .svg",
    quote:
      "Participamos do Cohort R2’25 do AI EiR da Canastra e foi uma experiência incrível. Foram 12 semanas intensas, com muita mão na massa e apoio próximo de sócios, mentores e parceiros. A Canastra nos ajuda a passar por todos os temas críticos que precisam ser discutidos no lançamento de uma startup com foco em inteligência artificial, desde a definição da tese até a captação da primeira rodada de investimento. Recomendo fortemente o programa para founders que estão na fase de validação e buscam uma iniciativa que realmente acelere os estágios iniciais do negócio.",
    profileSrc: "/ai-eir/founder/3-perfil.jpg",
    alt: "Matehus Rosa",
  },
  {
    id: 4,
    type: "html",
    name: "Thais Silva",
    role: "Co-Founder & CEO @ Zonic (R2’25)",
    logo: "/ai-eir/founder/zonic-logo.svg",
    quote:
      "Se você é founder e busca clareza sobre a tese ou o direcionamento do negócio, recomendo o programa da Canastra. Em cerca de quatro meses, saímos de R$ 8 mil para mais de R$ 100 mil em faturamento mensal, com apoio direto do programa. A Canastra foi fundamental na abertura de portas, no fundraising e na estruturação da tese, do modelo financeiro e da primeira rodada com fundos alinhados. Além disso, oferece um processo de matchmaking para formação de equipes. Para founders em fase inicial, a residência da Canastra é altamente recomendada.",
    profileSrc: "/ai-eir/founder/4-perfil.jpg",
    alt: "Thais Silva",
  },
];

const FounderCardHTML = ({ card, isMobile = false }: { card: any; isMobile?: boolean }) => {
  if (isMobile) {
    return (
      <div className={`relative w-full bg-[#F2F2F2] rounded-xl p-6 flex flex-col shadow-2xl ${card.minHeight || "min-h-[515px]"}`}>
        {/* Top Row: Icon + Logo */}
        <div className="flex justify-between items-start w-full mb-4">
           {/* Icon (Left) */}
           <div className="relative w-6 h-4 mt-2">
              <Image 
                 src="/ai-eir/founder/descricao-icon.svg" 
                 alt="Quote" 
                 fill
                 className="object-contain object-left"
              />
           </div>

           {/* Logo (Right) */}
           <div className="relative w-24 h-12">
             <Image
               src={card.logo}
               alt="Company Logo"
               fill
               className="object-contain object-right-top"
             />
           </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <p className="text-[#110417] text-[13px] leading-relaxed font-light">
            {card.quote}
          </p>
        </div>

        {/* Bottom: Profile & Name */}
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200/50">
           <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border border-gray-200">
             <Image
               src={card.profileSrc}
               alt={card.name}
               fill
               className="object-cover"
               unoptimized
             />
           </div>
           <div className="flex flex-col min-w-0">
             <span className="text-[#110417] font-bold text-lg leading-tight truncate">{card.name}</span>
             <span className="text-[#110417]/70 text-[8px] leading-tight mt-1 whitespace-nowrap">{card.role}</span>
           </div>
        </div>
      </div>
    );
  }

  // Desktop Layout
  return (
    <div className="relative w-full max-w-[1000px] aspect-[956/321] bg-[#F2F2F2] rounded-xl p-8 flex flex-col shadow-2xl overflow-hidden">
      {/* Top Row */}
      <div className="flex justify-between items-start flex-shrink-0">
         {/* Left: Profile & Info */}
         <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border border-gray-200">
               <Image
                 src={card.profileSrc}
                 alt={card.name}
                 fill
                 className="object-cover"
                 unoptimized
               />
            </div>
            <div className="flex flex-col">
               <span className="text-[#110417] font-bold text-lg">{card.name}</span>
               <span className="text-[#110417]/70 text-sm">{card.role}</span>
            </div>
         </div>

         {/* Right: Logo */}
         <div className="relative w-24 h-12">
            <Image
              src={card.logo}
              alt="Company Logo"
              fill
              className="object-contain object-right-top"
            />
         </div>
      </div>

      {/* Quote Content - Centered */}
      <div className="flex-grow flex items-center">
         <div className="ml-20 pr-10 relative w-full">
             <div className="absolute -left-8 top-1">
                 <Image 
                    src="/ai-eir/founder/descricao-icon.svg" 
                    alt="Quote" 
                    width={19} 
                    height={13} 
                 />
             </div>
             <p className="text-[#110417] text-base leading-relaxed font-light">
               {card.quote}
             </p>
         </div>
      </div>
    </div>
  );
};

export default function FounderSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % CARDS.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + CARDS.length) % CARDS.length);
  };

  return (
    <section
      id="ai-eir-founder"
      className="relative bg-[#110417] py-16 md:py-24 overflow-hidden flex flex-col items-center"
    >
      {/* Título */}
      <div className="text-center mb-12 px-4 z-10 relative">
        <h2 className="font-serif text-3xl md:text-5xl text-white font-semibold mb-4">
          O que os <span className="text-[#FF624D] italic">Founders</span> dizem
          sobre nós?
        </h2>
        <p className="text-white/80 text-sm md:text-lg max-w-2xl mx-auto font-light">
          Veja os depoimentos de pessoas que participaram do processo de
          crescimento juntamente com a Canastra Ventures.
        </p>
      </div>

      {/* Mobile Layout (Vertical List) */}
      <div className="md:hidden w-full px-6 flex flex-col gap-6">
        {MOBILE_CARDS.map((card) => (
          <div key={card.id} className="w-full">
            <FounderCardHTML card={card} isMobile={true} />
          </div>
        ))}
      </div>

      {/* Área do Carrossel (Desktop Only) */}
      <div className="hidden md:flex relative w-full max-w-[1400px] items-center justify-center px-0 md:px-12">
        {/* Botão Anterior (Mobile: ajustado posição) */}
        <button
          onClick={prevCard}
          className="absolute left-4 md:left-10 z-30 p-2 md:p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all focus:outline-none backdrop-blur-sm"
          aria-label="Anterior"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="md:w-6 md:h-6"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Display do Card */}
        <div className="w-full md:max-w-[1200px] overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {CARDS.map((card, index) => (
              <div
                key={card.id}
                className="min-w-full flex justify-center px-8 md:px-4"
              >
                <FounderCardHTML card={card} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Botão Próximo */}
        <button
          onClick={nextCard}
          className="absolute right-4 md:right-10 z-30 p-2 md:p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all focus:outline-none backdrop-blur-sm"
          aria-label="Próximo"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="md:w-6 md:h-6"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Indicadores (Dots) - Desktop Only */}
      <div className="hidden md:flex gap-2 mt-8">
        {CARDS.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex ? "bg-[#FF624D]" : "bg-white/20"
            }`}
            aria-label={`Ir para card ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
