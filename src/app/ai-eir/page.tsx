import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import ForWho from "@/components/ai-eir/forwho"
import AIHero from "@/components/ai-eir/hero"
import Structure from "@/components/ai-eir/structure"
import WhatIs from "@/components/ai-eir/whatis"
import WhatElse from "@/components/ai-eir/whatelse";
import Fellow from "@/components/ai-eir/fellow";
import DataSection from "@/components/ai-eir/data";
import FounderSection from "@/components/ai-eir/founder";
import Inscreva from "@/components/ai-eir/inscreva";
import Faq from "@/components/ai-eir/faq";

export default function AiEir(){
  return (
    <main>
      <Header />
      <AIHero />
      <WhatIs />
      <ForWho />
      <Structure />
      <Fellow />
      <WhatElse />
      <DataSection />
      <FounderSection />
      <Inscreva />
      <Faq />
      <Footer />
    </main>
  )
}