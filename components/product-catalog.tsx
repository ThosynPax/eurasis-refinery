"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"
import { products, productCategories, type Product } from "@/lib/products"
import { QuoteModal } from "@/components/quote-modal"

export function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleGetQuote = (product: Product) => {
    setSelectedProduct(product)
    setIsQuoteModalOpen(true)
  }

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
    <div className="bg-background ">
              <section className="relative py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="absolute inset-0">
            <img
              src="/home/2.jpeg?height=400&width=1200"
              alt="Eurasia Energy Services"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">Our Product Catalog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of premium petroleum products, engineered for excellence and environmental
            responsibility.
            </p>
          </div>
        </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        {/* Search and Filter */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {productCategories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="bg-card hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <CardHeader className="space-y-2">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-semibold text-card-foreground">{product.name}</CardTitle>
                  <Badge className={getAvailabilityColor(product.availability)}>{product.availability}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed line-clamp-3">{product.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Key Features:</h4>
                  <ul className="grid grid-cols-1 gap-1 text-sm text-muted-foreground">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                    {product.features.length > 3 && (
                      <li className="text-xs text-muted-foreground/70">+{product.features.length - 3} more features</li>
                    )}
                  </ul>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Link href={`/products/${product.slug}`} className="flex-1">
                    <Button variant="outline" className="w-full bg-transparent">
                      View Details
                    </Button>
                  </Link>
                  <Button
                    onClick={() => handleGetQuote(product)}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
              variant="outline"
              className="mt-4 bg-transparent"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} product={selectedProduct} />
    </div>
  )
}
