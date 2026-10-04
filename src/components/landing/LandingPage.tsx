import { useFadeIn } from "@/hooks/use-fade-in"

import { CtaBanner } from "./CtaBanner"
import { Footer } from "./Footer"
import { Hero } from "./Hero"
import { Navbar } from "./Navbar"
import { Services } from "./Services"
import { StatsBand } from "./StatsBand"
import { Testimonial } from "./Testimonial"
import { WhyKapitalAmelio } from "./WhyKapitalAmelio"

export function LandingPage() {
  useFadeIn()

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyKapitalAmelio />
        <StatsBand />
        <Testimonial />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
