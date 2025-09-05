import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe, Zap } from "lucide-react"

export const metadata = {
  title: "About Us - Eurasia Energy | Leading Oil & Gas Refining Solutions",
  description:
    "Learn about Eurasia Energy's commitment to excellence in oil and gas refining with cutting-edge technology and sustainable practices.",
}

export default function AboutPage() {
  const stats = [
    { label: "Years of Experience", value: "25+", icon: Award },
    { label: "Countries Served", value: "40+", icon: Globe },
    { label: "Refining Capacity", value: "500K", unit: "barrels/day", icon: Zap },
    { label: "Team Members", value: "2,500+", icon: Users },
  ]

  const values = [
    {
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from product quality to customer service.",
    },
    {
      title: "Innovation",
      description:
        "Continuously investing in cutting-edge technology to improve efficiency and reduce environmental impact.",
    },
    {
      title: "Sustainability",
      description: "Committed to responsible operations that protect the environment for future generations.",
    },
    {
      title: "Integrity",
      description: "Operating with transparency, honesty, and ethical business practices in all our relationships.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="absolute inset-0">
            <img
              src="/home/2.jpeg?height=400&width=1200"
              alt="Eurasia Energy Facility"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">About Eurasia Energy</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For over two decades, we've been at the forefront of oil and gas refining, delivering premium products and
              innovative solutions to customers worldwide.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                      {stat.unit && <span className="text-lg text-muted-foreground ml-1">{stat.unit}</span>}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 font-serif">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To provide world-class oil and gas refining solutions that meet the evolving energy needs of our
                  customers while maintaining the highest standards of safety, quality, and environmental
                  responsibility.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to driving innovation in the energy sector, creating value for our stakeholders, and
                  contributing to a sustainable energy future.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 font-serif">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To be the leading global refinery company, recognized for our operational excellence, technological
                  innovation, and commitment to sustainable practices.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a future where energy production and environmental stewardship go hand in hand, creating a
                  better world for generations to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">Our Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These fundamental principles guide our decisions and shape our culture every day.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">Ready to Work With Us?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Discover how Eurasia Energy can meet your energy needs with our premium products and exceptional
              service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/products">
                <Button size="lg" variant="outline" className="bg-transparent">
                  View Our Products
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
