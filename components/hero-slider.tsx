"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/placeholder.svg?height=600&width=1200",
    title: "Leading the Future of Oil & Gas Refining",
    subtitle:
      "Eurasis Refinery delivers world-class refining solutions with cutting-edge technology, sustainable practices, and unmatched expertise in the energy sector.",
    primaryButton: "Explore Our Services",
    secondaryButton: "View Our Story",
  },
  {
    image: "/placeholder.svg?height=600&width=1200",
    title: "Advanced Petroleum Processing Excellence",
    subtitle:
      "State-of-the-art facilities and innovative processes ensure the highest quality refined products while maintaining environmental responsibility.",
    primaryButton: "Our Products",
    secondaryButton: "Learn More",
  },
  {
    image: "/placeholder.svg?height=600&width=1200",
    title: "Sustainable Energy Solutions",
    subtitle:
      "Committed to environmental stewardship through clean technology, efficient processes, and sustainable refining practices for a greener future.",
    primaryButton: "Sustainability",
    secondaryButton: "Get Quote",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image || "/placeholder.svg"}
              alt="Eurasis Refinery Facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">
                {slide.title.split(" ").slice(0, -3).join(" ")}
                <span className="text-primary block">{slide.title.split(" ").slice(-3).join(" ")}</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">{slide.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  {slide.primaryButton}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                >
                  {slide.secondaryButton}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-primary" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
