import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Globe, Users, Award, Leaf, Link } from "lucide-react"

export function AboutCompany() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">About Eurasis Refinery</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over three decades, Eurasis Refinery has been at the forefront of petroleum refining excellence. We
              combine cutting-edge technology with sustainable practices to deliver premium refined products while
              maintaining the highest safety and environmental standards.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment to innovation and quality has made us a trusted partner for businesses worldwide,
              processing millions of barrels annually with unmatched efficiency and reliability.
            </p>
          </div>
          <div className="relative">
            <img
              src="/home/1.jpeg?height=500&width=600"
              alt="Eurasis Refinery Control Room"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhoWeAre() {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Uncompromising commitment to workplace safety and environmental protection.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge technology and continuous improvement in all our processes.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers worldwide with reliable supply chains and quality products.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly skilled professionals with decades of industry experience.",
    },
  ]

  return (
    <section className="py-16 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">Who We Are</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A team of dedicated professionals committed to excellence in petroleum refining, driven by innovation,
            safety, and sustainable practices.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhatWeDo() {
  const services = [
    {
      title: "Crude Oil Refining",
      description: "Advanced distillation and processing of crude oil into high-quality petroleum products.",
      image: "/home/2.jpeg?height=300&width=400",
    },
    {
      title: "Product Distribution",
      description: "Efficient logistics and supply chain management for global product distribution.",
      image: "/home/3.jpeg?height=300&width=400",
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and quality control to ensure products meet international standards.",
      image: "/home/4.jpeg?height=300&width=400",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">What We Do</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From crude oil processing to final product delivery, we handle every aspect of petroleum refining with
            precision, efficiency, and environmental responsibility.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhatWeOffer() {
  const offerings = [
    {
      icon: Award,
      title: "Premium Quality Products",
      description: "Industry-leading refined petroleum products that exceed quality standards.",
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Environmentally responsible refining processes and green technology adoption.",
    },
    {
      icon: Shield,
      title: "Reliable Supply Chain",
      description: "Consistent, on-time delivery with robust logistics and inventory management.",
    },
  ]

  return (
    <section className="py-16 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">What We Offer</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive refining solutions backed by decades of expertise, cutting-edge technology, and unwavering
            commitment to excellence.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div key={index} className="bg-card rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <offering.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{offering.title}</h3>
              <p className="text-muted-foreground">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CallToAction() {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-serif">
          Ready to Partner with Industry Leaders?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
          Join thousands of satisfied customers who trust Eurasis Refinery for their petroleum product needs. Get a
          custom quote today and experience the difference quality makes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
         <a
            href="/quote"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="/products">
             <Button
              size="lg"
              variant="secondary"
            className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
          >
            See our Products
             <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
