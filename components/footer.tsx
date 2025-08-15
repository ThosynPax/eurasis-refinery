import Link from "next/link"
import { AlertTriangle, Mail, Phone, MapPin, Shield, ExternalLink } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      {/* Enhanced Scam Alert Section */}
      <div className="bg-destructive/10 border-b border-destructive/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Alert className="border-destructive/20">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <AlertDescription className="text-destructive">
                <strong className="text-base">⚠️ SCAM ALERT - PROTECT YOURSELF</strong>
                <div className="mt-2 space-y-2 text-sm">
                  <p>
                    <strong>Eurasis Refinery ONLY conducts business through official channels.</strong> We never request
                    upfront payments, personal banking details, or cryptocurrency transactions.
                  </p>
                  <p>
                    <strong>Red Flags:</strong> Unsolicited emails offering deals, fake job offers, requests for advance
                    fees, or urgent payment demands claiming to be from our company.
                  </p>
                </div>
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">How to Verify Legitimate Communications</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  • Always verify through our official phone: <strong>+1 (555) 123-4567</strong>
                </li>
                <li>
                  • Check our official email domain: <strong>@eurasiarefinery.com</strong>
                </li>
                <li>
                  • Visit our official website: <strong>www.eurasiarefinery.com</strong>
                </li>
                <li>• All legitimate contracts include our official letterhead and signatures</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Report Scam
                </Button>
                <Button size="sm" variant="outline">
                  <Link href="/scam-alert" className="flex items-center">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Security Notice */}
          <div className="mt-4 p-4 bg-card/50 rounded-lg border border-border/50">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Security Notice:</strong> If you receive suspicious communications
              claiming to be from Eurasis Refinery, do not respond or provide any information. Contact us immediately at{" "}
              <strong>security@eurasiarefinery.com</strong> or call our fraud hotline:{" "}
              <strong>+1 (555) 123-SCAM</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">ER</span>
              </div>
              <span className="font-bold text-lg text-foreground">Eurasis Refinery</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Leading the future of oil and gas refining with cutting-edge technology and sustainable practices.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>1234 Refinery Blvd, Houston, TX 77001</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@eurasiarefinery.com</span>
              </div>
              <div className="flex items-center space-x-2 text-destructive font-medium">
                <Shield className="h-4 w-4" />
                <span>Fraud Hotline: +1 (555) 123-SCAM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/story" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/scam-alert"
                  className="text-destructive hover:text-destructive/80 transition-colors font-medium"
                >
                  🚨 Scam Alert
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for industry insights and company updates.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="w-full px-3 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">© 2024 Eurasis Refinery. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
