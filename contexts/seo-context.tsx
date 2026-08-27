"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface PageSEO {
  id: string
  path: string
  title: string
  description: string
  keywords: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  canonicalUrl?: string
  noIndex: boolean
  structuredData?: string
}

interface SEOContextType {
  pages: PageSEO[]
  getPageSEO: (path: string) => PageSEO | undefined
  updatePageSEO: (page: PageSEO) => void
  addPageSEO: (page: PageSEO) => void
  deletePageSEO: (id: string) => void
  globalSettings: {
    siteName: string
    siteDescription: string
    siteKeywords: string
    defaultOgImage: string
    defaultTwitterImage: string
    googleAnalyticsId: string
  }
  updateGlobalSettings: (settings: any) => void
}

const defaultGlobalSettings = {
  siteName: "Datiak12 Marketing",
  siteDescription: "Innovative B2B marketing strategies that drive results",
  siteKeywords: "B2B marketing, account-based marketing, targeted growth, performance marketing",
  defaultOgImage: "/images/datiak12-og-image.jpg",
  defaultTwitterImage: "/images/datiak12-twitter-image.jpg",
  googleAnalyticsId: "",
}

const defaultPages: PageSEO[] = [
  {
    id: "home",
    path: "/",
    title: "Datiak12 Marketing Solutions | Innovative B2B Marketing Strategies",
    description:
      "Datiak12 provides innovative B2B marketing strategies that drive results. Specializing in account-based marketing, targeted growth, and performance marketing.",
    keywords: "B2B marketing, account-based marketing, targeted growth, performance marketing",
    ogTitle: "Datiak12 Marketing Solutions | Drive B2B Growth",
    ogDescription: "Innovative B2B marketing strategies that deliver measurable results for your business.",
    ogImage: "/images/datiak12-og-image.jpg",
    twitterTitle: "Datiak12 Marketing Solutions | Drive B2B Growth",
    twitterDescription: "Innovative B2B marketing strategies that deliver measurable results for your business.",
    twitterImage: "/images/datiak12-twitter-image.jpg",
    canonicalUrl: "https://datiak12.com",
    noIndex: false,
    structuredData: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Datiak12 Marketing",
      url: "https://datiak12.com",
      logo: "https://datiak12.com/images/datiak12-logo.png",
      description:
        "Datiak12 provides innovative B2B marketing strategies that drive results. Specializing in account-based marketing, targeted growth, and performance marketing.",
    }),
  },
  {
    id: "services",
    path: "/services",
    title: "Our Services | Datiak12 Marketing Solutions",
    description:
      "Explore our comprehensive B2B marketing services including ABMi, TGL, and PUSH designed to drive growth for your business.",
    keywords: "B2B marketing services, account-based marketing, targeted growth lists, performance marketing",
    ogTitle: "B2B Marketing Services | Datiak12 Marketing",
    ogDescription: "Comprehensive B2B marketing services designed to drive growth for your business.",
    ogImage: "/images/datiak12-services-og.jpg",
    twitterTitle: "B2B Marketing Services | Datiak12 Marketing",
    twitterDescription: "Comprehensive B2B marketing services designed to drive growth for your business.",
    twitterImage: "/images/datiak12-services-twitter.jpg",
    canonicalUrl: "https://datiak12.com/services",
    noIndex: false,
    structuredData: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "B2B Marketing Services",
      provider: {
        "@type": "Organization",
        name: "Datiak12 Marketing",
      },
      description:
        "Comprehensive B2B marketing services including account-based marketing, targeted growth lists, and performance marketing.",
    }),
  },
  {
    id: "contact",
    path: "/contact",
    title: "Contact Us | Datiak12 Marketing Solutions",
    description:
      "Get in touch with our B2B marketing experts. We're here to help you achieve your marketing goals and drive business growth.",
    keywords: "contact Datiak12, B2B marketing agency contact, marketing consultation",
    ogTitle: "Contact Datiak12 Marketing | Get Expert B2B Marketing Help",
    ogDescription: "Get in touch with our B2B marketing experts to discuss your marketing goals.",
    ogImage: "/images/datiak12-contact-og.jpg",
    twitterTitle: "Contact Datiak12 Marketing | Get Expert B2B Marketing Help",
    twitterDescription: "Get in touch with our B2B marketing experts to discuss your marketing goals.",
    twitterImage: "/images/datiak12-contact-twitter.jpg",
    canonicalUrl: "https://datiak12.com/contact",
    noIndex: false,
    structuredData: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Datiak12 Marketing",
      description: "Contact information for Datiak12 Marketing Solutions.",
      mainEntity: {
        "@type": "Organization",
        name: "Datiak12 Marketing",
        telephone: "+1-555-123-4567",
        email: "hello@datiak12.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "123 Business Ave, Suite 456",
          addressLocality: "New York",
          addressRegion: "NY",
          postalCode: "10001",
          addressCountry: "US",
        },
      },
    }),
  },
]

const SEOContext = createContext<SEOContextType | undefined>(undefined)

export function SEOProvider({ children }: { children: React.ReactNode }) {
  const [pages, setPages] = useState<PageSEO[]>(defaultPages)
  const [globalSettings, setGlobalSettings] = useState(defaultGlobalSettings)

  // Load SEO data from localStorage on mount
  useEffect(() => {
    const savedPages = localStorage.getItem("datiak12-seo-pages")
    const savedSettings = localStorage.getItem("datiak12-seo-settings")

    if (savedPages) {
      try {
        setPages(JSON.parse(savedPages))
      } catch (error) {
        console.error("Error loading SEO pages from localStorage:", error)
      }
    }

    if (savedSettings) {
      try {
        setGlobalSettings(JSON.parse(savedSettings))
      } catch (error) {
        console.error("Error loading SEO settings from localStorage:", error)
      }
    }
  }, [])

  // Save SEO data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("datiak12-seo-pages", JSON.stringify(pages))
  }, [pages])

  useEffect(() => {
    localStorage.setItem("datiak12-seo-settings", JSON.stringify(globalSettings))
  }, [globalSettings])

  const getPageSEO = (path: string) => {
    return pages.find((page) => page.path === path)
  }

  const updatePageSEO = (updatedPage: PageSEO) => {
    setPages(pages.map((page) => (page.id === updatedPage.id ? updatedPage : page)))
  }

  const addPageSEO = (newPage: PageSEO) => {
    setPages([...pages, newPage])
  }

  const deletePageSEO = (id: string) => {
    setPages(pages.filter((page) => page.id !== id))
  }

  const updateGlobalSettings = (settings: any) => {
    setGlobalSettings({ ...globalSettings, ...settings })
  }

  return (
    <SEOContext.Provider
      value={{
        pages,
        getPageSEO,
        updatePageSEO,
        addPageSEO,
        deletePageSEO,
        globalSettings,
        updateGlobalSettings,
      }}
    >
      {children}
    </SEOContext.Provider>
  )
}

export function useSEO() {
  const context = useContext(SEOContext)
  if (context === undefined) {
    throw new Error("useSEO must be used within a SEOProvider")
  }
  return context
}
