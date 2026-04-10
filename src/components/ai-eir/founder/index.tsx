"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CARDS = [
  {
    id: 1,
    type: "html",
    name: "Sergio VerdeSelva",
    role: "Co-Founder & CEO @ LagoaSystems (R2’25)",
    logo: "/ai-eir/founder/lagoa-logo.png",
    quote:
      "Encerro meu segundo ciclo na Canastra com equipe formada, protótipo funcional e arquitetura técnica definida, fruto de uma colaboração profunda com o time da casa. Tive papel ativo nas decisões de tecnologia para estruturar minha tese de IA voltada ao novo regulatório de sustentabilidade da CVM, que entra em vigor em 2026 e transformará o mercado financeiro. Os programas — do matchmaking à residência — foram o ponto alto do meu ano e o acelerador definitivo para transformar uma ideia inicial em uma tese madura e pronta para o mercado. Essa evolução técnica e estratégica foi fundamental para garantir que o projeto nascesse com o rigor exigido pelo setor.",
    profileSrc: "/ai-eir/founder/1-perfil.jpg",
    alt: "Sergio VerdeSelva",
    videoUrl: "https://ik.imagekit.io/t5plcbs0qr/Sergio%20VerdeSelva.mov/ik-video.mp4?updatedAt=1773777345601",
  },
  {
    id: 3,
    type: "html",
    name: "Matheus Rosa",
    role: "Co-Founder &CEO @ Quorum Saúde (R2’25)",
    logo: "/ai-eir/founder/quorum-logo.png",
    quote:
      "Participamos do Cohort R2’25 do AIR da Canastra e foi uma experiência incrível. Foram 12 semanas intensas, com muita mão na massa e apoio próximo de sócios, mentores e parceiros. A Canastra nos ajuda a passar por todos os temas críticos que precisam ser discutidos no lançamento de uma startup com foco em inteligência artificial, desde a definição da tese até a captação da primeira rodada de investimento. Recomendo fortemente o programa para founders que estão na fase de validação e buscam uma iniciativa que realmente acelere os estágios iniciais do negócio.",
    profileSrc: "/ai-eir/founder/3-perfil.jpg",
    alt: "Matheus Rosa",
    videoUrl: "https://ik.imagekit.io/t5plcbs0qr/Depoimento%20-%20Matheus%20Rosa%20(CEO%20-%20Quorum).mp4?updatedAt=1773777240040",
  },
  {
    id: 4,
    type: "html",
    name: "Thais Silva",
    role: "Co-Founder & CEO @ Zonic (R2’25)",
    logo: "/ai-eir/founder/zonic-logo.png",
    quote:
      "Se você é founder e busca clareza sobre a tese ou o direcionamento do negócio, recomendo o programa da Canastra. Em cerca de quatro meses, saímos de R$ 8 mil para mais de R$ 100 mil em faturamento mensal, com apoio direto do programa. A Canastra foi fundamental na abertura de portas, no fundraising e na estruturação da tese, do modelo financeiro e da primeira rodada com fundos alinhados. Além disso, oferece um processo de matchmaking para formação de equipes. Para founders em fase inicial, a residência da Canastra é altamente recomendada.",
    profileSrc: "/ai-eir/founder/4-perfil.jpg",
    alt: "Thais Silva",
    videoUrl: "https://ik.imagekit.io/t5plcbs0qr/Thais%20Silva.mov/ik-video.mp4?updatedAt=1773777334791",
  },
];

