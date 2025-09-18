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
    name: "Premium Gasoline",
    specifications: {
      "Octane Rating": "91-93 RON",
      Density: "0.72-0.78 g/cm³",
      "Sulfur Content": "< 10 ppm",
      "Benzene Content": "< 1% vol",
      "Lead Content": "< 0.005 g/L",
    },
  },
  {
    name: "Ultra-Low Sulfur Diesel",
    specifications: {
      "Sulfur Content": "< 15 ppm",
      "Cetane Number": "≥ 40",
      Density: "0.82-0.86 g/cm³",
      "Flash Point": "≥ 52°C",
      "Cloud Point": "Variable by season",
    },
  },
  {
    name: "Aviation Jet Fuel",
    specifications: {
      "Fuel Type": "Jet A-1",
      Density: "0.775-0.840 g/cm³",
      "Flash Point": "≥ 38°C",
      "Freezing Point": "≤ -47°C",
      "Smoke Point": "≥ 25 mm",
    },
  },
  {
    name: "Heating Oil",
    specifications: {
      Grade: "No. 2 Fuel Oil",
      "Sulfur Content": "< 500 ppm",
      "BTU Content": "≥ 138,000 BTU/gal",
      "Flash Point": "≥ 38°C",
      "Pour Point": "≤ -6°C",
    },
  },
  {
    name: "Liquefied Petroleum Gas",
    specifications: {
      Composition: "Propane/Butane Mix",
      Purity: "≥ 95%",
      "Vapor Pressure": "Variable by mix",
      "Calorific Value": "≥ 46 MJ/kg",
      "Sulfur Content": "≤ 50 mg/kg",
    },
  },
  {
    name: "Industrial Lubricants",
    specifications: {
      "Viscosity Range": "ISO VG 32-680",
      "Temperature Range": "-40°C to +200°C",
      "Oxidation Stability": "Excellent",
      "Wear Protection": "Superior",
      "Water Resistance": "High",
    },
  },
  {
    name: "Marine Fuel Oil",
    specifications: {
      Grade: "IFO 180-380",
      "Sulfur Content": "< 0.5%",
      Viscosity: "180-380 cSt",
      "Flash Point": "≥ 60°C",
      "Pour Point": "≤ 30°C",
    },
  },
  {
    name: "Industrial Bitumen",
    specifications: {
      Penetration: "40-300 dmm",
      "Softening Point": "35-70°C",
      "Ductility": "100+ cm",
      "Flash Point": "≥ 250°C",
      Purity: "99.5%",
    },
  },
  {
    name: "Petrochemical Feedstocks",
    specifications: {
      Purity: "≥ 99.5%",
      "Composition": "Various Hydrocarbons",
      "Impurity Level": "< 0.5%",
      "Boiling Range": "Variable by product",
      "Sulfur Content": "< 10 ppm",
    },
  },
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