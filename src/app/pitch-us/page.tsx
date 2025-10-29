import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import PitchHero from "@/components/pitch-us/hero";
import PitchOverview from "@/components/pitch-us/overview";
import PitchValue from "@/components/pitch-us/value";
import PitchAsk from "@/components/pitch-us/ask";
import PitchNapkin from "@/components/pitch-us/napkin";

export default function PitchUs(){
  return (
    <main>
      <Header />
      <PitchHero />
      <PitchOverview />
      <PitchNapkin />
      <PitchValue />
      <PitchAsk />
      <Footer />
    </main>
  )
}