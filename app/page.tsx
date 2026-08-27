"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ExternalLink } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useServices } from "@/contexts/services-context"
import { ServiceIcon } from "@/components/service-icon"

export default function HomePage() {
  const { getFeaturedServices } = useServices()
  const featuredServices = getFeaturedServices()

  // Function to get custom descriptions for specific services
  const getServiceDescription = (service: any) => {
    switch (service.name) {
      case "ABMi":
        return "Precision-targeted marketing strategies that focus on high-value accounts with personalized campaigns driven by AI-driven behavioral data."
      case "TGL":
        return "Prospect identification and interest for fueling the sales pipeline with top-of-funnel leads."
      case "PUSH":
        return "Strategic advertising campaigns tailored to your ideal buyers for maximum engagement and conversion."
      case "Content Studio":
        return "Custom content creation, tailored to specific goals and objectives."
      case "Research":
        return "Showcase industry expertise and product innovation."
      default:
        return service.description
    }
  }

  // Function to get custom service names
  const getCustomServiceName = (service: any) => {
    if (service.name === "Research") {
      return "Custom Research"
    }
    return service.name
  }

  const marketingBuzzArticles = [
    {
      id: 1,
      title: "Empower Don't Push: How to Meet Leads on Their Own Terms",
      excerpt:
        "Discover effective strategies for empowering prospects rather than pushing them, creating authentic connections that drive better conversion rates and long-term relationships.",
      readTime: "8 min read",
      category: "Lead Generation",
      image: "/images/empower-leads-article.avif",
      url: "https://www.datiak12.io/partner-insights/white-papers-guides/whitepaper/15740322/datia-k12-empower-dont-push-how-to-meet-leads-on-Their own-terms",
    },
    {
      id: 2,
      title: "Nurture or Sell: Finding the Perfect Balance to Convert Leads Without Scaring Them Off",
      excerpt:
        "Learn how to strike the optimal balance between nurturing prospects and making the sale, ensuring you convert leads effectively without overwhelming or alienating them.",
      readTime: "6 min read",
      category: "Lead Nurturing",
      image: "/images/nurture-or-sell-article.avif",
      url: "https://www.datiak12.io/partner-insights/white-papers-guides/whitepaper/15738538/datia-k12-nurture-or-sell-finding-the-perfect-balance-to-convert-leads-without-scaring-them-off",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-datia-black mb-6">Prospect Intelligence Platforms</h1>
            <p className="text-xl md:text-3xl text-gray-700 mb-4 font-medium">
              The AI-enabled fusion of data and media
            </p>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">Know More. Sell Smarter.</p>
            {/* Partner with Us button removed as requested */}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-datia-black mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive, AI-enabled B2B marketing solutions designed to drive growth.
            </p>
          </div>

          {/* First row - ABMi, TGL, PUSH */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredServices.slice(0, 3).map((service) => (
              <Card
                key={service.id}
                className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-datia-red"
              >
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <ServiceIcon iconName={service.icon} className="h-6 w-6 text-datia-red" />
                  </div>
                  <CardTitle>{getCustomServiceName(service)}</CardTitle>
                  <CardDescription>{service.fullName}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{getServiceDescription(service)}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Second row - Content Studio, Custom Research (centered) */}
          <div className="flex justify-center gap-8 mt-8 max-w-6xl mx-auto">
            {featuredServices.slice(3, 5).map((service) => (
              <Card
                key={service.id}
                className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-datia-red w-full md:w-[calc(33.333%-1rem)]"
              >
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <ServiceIcon iconName={service.icon} className="h-6 w-6 text-datia-red" />
                  </div>
                  <CardTitle>{getCustomServiceName(service)}</CardTitle>
                  <CardDescription>{service.fullName}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{getServiceDescription(service)}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {featuredServices.length > 3 && (
            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm">
                Showing {Math.min(featuredServices.length, 5)} of our core services
              </p>
            </div>
          )}

          {/* New Learn More button below all services */}
          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-datia-red hover:bg-datia-red/90 text-white">
                Learn More About Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {featuredServices.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p>No featured services available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Markets Served Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-datia-black mb-4">Markets Served</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver specialized B2B marketing solutions across diverse industries, understanding the unique
              challenges and opportunities in each market.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "EDU",
                fullName: "Education",
                customIcon: "/images/edu-icon.png",
                subcategories: ["K12", "Higher Ed"],
              },
              {
                name: "GOV",
                fullName: "Government",
                customIcon: "/images/gov-icon.png",
                subcategories: ["State/Local", "Federal"],
              },
              {
                name: "HR",
                fullName: "Human Resources",
                customIcon: "/images/hr-icon.png",
                subcategories: ["Employee Benefits", "Human Resources"],
              },
              {
                name: "Financial Services",
                fullName: "Financial Services",
                customIcon: "/images/financial-icon.png",
                subcategories: ["Investment Advisor", "Banking", "Insurance"],
              },
              {
                name: "Technology",
                fullName: "Technology",
                customIcon: "/images/technology-icon.png",
                subcategories: ["Identity", "Enterprise", "Cybersecurity"],
              },
              {
                name: "Retail",
                fullName: "Retail",
                customIcon: "/images/retail-icon.png",
                subcategories: ["Tech", "C-Suite Management"],
              },
              {
                name: "Healthcare",
                fullName: "Healthcare",
                customIcon: "/images/healthcare-icon.png",
                subcategories: ["Tech", "C-Suite Management"],
              },
            ].map((market) => (
              <Card
                key={market.name}
                className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-datia-red group cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="mx-auto w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-datia-red group-hover:text-white transition-colors">
                    <img
                      src={market.customIcon || "/placeholder.svg"}
                      alt={`${market.name} icon`}
                      className="h-6 w-6 group-hover:brightness-0 group-hover:invert transition-all"
                    />
                  </div>
                  <h3 className="font-semibold text-datia-black mb-2">{market.name}</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    {market.subcategories.map((subcategory, index) => (
                      <div key={index}>{subcategory}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Buzz Section */}
      <section className="py-10 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-datia-black mb-4">Marketing Buzz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest insights, strategies, and industry trends.
            </p>
          </div>

          {/* Centered the two blogs with mx-auto and max-w-4xl for better spacing */}
          <div className="flex flex-col md:flex-row gap-8 justify-center max-w-4xl mx-auto">
            {marketingBuzzArticles.map((article) => (
              <Card
                key={article.id}
                className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-datia-red md:max-w-sm flex-1"
              >
                {/* Updated image container with 16:9 aspect ratio */}
                <div className="w-full aspect-video overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className={`w-full h-full ${
                      article.id === 1
                        ? "object-cover object-center"
                        : article.id === 2
                          ? "object-contain object-center bg-gray-50"
                          : "object-cover object-center"
                    }`}
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-datia-red bg-red-100 rounded-full">
                      {article.category}
                    </span>
                    {/* Date removed as requested */}
                  </div>
                  <CardTitle className="text-lg hover:text-datia-red transition-colors">
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      {article.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-datia-red hover:text-datia-red/80 font-medium transition-colors"
                    >
                      Read More
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* "View All Insights" button removed as requested */}
        </div>
      </section>

      <Footer />
    </div>
  )
}
