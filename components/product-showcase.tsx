"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QuoteModal } from "@/components/quote-modal"

interface Product {
  name: string
  specifications: Record<string, string>
}

const products: Product[] = [
  {
      name: "Crude Oil ESPO",
      specifications: {"Freezing point": "-45°C", "GOST R 51858-2002 Standard": ""}
    },
    {
      name: "Light Crude Oil (LCO)",
      specifications: {"Freezing point": "-60°C", "30-40° Standard": ""}
    },
    {
      name: "EN 590-10ppm",
      specifications: {"Freezing point": "-10°C", "Euro 5 Standard": ""}
    },
    {
      name: "Virgin Base Oil",
      specifications: {"Freezing point": "+20-30°C", "ISO 8217 Standard": ""}
    },
    {
      name: "Diesel Fuel Oil D6",
      specifications: {"Freezing point": "+20-40°C", "ASTM D396 Standard": ""}
    },
    {
      name: "Petroleum Coke",
      specifications: {"Freezing point": "NA", "ASTM D4931/ISO 12982": ""}
    },
    {
      name: "Bitumen",
      specifications: {"Freezing point": "NA", "ASTM D946/EN12591 Standard": ""}
    },
    {
      name: "Jet A-1",
      specifications: {"Freezing point": "≤ - 47°C", "DEF STAN 91-091/ASTM D1655": ""}
    },
    {
      name: "UREA",
      specifications: {"Freezing point": "-11°C", "ISO 22241 Standard": ""}
    },
    {
      name: "D2",
      specifications: {"Freezing point": "-10°C", "GOST 305-82 Standard": ""}
    },
    {
      name: "LNG",
      specifications: {"Freezing point": "-162°C", "ISO 16903/ASTM D1945 Standard": ""}
    },
    {
      name: "LPG",
      specifications: {"Freezing point": "NA", "ASTM D1825/ISO 9162 Standard": ""}
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
          {products.map((product, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-card-foreground">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Specifications:</h4>
                  <ul className="grid grid-cols-1 gap-1 text-sm text-muted-foreground">
                    {Object.entries(product.specifications)
                      .slice(0, 3)
                      .map(([key, value], specIndex) => (
                        <li key={specIndex} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                          <span className="font-medium">{key}:</span> {value}
                        </li>
                      ))}
                    {Object.keys(product.specifications).length > 3 && (
                      <li className="text-xs text-muted-foreground/70">
                        +{Object.keys(product.specifications).length - 3} more specifications
                      </li>
                    )}
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