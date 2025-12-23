"use client";

import { motion } from "framer-motion";
import StartupsMarquee from "@/components/global/StartupsMarquee";

export default function Startups() {
  return (
    <section
      id="startups"
      className="relative text-white py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: "rgb(17, 4, 23)" }}
    >
      <div className="w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-14 lg:mb-20 px-5 max-w-[1200px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className="font-serif font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight mb-4"
            style={{ fontFamily: '"Crimson Text", serif' }}
          >
            <span className="text-[#FF624D]">Startups</span> que passaram pelo
            nosso programa
          </h2>
          <p
            className="text-white/80 text-[16px] sm:text-[18px] leading-relaxed max-w-[600px] mx-auto"
            style={{
              fontFamily:
                '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Conheça as startups que evoluíram com nosso programa e hoje seguem
            inovando em seus mercados.
          </p>
        </motion.div>

        {/* Marquee System */}
        <StartupsMarquee 
          variant="contained" 
          speed={80} 
          className="max-w-[1800px]" 
        />
      </div>
    </section>
  );
}
