import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Building2, 
  Expand, 
  Award, 
  Leaf, 
  Cpu, 
  Trophy 
} from "lucide-react"

export const metadata = {
  title: "Our Story - Eurasia Energy | Journey of Excellence",
  description:
    "Discover the remarkable journey of Eurasia Energy from a small operation to a global leader in oil and gas refining.",
}

export default function StoryPage() {
  const milestones = [
    {
      year: "1999",
      title: "Foundation",
      description: "Eurasia Energy was founded with a vision to revolutionize oil and gas refining in the region.",
      icon: Building2,
    },
    {
      year: "2003",
      title: "First Major Expansion",
      description: "Doubled our refining capacity and introduced advanced distillation technology.",
      icon: Expand,
    },
    {
      year: "2008",
      title: "International Recognition",
      description: "Received ISO 9001 certification and expanded operations to serve international markets.",
      icon: Award,
    },
    {
      year: "2012",
      title: "Green Initiative Launch",
      description: "Launched our comprehensive environmental sustainability program and clean technology adoption.",
      icon: Leaf,
    },
    {
      year: "2018",
      title: "Digital Transformation",
      description: "Implemented AI-driven process optimization and Industry 4.0 technologies.",
      icon: Cpu,
    },
    {
      year: "2024",
      title: "Global Leadership",
      description: "Achieved recognition as one of the world's most efficient and sustainable refineries.",
      icon: Trophy,
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
              alt="Historical Eurasia Energy"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">Our Story</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to global leadership - discover the remarkable journey that shaped Eurasia Energy
              into the industry leader we are today.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 font-serif">A Legacy of Innovation</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What started as a vision to transform the energy industry has evolved into a global success story. Our
                journey is marked by continuous innovation, unwavering commitment to quality, and a dedication to
                sustainable practices that benefit both our customers and the environment.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">Key Milestones</h2>
              <p className="text-muted-foreground">Major achievements that defined our journey</p>
            </div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                return (
                  <div
                    key={index}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex-1">
                      <Card className="bg-card hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#008895]">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <Badge className="bg-[#008895] text-white text-lg px-3 py-1">
                              {milestone.year}
                            </Badge>
                            <h3 className="text-2xl font-bold text-foreground font-serif">{milestone.title}</h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="w-32 h-32 rounded-full bg-[#008895]/10 flex items-center justify-center p-6">
                        <IconComponent className="w-16 h-16 text-[#008895]" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6 font-serif">Looking Forward</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              As we continue to grow and evolve, our commitment to innovation, sustainability, and excellence remains
              stronger than ever. We're excited about the future and the opportunities to serve our customers better
              while contributing to a more sustainable energy landscape.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-card border-t-4 border-[#008895]">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#008895]/10 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-[#008895]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">2025 Goals</h3>
                  <p className="text-muted-foreground">
                    Carbon neutral operations and 50% renewable energy integration
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-t-4 border-[#008895]">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#008895]/10 flex items-center justify-center mx-auto mb-4">
                    <Expand className="w-8 h-8 text-[#008895]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">2027 Vision</h3>
                  <p className="text-muted-foreground">Expansion to 60+ countries with advanced biofuel production</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-t-4 border-[#008895]">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#008895]/10 flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-[#008895]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">2030 Mission</h3>
                  <p className="text-muted-foreground">Industry leader in sustainable refining and clean energy</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}