// Newsletter.tsx
"use client";

import { FormEvent, useEffect, useState } from "react";

type FeedbackType = "success" | "error" | "info";

export default function Newsletter() {
  const HILIGHT = "#FF624D";
  const HILIGHT_SOFT = "#FF6E5A";
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: FeedbackType; message: string } | null>(null);

  useEffect(() => {
    if (!feedback) return;
    const t = setTimeout(() => setFeedback(null), 5000);
    return () => clearTimeout(t);
  }, [feedback]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setFeedback({
        type: "error",
        message: "Por favor, insira um e-mail válido.",
      });
      return;
    }

    setIsSubmitting(true);
    setFeedback({
      type: "info",
      message: "Inscrevendo na newsletter...",
    });

    try {
      const firstUrl = typeof window !== "undefined" ? window.location.href : "";
      const body = new URLSearchParams({
        email: email.trim(),
        first_url: firstUrl,
      });

      await fetch("https://canastraventures.substack.com/api/v1/free", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: body.toString(),
      });

      setFeedback({
        type: "success",
        message: "Inscrito com sucesso! Verifique seu e-mail.",
      });
      setEmail("");
    } catch {
      setFeedback({
        type: "error",
        message: "Erro ao inscrever. Tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="newsletter"
      className="relative text-white bg-cover bg-center bg-no-repeat pt-[96px] pb-[72px] min-[820px]:pt-[132px] min-[820px]:pb-[104px]"
      style={{ backgroundImage: "url(/newsletter/fundo.png)", backgroundColor: "rgb(13, 7, 17)" }}
    >
      <div className="mx-auto max-w-[760px] px-5 text-center">
        {/* Título: “Newsletter” com laranja no mobile e no desktop */}
        <h2 className="font-serif font-semibold leading-tight mb-4 text-[clamp(30px,4vw,40px)]">
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
          className="mx-auto max-w-[480px] min-[820px]:grid min-[820px]:grid-cols-[1fr_auto]"
          suppressHydrationWarning
        >
          <input
            type="email"
            name="email"
            required
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            disabled={isSubmitting}
            className="w-full h-11 px-4 text-[14px] text-white placeholder:text-gray-400 bg-transparent border border-gray-400 outline-none rounded-xl focus:outline-none focus:border-gray-400 min-[820px]:rounded-r-none disabled:opacity-70"
          />

          {/* CTA mobile */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 inline-flex items-center justify-center font-semibold text-[13px] h-11 px-6 rounded-md transition-colors duration-200 ease-out bg-[var(--cta-mobile)] text-white hover:brightness-110 min-[820px]:hidden disabled:opacity-70 disabled:cursor-not-allowed"
            style={{ "--cta-mobile": HILIGHT } as React.CSSProperties}
          >
            {isSubmitting ? "INSCREVENDO..." : "INSCREVA-SE"}
          </button>

          {/* CTA desktop */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="hidden min-[820px]:inline-flex items-center justify-center font-semibold text-[13px] h-11 px-6 rounded-r-xl rounded-l-none border bg-gray-400 border-gray-400 text-white transition-colors duration-300 ease-out hover:bg-[var(--cta-hover)] hover:border-[var(--cta-hover)] disabled:opacity-70 disabled:cursor-not-allowed"
            style={{ "--cta-hover": HILIGHT_SOFT } as React.CSSProperties}
            aria-label="Inscreva-se na newsletter"
          >
            {isSubmitting ? "INSCREVENDO..." : "INSCREVA-SE"}
          </button>
        </form>

        {feedback && (
          <div
            className="mt-4 text-sm px-4 py-3 rounded-md text-left flex items-start gap-2 newsletter-feedback-enter border"
            style={{
              backgroundColor:
                feedback.type === "success"
                  ? "rgba(34, 197, 94, 0.08)"
                  : "rgba(255, 98, 77, 0.08)",
              borderColor: feedback.type === "success" ? "#22C55E" : HILIGHT,
              color: "#FFFFFF",
            }}
            role="status"
            aria-live="polite"
          >
            <span className="flex-1">{feedback.message}</span>
            <button
              type="button"
              onClick={() => setFeedback(null)}
              className="ml-3 text-xs font-semibold opacity-70 hover:opacity-100"
              aria-label="Fechar mensagem"
            >
              ×
            </button>
          </div>
        )}
      </div>
      <style jsx>{`
        .newsletter-feedback-enter {
          animation: newsletterFeedbackIn 0.25s ease-out;
        }

        @keyframes newsletterFeedbackIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
