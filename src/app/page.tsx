import Header from "@/components/header"
import Hero from "@/components/hero"
import Sobre from "@/components/sobre"
import Time from "@/components/time"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Page(){
  return (
    <main>
      <Header />
      <Hero />
      <Sobre />
      <Time />
      <Newsletter />
      <Footer />
    </main>
  )
}