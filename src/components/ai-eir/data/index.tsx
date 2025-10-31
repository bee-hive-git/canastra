"use client";

export default function DataSection() {
  return (
    <section id="ai-eir-data" className="relative bg-[#110417] overflow-hidden">
      <picture>
        {/* Mobile */}
        <source
          media="(max-width: 767px)"
          srcSet="/ai-eir/data/fundo-mobile.png"
        />
        {/* Desktop */}
        <img
          src="/ai-eir/data/fundo.png"
          alt=""
          aria-hidden
          className="w-full h-auto object-contain md:object-cover"
          draggable={false}
        />
      </picture>

      <style jsx>{`
        @media (max-width: 767px) {
          #ai-eir-data {
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          #ai-eir-data picture,
          #ai-eir-data img {
            width: 100%;
            height: auto;
            display: block;
          }
        }
      `}</style>
    </section>
  );
}