const MOBILE_CARDS = [
  {
    id: 1,
    type: "html",
    name: "Sergio VerdeSelva",
    role: "Co-Founder & CEO @ LagoaSystems (R2’25)",
    logo: "/ai-eir/founder/lagoa-logo.png",
    quote:
      "Encerro meu segundo ciclo na Canastra com equipe formada, protótipo funcional e arquitetura técnica definida, fruto de uma colaboração profunda com o time da casa. Tive papel ativo nas decisões de tecnologia para estruturar minha tese de IA voltada ao novo regulatório de sustentabilidade da CVM, que entra em vigor em 2026 e transformará o mercado financeiro. Os programas — do matchmaking à residência — foram o ponto alto do meu ano e o acelerador definitivo para transformar uma ideia inicial em uma tese madura e pronta para o mercado. Essa evolução técnica e estratégica foi fundamental para garantir que o projeto nascesse com o rigor exigido pelo setor.",
    profileSrc: "/ai-eir/founder/1-perfil.jpg",
    alt: "Sergio VerdeSelva",
    videoUrl: "https://ik.imagekit.io/t5plcbs0qr/Sergio%20VerdeSelva.mov/ik-video.mp4?updatedAt=1773777345601",
  },
  {
    id: 3,
    type: "html",
    name: "Matheus Rosa",
    role: "Co-Founder &CEO @ Quorum Saúde (R2’25)",
    logo: "/ai-eir/founder/quorum-logo.png",
    quote:
      "Participamos do Cohort R2’25 do AI EiR da Canastra e foi uma experiência incrível. Foram 12 semanas intensas, com muita mão na massa e apoio próximo de sócios, mentores e parceiros. A Canastra nos ajuda a passar por todos os temas críticos que precisam ser discutidos no lançamento de uma startup com foco em inteligência artificial, desde a definição da tese até a captação da primeira rodada de investimento. Recomendo fortemente o programa para founders que estão na fase de validação e buscam uma iniciativa que realmente acelere os estágios iniciais do negócio.",
    profileSrc: "/ai-eir/founder/3-perfil.jpg",
    alt: "Matheus Rosa",
    videoUrl: "https://ik.imagekit.io/t5plcbs0qr/Depoimento%20-%20Matheus%20Rosa%20(CEO%20-%20Quorum).mp4?updatedAt=1773777240040",
  },
  {
    id: 4,
    type: "html",
    name: "Thais Silva",
    role: "Co-Founder & CEO @ Zonic (R2’25)",
    logo: "/ai-eir/founder/zonic-logo.png",
    quote:
      "Se você é founder e busca clareza sobre a tese ou o direcionamento do negócio, recomendo o programa da Canastra. Em cerca de quatro meses, saímos de R$ 8 mil para mais de R$ 100 mil em faturamento mensal, com apoio direto do programa. A Canastra foi fundamental na abertura de portas, no fundraising e na estruturação da tese, do modelo financeiro e da primeira rodada com fundos alinhados. Além disso, oferece um processo de matchmaking para formação de equipes. Para founders em fase inicial, a residência da Canastra é altamente recomendada.",
    profileSrc: "/ai-eir/founder/4-perfil.jpg",
    alt: "Thais Silva",
    videoUrl: "https://ik.imagekit.io/t5plcbs0qr/Thais%20Silva.mov/ik-video.mp4?updatedAt=1773777334791",
  },
];

