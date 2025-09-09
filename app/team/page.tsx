import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, Factory, Mail, Linkedin, ShieldCheck, FlaskConical, Leaf, Briefcase } from "lucide-react"
export const metadata = {
  title: "Our Team - Eurasia Energy | Leadership & Expertise",
  description: "Meet the experienced leadership team and industry experts driving innovation at Eurasia Energy.",
}

export default function TeamPage() {
  const leadership = [
    {
      name: "Dr. Sarah Chen",
      position: "Chief Executive Officer",
      experience: "25+ years",
      education: "PhD Chemical Engineering, MIT",
      image: "/team/5.png",
      bio: "Leading Eurasia Energy with a vision for sustainable energy solutions and operational excellence.",
    },
    {
      name: "Michael Rodriguez",
      position: "Chief Operating Officer",
      experience: "22+ years",
      education: "MS Petroleum Engineering, Stanford",
       image: "/team/6.png",
      bio: "Overseeing daily operations and driving efficiency improvements across all refining processes.",
    },
    {
      name: "Dr. James Thompson",
      position: "Chief Technology Officer",
      experience: "20+ years",
      education: "PhD Process Engineering, Caltech",
       image: "/team/7.png",
      bio: "Leading technological innovation and digital transformation initiatives at Eurasia Energy.",
    },
    {
      name: "Lisa Wang",
      position: "Chief Financial Officer",
      experience: "18+ years",
      education: "MBA Finance, Wharton",
      image: "/team/8.png",
      bio: "Managing financial strategy and ensuring sustainable growth for the organization.",
    },
  ]

 const departments = [
  {
    name: "Engineering",
    members: 180,
    description: "Process optimization, equipment design, and technical innovation",
    icon: Wrench,
  },
  {
    name: "Operations",
    members: 450,
    description: "Daily refining operations, maintenance, and safety management",
    icon: Factory,
  },
  {
    name: "Quality Assurance",
    members: 85,
    description: "Product testing, quality control, and compliance monitoring",
    icon: ShieldCheck,
  },
  {
    name: "Research & Development",
    members: 120,
    description: "Innovation, new product development, and process improvement",
    icon: FlaskConical,
  },
  {
    name: "Environmental & Safety",
    members: 95,
    description: "Environmental compliance, safety protocols, and sustainability",
    icon: Leaf,
  },
  {
    name: "Commercial",
    members: 75,
    description: "Sales, marketing, customer relations, and business development",
    icon: Briefcase,
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
              alt="Eurasia Energy Team"
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

        {/* Leadership Team */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">Leadership Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our experienced leadership team brings decades of industry expertise and vision to guide Eurasia
                Energy's continued success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={leader.image}
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
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <dept.icon className="h-8 w-8 text-primary" />
                      <h3 className="text-xl font-bold text-foreground">{dept.name}</h3>
                    </div>
                  </div>
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
             <a
                href="/contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
