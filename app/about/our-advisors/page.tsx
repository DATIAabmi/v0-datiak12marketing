"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Linkedin } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function OurAdvisorsPage() {
  const advisors = [
    {
      name: "Randall Dennis",
      title: "Market Leader, Convergint",
      linkedin: "https://www.linkedin.com/in/johnrandalldennis/",
      image: "/images/randall-dennis.jpg",
      bio: "Randall Dennis is a seasoned market leader at Convergint, bringing extensive experience in technology solutions and strategic business development. With a proven track record in driving growth and innovation, Randall provides valuable insights into market trends and customer needs. His expertise in enterprise solutions and go-to-market strategies helps guide DATIA's strategic direction and client engagement approaches.",
    },
    {
      name: "Terry Arsenault",
      title: "Founder | Ecommerce Brand Builder | Business Intelligence Expert - Vyne",
      linkedin: "https://www.linkedin.com/in/terry-arsenault-89785412/?originalSubdomain=ca",
      image: "/images/terry-arsenault.png",
      bio: "Terry Arsenault is a seasoned technology leader with over 20 years of experience, specializing in business intelligence and data strategy. Throughout his career, Terry has helped organizations harness the power of data to drive smarter decisions and long-term growth. As the founder of a digital agency and multiple ecommerce brands, he combines deep technical expertise with hands-on entrepreneurial experience. His work spans building scalable Shopify stores, leveraging AI to automate operations, and crafting performance-driven marketing strategies. Today, Terry focuses on helping businesses grow through data, technology, and a sharp understanding of digital commerce.",
    },
    {
      name: "Kathy Hurley",
      title: "Principal Consultant, Kathy Hurley Consulting LLC",
      linkedin: "https://www.linkedin.com/in/kathy-hurley/",
      image: "/images/kathy-hurley.jpg",
      bio: "Kathy Hurley is the Principal Consultant at Kathy Hurley Consulting LLC, specializing in strategic marketing and business development. With decades of experience in B2B marketing and consulting, Kathy brings deep expertise in market analysis, competitive positioning, and growth strategies. Her consulting background provides DATIA with valuable perspectives on client needs and market opportunities, helping to shape service offerings and strategic initiatives.",
    },
    {
      name: "Tom Fowler",
      title: "Sales and Marketing Advisor",
      linkedin: "https://www.linkedin.com/in/tom-fowler-506bb228/",
      image: "/images/tom-fowler.jpg",
      bio: "Tom Fowler started his media career in 1978 as the City Editor and then Managing Editor at the Oakland Press, a mid-size daily newspaper based in Pontiac, MI. He then transferred over to the business side to become the Sales and Marketing Manager for the newspaper. In 1984, he migrated to the B-to-B media arena as the Circulation Manager for Fairchild Publications, a business unit of Cap Cities Media, which published over 35 magazines and directories. From there, he became the Publisher and Group Publisher of media platforms at various media and publishing companies: Thompson Media, Cahners Travel Group, Pennwell, Summit Business Media and the International Media News Group. Tom has a history of solid accomplishments in the Energy, Financial and Healthcare media sectors, as well as experience and success in executive leadership roles. His diverse experiences include acquisitions, international event management and website development, turnaround strategies, new business development, strategic marketing planning and employee development. Over the years, he has demonstrated a record of managing and building business units with full P&L responsibility, leading these businesses through the publishing revolution from print to digital to data-driven media solutions. Fowler has a BA degree from Yale University, 1974 and an MBA from the Harvard Business School, 1978.",
    },
    {
      name: "Jason McKenna",
      title: "V.P. of Global Educational Strategy, VEX Robotics",
      linkedin: "https://www.linkedin.com/in/jason-mckenna/",
      image: "/images/jason-mckenna.jpg",
      bio: "Jason McKenna serves as Vice President of Global Educational Strategy at VEX Robotics, where he leads strategic initiatives in educational technology and market development. His expertise in educational markets and technology adoption provides DATIA with valuable insights into the education sector. Jason's experience in scaling educational programs globally and understanding institutional decision-making processes helps inform DATIA's approach to serving educational clients and developing targeted marketing strategies.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our Trusted Advisors</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Comprised of respected executives and industry pioneers, our advisory board delivers trusted counsel and
              market intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet our Expert Collective</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisors.map((advisor) => (
              <Card key={advisor.name} className="hover:shadow-lg transition-shadow group">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <div className="relative">
                    <img
                      src={advisor.image || "/placeholder.svg"}
                      alt={advisor.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    {/* Bio overlay on hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-75 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" className="text-white hover:text-gray-200 text-xs">
                            Bio
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{advisor.name}</DialogTitle>
                            <DialogDescription className="text-lg font-medium text-datia-red">
                              {advisor.title}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-4">
                            <p className="text-gray-700 leading-relaxed">{advisor.bio}</p>
                            <div className="mt-6 flex items-center space-x-2 text-sm text-gray-600">
                              <Linkedin className="h-4 w-4" />
                              <a
                                href={advisor.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-datia-red transition-colors"
                              >
                                {advisor.linkedin.includes("v0.dev") ? "Visit v0.dev" : "LinkedIn Profile"}
                              </a>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardTitle>{advisor.name}</CardTitle>
                    <p className="text-gray-600">{advisor.title}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{advisor.bio}</p>
                  <div className="flex space-x-3">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={advisor.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="text-datia-red hover:text-datia-red/80">
                          Read Full Bio
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{advisor.name}</DialogTitle>
                          <DialogDescription className="text-lg font-medium text-datia-red">
                            {advisor.title}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                          <p className="text-gray-700 leading-relaxed">{advisor.bio}</p>
                          <div className="mt-6 flex items-center space-x-2 text-sm text-gray-600">
                            <Linkedin className="h-4 w-4" />
                            <a
                              href={advisor.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-datia-red transition-colors"
                            >
                              {advisor.linkedin.includes("v0.dev") ? "Visit v0.dev" : "LinkedIn Profile"}
                            </a>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
