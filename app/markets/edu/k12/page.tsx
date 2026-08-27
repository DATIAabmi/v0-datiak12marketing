import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, Target, TrendingUp, BookOpen, Shield, Award } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function K12MarketPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-datia-black mb-6">K12 Education Marketing</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Reach decision-makers in K12 education with precision-targeted campaigns that drive adoption and
              engagement
            </p>
            <div className="flex justify-center">
              <Link href="/get-started">
                <Button size="lg" className="bg-datia-red hover:bg-datia-red/90 text-white">
                  Start Your K12 Campaign
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
                Navigate the Complex K12 Landscape
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The K12 education market presents unique challenges with multiple stakeholders, budget cycles, and
                decision-making processes. Our specialized approach helps EdTech companies, curriculum providers, and
                educational service organizations reach the right people at the right time.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-datia-red mt-1" />
                  <div>
                    <h3 className="font-semibold text-datia-black">Compliance-First Approach</h3>
                    <p className="text-gray-600">
                      Navigate COPPA, FERPA, and state privacy regulations with confidence
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-datia-red mt-1" />
                  <div>
                    <h3 className="font-semibold text-datia-black">Multi-Stakeholder Targeting</h3>
                    <p className="text-gray-600">
                      Reach superintendents, principals, IT directors, and curriculum coordinators
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-datia-red mt-1" />
                  <div>
                    <h3 className="font-semibold text-datia-black">Budget Cycle Alignment</h3>
                    <p className="text-gray-600">Time campaigns with district budget planning and procurement cycles</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-datia-black mb-6">K12 Market Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-datia-red">130K+</div>
                  <div className="text-sm text-gray-600">Public & Private Schools</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-datia-red">50M+</div>
                  <div className="text-sm text-gray-600">Students Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-datia-red">$800B</div>
                  <div className="text-sm text-gray-600">Annual Market Size</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-datia-red">15K+</div>
                  <div className="text-sm text-gray-600">School Districts</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-datia-black mb-4">Key Decision Makers We Reach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our targeted campaigns connect you with the right stakeholders across the K12 ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Superintendents & District Leaders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Strategic decision-makers who set district-wide technology and curriculum priorities
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Budget allocation authority</li>
                  <li>• Strategic planning oversight</li>
                  <li>• Policy implementation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Principals & School Leaders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Building-level administrators who influence classroom technology and program adoption
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• School-level implementation</li>
                  <li>• Teacher support decisions</li>
                  <li>• Student outcome focus</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>IT Directors & Technology Coordinators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Technical leaders who evaluate and implement educational technology solutions
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Infrastructure planning</li>
                  <li>• Security compliance</li>
                  <li>• Integration oversight</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Curriculum Directors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Educational leaders who select and implement instructional materials and programs
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Standards alignment</li>
                  <li>• Professional development</li>
                  <li>• Assessment integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Business Managers & CFOs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Financial leaders who control procurement processes and budget approvals
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Budget management</li>
                  <li>• Procurement oversight</li>
                  <li>• ROI evaluation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Teachers & Department Heads</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Classroom practitioners who influence adoption and provide implementation feedback
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Daily implementation</li>
                  <li>• Student engagement</li>
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
            <h2 className="text-3xl md:text-4xl font-bold text-datia-black mb-4">Our K12 Marketing Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized strategies designed for the unique dynamics of K12 education
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-datia-black mb-4">Stakeholder Mapping</h3>
              <p className="text-gray-600">
                Identify and target the complete decision-making unit, from influencers to final approvers, with
                personalized messaging for each role.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-datia-black mb-4">Educational Content</h3>
              <p className="text-gray-600">
                Create compelling content that demonstrates educational impact, student outcomes, and alignment with
                curriculum standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-datia-black mb-4">Timing Optimization</h3>
              <p className="text-gray-600">
                Align campaigns with budget cycles, conference seasons, and academic calendars for maximum impact and
                engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-datia-black mb-4">K12 Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>EdTech Platform Achieves 300% Lead Increase</CardTitle>
                <CardDescription>Curriculum Management Solution</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  A leading curriculum management platform partnered with DATIA to reach K12 curriculum directors and
                  instructional coordinators across 500+ school districts.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-datia-red">300%</div>
                    <div className="text-sm text-gray-600">Lead Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-datia-red">85%</div>
                    <div className="text-sm text-gray-600">Open Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-datia-red">45%</div>
                    <div className="text-sm text-gray-600">Demo Conversion</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Student Information System Expansion</CardTitle>
                <CardDescription>District Technology Solution</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  A student information system provider used our targeted approach to reach IT directors and
                  superintendents in mid-size school districts.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-datia-red">150+</div>
                    <div className="text-sm text-gray-600">Qualified Leads</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-datia-red">25</div>
                    <div className="text-sm text-gray-600">New Districts</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-datia-red">$2.5M</div>
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
