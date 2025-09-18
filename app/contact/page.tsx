import { ContactForm } from "@/components/contact-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageSquare, Briefcase, Truck, Shield } from "lucide-react"

export const metadata = {
  title: "Contact Us - Eurasia Energy | Get in Touch",
  description:
    "Contact Eurasia Energy for inquiries about our products, services, partnerships, or general information. Multiple ways to reach our team.",
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      primary: "+7 775 357 3822",
      description: "Speak directly with our customer service team",
    },
    {
      icon: Mail,
      title: "Email",
      primary: "office@eurasiarefinery.com",
      secondary: "procurement@eurasiarefinery.com",
      description: "Send us your inquiries and we'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      primary: "Astana, Nura District,",
      secondary: "Korgalzhyn Highway, 11, KV 19",
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Monday - Friday: 8:00 AM - 6:00 PM CST",
      secondary: "Emergency Support: 24/7",
      description: "Our team is available during business hours",
    },
  ]

  // Google Maps embed URL for the address
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2054.3761325570654!2d69.2691709756654!3d50.447103187605975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424793aa3191f59f%3A0xf129a41cb3a9c1dd!2sKorgalzhyn%20Nature%20Reserve!5e1!3m2!1sen!2sng!4v1758232771741!5m2!1sen!2sng`

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="absolute inset-0">
            <img
              src="/home/2.jpeg?height=400&width=1200"
              alt="Contact Eurasia Energy"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get in touch with our team for inquiries about our products, services, partnerships, or any questions you
              may have. We're here to help.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">How to Reach Us</h2>
              <p className="text-muted-foreground">Multiple ways to connect with our team</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <Card key={index} className="bg-card text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{method.title}</h3>
                      <p className="text-foreground font-medium mb-1">{method.primary}</p>
                      <p className="text-muted-foreground text-sm mb-3">{method.secondary}</p>
                      <p className="text-muted-foreground text-xs">{method.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Form and Departments */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 font-serif">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">Find Us</h2>
              <p className="text-muted-foreground">Our headquarters in Astana, Kazakhstan</p>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eurasia Energy Location Map"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}