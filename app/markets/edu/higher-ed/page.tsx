import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, Target, TrendingUp, GraduationCap, Building, Award } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function HigherEdMarketPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-datia-black mb-6">Higher Education Marketing</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Connect with university leaders, administrators, and faculty to drive adoption of innovative solutions in
              higher education
            </p>
            <div className="flex justify-center">
              <Link href="/get-started">
                <Button size="lg" className="bg-datia-red hover:bg-datia-red/90 text-white">
                  Start Your Higher Ed Campaign
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-datia-black mb-6">
                Navigate Higher Education's Complex Ecosystem
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Higher education institutions operate with unique governance structures, funding models, and
                decision-making processes. Our specialized approach helps technology providers, service companies, and
                solution vendors reach the right stakeholders across universities, colleges, and community colleges.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building className="h-6 w-6 text-datia-red mt-1" />
                  <div>
                    <h3 className="font-semibold text-datia-black">Institutional Diversity</h3>
                    <p className="text-gray-600">
                      From R1 research universities to community colleges, each with unique needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-datia-red mt-1" />
                  <div>
                    <h3 className="font-semibold text-datia-black">Multi-Layered Decision Making</h3>
                    <p className="text-gray-600">
                      Navigate complex approval processes across departments and committees
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-datia-red mt-1" />
                  <div>
                    <h3 className="font-semibold text-datia-black">Academic Calendar Alignment</h3>
                    <p className="text-gray-600">Time campaigns with academic and fiscal year planning cycles</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-datia-black mb-6">Higher Ed Market Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-datia-red">5,300+</div>
                  <div className="text-sm text-gray-600">Degree-Granting Institutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-datia-red">19.7M</div>
                  <div className="text-sm text-gray-600">Students Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-datia-red">$750B</div>
                  <div className="text-sm text-gray-600">Annual Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-datia-red">4M+</div>
                  <div className="text-sm text-gray-600">Faculty & Staff</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Decision Makers */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-datia-black mb-4">Key Stakeholders We Reach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our targeted campaigns connect you with decision-makers across the higher education landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Presidents & Provosts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Senior executives who set institutional strategy and approve major initiatives
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Strategic planning authority</li>
                  <li>• Budget allocation decisions</li>
                  <li>• Institutional priorities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Deans & Department Chairs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Academic leaders who influence departmental technology and program decisions
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Departmental budgets</li>
                  <li>• Faculty needs assessment</li>
                  <li>• Academic program support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>CIOs & IT Directors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Technology leaders who evaluate and implement campus-wide solutions
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Infrastructure planning</li>
                  <li>• Security & compliance</li>
                  <li>• Integration oversight</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Registrars & Student Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Administrative leaders who manage student information and support services
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Student data management</li>
                  <li>• Enrollment services</li>
                  <li>• Academic records</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>CFOs & Business Officers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Financial leaders who control procurement and evaluate ROI</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Financial planning</li>
                  <li>• Procurement oversight</li>
                  <li>• Cost-benefit analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Faculty & Researchers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Academic professionals who influence technology adoption and usage</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Research requirements</li>
                  <li>• Teaching technology</li>
                  <li>• Peer influence</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-datia-black mb-4">Our Higher Ed Marketing Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized strategies designed for the academic environment and institutional culture
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-datia-black mb-4">Academic Segmentation</h3>
              <p className="text-gray-600">
                Target by institution type, Carnegie classification, enrollment size, and research focus to ensure
                relevant messaging and positioning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-datia-black mb-4">Research-Driven Content</h3>
              <p className="text-gray-600">
                Create evidence-based content that demonstrates academic impact, student success outcomes, and
                institutional effectiveness.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-datia-black mb-4">Conference Integration</h3>
              <p className="text-gray-600">
                Align campaigns with major higher education conferences and events where decision-makers gather and
                evaluate new solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-datia-black mb-4">Higher Ed Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Learning Management System Expansion</CardTitle>
                <CardDescription>Academic Technology Platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  A leading LMS provider partnered with DATIA to reach academic technology directors and faculty at
                  mid-tier universities seeking to enhance online learning capabilities.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-datia-red">250%</div>
                    <div className="text-sm text-gray-600">Lead Quality Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-datia-red">75%</div>
                    <div className="text-sm text-gray-600">Demo Attendance</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-datia-red">35</div>
                    <div className="text-sm text-gray-600">New Institutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Research Computing Solution</CardTitle>
                <CardDescription>High-Performance Computing Platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  A research computing provider used our targeted approach to reach research administrators and faculty
                  at R1 universities with significant research computing needs.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-datia-red">180+</div>
                    <div className="text-sm text-gray-600">Qualified Leads</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-datia-red">15</div>
                    <div className="text-sm text-gray-600">Major Universities</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-datia-red">$5M</div>
                    <div className="text-sm text-gray-600">Pipeline Value</div>
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
