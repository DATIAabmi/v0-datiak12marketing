"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Footer() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <>
      {/* First CTA Section - Only show on homepage */}
      {isHomePage && (
        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-datia-black mb-4">
              Gain a Competitive Edge in Every Conversation.
            </h2>
            <div className="flex justify-center mt-8">
              <Link href="/get-started">
                <Button size="lg" className="bg-datia-red hover:bg-datia-red/90 text-white">
                  Partner with Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Main Footer */}
      <footer className="bg-datia-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <img src="/images/datia-ai-logo-white.png" alt="DATIA AI" className="h-12 w-auto mb-4" />
              <p className="text-gray-300 mb-6">
                A sales and marketing intelligence company offering enhanced lead generation and media services that
                integrate intent data and AI-driven insights.
              </p>

              {/* Markets Served */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Markets Served</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-300">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-datia-red rounded-full mr-2"></span>
                    Education
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-datia-red rounded-full mr-2"></span>
                    Government
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-datia-red rounded-full mr-2"></span>
                    HR
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-datia-red rounded-full mr-2"></span>
                    Financial Services
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-datia-red rounded-full mr-2"></span>
                    Retail
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-datia-red rounded-full mr-2"></span>
                    Healthcare
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-datia-red rounded-full mr-2"></span>
                    Technology
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-datia-red rounded-full mr-2"></span>
                    Cybersecurity/Identity
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about/decidedly-different"
                    className="text-gray-300 hover:text-datia-red transition-colors"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/about/our-team" className="text-gray-300 hover:text-datia-red transition-colors">
                    Meet the Team
                  </Link>
                </li>
                <li>
                  <Link href="/about/our-advisors" className="text-gray-300 hover:text-datia-red transition-colors">
                    Advisory Board
                  </Link>
                </li>
                <li>
                  <Link href="/trusted-by" className="text-gray-300 hover:text-datia-red transition-colors">
                    Trusted By
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-300 hover:text-datia-red transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-300">© 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
