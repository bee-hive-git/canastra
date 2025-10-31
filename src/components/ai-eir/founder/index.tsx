"use client";

export default function FounderSection() {
  return (
    <section id="ai-eir-founder" className="relative bg-[#110417] overflow-hidden">
      <picture>
        {/* Mobile */}
        <source
          media="(max-width: 767px)"
          srcSet="/ai-eir/founder/fundo-mobile.png"
        />
        {/* Desktop */}
        <img
          src="/ai-eir/founder/fundo.png"
          alt=""
          aria-hidden
          className="w-full h-auto object-contain md:object-cover"
          draggable={false}
        />
      </picture>

      <style jsx>{`
        @media (max-width: 767px) {
          #ai-eir-founder {
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          #ai-eir-founder picture,
          #ai-eir-founder img {
            width: 100%;
            height: auto;
            display: block;
          }
        }
      `}</style>
    </section>
  );
}
