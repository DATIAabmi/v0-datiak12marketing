import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Public_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { ServicesProvider } from "@/contexts/services-context"
import { SEOProvider } from "@/contexts/seo-context"
import { ColorsProvider } from "@/contexts/colors-context"
import { LogosProvider } from "@/contexts/logos-context"

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "DATIA",
  description: "Innovative B2B marketing strategies that drive results",
  icons: {
    icon: "/images/datiak12-favicon.png",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ColorsProvider>
            <SEOProvider>
              <ServicesProvider>
                <LogosProvider>
                  {children}
                  <Toaster />
                </LogosProvider>
              </ServicesProvider>
            </SEOProvider>
          </ColorsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
