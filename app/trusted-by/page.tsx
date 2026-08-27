"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useLogos } from "@/contexts/logos-context"
import Script from "next/script"

export default function TrustedByPage() {
  const { logos } = useLogos()

  // Real company logos as fallback
  const defaultLogos = [
    {
      id: "microsoft",
      name: "Microsoft",
      url: "/logos/microsoft.png",
      companyUrl: "https://www.microsoft.com/en-us",
    },
    {
      id: "qualcomm-snapdragon",
      name: "Qualcomm Snapdragon",
      url: "/logos/qualcomm-snapdragon.webp",
      companyUrl: "https://www.qualcomm.com/snapdragon",
    },
    {
      id: "alphabest-education",
      name: "AlphaBEST Education",
      url: "/logos/alphabest-education.png",
      companyUrl: "https://www.alphabest.org/",
    },
    {
      id: "extron",
      name: "Extron",
      url: "/logos/extron.png",
      companyUrl: "https://www.extron.com/",
    },
    {
      id: "genetec",
      name: "Genetec",
      url: "/logos/genetec.png",
      companyUrl: "https://www.genetec.com",
    },
    {
      id: "right-at-school",
      name: "Right at School",
      url: "/logos/right-at-school.png",
      companyUrl: "https://www.rightatschool.com/",
    },
    {
      id: "transfinder",
      name: "Transfinder",
      url: "/logos/transfinder.png",
      companyUrl: "https://www.transfinder.com/",
    },
    {
      id: "volt",
      name: "VOLT AI",
      url: "/logos/volt.png",
      companyUrl: "https://volt.ai/",
    },
    {
      id: "schneider-electric",
      name: "Schneider Electric",
      url: "/logos/schneider-electric-new.jpeg",
      companyUrl: "https://www.se.com/ww/en/",
    },
    {
      id: "participate-learning",
      name: "Participate Learning",
      url: "/logos/participate-learning.png",
      companyUrl: "https://www.participatelearning.com/",
    },
    {
      id: "collegeboard",
      name: "College Board",
      url: "/logos/collegeboard.png",
      companyUrl: "https://www.collegeboard.org/",
    },
    {
      id: "crowdstrike",
      name: "CrowdStrike",
      url: "/logos/crowdstrike.png",
      companyUrl: "https://www.crowdstrike.com/",
    },
    {
      id: "trivigil",
      name: "TriVigil",
      url: "/logos/trivigil.png",
      companyUrl: "https://www.trivigil.com/",
    },
    {
      id: "sandy-hook-promise",
      name: "Sandy Hook Promise",
      url: "/logos/sandy-hook-promise.jpg",
      companyUrl: "https://www.sandyhookpromise.org/",
    },
    {
      id: "stryker",
      name: "Stryker",
      url: "/logos/stryker.png",
      companyUrl: "https://www.stryker.com/",
    },
    {
      id: "ruckus-commscope",
      name: "Ruckus CommScope",
      url: "/logos/ruckus-commscope.png",
      companyUrl: "https://www.ruckusnetworks.com/",
    },
    {
      id: "powerschool",
      name: "PowerSchool",
      url: "/logos/powerschool.jpg",
      companyUrl: "https://www.powerschool.com/",
    },
    {
      id: "studient",
      name: "Studient",
      url: "/logos/studient.png",
      companyUrl: "https://www.studient.com/",
    },
    {
      id: "symetrix",
      name: "Symetrix",
      url: "/logos/symetrix.png",
      companyUrl: "https://www.symetrix.co/",
    },
    {
      id: "renaissance",
      name: "Renaissance",
      url: "/logos/renaissance.jpg",
      companyUrl: "https://www.renaissance.com/",
    },
    {
      id: "raptor",
      name: "Raptor Technologies",
      url: "/logos/raptor.webp",
      companyUrl: "https://www.raptortech.com/",
    },
    {
      id: "otus",
      name: "Otus",
      url: "/logos/otus.png",
      companyUrl: "https://www.otus.com/",
    },
    {
      id: "primex-sync",
      name: "Primex Sync",
      url: "/logos/primex-sync.png",
      companyUrl: "https://www.primexinc.com/",
    },
    {
      id: "valcom",
      name: "Valcom Potter Global Technologies",
      url: "/logos/valcom.png",
      companyUrl: "https://www.valcom.com/",
    },
    {
      id: "prodigy",
      name: "Prodigy Education",
      url: "/logos/prodigy.png",
      companyUrl: "https://www.prodigygame.com/",
    },
    {
      id: "palo-alto-networks",
      name: "Palo Alto Networks",
      url: "/logos/palo-alto-networks.jpg",
      companyUrl: "https://www.paloaltonetworks.com/",
    },
    {
      id: "rethinkfirst",
      name: "RethinkFirst",
      url: "/logos/rethinkfirst.jpg",
      companyUrl: "https://www.rethinkfirst.com/",
    },
    {
      id: "allegion",
      name: "Allegion",
      url: "/logos/allegion.png",
      companyUrl: "https://www.allegion.com/",
    },
    {
      id: "pathwise",
      name: "Pathwise",
      url: "/logos/pathwise.png",
      companyUrl: "https://pathwisek12.com/",
    },

    {
      id: "parentsquare",
      name: "ParentSquare",
      url: "/logos/parentsquare.png",
      companyUrl: "https://www.parentsquare.com/",
    },
    {
      id: "scanmarker",
      name: "Scanmarker",
      url: "/logos/scanmarker.png",
      companyUrl: "https://scanmarker.com/",
    },
    {
      id: "communities-in-schools",
      name: "Communities In Schools",
      url: "/logos/communities-in-schools.png",
      companyUrl: "https://www.communitiesinschools.org/",
    },
    {
      id: "chartwells",
      name: "Chartwells K12",
      url: "/logos/chartwells.jpg",
      companyUrl: "https://www.chartwellsk12.com/",
    },
    {
      id: "lebra",
      name: "Lebra",
      url: "/logos/lebra.png",
      companyUrl: "https://www.lebrahq.com/",
    },
  ]

  // Use admin-managed logos if available, otherwise use default logos
  const displayLogos = logos.length > 0 ? logos : defaultLogos

  return (
    <div className="min-h-screen bg-white">
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <Script src="https://fast.wistia.com/embed/pghthuyp7z.js" strategy="lazyOnload" type="module" />

      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Trusted by Leading Brands</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              DATIA believes in the power of collaboration. Here are some of the organizations we've worked with to
              drive meaningful outcomes.
            </p>
            <div className="mt-12 max-w-2xl mx-auto">
              <p className="text-sm text-gray-600 mb-3 text-left font-bold">Allison Danes - Right At School</p>
              <wistia-player media-id="pghthuyp7z" aspect="1.7777777777777777" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First 30 logos in 5-column grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {displayLogos.slice(0, 30).map((company) => (
              <div
                key={company.id}
                className="flex items-center justify-center h-16 p-6 transition-all duration-300 group bg-white rounded-md"
              >
                <a
                  href={company.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:scale-105 transition-transform duration-200"
                  title={`Visit ${company.name}`}
                >
                  <img
                    src={company.url || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    className={`${
                      company.id === "extron" || company.id === "right-at-school"
                        ? "h-24 w-60"
                        : company.id === "qualcomm-snapdragon" || company.id === "crowdstrike"
                          ? "h-20 w-50"
                          : company.id === "sandy-hook-promise" ||
                              company.id === "stryker" ||
                              company.id === "ruckus-commscope"
                            ? "h-15 w-40"
                            : company.id === "trivigil"
                              ? "h-14 w-36"
                              : company.id === "powerschool"
                                ? "h-16 w-44"
                                : company.id === "prodigy"
                                  ? "h-[5.86rem] w-[15.63rem]"
                                  : company.id === "otus"
                                    ? "h-12 w-32"
                                    : "h-15 w-40"
                    } object-contain object-center mx-auto`}
                  />
                </a>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-8">
            {displayLogos.slice(30).map((company) => (
              <div
                key={company.id}
                className="flex items-center justify-center h-16 p-6 transition-all duration-300 group bg-white rounded-md"
              >
                <a
                  href={company.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:scale-105 transition-transform duration-200"
                  title={`Visit ${company.name}`}
                >
                  <img
                    src={company.url || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    className={`${
                      company.id === "chartwells"
                        ? "h-20 w-52"
                        : company.id === "lebra"
                          ? "h-10 w-28"
                          : company.id === "otus"
                            ? "h-12 w-32"
                            : "h-15 w-40"
                    } object-contain object-center mx-auto`}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Spotlight */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Spotlight</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* First Testimonial - Anamaria Knight */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-datia-red">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Quote className="h-8 w-8 text-datia-red" />
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                      "Partnering with DATIA on our ABM campaign has been a great experience. From the early research
                      and planning stages through the live campaign, their team has been responsive, insightful, and
                      easy to work with. We've seen strong engagement and high-quality leads so far, and the dashboards
                      and regular updates have helped us stay aligned and see what's working."
                    </blockquote>
                    <div>
                      <div className="font-semibold text-gray-900">Anamaria Knight</div>
                      <div className="text-gray-600">Senior Director Product/Marketing/R&E</div>
                      <div className="text-datia-red font-medium">Participate Learning</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Second Testimonial - Mark McGinnis */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-datia-red">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Quote className="h-8 w-8 text-datia-red" />
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                      "DATIA has been awesome to work with. Their creative ideas, campaign strategy, and the way they
                      bring everything together with great assets has really pushed our marketing forward. They take the
                      time to get to know you and your desired outcomes, it's not just quantity, it's also about
                      quality. They just get it!"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-gray-900">Mark McGinnis</div>
                      <div className="text-gray-600">Chief Evangelist</div>
                      <div className="text-datia-red font-medium">TriVigil</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third Testimonial - Shannon Zaher */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-datia-red">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Quote className="h-8 w-8 text-datia-red" />
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                      "DATIA's team brought deep industry experience and expertise to our custom research project,
                      delivering valuable insights that directly informed our strategy. Their smart work and commitment
                      to best practices ensure we receive actionable, high-quality analysis tailored to our needs."
                    </blockquote>
                    <div>
                      <div className="font-semibold text-gray-900">Shannon Zaher</div>
                      <div className="text-gray-600">Vice President, Product Marketing</div>
                      <div className="text-datia-red font-medium">Raptor Technologies</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fourth Testimonial - Taylor Frey */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-datia-red">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Quote className="h-8 w-8 text-datia-red" />
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                      "I've partnered with DATIA to create several content pieces. From a logistics standpoint, they're
                      very responsive, and they bring great knowledge about the K-12 market to the table."
                    </blockquote>
                    <div>
                      <div className="font-semibold text-gray-900">Taylor Frey</div>
                      <div className="text-gray-600">Sr. Marketing Manager</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
