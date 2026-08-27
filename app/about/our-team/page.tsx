"use client"

import { useState } from "react"
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
import { Linkedin, Mail, Phone } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function OurTeamPage() {
  const [selectedMember, setSelectedMember] = useState(null)

  const teamMembers = [
    {
      name: "Jim Callan",
      title: "Founder/CEO",
      email: "jcallan@datia.io",
      phone: "404.353.5276",
      linkedin: "https://www.linkedin.com/in/james-callan-a251604/",
      image: "/images/jim-callan-new.jpg",
      bio: "Jim Callan is the Founder and CEO of DATIA, bringing over 20 years of experience in B2B marketing and data intelligence. He has a proven track record of building successful marketing technology companies and helping organizations leverage data-driven insights to accelerate growth. Jim's vision for DATIA centers on providing marketing and sales leaders with the intelligence they need to make informed decisions and drive measurable results.",
    },
    {
      name: "Steve Bevilacqua",
      title: "Vice President of Sales",
      email: "sbevilacqua@datia.io",
      phone: "561.523.3820",
      linkedin: "https://www.linkedin.com/in/stephenbevilacqua/",
      image: "/images/steve-bevilacqua.jpg",
      bio: "Steve Bevilacqua serves as Vice President of Sales at DATIA, where he leads the sales organization and drives revenue growth. With extensive experience in B2B sales and a deep understanding of marketing technology solutions, Steve helps clients identify the right strategies to achieve their marketing objectives. His consultative approach and industry expertise make him a trusted advisor to marketing and sales leaders across various industries.",
    },
    {
      name: "Rachel Davis",
      title: "Vice President of Sales",
      email: "rdavis@datia.io",
      phone: "678.521.7584",
      linkedin: "https://www.linkedin.com/in/racheldavis7/",
      image: "/images/rachel-davis.jpg",
      bio: "Rachel Davis is Vice President of Sales at DATIA, specializing in enterprise client relationships and strategic account management. She brings a wealth of experience in consultative selling and has a proven ability to understand complex client needs and deliver tailored solutions. Rachel's expertise in account-based marketing and lead generation strategies helps clients maximize their marketing ROI and achieve sustainable growth.",
    },
    {
      name: "Kurt Dyrli",
      title: "Editorial Director",
      email: "kdyrli@datia.io",
      phone: "860.916.5818",
      linkedin: "https://www.linkedin.com/in/kurt-eisele-dyrli-b92667159/",
      image: "/images/kurt-dyrli.jpg",
      bio: "Kurt Dyrli serves as Editorial Director at DATIA, overseeing content strategy and thought leadership initiatives. With a background in journalism and content marketing, Kurt ensures that DATIA's messaging resonates with target audiences and effectively communicates the value of data-driven marketing solutions. His expertise in storytelling and content optimization helps clients build stronger brand narratives and engage their prospects more effectively.",
    },
    {
      name: "Dana Jackson",
      title: "Fractional Head of Research",
      email: "djackson@datia.io",
      phone: "",
      linkedin: "https://www.linkedin.com/in/dana-jackson-1bb56a/",
      image: "/images/dana-jackson.jpg",
      bio: "Dana Jackson is the Fractional Head of Research at DATIA, leading market research initiatives and competitive intelligence efforts. With extensive experience in data analysis and market research methodologies, Dana provides valuable insights that inform DATIA's strategic direction and help clients better understand their target markets. Her research expertise enables more effective targeting and positioning strategies for client campaigns.",
    },
    {
      name: "Amy Metcalfe",
      title: "Senior Director, Marketing & Operations",
      email: "ametcalfe@datia.io",
      phone: "732.236.4215",
      linkedin: "https://www.linkedin.com/in/amy-metcalfe-6490032/",
      image: "/images/amy-metcalfe.jpg",
      bio: "Amy Metcalfe serves as Senior Director of Marketing & Operations at DATIA, where she oversees marketing strategy execution and operational excellence. With a strong background in marketing operations and process optimization, Amy ensures that DATIA's internal marketing efforts align with client best practices. Her expertise in marketing automation and campaign management helps both DATIA and its clients achieve greater efficiency and effectiveness in their marketing efforts.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Get to Know Us</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Meet the experts behind DATIA's success.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings decades of B2B marketing expertise to every client engagement.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
              {teamMembers.slice(0, 3).map((member) => (
                <Card key={member.name} className="text-center hover:shadow-lg transition-shadow group w-56">
                  <CardHeader className="pb-3">
                    <div className="relative">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                      />
                      {/* Bio overlay on hover */}
                      <div className="absolute inset-0 bg-black bg-opacity-75 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="text-white hover:text-gray-200 text-xs">
                              View Bio
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle className="text-2xl">{member.name}</DialogTitle>
                              <DialogDescription className="text-lg font-medium text-datia-red">
                                {member.title}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4">
                              <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                              <div className="mt-6 flex flex-wrap gap-4">
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                  <Mail className="h-4 w-4" />
                                  <a href={`mailto:${member.email}`} className="hover:text-datia-red transition-colors">
                                    {member.email}
                                  </a>
                                </div>
                                {member.phone && (
                                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <Phone className="h-4 w-4" />
                                    <a href={`tel:${member.phone}`} className="hover:text-datia-red transition-colors">
                                      {member.phone}
                                    </a>
                                  </div>
                                )}
                                {member.linkedin && (
                                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <Linkedin className="h-4 w-4" />
                                    <a
                                      href={member.linkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="hover:text-datia-red transition-colors"
                                    >
                                      LinkedIn Profile
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <p className="text-gray-600 text-base">{member.title}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-1 text-base text-gray-600">
                        <Mail className="h-4 w-4 flex-shrink-0" />
                        <a href={`mailto:${member.email}`} className="hover:text-datia-red transition-colors truncate">
                          {member.email}
                        </a>
                      </div>
                      {member.phone && (
                        <div className="flex items-center justify-center space-x-1 text-base text-gray-600">
                          <Phone className="h-4 w-4 flex-shrink-0" />
                          <a href={`tel:${member.phone}`} className="hover:text-datia-red transition-colors">
                            {member.phone}
                          </a>
                        </div>
                      )}
                      <div className="flex justify-center space-x-2">
                        {member.linkedin && (
                          <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                              <Linkedin className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-datia-red hover:text-datia-red/80 h-8 text-base px-3"
                            >
                              Bio
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle className="text-2xl">{member.name}</DialogTitle>
                              <DialogDescription className="text-lg font-medium text-datia-red">
                                {member.title}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4">
                              <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                              <div className="mt-6 flex flex-wrap gap-4">
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                  <Mail className="h-4 w-4" />
                                  <a href={`mailto:${member.email}`} className="hover:text-datia-red transition-colors">
                                    {member.email}
                                  </a>
                                </div>
                                {member.phone && (
                                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <Phone className="h-4 w-4" />
                                    <a href={`tel:${member.phone}`} className="hover:text-datia-red transition-colors">
                                      {member.phone}
                                    </a>
                                  </div>
                                )}
                                {member.linkedin && (
                                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <Linkedin className="h-4 w-4" />
                                    <a
                                      href={member.linkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="hover:text-datia-red transition-colors"
                                    >
                                      LinkedIn Profile
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
              {teamMembers.slice(3, 6).map((member) => (
                <Card key={member.name} className="text-center hover:shadow-lg transition-shadow group w-56">
                  <CardHeader className="pb-3">
                    <div className="relative">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                      />
                      {/* Bio overlay on hover */}
                      <div className="absolute inset-0 bg-black bg-opacity-75 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="text-white hover:text-gray-200 text-xs">
                              View Bio
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle className="text-2xl">{member.name}</DialogTitle>
                              <DialogDescription className="text-lg font-medium text-datia-red">
                                {member.title}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4">
                              <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                              <div className="mt-6 flex flex-wrap gap-4">
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                  <Mail className="h-4 w-4" />
                                  <a href={`mailto:${member.email}`} className="hover:text-datia-red transition-colors">
                                    {member.email}
                                  </a>
                                </div>
                                {member.phone && (
                                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <Phone className="h-4 w-4" />
                                    <a href={`tel:${member.phone}`} className="hover:text-datia-red transition-colors">
                                      {member.phone}
                                    </a>
                                  </div>
                                )}
                                {member.linkedin && (
                                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <Linkedin className="h-4 w-4" />
                                    <a
                                      href={member.linkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="hover:text-datia-red transition-colors"
                                    >
                                      LinkedIn Profile
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <p className="text-gray-600 text-base">{member.title}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-1 text-base text-gray-600">
                        <Mail className="h-4 w-4 flex-shrink-0" />
                        <a href={`mailto:${member.email}`} className="hover:text-datia-red transition-colors truncate">
                          {member.email}
                        </a>
                      </div>
                      {member.phone && (
                        <div className="flex items-center justify-center space-x-1 text-base text-gray-600">
                          <Phone className="h-4 w-4 flex-shrink-0" />
                          <a href={`tel:${member.phone}`} className="hover:text-datia-red transition-colors">
                            {member.phone}
                          </a>
                        </div>
                      )}
                      <div className="flex justify-center space-x-2">
                        {member.linkedin && (
                          <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                              <Linkedin className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-datia-red hover:text-datia-red/80 h-8 text-base px-3"
                            >
                              Bio
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle className="text-2xl">{member.name}</DialogTitle>
                              <DialogDescription className="text-lg font-medium text-datia-red">
                                {member.title}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4">
                              <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                              <div className="mt-6 flex flex-wrap gap-4">
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                  <Mail className="h-4 w-4" />
                                  <a href={`mailto:${member.email}`} className="hover:text-datia-red transition-colors">
                                    {member.email}
                                  </a>
                                </div>
                                {member.phone && (
                                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <Phone className="h-4 w-4" />
                                    <a href={`tel:${member.phone}`} className="hover:text-datia-red transition-colors">
                                      {member.phone}
                                    </a>
                                  </div>
                                )}
                                {member.linkedin && (
                                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <Linkedin className="h-4 w-4" />
                                    <a
                                      href={member.linkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="hover:text-datia-red transition-colors"
                                    >
                                      LinkedIn Profile
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
