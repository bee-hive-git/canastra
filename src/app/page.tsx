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

      {/* Marquee abaixo da Hero */}
      <section className="bg-[#110417] py-8">
        <StartupsMarquee 
                    variant="full" 
                    speed={80} 
                    className="lg:w-auto "
                    perLogoScale={{
                      Evig: { base: 1.5, md: 1.0 },
                      Quorum: { base: 1.7, md: 1.05 },
                      Zonic: { base: 1.6, md: 1.0 },
                      Allia: { base: 1.3, md: 0.8, lg: 1.0 },
                      "Anapfy AI": { base: 1.95, md: 1.5 },
                      Guardia: { base: 1.95, md: 1.6 },
                      Lagoa: { base: 1.25, md: 0.80 },
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
