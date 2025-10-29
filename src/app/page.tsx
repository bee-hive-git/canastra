import Header from "@/components/global/header"
import Hero from "@/components/home/hero"
import Sobre from "@/components/home/sobre"
import Time from "@/components/home/time"
import Newsletter from "@/components/home/newsletter"
import Footer from "@/components/global/footer"

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