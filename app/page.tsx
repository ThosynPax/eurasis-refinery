import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { AboutCompany, WhoWeAre, WhatWeDo, WhatWeOffer, CallToAction } from "@/components/homepage-sections"
import { OilPrices } from "@/components/oil-prices"
import { ProductShowcase } from "@/components/product-showcase"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <AboutCompany />
        <WhoWeAre />
        <OilPrices />
        <WhatWeDo />
        <WhatWeOffer />
        <ProductShowcase />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
