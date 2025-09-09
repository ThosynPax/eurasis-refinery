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
          {/* Additional Security Notice */}
          <div className="mt-4 p-4 bg-card/50 rounded-lg border border-border/50">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Security Notice:</strong> If you receive suspicious communications
              claiming to be from Eurasia Energy, do not respond or provide any information. Contact us immediately at{" "}
              <strong>security@eurasiarefinery.com</strong> or call our fraud hotline:{" "}
              <strong>+7 775 357 3822</strong>
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
              <span className="font-bold text-lg text-foreground">Eurasia Energy</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Leading the future of oil and gas refining with cutting-edge technology and sustainable practices.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Astana, Nura District, Korgalzhyn Highway, 11, KV 19</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+7 775 357 3822</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@eurasiarefinery.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <span>BIN: 061240013150</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <span>KATO: 711510000</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <span>Leaders: Altayev Akylbek Medetovich</span>
              </div>
              <div className="flex items-center space-x-2 text-destructive font-medium">
                <Shield className="h-4 w-4" />
                <span>Fraud Hotline: +7 775 357 3822</span>
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

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">© 2014-2025 Eurasia Energy. All rights reserved.</p>
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
