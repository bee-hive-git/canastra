"use client";

import Header from "@/components/global/header"
import TeamHero from "@/components/Time/TeamHero";
import TeamTabs from "@/components/Time/TeamTabs";
import TeamCta from "@/components/Time/TeamCTA";
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
