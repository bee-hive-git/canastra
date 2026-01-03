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
        <StartupsMarquee variant="full" speed={80} />
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
