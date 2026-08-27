"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, Target, Users, BarChart3, Zap, Star, Circle } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useServices } from "@/contexts/services-context"
import { ServiceIcon } from "@/components/service-icon"

export default function ServicesPage() {
  const { getVisibleServices } = useServices()
  const visibleServices = getVisibleServices()

  const serviceDetails = {
    1: {
      // ABMi
      features: ["Persona targeting", "Scoring", "Visualization", "Multiple intent signals"],
      benefits: ["Zero waste", "Prioritize", "Actionable lead intelligence", "Distinguish SQL's from MQL's"],
      process: ["Exact targets", "AI & algorithms", "Dashboard presentation", "Unified data & intent"],
      caseStudy: {
        client: "TechCorp Solutions",
        challenge: "Low engagement with enterprise accounts",
        solution: "Implemented ABMi strategy with intent data targeting",
        results: "300% increase in enterprise deal size, 45% faster close rates",
      },
    },
    2: {
      // TGL
      features: [
        "Targeted audience by title, geo, and size",
        "Thought-leadership content",
        "Two-click access to gated content",
        "Easy-to-upload leads",
      ],
      benefits: ["Guaranteed leads", "Boost brand authority", "Improve pipeline", "Lead insights"],
      process: ["Define audience", "Set lead goal", "Approve email", "Get weekly leads"],
      caseStudy: {
        client: "InnovateLabs",
        challenge: "Inconsistent lead quality from multiple sources",
        solution: "Deployed TGL system with guaranteed lead scoring",
        results: "95% lead quality improvement, 40% increase in sales velocity",
      },
    },
    3: {
      // PUSH
      features: [
        "Persona development",
        "Cross-platform ad management",
        "Dynamic creative optimization",
        "Advanced audience segmentation",
      ],
      benefits: [
        "Engage ideal prospects",
        "Scalable and cost-effective",
        "Cookieless targeting",
        "Drive traffic to your site",
      ],
      process: ["Define audience", "Creative assets", "Launch and optimize", "Analyze and scale"],
      caseStudy: {
        client: "DataFlow Systems",
        challenge: "Poor ad performance across multiple platforms",
        solution: "Implemented persona-based targeting with dynamic optimization",
        results: "400% improvement in ROAS, 65% reduction in CAC",
      },
    },
    4: {
      // Content Studio
      features: [
        "Content review and strategy development",
        "Tailored content creation",
        "Multi-format content production",
        "Brand voice and messaging alignment",
        "Content performance analytics",
        "Editorial calendar management",
      ],
      benefits: [
        "Higher engagement rates",
        "Improved brand consistency",
        "Enhanced thought leadership positioning",
        "Development of case studies and thought leadership Q&As",
      ],
      process: [
        "Content audit and strategy development",
        "Content creation and optimization",
        "Publishing and distribution",
        "Editorial performance monitoring and refinement",
      ],
      caseStudy: {
        client: "EduTech Innovations",
        challenge: "Lack of engaging content for target audience",
        solution: "Comprehensive content strategy with data-driven optimization",
        results: "200% increase in content engagement, 150% growth in qualified leads",
      },
    },
    5: {
      // Custom Research
      features: [
        "Market landscape analysis",
        "Competitive intelligence gathering",
        "Customer persona development",
        "Industry trend identification",
        "Survey design and execution",
        "Data visualization and reporting",
      ],
      benefits: [
        "Data-driven decision making",
        "Competitive advantage insights",
        "Improved market positioning",
        "Enhanced customer understanding",
        "Showcase industry expertise",
      ],
      process: [
        "Research objectives definition",
        "Data collection methodology design",
        "Primary and secondary research execution",
        "Analysis and insight generation",
        "Research report development",
      ],
      caseStudy: {
        client: "FinTech Solutions",
        challenge: "Limited understanding of target market dynamics",
        solution: "Comprehensive market research and competitive analysis",
        results: "Identified 3 new market opportunities, 40% improvement in product-market fit",
      },
    },
    6: {
      // E-Success
      features: ["SPF, DKIM, DMARC set up", "DNS, Domain set up", "Inbox testing", "Infrastructure, send practices"],
      benefits: ["Reduce spam", "Clean data", "Improve reputation", "Good practices = high deliverability"],
      process: ["Authentic emails", "Identify records for update", "Test provider spam", "Engagement metrics"],
      caseStudy: {
        client: "SaaS Platform Inc",
        challenge: "Low email engagement and poor conversion rates",
        solution: "Redesigned email flows with behavioral triggers and personalization",
        results: "300% increase in email-driven revenue, 85% improvement in customer retention",
      },
    },
  }

  const getCustomServiceDescription = (service) => {
    if (service.name === "ABMi") {
      return "Precision-targeted marketing strategies that focus on high-value accounts with personalized campaigns driven by AI-driven behavioral data."
    } else if (service.name === "TGL") {
      return "Prospect identification and interest for fueling the sales pipeline with top-of-funnel leads."
    } else if (service.name === "PUSH") {
      return "Strategic advertising campaigns tailored to your ideal buyers for maximum engagement and conversion."
    } else if (service.name === "Content Studio") {
      return "Custom content creation, tailored to specific goals and objectives."
    } else if (service.name === "Research") {
      return "Showcase industry expertise and product innovation."
    }
    return service.description
  }

  const getCustomServiceName = (service) => {
    if (service.name === "Research") {
      return "Custom Research"
    }
    return service.name
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-datia-black mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Comprehensive, AI-enabled B2B marketing solutions designed to drive measurable growth and deliver
              exceptional ROI.
            </p>
            <div className="flex justify-center">
              <Link href="/get-started">
                <Button size="lg" className="bg-datia-red hover:bg-datia-red/90 text-white">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-datia-black mb-4">
              We are a purpose-built partner for marketing and sales leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, our integrated approach ensures every aspect of your B2B marketing works
              together seamlessly.
            </p>
          </div>

          {/* First row - ABMi, TGL, PUSH */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {visibleServices.slice(0, 3).map((service) => {
              const details = serviceDetails[service.id]
              return (
                <Card
                  key={service.id}
                  className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-datia-red h-full flex flex-col"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4">
                      <ServiceIcon iconName={service.icon} className="h-8 w-8 text-datia-red" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{getCustomServiceName(service)}</CardTitle>
                    <CardDescription className="text-lg font-medium text-datia-red">{service.fullName}</CardDescription>
                    <p className="text-gray-600 mt-3">{getCustomServiceDescription(service)}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-col h-full">
                      <Tabs defaultValue="features" className="w-full flex-grow">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="features" className="text-xs">
                            Features
                          </TabsTrigger>
                          <TabsTrigger value="process" className="text-xs">
                            Process
                          </TabsTrigger>
                          <TabsTrigger value="benefits" className="text-xs">
                            Benefits
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="features" className="mt-4">
                          <ul className="space-y-2">
                            {details?.features.slice(0, 4).map((feature, index) => (
                              <li key={index} className="flex items-start space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>

                        <TabsContent value="process" className="mt-4">
                          <ul className="space-y-2">
                            {details?.process.map((step, index) => (
                              <li key={index} className="flex items-start space-x-2 text-sm">
                                <Circle className="h-4 w-4 text-datia-red mt-0.5 flex-shrink-0 fill-current" />
                                <span className="text-gray-600">{step}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>

                        <TabsContent value="benefits" className="mt-4">
                          <ul className="space-y-2">
                            {details?.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start space-x-2 text-sm">
                                <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Second row - Content Studio, Custom Research (centered) */}
          <div className="flex justify-center gap-8 mt-8">
            {visibleServices.slice(3, 5).map((service) => {
              const details = serviceDetails[service.id]
              return (
                <Card
                  key={service.id}
                  className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-datia-red flex flex-col w-full xl:w-[calc(33.333%-1rem)]"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4">
                      <ServiceIcon iconName={service.icon} className="h-8 w-8 text-datia-red" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{getCustomServiceName(service)}</CardTitle>
                    <CardDescription className="text-lg font-medium text-datia-red">{service.fullName}</CardDescription>
                    <p className="text-gray-600 mt-3">{getCustomServiceDescription(service)}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-col h-full">
                      <Tabs defaultValue="features" className="w-full flex-grow">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="features" className="text-xs">
                            Features
                          </TabsTrigger>
                          <TabsTrigger value="process" className="text-xs">
                            Process
                          </TabsTrigger>
                          <TabsTrigger value="benefits" className="text-xs">
                            Benefits
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="features" className="mt-4">
                          <ul className="space-y-2">
                            {details?.features.slice(0, 4).map((feature, index) => (
                              <li key={index} className="flex items-start space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>

                        <TabsContent value="process" className="mt-4">
                          <ul className="space-y-2">
                            {details?.process.map((step, index) => (
                              <li key={index} className="flex items-start space-x-2 text-sm">
                                <Circle className="h-4 w-4 text-datia-red mt-0.5 flex-shrink-0 fill-current" />
                                <span className="text-gray-600">{step}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>

                        <TabsContent value="benefits" className="mt-4">
                          <ul className="space-y-2">
                            {details?.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start space-x-2 text-sm">
                                <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-datia-black mb-4">Decidedly Different</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology and expert team deliver consistent results across all service areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-datia-red to-red-600 rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-datia-black mb-2">Precision Targeting</h3>
              <p className="text-gray-600">Data-driven approach ensures every campaign reaches the right audience</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-datia-red to-red-600 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-datia-black mb-2">Measurable Results</h3>
              <p className="text-gray-600">Comprehensive analytics and reporting track every metric that matters</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-datia-red to-red-600 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-datia-black mb-2">Expert Team</h3>
              <p className="text-gray-600">Seasoned professionals with deep B2B marketing expertise</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-datia-red to-red-600 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-datia-black mb-2">Rapid Implementation</h3>
              <p className="text-gray-600">Quick deployment and optimization for faster time-to-value</p>
            </div>
          </div>

          {/* Partner with Us Button */}
          <div className="text-center mt-12">
            <Link href="/get-started">
              <Button size="lg" className="bg-datia-red hover:bg-datia-red/90 text-white">
                Partner with Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
