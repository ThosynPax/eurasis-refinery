import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-accent/10 py-20 lg:py-32">
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg?height=600&width=1200"
          alt="Eurasis Refinery Industrial Facility"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-serif">
            Leading the Future of
            <span className="text-primary block">Oil & Gas Refining</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Eurasis Refinery delivers world-class refining solutions with cutting-edge technology, sustainable
            practices, and unmatched expertise in the energy sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