const FounderCardHTML = ({ card, isMobile = false, isActive = false }: { card: any; isMobile?: boolean; isActive?: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Only apply auto play/pause rules if it's NOT the mobile version
    if (!isMobile && videoRef.current) {
      if (isActive) {
        // Tenta reproduzir automaticamente; ignoramos o erro silenciosamente caso o navegador bloqueie
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isActive, isMobile]);

  const handlePlay = () => {
    setIsPlaying(true);
    if (isMobile && videoRef.current) {
       videoRef.current.controls = true;
    }
    // Pause other videos across the entire document
    const allVideos = document.querySelectorAll('video');
    allVideos.forEach((v) => {
      if (v !== videoRef.current && !v.paused) {
        v.pause();
      }
    });
  };

  const handleVideoClick = () => {
    if (isMobile && videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.controls = false;
    }
  };

  if (isMobile) {
    return (
      <div className="flex flex-col items-center w-full gap-4">
        <div className="relative w-full bg-[#F2F2F2] rounded-xl p-5 flex flex-col shadow-2xl">
          <div className="flex justify-between items-center w-full">
             {/* Left: Profile & Info */}
             <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 flex-shrink-0 rounded-full overflow-hidden border border-gray-200">
                  <Image
                    src={card.profileSrc}
                    alt={card.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[#110417] font-bold text-[15px] leading-tight truncate">{card.name}</span>
                  <span className="text-[#110417]/70 text-[10px] leading-tight mt-0.5">{card.role}</span>
                </div>
             </div>

             {/* Right: Logo */}
             <div className="relative w-20 h-10 flex-shrink-0">
               <Image
                 src={card.logo}
                 alt="Company Logo"
                 fill
                 className="object-contain object-right"
                 unoptimized
               />
             </div>
          </div>
        </div>

        {/* Video Below the Card (Mobile) */}
        {card.videoUrl && (
          <div className="relative w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black z-10 group">
            <video 
              ref={videoRef}
              className="video-styled w-full aspect-video object-cover cursor-pointer"
              preload="metadata"
              playsInline
              controls={isPlaying}
              controlsList="nodownload"
              onClick={handleVideoClick}
              onEnded={handleVideoEnded}
              onPlay={handlePlay}
              onPause={() => {
                setIsPlaying(false);
                if (videoRef.current) {
                  videoRef.current.controls = false;
                }
              }}
            >
              <source src={card.videoUrl} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            
            {/* Custom Play Button Overlay */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity duration-300 group-hover:bg-black/40"
                onClick={handleVideoClick}
              >
                <div className="w-16 h-16 rounded-full bg-[#FF624D]/80 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md border border-white/20 transform transition-transform duration-300 hover:scale-110 hover:bg-[#FF624D]/90">
                  <svg 
                    className="w-7 h-7 text-white drop-shadow-md translate-x-[2px]" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // Desktop Layout
  return (
    <div className="flex flex-col items-center w-full max-w-[1000px] gap-6">
      <div className="relative w-full bg-[#F2F2F2] rounded-xl p-8 flex flex-col shadow-2xl overflow-hidden">
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
                unoptimized
              />
           </div>
        </div>
      </div>

      {/* Video Below the Card (Desktop) */}
      {card.videoUrl && (
         <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black z-10">
             <video 
               ref={videoRef}
               controls 
               controlsList="nodownload" 
               className="w-full h-auto aspect-video object-cover"
               preload="metadata"
             >
                 <source src={card.videoUrl} type="video/mp4" />
                 Seu navegador não suporta o elemento de vídeo.
             </video>
         </div>
      )}
    </div>
  );
};

export default function FounderSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("ai-eir-founder");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

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
      <style jsx global>{`
        /* Estilização da barra de progresso do vídeo apenas para Webkit (Chrome/Safari) no Mobile */
        .video-styled::-webkit-media-controls-timeline,
        .video-styled::-webkit-media-controls-volume-slider {
          accent-color: #FF624D;
        }
        
        .video-styled::-webkit-media-controls-play-button,
        .video-styled::-webkit-media-controls-fullscreen-button {
          filter: sepia(1) hue-rotate(-50deg) saturate(300%) brightness(1.2);
        }

        /* Hack mais profundo para customizar a cor da barra de progresso no Chrome/Safari */
        .video-styled::-webkit-media-controls-panel {
          background: rgba(0, 0, 0, 0.5);
        }
        
        /* Cor base para navegadores modernos que suportam accent-color */
        .video-styled {
          accent-color: #FF624D;
        }
      `}</style>
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
      <div className="md:hidden w-full px-6 flex flex-col gap-10">
        {MOBILE_CARDS.map((card, index) => (
          <div key={card.id} className="w-full flex flex-col items-center">
            <FounderCardHTML card={card} isMobile={true} isActive={false} />
            {/* Divider line between items, except for the last one */}
            {index < MOBILE_CARDS.length - 1 && (
              <div className="w-1/2 h-px bg-white/20 mt-10 rounded-full" />
            )}
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
                <FounderCardHTML card={card} isActive={index === activeIndex && isInView} />
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
