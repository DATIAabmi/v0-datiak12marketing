"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function WhitepaperContent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    phone: "",
    country: "",
    street: "",
    extra: "",
    city: "",
    state: "",
    zipCode: "",
    jobFunction: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    
    // Reset state and zipCode when country changes
    if (field === "country") {
      setFormData((prev) => ({ ...prev, state: "", zipCode: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission to Omeda.com
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Trigger download
      const link = document.createElement("a")
      link.href = "/downloads/right-at-school-family-engagement-ebook.pdf"
      link.download = "right-at-school-family-engagement-ebook.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setIsSubmitted(true)
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const countries = [
    "United States of America",
    "Canada",
    "Mexico",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "Brazil",
    "India",
    "China",
    "Other",
  ]

  const usStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
    "Puerto Rico",
    "US Virgin Islands", 
    "Guam",
    "American Samoa",
    "Northern Mariana Islands",
  ]

  const canadianProvinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon",
  ]

  const mexicanStates = [
    "Aguascalientes",
    "Baja California",
    "Baja California Sur",
    "Campeche",
    "Chiapas",
    "Chihuahua",
    "Ciudad de México",
    "Coahuila",
    "Colima",
    "Durango",
    "Estado de México",
    "Guanajuato",
    "Guerrero",
    "Hidalgo",
    "Jalisco",
    "Michoacán",
    "Morelos",
    "Nayarit",
    "Nuevo León",
    "Oaxaca",
    "Puebla",
    "Querétaro",
    "Quintana Roo",
    "San Luis Potosí",
    "Sinaloa",
    "Sonora",
    "Tabasco",
    "Tamaulipas",
    "Tlaxcala",
    "Veracruz",
    "Yucatán",
    "Zacatecas",
  ]

  const getStatesForCountry = () => {
    switch (formData.country) {
      case "United States of America":
        return usStates
      case "Canada":
        return canadianProvinces
      case "Mexico":
        return mexicanStates
      default:
        return []
    }
  }

  const getStateLabel = () => {
    switch (formData.country) {
      case "Canada":
        return "Province/Territory"
      case "Mexico":
        return "State"
      default:
        return "State/Province"
    }
  }

  const showStateAndZip = () => {
    return ["United States of America", "Canada", "Mexico"].includes(formData.country)
  }

  const jobFunctions = [
    "Community Relations/PR",
    "Curriculum/Assessment",
    "Federal/State Programs",
    "Finance/Business",
    "Human Resources",
    "Library/Media/Instructional Tech",
    "Operations/Facilities",
    "Principal/Asst Principal",
    "Professional Development",
    "Safety/Security",
    "School Board",
    "Special Needs/At-Risk/GT/ELL",
    "Student Services/Guidance",
    "Superintendent",
    "Support Staff",
    "Teacher",
    "Technology/Infrastructure",
    "Vendor",
    "Other",
  ]

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <p className="text-red-600 font-semibold text-base uppercase tracking-wide mb-2">STUDENT SUCCESS</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
            eBook: Improving Family Engagement through Extended Day Enrichment Programs
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            From <span className="text-red-600 font-semibold">Right At School</span>
          </p>
          <p className="text-base text-gray-500">May 30, 2025</p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-1">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Extended day enrichment programs provide opportunities for students to explore their interests and
                  deepen their learning. This additional time outside the school day also provides opportunities for
                  schools and districts to engage and connect more deeply with families, who are crucial to student
                  success.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bD5Mep8NaYZdZPZdQJ2L7Aw4QzrvkQ.png"
                  alt="Teacher and staff member engaging with student in extended day program"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Download this guide to learn more about the importance and impact of family support, how enrichment
              programs can help education leaders deepen family engagement, and some practical strategies for enhancing
              school-home partnerships.
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Content Download</h2>
              <p className="text-lg text-gray-600">
                To download "eBook: Improving Family Engagement through Extended Day Enrichment Programs", please fill
                out the form below.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-green-600 text-6xl mb-4">✓</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Download Started!</h3>
                <p className="text-lg text-gray-600">
                  Your eBook download should begin automatically. If it doesn't, please check your downloads folder.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-base text-gray-700 font-medium">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="mt-1 bg-white border-gray-300 text-base py-2"
                      placeholder="Tye"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-base text-gray-700 font-medium">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="mt-1 bg-white border-gray-300 text-base py-2"
                      placeholder="Callan"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-base text-gray-700 font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1 bg-white border-gray-300 text-base py-2"
                      placeholder="tcallan@datia.io"
                    />
                  </div>
                  <div>
                    <Label htmlFor="organization" className="text-base text-gray-700 font-medium">
                      District/Organization Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="organization"
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) => handleInputChange("organization", e.target.value)}
                      className="mt-1 bg-white border-gray-300 text-base py-2"
                      placeholder="DATIA K12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-base text-gray-700 font-medium">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-1 bg-white border-gray-300 text-base py-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="country" className="text-base text-gray-700 font-medium">
                      Country <span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)} required>
                      <SelectTrigger className="mt-1 bg-white border-gray-300 text-base py-2">
                        <SelectValue placeholder="Please select..." />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country} className="text-base">
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="street" className="text-base text-gray-700 font-medium">
                      Street <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="street"
                      type="text"
                      required
                      value={formData.street}
                      onChange={(e) => handleInputChange("street", e.target.value)}
                      className="mt-1 bg-white border-gray-300 text-base py-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="extra" className="text-base text-gray-700 font-medium">
                      Extra (Apt, Suite, etc.)
                    </Label>
                    <Input
                      id="extra"
                      type="text"
                      value={formData.extra}
                      onChange={(e) => handleInputChange("extra", e.target.value)}
                      className="mt-1 bg-white border-gray-300 text-base py-2"
                    />
                  </div>
                </div>

                {/* Conditional City/State/ZIP row */}
                {showStateAndZip() ? (
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-base text-gray-700 font-medium">
                        City <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        className="mt-1 bg-white border-gray-300 text-base py-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state" className="text-base text-gray-700 font-medium">
                        {getStateLabel()} <span className="text-red-500">*</span>
                      </Label>
                      <Select 
                        value={formData.state} 
                        onValueChange={(value) => handleInputChange("state", value)} 
                        required
                      >
                        <SelectTrigger className="mt-1 bg-white border-gray-300 text-base py-2">
                          <SelectValue placeholder="Please select..." />
                        </SelectTrigger>
                        <SelectContent>
                          {getStatesForCountry().map((state) => (
                            <SelectItem key={state} value={state} className="text-base">
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="zipCode" className="text-base text-gray-700 font-medium">
                        ZIP Code <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="zipCode"
                        type="text"
                        required
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange("zipCode", e.target.value)}
                        className="mt-1 bg-white border-gray-300 text-base py-2"
                        placeholder="31061"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <Label htmlFor="city" className="text-base text-gray-700 font-medium">
                      City <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      className="mt-1 bg-white border-gray-300 text-base py-2"
                    />
                  </div>
                )}

                <div>
                  <Label htmlFor="jobFunction" className="text-base text-gray-700 font-medium">
                    Job Function <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.jobFunction} onValueChange={(value) => handleInputChange("jobFunction", value)} required>
                    <SelectTrigger className="mt-1 bg-white border-gray-300 text-base py-2">
                      <SelectValue placeholder="Please select..." />
                    </SelectTrigger>
                    <SelectContent>
                      {jobFunctions.map((job) => (
                        <SelectItem key={job} value={job} className="text-base">
                          {job}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-xl font-semibold mt-6"
                >
                  {isSubmitting ? "Processing..." : "SUBMIT & DOWNLOAD"}
                </Button>

                <p className="text-sm text-gray-500 text-center mt-4">
                  Contact information is shared with DATIA K12 sponsors and use of data is governed by the{" "}
                  <a href="/privacy-policy" className="text-blue-600 hover:underline">
                    privacy policy
                  </a>
                  . By clicking download, I confirm that my information will be shared with the sponsor.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
