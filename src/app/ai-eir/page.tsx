import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import ForWho from "@/components/ai-eir/forwho";
import AIHero from "@/components/ai-eir/hero";
import Structure from "@/components/ai-eir/structure";
import WhatIs from "@/components/ai-eir/whatis";
import WhatElse from "@/components/ai-eir/whatelse";
import Fellow from "@/components/ai-eir/fellow";
import DataSection from "@/components/ai-eir/data";
import FounderSection from "@/components/ai-eir/founder";
import Inscreva from "@/components/ai-eir/inscreva";
import Faq from "@/components/ai-eir/faq";

import EdgeLinesSmart from "@/components/EdgeLinesSmart";

export default function AiEir() {
  return (
    <main>
      {/* 👇 Faz o traço começar já no header */}
      <EdgeLinesSmart startIndex={0} hideBelowWidth={1024} />

      {/* agora o header entra na contagem */}
      <section data-edge-section>
        <Header />
      </section>

      <section data-edge-section>
        <AIHero />
      </section>

      <section data-edge-section>
        <WhatIs />
      </section>

      <section data-edge-section>
        <ForWho />
      </section>

      <section data-edge-section>
        <Structure />
      </section>

      <section data-edge-section>
        <Fellow />
      </section>

      <section data-edge-section>
        <WhatElse />
      </section>

      <section data-edge-section>
        <DataSection />
      </section>

      <section data-edge-section>
        <FounderSection />
      </section>

      <section data-edge-section>
        <Inscreva />
      </section>

      <section data-edge-section>
        <Faq />
      </section>

      <Footer /> {/* footer não precisa marcar */}
    </main>
  );
}
