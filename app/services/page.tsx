import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Wrench, Shield, Truck, BarChart3, Leaf, Users, Clock, CheckCircle, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Services - Eurasis Refinery | Comprehensive Refining Solutions",
  description:
    "Explore our comprehensive range of refining services including custom processing, quality assurance, logistics, and technical consulting.",
}

export default function ServicesPage() {
  const services = [
    {
      icon: Zap,
      title: "Custom Refining",
      description: "Tailored refining solutions to meet your specific product requirements and quality standards.",
      features: ["Flexible Processing", "Custom Blending", "Quality Control", "Batch Processing"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Comprehensive testing and certification services to ensure product quality and compliance.",
      features: ["Laboratory Testing", "Certification", "Quality Control", "Compliance Monitoring"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Truck,
      title: "Logistics & Distribution",
      description: "End-to-end logistics solutions for efficient and safe transportation of petroleum products.",
      features: ["Transportation", "Storage", "Distribution", "Supply Chain Management"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Wrench,
      title: "Technical Consulting",
      description: "Expert consulting services to optimize your refining operations and improve efficiency.",
      features: ["Process Optimization", "Technical Support", "Training", "Equipment Consulting"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: BarChart3,
      title: "Market Analysis",
      description: "Comprehensive market intelligence and pricing analysis for informed business decisions.",
      features: ["Price Forecasting", "Market Trends", "Competitive Analysis", "Risk Assessment"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Leaf,
      title: "Environmental Services",
      description: "Sustainable solutions and environmental compliance services for responsible operations.",
      features: ["Emission Control", "Waste Management", "Environmental Monitoring", "Sustainability Consulting"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Initial assessment of your requirements and objectives",
    },
    {
      step: "02",
      title: "Planning",
      description: "Detailed project planning and resource allocation",
    },
    {
      step: "03",
      title: "Execution",
      description: "Professional implementation with continuous monitoring",
    },
    {
      step: "04",
      title: "Delivery",
      description: "Quality assurance and timely delivery of results",
    },
  ]

  const benefits = [
    { icon: Users, title: "Expert Team", description: "Industry-leading professionals with decades of experience" },
    { icon: Clock, title: "24/7 Support", description: "Round-the-clock technical support and emergency response" },
    { icon: Shield, title: "Quality Guaranteed", description: "ISO certified processes with quality assurance" },
    { icon: Leaf, title: "Sustainable Practices", description: "Environmentally responsible operations and solutions" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?height=400&width=1200"
              alt="Eurasis Refinery Services"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive refining solutions tailored to meet your unique requirements with unmatched quality and
              reliability.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">What We Offer</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From custom refining to technical consulting, we provide end-to-end solutions for all your petroleum
                processing needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-xl font-semibold text-card-foreground">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground text-sm">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">Our Process</h2>
              <p className="text-muted-foreground">How we deliver exceptional results every time</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border transform translate-x-8"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">Why Choose Us</h2>
              <p className="text-muted-foreground">The advantages of partnering with Eurasis Refinery</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <Card key={index} className="bg-card text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Contact our team today to discuss your requirements and discover how we can help optimize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Request Consultation
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent">
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
