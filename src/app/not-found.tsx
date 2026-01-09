"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  const BG = "rgb(17, 4, 23)";

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen text-center px-4"
      style={{ backgroundColor: BG }}
    >
      <div className="relative w-full max-w-[500px] aspect-[2/1] mb-6">
        <Image
          src="/error-404/404.png"
          alt="404 - Página não encontrada"
          fill
          className="object-contain"
          priority
          unoptimized
        />
      </div>

      <h1
        className="text-white text-sm sm:text-base md:text-lg tracking-[0.1em] uppercase mb-12"
        style={{ fontFamily: '"Crimson Text", serif' }}
      >
        NÃO CONSEGUIMOS <span className="border-b border-white pb-0.5">ENCONTRAR</span> ESSA PÁGINA
      </h1>

      <Link
        href="/"
        className="text-[#FF624D] text-lg sm:text-xl hover:opacity-80 transition-opacity underline underline-offset-4 decoration-[#FF624D]"
        style={{ fontFamily: '"Crimson Text", serif' }}
      >
        Voltar ao início
      </Link>
    </main>
  );
}
