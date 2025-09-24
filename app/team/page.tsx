import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, Factory, Linkedin, Mail, ShieldCheck, FlaskConical, Leaf, Briefcase } from "lucide-react"
export const metadata = {
  title: "Our Team - Eurasia Energy | Leadership & Expertise",
  description: "Meet the experienced leadership team and industry experts driving innovation at Eurasia Energy.",
}

export default function TeamPage() {
  const leadership = [
        {
      name: "Altaev Akylbek Medetovich",
      position: "Chief Executive Officer",
      image: "/team/8.png",
      linkedin: "#", 
      email: "export@eurasiaenergy.com",
    },
        {
      name: "Akhmetov Timur",
      position: "Director",
       image: "/team/6.png",
        linkedin: "#", 
      email: "export@eurasiaenergy.com",
    },
    {
      name: "Aydova Viktoriya",
      position: "General Sectary",
       image: "/team/7.png",
        linkedin: "#", 
      email: "export@eurasiaenergy.com",
    },
        {
      name: "Ospanov Kirill",
      position: "Export Director",
      image: "/team/5.png",
       linkedin: "#", 
      email: "export@eurasiaenergy.com",
    }
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
              Meet the exceptional professionals who drive innovation, ensure quality, and deliver excellence at Eurasia
              Energy every day.
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
                  
                  <div className="flex items-center gap-3 mt-4">
                    {/* LinkedIn */}
                    <a 
                      href={leader.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>

                    {/* Email */}
                    <a 
                      href={`mailto:${leader.email}`} 
                      className="text-muted-foreground hover:text-primary transition"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
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
