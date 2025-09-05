import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Shield, Phone, Mail, MapPin, ExternalLink } from "lucide-react"

export const metadata = {
  title: "Scam Alert - Eurasia Energy | Protect Yourself from Fraud",
  description:
    "Important security information to protect yourself from fraudulent activities claiming to represent Eurasia Energy.",
}

export default function ScamAlertPage() {
  const warningSigns = [
    "Unsolicited emails or calls claiming to represent Eurasia Energy",
    "Requests for upfront payments or fees before product delivery",
    "Offers that seem too good to be true or significantly below market rates",
    "Pressure to make immediate decisions or payments",
    "Requests for personal financial information or bank details",
    "Communication from unofficial email addresses or phone numbers",
    "Poor grammar, spelling errors, or unprofessional communication",
    "Requests to wire money or use untraceable payment methods",
  ]

  const verificationSteps = [
    {
      step: "1",
      title: "Verify Contact Information",
      description: "Always confirm communications through our official contact channels listed below.",
    },
    {
      step: "2",
      title: "Check Email Domains",
      description: "Official emails will always come from @eurasiarefinery.com domain.",
    },
    {
      step: "3",
      title: "Request Documentation",
      description: "Ask for official company documentation and verify with our customer service team.",
    },
    {
      step: "4",
      title: "Report Suspicious Activity",
      description: "Immediately report any suspicious communications to our security team.",
    },
  ]

  const officialContacts = [
    {
      icon: Phone,
      label: "Official Phone",
      value: "+1 (555) 123-4567",
      description: "Main customer service line",
    },
    {
      icon: Mail,
      label: "Official Email",
      value: "info@eurasiarefinery.com",
      description: "Primary business inquiries",
    },
    {
      icon: MapPin,
      label: "Headquarters",
      value: "1234 Refinery Blvd, Houston, TX 77001",
      description: "Physical business address",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-destructive/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive/20 rounded-full mb-6">
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">Security Alert</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Protect yourself from fraudulent activities. Learn how to identify and avoid scams claiming to represent
              Eurasia Energy.
            </p>
          </div>
        </section>

        {/* Main Alert */}
        <section className="py-8 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Alert className="border-destructive/20 bg-destructive/5">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <AlertDescription className="text-destructive font-medium text-lg">
                <strong>IMPORTANT:</strong> Eurasia Energy has become aware of fraudulent activities where scammers
                impersonate our company to deceive potential customers. We NEVER request upfront payments or conduct
                business through unofficial channels. Always verify communications through our official contact
                information.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">Warning Signs of Fraud</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Be aware of these common tactics used by scammers impersonating our company.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {warningSigns.map((sign, index) => (
                <Card key={index} className="bg-card border-l-4 border-l-destructive">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <p className="text-foreground">{sign}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Verification Steps */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">How to Verify Legitimacy</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow these steps to verify if a communication is genuinely from Eurasia Energy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {verificationSteps.map((step, index) => (
                <Card key={index} className="bg-card text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary-foreground">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Official Contact Information */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">Official Contact Information</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Use only these verified contact methods to communicate with Eurasia Energy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {officialContacts.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <Card key={index} className="bg-card text-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <IconComponent className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground">{contact.label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xl font-bold text-primary mb-2">{contact.value}</p>
                      <p className="text-muted-foreground text-sm">{contact.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Report Fraud */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-card border-2 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-foreground font-serif">
                  Report Fraudulent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center leading-relaxed">
                  If you have encountered suspicious activity or believe you have been targeted by scammers claiming to
                  represent Eurasia Energy, please report it immediately.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Contact Our Security Team:</h3>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        <strong>Email:</strong> security@eurasiarefinery.com
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Phone:</strong> +1 (555) 123-4567 ext. 911
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Available:</strong> 24/7 Emergency Line
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Also Report To:</h3>
                    <div className="space-y-2">
                      <a
                        href="https://www.ftc.gov/complaint"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        Federal Trade Commission
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                      <a
                        href="https://www.ic3.gov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        FBI Internet Crime Complaint Center
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                      <p className="text-sm text-muted-foreground">Your local law enforcement</p>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Report Suspicious Activity
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6 font-serif">Stay Informed</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We regularly update our security alerts and fraud prevention information. Stay connected with us through
              official channels for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe to Security Updates
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent">
                Contact Customer Service
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
