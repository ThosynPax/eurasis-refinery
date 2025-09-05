import { JobListings } from "@/components/job-listings"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Users, Heart, GraduationCap, DollarSign, Calendar, Zap, Shield, Award, TrendingUp } from "lucide-react"

export const metadata = {
  title: "Careers - Eurasia Energy | Join Our Team",
  description:
    "Explore career opportunities at Eurasia Energy. Join our team of industry professionals and help shape the future of energy.",
}

export default function CareersPage() {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision coverage plus wellness programs",
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Market-leading salaries with performance bonuses and profit sharing",
    },
    {
      icon: Calendar,
      title: "Work-Life Balance",
      description: "Flexible schedules, remote work options, and generous PTO",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous training, certifications, and tuition reimbursement",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear advancement paths and leadership development programs",
    },
    {
      icon: Shield,
      title: "Job Security",
      description: "Stable employment with a growing, industry-leading company",
    },
  ]

  const values = [
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaboration and mutual support drive our success",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Embracing new ideas and technologies to stay ahead",
    },
    {
      icon: Shield,
      title: "Safety",
      description: "Safety is our top priority in all operations",
    },
  ]

  const stats = [
    { label: "Employees", value: "2,500+" },
    { label: "Average Tenure", value: "8 years" },
    { label: "Internal Promotions", value: "75%" },
    { label: "Training Hours/Year", value: "40+" },
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">Join Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Build your career with industry leaders. At Eurasia Energy, we're not just refining petroleum—we're
              refining the future of energy.
            </p>
          </div>
        </section>

        {/* Stats */}
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

        {/* Why Work With Us */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">Why Choose Eurasia Energy?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're committed to creating an environment where our employees can thrive, grow, and make a meaningful
                impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <Card key={index} className="bg-card text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">Benefits & Perks</h2>
              <p className="text-muted-foreground">Comprehensive benefits designed to support you and your family</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Join a team that's shaping the future of energy. Explore our current openings and take the first step
              toward an exciting career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
