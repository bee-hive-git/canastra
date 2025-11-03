import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import PitchHero from "@/components/pitch-us/hero";
import PitchOverview from "@/components/pitch-us/overview";
import PitchValue from "@/components/pitch-us/value";
import PitchAsk from "@/components/pitch-us/ask";
import PitchNapkin from "@/components/pitch-us/napkin";

import EdgeLinesSmart from "@/components/EdgeLinesSmart";

export default function PitchUs() {
  return (
    <main>
      <EdgeLinesSmart startIndex={0} />

      {/* header entra na contagem */}
      <section data-edge-section>
        <Header />
      </section>

      <section data-edge-section>
        <PitchHero />
      </section>

      <section data-edge-section>
        <PitchOverview />
      </section>

      <section data-edge-section>
        <PitchNapkin />
      </section>

      <section data-edge-section>
        <PitchValue />
      </section>

      <section data-edge-section>
        <PitchAsk />
      </section>

      <Footer />
    </main>
  );
}
