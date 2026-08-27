import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Target, Lightbulb, Award } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function DecidedlyDifferentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-datia-black mb-6">Decidedly Different</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              DATIA provides insights that improve outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-datia-red" />
                </div>
                <CardTitle>Precision-First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every campaign is meticulously crafted with precision to target the right personas and accounts.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="h-8 w-8 text-datia-red" />
                </div>
                <CardTitle>Innovation-Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We constantly push boundaries, leveraging cutting-edge technology and creative strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-datia-red" />
                </div>
                <CardTitle>Results-Obsessed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We measure success by real business impact, not vanity metrics.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-16 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              What sets DATIA apart is lead intelligence through a new breed of Account-Based Marketing campaigns that
              capture numerous intent insights, to detect sales-qualified leads at the right time. Our unique platform
              provides you with a more comprehensive view of which prospect to nurture and how. — And just as critical,
              we keep your brand in front of the 95% of target prospects who aren't ready to buy today, but will be
              tomorrow, next month, or next year.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Buyers across industries now do most of their research independently — often narrowing their shortlist
              long before they ever speak with a salesperson.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Solutions begin with an in-depth consultation to identify key target audiences and deliver on Marketing
              objectives.
            </p>

            {/* Experience the Difference Section - Moved into the white space */}
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold text-datia-black mb-4">Experience the Difference</h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Ready to see how our approach can transform your B2B marketing results?
              </p>
              <div className="flex justify-center">
                <Link href="/get-started">
                  <Button size="lg" className="bg-datia-red hover:bg-datia-red/90 text-white">
                    Partner with Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
