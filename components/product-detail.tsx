"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, CheckCircle, Award, Truck } from "lucide-react"
import type { Product } from "@/lib/products"
import { QuoteModal } from "@/components/quote-modal"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "In Stock":
        return "bg-green-100 text-green-800 border-green-200"
      case "Limited":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Out of Stock":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-3xl font-bold text-foreground font-serif">{product.name}</h1>
                <Badge className={getAvailabilityColor(product.availability)}>{product.availability}</Badge>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">{product.longDescription}</p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Applications</h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((application, index) => (
                  <Badge key={index} variant="secondary" className="bg-muted text-muted-foreground">
                    {application}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert, index) => (
                  <Badge key={index} variant="outline" className="border-primary text-primary">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-4">
              <Button
                onClick={() => setIsQuoteModalOpen(true)}
                size="lg"
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Truck className="h-4 w-4 mr-2" />
                Request Quote
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent">
                Download Spec Sheet
              </Button>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border last:border-b-0">
                        <span className="font-medium text-foreground">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recommended Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.applications.map((application, index) => (
                      <div key={index} className="flex items-center p-3 bg-muted/50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-foreground">{application}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="certifications" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quality Certifications & Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center p-4 bg-muted/50 rounded-lg border border-border">
                        <Award className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                        <span className="font-medium text-foreground">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} product={product} />
    </div>
  )
}
