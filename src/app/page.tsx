import Header from "@/components/global/header"
import Hero from "@/components/home/hero"
import StartupsMarquee from "@/components/global/StartupsMarquee"
import Sobre from "@/components/home/sobre"
import Time from "@/components/home/time"
import Newsletter from "@/components/home/newsletter"
import Footer from "@/components/global/footer"
import EdgeLinesSmart from "@/components/EdgeLinesSmart"

export default function Page(){
  return (
    <main>
      <EdgeLinesSmart startIndex={1} hideBelowWidth={1279} />
      <Header /> {/* não marcar */}

      <section>
        <Hero />
      </section>

      {/* Marquee sobrepondo a parte inferior da Hero (-mt) */}
      <section className="relative z-20 -mt-[60px] sm:-mt-[70px] bg-[#110417]">
        <StartupsMarquee 
          variant="full" 
          speed={80}
          perLogoScale={{
            Evig: { base: 1.0 },
            Quorum: { base: 1.5 },
            Zonic: { base: 1.98, md: 1.0 },
            Allia: { base: 1.1, md: 0.9, lg: 1.0 },
            "Anapfy AI": { base: 1.05, md: 1.5 },
            Guardia: { base: 0.95, md: 1.5 },
            Lagoa: { base: 1.05, md: 0.80 },
          }}
        />
      </section>

      <section data-edge-section>
        <Sobre />
      </section>

      <section data-edge-section>
        <Time />
      </section>

      <section data-edge-section>
        <Newsletter />
      </section>

      <Footer /> {/* não marcar */}
    </main>
  )
}
