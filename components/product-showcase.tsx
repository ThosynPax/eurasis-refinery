"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QuoteModal } from "@/components/quote-modal"

interface Product {
  id: string
  name: string
  description: string
  features: string[]
}

const products: Product[] = [
  {
    id: "gasoline",
    name: "Premium Gasoline",
    description:
      "High-octane gasoline refined with advanced technology for optimal engine performance and fuel efficiency.",
    features: ["High Octane Rating", "Clean Burning", "Engine Protection", "Fuel Efficiency"],
  },
  {
    id: "diesel",
    name: "Ultra-Low Sulfur Diesel",
    description:
      "Clean-burning diesel fuel that meets the highest environmental standards while delivering superior performance.",
    features: ["Ultra-Low Sulfur", "High Energy Density", "Cold Weather Performance", "Emission Compliant"],
  },
  {
    id: "jet-fuel",
    name: "Aviation Jet Fuel",
    description: "Premium jet fuel meeting international aviation standards for commercial and military aircraft.",
    features: ["Aviation Grade", "Temperature Stable", "Anti-Icing Properties", "High Performance"],
  },
  {
    id: "heating-oil",
    name: "Heating Oil",
    description: "Efficient heating oil for residential and commercial heating systems with consistent quality.",
    features: ["Clean Burning", "High BTU Content", "Low Sulfur", "Reliable Supply"],
  },
  {
    id: "lpg",
    name: "Liquefied Petroleum Gas",
    description: "Clean and efficient LPG for industrial, commercial, and residential applications.",
    features: ["Clean Energy", "Versatile Use", "High Efficiency", "Environmentally Friendly"],
  },
  {
    id: "lubricants",
    name: "Industrial Lubricants",
    description: "High-performance lubricants for industrial machinery and automotive applications.",
    features: ["High Performance", "Extended Life", "Temperature Resistant", "Corrosion Protection"],
  },
  {
    id: "marine-fuel",
    name: "Marine Fuel Oil",
    description: "Heavy fuel oil specially formulated for marine vessels and shipping industry applications.",
    features: ["High Viscosity", "Marine Grade", "Sulfur Compliant", "Cost Effective"],
  },
  {
    id: "bitumen",
    name: "Industrial Bitumen",
    description: "Premium grade bitumen for road construction, roofing, and waterproofing applications.",
    features: ["Durable", "Weather Resistant", "High Adhesion", "Versatile Applications"],
  },
  {
    id: "petrochemicals",
    name: "Petrochemical Feedstocks",
    description: "High-purity chemical feedstocks for plastics, fertilizers, and chemical manufacturing.",
    features: ["High Purity", "Consistent Quality", "Multiple Grades", "Industrial Grade"],
  },
  {
    id: "base-oils",
    name: "Refined Base Oils",
    description: "High-quality base oils for lubricant manufacturing and specialty oil applications.",
    features: ["Group I-IV Available", "High Viscosity Index", "Oxidation Stable", "Custom Blending"],
  },
  {
    id: "avgas",
    name: "Aviation Gasoline",
    description: "Specialized gasoline for piston-engine aircraft with strict quality and performance standards.",
    features: ["Aviation Grade", "High Octane", "Lead-Free Options", "Reliable Performance"],
  },
  {
    id: "bunker-fuel",
    name: "Bunker Fuel",
    description: "Heavy residual fuel for large ships and power generation with high energy content.",
    features: ["High Density", "Economic", "ISO Compliant", "Global Availability"],
  }
]

export function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const handleGetQuote = (product: Product) => {
    setSelectedProduct(product)
    setIsQuoteModalOpen(true)
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">Our Premium Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of refined petroleum products, engineered for excellence and environmental
            responsibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="bg-card hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-card-foreground">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() => handleGetQuote(product)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} product={selectedProduct} />
    </section>
  )
}