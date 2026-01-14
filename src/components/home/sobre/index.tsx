"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Sobre() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting) {
          el.classList.add("in-view");
          obs.unobserve(el);
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -35% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      id="sobre"
      data-edge-section
      className="relative overflow-hidden text-white pt-12 min-h-[100svh] md:pt-0 md:min-h-screen md:flex md:items-center"
      style={{ backgroundColor: "rgb(17, 4, 23)" }}
    >
      <style jsx global>{`
        /* Mobile Height Adjustments (Hero Pattern) */
        @media (max-height: 700px) {
          #sobre {
            min-height: 118svh;
          }
        }
        @media (max-height: 620px) {
          #sobre {
            min-height: 126svh;
          }
        }
        @media (max-height: 560px) {
          #sobre {
            min-height: 134svh;
          }
        }

        /* Animação da imagem (Tablet/Desktop) */
        @media (min-width: 768px) {
          #sobre .img-reveal {
            -webkit-mask-image: linear-gradient(to bottom, black 0%, black 100%);
            mask-image: linear-gradient(to bottom, black 0%, black 100%);
            -webkit-mask-size: 100% 0%;
            mask-size: 100% 0%;
            -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
            will-change: mask-size, opacity;
            opacity: 0;
          }
          #sobre.in-view .img-reveal {
            animation: sobreReveal 1.6s ease-out 0.2s forwards;
          }
          @keyframes sobreReveal {
            to {
              -webkit-mask-size: 100% 100%;
              mask-size: 100% 100%;
              opacity: 1;
            }
          }
        }
        /* Animações de texto (Tablet/Desktop) */
        @media (min-width: 768px) {
          #sobre .fade-up {
            opacity: 0;
            transform: translateY(10px);
          }
          #sobre .fade-up-delay {
            opacity: 0;
            transform: translateY(10px);
          }
          #sobre .fade-up-delay2 {
            opacity: 0;
            transform: translateY(10px);
          }
          #sobre.in-view .fade-up {
            animation: sobreFadeUp 0.6s ease-out 0.1s forwards;
          }
          #sobre.in-view .fade-up-delay {
            animation: sobreFadeUp 0.6s ease-out 0.2s forwards;
          }
          #sobre.in-view .fade-up-delay2 {
            animation: sobreFadeUp 0.6s ease-out 0.3s forwards;
          }
        }
        @keyframes sobreFadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          #sobre .img-reveal,
          #sobre .fade-up,
          #sobre .fade-up-delay,
          #sobre .fade-up-delay2,
          #sobre.in-view .img-reveal,
          #sobre.in-view .fade-up,
          #sobre.in-view .fade-up-delay,
          #sobre.in-view .fade-up-delay2 {
            animation: none;
            opacity: 1;
            transform: none;
            -webkit-mask-image: none;
            mask-image: none;
          }
        }
      `}</style>

      {/* gradiente de fundo na base */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0"
        style={{
          height: "55vh",
          background:
            "linear-gradient(to bottom, rgba(17,4,23,0) 0%, rgba(17,4,23,0.35) 35%, rgba(17,4,23,0.65) 65%, rgb(17,4,23) 100%)",
        }}
      />

      <div className="wrap relative z-10 w-full px-5 md:pr-0 md:pl-[var(--site-padding-left)] grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="text-center md:text-left pt-12 md:pt-20">
        {/* H2 — Crimson Text, 700 Bold */}
        <h2
          data-anim="h2"
          className="font-bold text-[28px] leading-snug mb-4 md:mb-6 md:text-[36px] lg:text-[44px] xl:text-[52px] 2xl:text-[60px] md:leading-[1.08] fade-up"
          style={{ fontFamily: '"Crimson Text", serif' }}
        >
          {/* TABLET/DESKTOP (≥768px) */}
          <span className="hidden md:block">
            <span className="block font-bold">
              AI Entrepreneur
            </span>
            <span className="block">
              in{" "}
              <span className="text-[#FF624D] font-bold">
                Residence
              </span>
            </span>
          </span>

          {/* MOBILE (<768px) */}
          <span className="md:hidden block">
            <span className="font-bold">AI Entrepreneur</span> <br />
            <span className="font-bold">
              in <span className="text-[#FF624D]">Residence</span>
            </span>
          </span>
        </h2>

        {/* Parágrafo — Hanken Grotesk, 400 Regular */}
        <p
          className="text-white/90 text-[clamp(15px,3vw,16px)] leading-relaxed mx-auto max-w-[46ch] md:mx-0 md:max-w-[50ch] lg:max-w-[55ch] md:text-[clamp(18px,1.5vw,24px)] md:leading-[1.6] font-normal fade-up-delay"
          style={{
            fontFamily:
              '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          {/* TABLET/DESKTOP */}
          <span className="hidden md:block">
            Ao longo de 12 semanas, os founders selecionados para o{" "} <br />
            <span className="text-[#FF624D] font-semibold">AI Entrepreneur in Residence (AI EiR) </span>
            terão apoio hands-on dos nossos{" "}
            Fellow Partners, mentoria de especialistas e conexões estratégicas para validar a tese, construir o MVP e alcançar
             os primeiros sinais de tração rumo ao {" "}
              <span className="text-[#FF624D] font-semibold">primeiro cheque</span>.
          </span> 
          

          {/* MOBILE */}
          <span className="md:hidden">
            Ao longo de 12 semanas, os founders selecionados para o{" "}
            <span className="text-[#FF624D] font-semibold">AI Entrepreneur in Residence (AI EiR) </span>
            terão apoio hands-on dos nossos Fellow Partners,{" "}      
             mentoria de especialistas e conexões estratégicas para validar a tese, construir o MVP e alcançar 
            os primeiros sinais de tração rumo ao <span className="text-[#FF624D] font-semibold whitespace-nowrap">primeiro cheque</span>.
          
          </span>
        </p>

        {/* Botão */}
        <div className="mt-8 md:mt-12 fade-up-delay2">
          <Link
            href="/ai-eir"
            prefetch
            className="cta inline-flex items-center justify-center gap-2 rounded-md font-semibold min-h-[3rem] px-5 min-w-[160px] text-[14px] border-2 border-[#FF624D] bg-white text-black transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:brightness-105 hover:shadow-md hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624D]/60 active:translate-y-0 md:min-w-[260px] md:min-h-[3.25rem] md:px-8 md:text-[16px] md:border md:border-gray-400 md:bg-transparent md:text-white md:hover:brightness-110"
          >
            <Image
              src="/elements/arrow-icon.png"
              width={26}
              height={22}
              alt=""
              className="-ml-1 md:hidden"
            />
            <Image
              src="/elements/arrow-white-icon.png"
              width={26}
              height={22}
              alt=""
              className="-ml-1 hidden md:block"
            />
            Join AI EiR!
          </Link>
        </div>
        </div>
        <div className="hidden md:block"></div> {/* Spacer for image */}
      </div>

      {/* 
        IMAGENS RESPONSIVAS
        - Mobile: < 768px (Hero pattern: absolute bottom)
        - Tablet: 768px - 1024px (Posicionamento lateral)
        - Desktop: > 1024px (Layout amplo)
      */}
      
      {/* MOBILE IMAGE (< 768px) */}
      <div className="md:hidden absolute inset-x-0 bottom-0 z-0 flex justify-center items-end pointer-events-none select-none">
        <div className="relative w-full max-w-[500px] aspect-[4/3]">
           <Image
            src="/ai-eir/hero/montanha-5.svg"
            alt="Paisagem montanhosa"
            fill
            className="object-contain object-bottom img-reveal"
            draggable={false}
            loading="lazy"
            sizes="(max-width: 768px) 100vw"
            style={{ objectFit: 'contain', objectPosition: 'bottom' }}
          />
        </div>
      </div>

      {/* TABLET/DESKTOP IMAGE (>= 768px) */}
      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 z-0 h-[80vh] w-[50vw] pointer-events-none select-none">
         <Image
            src="/ai-eir/hero/montanha-5.svg"
            alt="Paisagem montanhosa"
            fill
            className="object-contain object-right img-reveal"
            draggable={false}
            loading="lazy"
            sizes="(min-width: 768px) 50vw, (min-width: 1280px) 60vw"
            style={{ objectFit: 'contain', objectPosition: 'right center' }}
          />
      </div>

    </section>
  );
}
