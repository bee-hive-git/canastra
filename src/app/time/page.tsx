"use client";

import Header from "@/components/global/header"
import TeamHero from "@/components/time/TeamHero";
import TeamTabs from "@/components/time/TeamTabs";
import TeamCta from "@/components/time/TeamCTA";
import Footer from "@/components/global/footer"

export default function TimePage() {
  return (
    <>
      <Header />
      <TeamHero />
      <TeamTabs />
      <TeamCta />
      <Footer />
    </>
  );
}
