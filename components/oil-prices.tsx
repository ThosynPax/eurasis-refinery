"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

interface PriceData {
  name: string
  price: number
  change: number
  changePercent: number
}

export function OilPrices() {
  const [prices, setPrices] = useState<PriceData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        // Using a mock API for demonstration - replace with actual oil price API
        // You can use APIs like Alpha Vantage, Quandl, or Financial Modeling Prep
        const mockData: PriceData[] = [
          {
            name: "Crude Oil (WTI)",
            price: 78.45,
            change: 1.23,
            changePercent: 1.59,
          },
          {
            name: "Brent Crude",
            price: 82.67,
            change: -0.87,
            changePercent: -1.04,
          },
          {
            name: "Natural Gas",
            price: 2.89,
            change: 0.15,
            changePercent: 5.47,
          },
          {
            name: "Heating Oil",
            price: 2.45,
            change: 0.02,
            changePercent: 0.82,
          },
        ]

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setPrices(mockData)
        setLoading(false)
      } catch (err) {
        setError("Failed to fetch price data")
        setLoading(false)
      }
    }

    fetchPrices()

    // Update prices every 30 seconds
    const interval = setInterval(fetchPrices, 30000)
    return () => clearInterval(interval)
  }, [])

  const getTrendIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-500" />
    if (change < 0) return <TrendingDown className="h-4 w-4 text-red-500" />
    return <Minus className="h-4 w-4 text-muted-foreground" />
  }

  const getTrendColor = (change: number) => {
    if (change > 0) return "text-green-500"
    if (change < 0) return "text-red-500"
    return "text-muted-foreground"
  }

  if (loading) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">Real-Time Market Prices</h2>
            <p className="text-muted-foreground">Loading current oil and gas prices...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">Real-Time Market Prices</h2>
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">Real-Time Market Prices</h2>
          <p className="text-muted-foreground">Stay updated with the latest oil and gas market trends</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prices.map((item) => (
            <Card key={item.name} className="bg-card hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-card-foreground">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-foreground">${item.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      {getTrendIcon(item.change)}
                      <span className={`text-sm font-medium ${getTrendColor(item.change)}`}>
                        {item.change > 0 ? "+" : ""}
                        {item.change.toFixed(2)} ({item.changePercent > 0 ? "+" : ""}
                        {item.changePercent.toFixed(2)}%)
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Prices updated every 30 seconds • Last updated: {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>
    </section>
  )
}
