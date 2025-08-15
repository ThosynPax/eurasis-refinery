import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail } from "lucide-react"

export const metadata = {
  title: "Our Team - Eurasis Refinery | Leadership & Expertise",
  description: "Meet the experienced leadership team and industry experts driving innovation at Eurasis Refinery.",
}

export default function TeamPage() {
  const leadership = [
    {
      name: "Dr. Sarah Chen",
      position: "Chief Executive Officer",
      experience: "25+ years",
      education: "PhD Chemical Engineering, MIT",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Leading Eurasis Refinery with a vision for sustainable energy solutions and operational excellence.",
    },
    {
      name: "Michael Rodriguez",
      position: "Chief Operating Officer",
      experience: "22+ years",
      education: "MS Petroleum Engineering, Stanford",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Overseeing daily operations and driving efficiency improvements across all refining processes.",
    },
    {
      name: "Dr. James Thompson",
      position: "Chief Technology Officer",
      experience: "20+ years",
      education: "PhD Process Engineering, Caltech",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Leading technological innovation and digital transformation initiatives at Eurasis Refinery.",
    },
    {
      name: "Lisa Wang",
      position: "Chief Financial Officer",
      experience: "18+ years",
      education: "MBA Finance, Wharton",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Managing financial strategy and ensuring sustainable growth for the organization.",
    },
  ]

  const departments = [
    {
      name: "Engineering",
      head: "Dr. Robert Kim",
      members: 180,
      description: "Process optimization, equipment design, and technical innovation",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Operations",
      head: "Maria Santos",
      members: 450,
      description: "Daily refining operations, maintenance, and safety management",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Quality Assurance",
      head: "Dr. Ahmed Hassan",
      members: 85,
      description: "Product testing, quality control, and compliance monitoring",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Research & Development",
      head: "Dr. Emily Johnson",
      members: 120,
      description: "Innovation, new product development, and process improvement",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Environmental & Safety",
      head: "David Brown",
      members: 95,
      description: "Environmental compliance, safety protocols, and sustainability",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Commercial",
      head: "Jennifer Lee",
      members: 75,
      description: "Sales, marketing, customer relations, and business development",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const stats = [
    { label: "Total Employees", value: "2,500+" },
    { label: "Engineers", value: "800+" },
    { label: "PhD Holders", value: "150+" },
    { label: "Average Experience", value: "12 years" },
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
              alt="Eurasis Refinery Team"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Meet the exceptional professionals who drive innovation, ensure quality, and deliver excellence at Eurasis
              Refinery every day.
            </p>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">Leadership Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our experienced leadership team brings decades of industry expertise and vision to guide Eurasis
                Refinery's continued success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{leader.name}</h3>
                    <p className="text-primary font-semibold mb-2">{leader.position}</p>
                    <div className="space-y-2 mb-4">
                      <Badge variant="secondary" className="bg-muted text-muted-foreground">
                        {leader.experience}
                      </Badge>
                      <p className="text-sm text-muted-foreground">{leader.education}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{leader.bio}</p>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                        <Linkedin className="h-4 w-4 text-primary" />
                      </button>
                      <button className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                        <Mail className="h-4 w-4 text-primary" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">Our Departments</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each department plays a crucial role in our success, bringing specialized expertise and dedication to
                their respective areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={dept.image || "/placeholder.svg"}
                      alt={dept.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">{dept.name}</h3>
                      <Badge className="bg-primary/10 text-primary">{dept.members} members</Badge>
                    </div>
                    <p className="text-primary font-semibold mb-2">Head: {dept.head}</p>
                    <p className="text-muted-foreground leading-relaxed">{dept.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">Join Our Team</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We're always looking for talented individuals who share our passion for excellence and innovation. Explore
              career opportunities and become part of our growing family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                View Open Positions
              </button>
              <button className="px-8 py-3 border border-border text-foreground rounded-md hover:bg-muted transition-colors">
                Learn About Benefits
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
