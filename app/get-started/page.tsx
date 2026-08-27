"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Phone, Linkedin, CheckCircle } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    solutions: [],
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSolutionChange = (solution, checked) => {
    if (checked) {
      setFormData({ ...formData, solutions: [...formData.solutions, solution] })
    } else {
      setFormData({ ...formData, solutions: formData.solutions.filter((s) => s !== solution) })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setIsSubmitted(true)
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        website: "",
        solutions: [],
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      setError("Failed to submit form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const salesTeam = [
    {
      name: "Jim Callan",
      title: "Founder/CEO",
      email: "jcallan@datia.io",
      phone: "404.353.5276",
      image: "/images/jim-callan-new.jpg",
      linkedin: "https://www.linkedin.com/in/james-callan-a251604/",
    },
    {
      name: "Steve Bevilacqua",
      title: "Vice President of Sales",
      email: "sbevilacqua@datia.io",
      phone: "561.523.3820",
      image: "/images/steve-bevilacqua.jpg",
      linkedin: "https://www.linkedin.com/in/stephenbevilacqua/",
    },
    {
      name: "Rachel Davis",
      title: "Vice President of Sales",
      email: "rdavis@datia.io",
      phone: "678.521.7584",
      image: "/images/rachel-davis.jpg",
      linkedin: "https://www.linkedin.com/in/racheldavis7/",
    },
    {
      name: "Kurt Dyrli",
      title: "Editorial Director",
      email: "kdyrli@datia.io",
      phone: "860.916.5818",
      image: "/images/kurt-dyrli.jpg",
      linkedin: "https://www.linkedin.com/in/kurt-eisele-dyrli-b92667159/",
    },
    {
      name: "Dana Jackson",
      title: "Fractional Head of Research",
      email: "djackson@datia.io",
      phone: "",
      image: "/images/dana-jackson.jpg",
      linkedin: "https://www.linkedin.com/in/dana-jackson-1bb56a/",
    },
    {
      name: "Amy Metcalfe",
      title: "Senior Director, Marketing & Operations",
      email: "ametcalfe@datia.io",
      phone: "732.236.4215",
      image: "/images/amy-metcalfe.jpg",
      linkedin: "https://www.linkedin.com/in/amy-metcalfe-6490032/",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Reduced height */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Lets Strategize.</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Our data-driven solutions start with an in-depth consultation where we identify key audiences to deliver
              on your target objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section - Horizontal Layout */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">Get Started.</CardTitle>
              <CardDescription className="text-lg">Request more information and rates.</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-4">
                    Your message has been sent successfully. We'll get back to you soon.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>
                  )}

                  {/* Top Row - Contact & Company Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Left Column - Contact Info */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label htmlFor="firstName" className="form-label-enhanced">
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            className="form-input-enhanced"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="form-label-enhanced">
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            className="form-input-enhanced"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email" className="form-label-enhanced">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="form-input-enhanced"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="form-label-enhanced">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="form-input-enhanced"
                        />
                      </div>
                    </div>

                    {/* Middle Column - Company Info */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="company" className="form-label-enhanced">
                          Company Name *
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="form-input-enhanced"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="website" className="form-label-enhanced">
                          Website
                        </Label>
                        <Input
                          id="website"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          placeholder="https://yourcompany.com"
                          className="form-input-enhanced"
                        />
                      </div>
                    </div>

                    {/* Right Column - Solutions & Message */}
                    <div className="space-y-4">
                      <div>
                        <Label className="form-label-enhanced mb-2 block">Solutions of Interest</Label>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          <div className="flex items-start space-x-2">
                            <Checkbox
                              id="abmi"
                              checked={formData.solutions.includes("ABMi")}
                              onCheckedChange={(checked) => handleSolutionChange("ABMi", checked)}
                              className="form-checkbox-enhanced mt-1"
                            />
                            <Label htmlFor="abmi" className="text-sm">
                              ABMi
                            </Label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <Checkbox
                              id="tgl"
                              checked={formData.solutions.includes("TGL")}
                              onCheckedChange={(checked) => handleSolutionChange("TGL", checked)}
                              className="form-checkbox-enhanced mt-1"
                            />
                            <Label htmlFor="tgl" className="text-sm">
                              TGL
                            </Label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <Checkbox
                              id="push"
                              checked={formData.solutions.includes("PUSH Ad Targeting")}
                              onCheckedChange={(checked) => handleSolutionChange("PUSH Ad Targeting", checked)}
                              className="form-checkbox-enhanced mt-1"
                            />
                            <Label htmlFor="push" className="text-sm">
                              PUSH Ad Targeting
                            </Label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <Checkbox
                              id="content-studio"
                              checked={formData.solutions.includes("Content Studio")}
                              onCheckedChange={(checked) => handleSolutionChange("Content Studio", checked)}
                              className="form-checkbox-enhanced mt-1"
                            />
                            <Label htmlFor="content-studio" className="text-sm">
                              Content Studio
                            </Label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <Checkbox
                              id="research"
                              checked={formData.solutions.includes("Custom Research")}
                              onCheckedChange={(checked) => handleSolutionChange("Custom Research", checked)}
                              className="form-checkbox-enhanced mt-1"
                            />
                            <Label htmlFor="research" className="text-sm">
                              Custom Research
                            </Label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="message" className="form-label-enhanced">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your marketing goals..."
                          rows={2}
                          className="form-textarea-enhanced"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end mt-4">
                    <Button
                      type="submit"
                      className="bg-black hover:bg-gray-800 text-white text-lg px-8 py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect directly with our team to discuss your marketing objectives and explore how we can help.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* First Row - Jim, Steve, Rachel */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
                {salesTeam.slice(0, 3).map((member) => (
                  <Card key={member.name} className="text-center hover:shadow-lg transition-shadow w-56">
                    <CardHeader className="pb-2">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
                      />
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <p className="text-gray-600 text-base">{member.title}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2">
                        <div className="flex items-center justify-center space-x-2 text-base text-gray-600">
                          <Mail className="h-4 w-4 flex-shrink-0" />
                          <a
                            href={`mailto:${member.email}`}
                            className="hover:text-datia-red transition-colors text-base whitespace-nowrap overflow-hidden text-ellipsis"
                          >
                            {member.email}
                          </a>
                        </div>
                        {member.phone && (
                          <div className="flex items-center justify-center space-x-2 text-base text-gray-600">
                            <Phone className="h-4 w-4 flex-shrink-0" />
                            <a
                              href={`tel:${member.phone}`}
                              className="hover:text-datia-red transition-colors text-base"
                            >
                              {member.phone}
                            </a>
                          </div>
                        )}
                        <div className="flex justify-center">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-datia-red hover:text-datia-red/80 text-base py-1"
                            asChild
                          >
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center"
                            >
                              <Linkedin className="h-3 w-3 mr-1" />
                              Connect
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Second Row - Kurt, Dana, Amy */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
                {salesTeam.slice(3).map((member) => (
                  <Card key={member.name} className="text-center hover:shadow-lg transition-shadow w-56">
                    <CardHeader className="pb-2">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
                      />
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <p className="text-gray-600 text-base">{member.title}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2">
                        <div className="flex items-center justify-center space-x-2 text-base text-gray-600">
                          <Mail className="h-4 w-4 flex-shrink-0" />
                          <a
                            href={`mailto:${member.email}`}
                            className="hover:text-datia-red transition-colors text-base whitespace-nowrap overflow-hidden text-ellipsis"
                          >
                            {member.email}
                          </a>
                        </div>
                        {member.phone && (
                          <div className="flex items-center justify-center space-x-2 text-base text-gray-600">
                            <Phone className="h-4 w-4 flex-shrink-0" />
                            <a
                              href={`tel:${member.phone}`}
                              className="hover:text-datia-red transition-colors text-base"
                            >
                              {member.phone}
                            </a>
                          </div>
                        )}
                        <div className="flex justify-center">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-datia-red hover:text-datia-red/80 text-base py-1"
                            asChild
                          >
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center"
                            >
                              <Linkedin className="h-3 w-3 mr-1" />
                              Connect
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
