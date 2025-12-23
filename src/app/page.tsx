import Header from "@/components/global/header"
import Hero from "@/components/home/hero"
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
