"use client"
import { HeroSection } from "@/components/hero-section"
import { RankingsSection } from "@/components/rankings-section"
import { InfoSection } from "@/components/info-section"
import { AboutSection } from "@/components/about-section"
import Footer from "@/components/footer"
import TopCasinoModal from "@/components/top-casino-modal"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[hsl(var(--casino-darker))]">
      <TopCasinoModal />
      <HeroSection />
      <RankingsSection />
      <InfoSection />
      <AboutSection />
      <Footer />
    </div>
  )
}
