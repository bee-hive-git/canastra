// Newsletter.tsx
"use client";

import { FormEvent, useState } from "react";

export default function Newsletter() {
  const HILIGHT = "#FF624D";
  const HILIGHT_SOFT = "#FF6E5A";
  const [email, setEmail] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("newsletter:", email);
  }

  return (
    <section
      id="newsletter"
      className="relative text-white bg-cover bg-center bg-no-repeat pt-[96px] pb-[72px] min-[820px]:pt-[132px] min-[820px]:pb-[104px]"
      style={{ backgroundImage: "url(/newsletter/fundo.png)", backgroundColor: "rgb(13, 7, 17)" }}
    >
      <div className="mx-auto max-w-[760px] px-5 text-center">
        {/* Título: “Newsletter” com laranja no mobile e no desktop */}
        <h2 className="font-serif font-semibold leading-tight mb-4 text-[30px] min-[820px]:text-[40px]">
          Canastra{" "}
          <span style={{ color: HILIGHT }} className="font-normal">
            Newsletter
          </span>
        </h2>

        {/* MOBILE — mantém destaques laranja; novo texto com a mesma quebra */}
        <p className="text-white/85 mb-6 text-[clamp(12px,3.6vw,16px)] leading-[1.4] min-[820px]:hidden">
          <span>
            Conhecimento,{" "}
            <span style={{ color: HILIGHT }} className="italic font-semibold">
              insights e novidades
            </span>{" "}
            para founders
          </span>
          <br />
          <span>
            que estão construindo{" "}
            <span style={{ color: HILIGHT }} className="italic font-semibold">
              startups de IA
            </span>{" "}
            no Brasil.
          </span>
          <br />
          <span>
            Mais de{" "}
            <span style={{ color: HILIGHT }} className="italic font-semibold">
              5.000 assinantes
            </span>
            .
          </span>
        </p>

        {/* DESKTOP — parágrafo todo branco; só “5.000 assinantes” com peso maior */}
        <p className="hidden min-[820px]:block text-white/85 mb-6 text-[18px] leading-relaxed">
          <span>Conhecimento, insights e novidades para founders</span>
          <br />
          <span>que estão construindo startups de IA no Brasil.</span>
          <br />
          <span>
            Mais de <span className="text-white font-semibold">5.000 assinantes</span>.
          </span>
        </p>

        <form
          onSubmit={onSubmit}
          className="mx-auto max-w-[640px] min-[820px]:grid min-[820px]:grid-cols-[1fr_auto]"
        >
          <input
            type="email"
            required
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            aria-label="Digite seu e-mail"
            className="w-full h-12 px-4 text-white placeholder:text-gray-400 bg-transparent border border-gray-400 outline-none rounded-xl focus:outline-none focus:border-gray-400 min-[820px]:rounded-r-none"
          />

          {/* CTA mobile */}
          <button
            type="submit"
            className="mt-3 inline-flex items-center justify-center font-semibold h-12 px-6 rounded-md transition-colors duration-200 ease-out bg-[var(--cta-mobile)] text-white hover:brightness-110 min-[820px]:hidden"
            style={{ ["--cta-mobile" as any]: HILIGHT_SOFT }}
          >
            INSCREVA-SE
          </button>

          {/* CTA desktop */}
          <button
            type="submit"
            className="hidden min-[820px]:inline-flex items-center justify-center font-semibold h-12 px-6 rounded-r-xl rounded-l-none border bg-gray-400 border-gray-400 text-white transition-colors duration-300 ease-out hover:bg-[var(--cta-hover)] hover:border-[var(--cta-hover)]"
            style={{ ["--cta-hover" as any]: HILIGHT_SOFT }}
            aria-label="Inscreva-se na newsletter"
          >
            INSCREVA-SE
          </button>
        </form>
      </div>
    </section>
  );
}
