import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, Target, TrendingUp, Building2, Shield, Award } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function StateLocalMarketPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-datia-black mb-6">State & Local Government</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Navigate the complex world of state and local government procurement with targeted campaigns that reach
              key decision-makers
            </p>
            <div className="flex justify-center">
              <Link href="/get-started">
                <Button size="lg" className="bg-datia-red hover:bg-datia-red/90 text-white">
                  Start Your Government Campaign
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
                Master State & Local Government Sales
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                State and local government markets require specialized knowledge of procurement processes, compliance
                requirements, and budget cycles. Our expertise helps technology vendors, service providers, and
                consultants navigate these complex environments successfully.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-datia-red mt-1" />
                  <div>
                    <h3 className="font-semibold text-datia-black">Compliance Expertise</h3>
                    <p className="text-gray-600">
                      Navigate procurement regulations, security requirements, and vendor qualifications
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-datia-red mt-1" />
                  <div>
                    <h3 className="font-semibold text-datia-black">Multi-Level Targeting</h3>
                    <p className="text-gray-600">
                      Reach decision-makers across state agencies, counties, cities, and special districts
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-datia-red mt-1" />
                  <div>
                    <h3 className="font-semibold text-datia-black">Budget Cycle Alignment</h3>
                    <p className="text-gray-600">
                      Time campaigns with fiscal year planning and appropriation processes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-datia-black mb-6">Government Market Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-datia-red">90K+</div>
                  <div className="text-sm text-gray-600">Government Units</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-datia-red">19M+</div>
                  <div className="text-sm text-gray-600">Government Employees</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-datia-red">$3.7T</div>
                  <div className="text-sm text-gray-600">Annual Spending</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-datia-red">50</div>
                  <div className="text-sm text-gray-600">State Governments</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-datia-black mb-4">Key Government Stakeholders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our targeted campaigns connect you with decision-makers across all levels of state and local government
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>CIOs & IT Directors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Technology leaders who evaluate and implement government-wide IT solutions
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Technology strategy</li>
                  <li>• Security oversight</li>
                  <li>• Digital transformation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Department Heads & Administrators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Agency leaders who identify needs and influence procurement decisions
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Program management</li>
                  <li>• Operational efficiency</li>
                  <li>• Service delivery</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Procurement Officers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Purchasing professionals who manage vendor relationships and contracts
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Vendor evaluation</li>
                  <li>• Contract management</li>
                  <li>• Compliance oversight</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Budget Directors & CFOs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Financial leaders who control appropriations and evaluate fiscal impact
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Budget planning</li>
                  <li>• Cost analysis</li>
                  <li>• Financial oversight</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Elected Officials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Governors, mayors, and council members who set policy and approve major initiatives
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Policy direction</li>
                  <li>• Public accountability</li>
                  <li>• Strategic priorities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Program Managers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Operational leaders who implement solutions and manage day-to-day operations
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Implementation oversight</li>
                  <li>• Performance measurement</li>
                  <li>• User adoption</li>
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
            <h2 className="text-3xl md:text-4xl font-bold text-datia-black mb-4">Our Government Marketing Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized strategies designed for the unique requirements of government procurement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-datia-black mb-4">Compliance-First Messaging</h3>
              <p className="text-gray-600">
                Emphasize security, compliance, and regulatory adherence in all communications to address
                government-specific concerns and requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-datia-black mb-4">Multi-Jurisdiction Targeting</h3>
              <p className="text-gray-600">
                Segment by government level, agency type, and jurisdiction size to deliver relevant messaging that
                resonates with specific government needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-datia-black mb-4">ROI & Efficiency Focus</h3>
              <p className="text-gray-600">
                Demonstrate clear value propositions with measurable outcomes, cost savings, and efficiency improvements
                that matter to government stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-datia-black mb-4">Government Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Digital Services Platform Expansion</CardTitle>
                <CardDescription>Citizen Engagement Solution</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  A digital government platform provider partnered with DATIA to reach IT directors and digital services
                  teams across state and local governments.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-datia-red">400%</div>
                    <div className="text-sm text-gray-600">Lead Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-datia-red">65%</div>
                    <div className="text-sm text-gray-600">Meeting Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-datia-red">25</div>
                    <div className="text-sm text-gray-600">New Contracts</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Cybersecurity Solution Deployment</CardTitle>
                <CardDescription>Government Security Platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  A cybersecurity vendor used our targeted approach to reach CISOs and IT security professionals across
                  state agencies and large municipalities.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-datia-red">200+</div>
                    <div className="text-sm text-gray-600">Qualified Leads</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-datia-red">18</div>
                    <div className="text-sm text-gray-600">State Agencies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-datia-red">$8M</div>
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
