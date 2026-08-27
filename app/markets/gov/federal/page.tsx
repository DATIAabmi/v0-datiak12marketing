import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, Target, TrendingUp, Building2, Shield, Award } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function FederalMarketPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-datia-black mb-6">Federal Government</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Navigate federal procurement with precision targeting that reaches key decision-makers across agencies and
              departments
            </p>
            <div className="flex justify-center">
              <Link href="/get-started">
                <Button size="lg" className="bg-datia-red hover:bg-datia-red/90 text-white">
                  Start Your Federal Campaign
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
                Master Federal Government Procurement
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The federal government represents the world's largest technology buyer, with complex procurement
                processes, strict security requirements, and lengthy sales cycles. Our specialized approach helps
                contractors, technology vendors, and service providers navigate this challenging but lucrative market.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-datia-red mt-1" />
                  <div>
                    <h3 className="font-semibold text-datia-black">Security Clearance Navigation</h3>
                    <p className="text-gray-600">
                      Understand clearance requirements and security protocols for federal engagement
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-datia-red mt-1" />
                  <div>
                    <h3 className="font-semibold text-datia-black">Agency-Specific Targeting</h3>
                    <p className="text-gray-600">
                      Reach decision-makers across civilian agencies, DoD, and intelligence community
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-datia-red mt-1" />
                  <div>
                    <h3 className="font-semibold text-datia-black">Contract Vehicle Alignment</h3>
                    <p className="text-gray-600">
                      Align campaigns with GSA schedules, GWACs, and agency-specific vehicles
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-datia-black mb-6">Federal Market Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-datia-red">$650B</div>
                  <div className="text-sm text-gray-600">Annual IT Spending</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-datia-red">2M+</div>
                  <div className="text-sm text-gray-600">Federal Employees</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-datia-red">430+</div>
                  <div className="text-sm text-gray-600">Agencies & Departments</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-datia-red">$1.8T</div>
                  <div className="text-sm text-gray-600">Total Procurement</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-datia-black mb-4">Key Federal Stakeholders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our targeted campaigns connect you with decision-makers across the federal government ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>CIOs & Deputy CIOs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Senior technology executives who set agency-wide IT strategy and priorities
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• IT modernization strategy</li>
                  <li>• Budget allocation</li>
                  <li>• Technology governance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>CISOs & Security Officers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cybersecurity leaders who evaluate and implement security solutions
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Security architecture</li>
                  <li>• Risk management</li>
                  <li>• Compliance oversight</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Contracting Officers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Procurement professionals who manage federal contracting processes</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Contract negotiation</li>
                  <li>• Vendor management</li>
                  <li>• Compliance monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Program Managers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Mission-focused leaders who identify requirements and manage implementations
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Requirements definition</li>
                  <li>• Program execution</li>
                  <li>• Stakeholder coordination</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Senior Executive Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Senior leaders who set policy and approve major technology initiatives
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Strategic direction</li>
                  <li>• Policy development</li>
                  <li>• Resource allocation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Technical Specialists</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Subject matter experts who evaluate technical solutions and provide recommendations
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Technical evaluation</li>
                  <li>• Solution architecture</li>
                  <li>• Implementation support</li>
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
            <h2 className="text-3xl md:text-4xl font-bold text-datia-black mb-4">Our Federal Marketing Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized strategies designed for the unique requirements of federal procurement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-datia-black mb-4">Security-First Messaging</h3>
              <p className="text-gray-600">
                Emphasize FedRAMP compliance, security clearances, and cybersecurity frameworks to address
                federal-specific security requirements and concerns.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-datia-black mb-4">Agency-Specific Targeting</h3>
              <p className="text-gray-600">
                Segment by agency mission, budget size, and technology priorities to deliver relevant messaging that
                resonates with specific federal requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-datia-black mb-4">Mission Impact Focus</h3>
              <p className="text-gray-600">
                Demonstrate clear mission value, operational efficiency, and citizen service improvements that align
                with federal agency objectives and priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-datia-black mb-4">Federal Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Cloud Infrastructure Modernization</CardTitle>
                <CardDescription>Federal Agency Cloud Migration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  A cloud services provider partnered with DATIA to reach CIOs and IT modernization teams across
                  civilian agencies seeking to migrate legacy systems to the cloud.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-datia-red">500%</div>
                    <div className="text-sm text-gray-600">Lead Quality Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-datia-red">80%</div>
                    <div className="text-sm text-gray-600">Meeting Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-datia-red">12</div>
                    <div className="text-sm text-gray-600">Agency Contracts</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Zero Trust Security Implementation</CardTitle>
                <CardDescription>Department of Defense Solution</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  A cybersecurity vendor used our targeted approach to reach security officers and program managers
                  across DoD components implementing zero trust architecture.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-datia-red">300+</div>
                    <div className="text-sm text-gray-600">Qualified Leads</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-datia-red">8</div>
                    <div className="text-sm text-gray-600">DoD Components</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-datia-red">$15M</div>
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
