"use client"

import { usePathname } from "next/navigation"
import { useSEO } from "@/contexts/seo-context"
import { useEffect } from "react"

export default function SEOHead() {
  const pathname = usePathname()
  const { getPageSEO, globalSettings } = useSEO()

  const pageSEO = getPageSEO(pathname) || getPageSEO("/") // Fallback to home page SEO

  // Handle structured data injection via useEffect to avoid script tag warnings
  useEffect(() => {
    if (pageSEO?.structuredData) {
      const existingScript = document.getElementById("structured-data")
      if (existingScript) {
        existingScript.remove()
      }
      const script = document.createElement("script")
      script.id = "structured-data"
      script.type = "application/ld+json"
      script.textContent = pageSEO.structuredData
      document.head.appendChild(script)
    }

    return () => {
      const script = document.getElementById("structured-data")
      if (script) {
        script.remove()
      }
    }
  }, [pageSEO?.structuredData])

  // Handle Google Analytics injection via useEffect
  useEffect(() => {
    if (globalSettings.googleAnalyticsId) {
      // Check if gtag script already exists
      const existingGtagScript = document.querySelector(
        `script[src*="googletagmanager.com/gtag/js?id=${globalSettings.googleAnalyticsId}"]`
      )
      if (!existingGtagScript) {
        const gtagScript = document.createElement("script")
        gtagScript.async = true
        gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${globalSettings.googleAnalyticsId}`
        document.head.appendChild(gtagScript)

        const configScript = document.createElement("script")
        configScript.id = "google-analytics-config"
        configScript.textContent = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${globalSettings.googleAnalyticsId}');
        `
        document.head.appendChild(configScript)
      }
    }
  }, [globalSettings.googleAnalyticsId])

  // This component now handles scripts via useEffect, no JSX needed
  return null
}
