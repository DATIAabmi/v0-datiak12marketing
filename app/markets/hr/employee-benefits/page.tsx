import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, Target, TrendingUp, Heart, Shield, Award } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function EmployeeBenefitsMarketPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-datia-black mb-6">Employee Benefits</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Connect with benefits administrators and HR leaders to drive adoption of innovative employee benefit
              solutions
            </p>
            <div className="flex justify-center">
              <Link href="/get-started">
                <Button size="lg" className="bg-datia-red hover:bg-datia-red/90 text-white">
                  Start Your Benefits Campaign
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
                Navigate the Employee Benefits Landscape
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The employee benefits market is rapidly evolving with new technologies, changing workforce expectations,
                and increased focus on employee wellbeing. Our specialized approach helps benefits providers, technology
                vendors, and service companies reach the right decision-makers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-datia-red mt-1" />
                  <div>
                    <h3 className="font-semibold text-datia-black">Wellbeing Focus</h3>
                    <p className="text-gray-600">
                      Address growing emphasis on mental health, wellness, and work-life balance
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-datia-red mt-1" />
                  <div>
                    <h3 className="font-semibold text-datia-black">Multi-Generational Workforce</h3>
                    <p className="text-gray-600">
                      Navigate diverse benefit preferences across different age groups and life stages
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-datia-red mt-1" />
                  <div>
                    <h3 className="font-semibold text-datia-black">Technology Integration</h3>
                    <p className="text-gray-600">
                      Leverage digital platforms and mobile solutions for benefits administration
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-datia-black mb-6">Benefits Market Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-datia-red">$1.8T</div>
                  <div className="text-sm text-gray-600">Annual Benefits Spending</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-datia-red">160M+</div>
                  <div className="text-sm text-gray-600">Covered Workers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-datia-red">6M+</div>
                  <div className="text-sm text-gray-600">Employers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-datia-red">30%</div>
                  <div className="text-sm text-gray-600">Of Total Compensation</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-datia-black mb-4">Key Benefits Stakeholders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our targeted campaigns connect you with decision-makers across the employee benefits ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Benefits Administrators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Specialists who manage day-to-day benefits operations and vendor relationships
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Benefits program management</li>
                  <li>• Vendor evaluation</li>
                  <li>• Employee communication</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>HR Directors & VPs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Senior HR leaders who set benefits strategy and approve major initiatives
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Strategic planning</li>
                  <li>• Budget allocation</li>
                  <li>• Employee experience</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>CFOs & Finance Leaders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Financial executives who control benefits budgets and evaluate cost impact
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cost management</li>
                  <li>• ROI analysis</li>
                  <li>• Financial planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Risk Managers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professionals who assess and manage benefits-related risks and compliance
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Risk assessment</li>
                  <li>• Compliance oversight</li>
                  <li>• Insurance management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>C-Suite Executives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Senior executives who approve major benefits investments and strategy changes
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Strategic approval</li>
                  <li>• Culture alignment</li>
                  <li>• Talent retention</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Brokers & Consultants</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  External advisors who influence benefits decisions and vendor selection
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Vendor recommendations</li>
                  <li>• Market insights</li>
                  <li>• Implementation support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
