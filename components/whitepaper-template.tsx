"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Download } from "lucide-react"
import Image from "next/image"

interface WhitepaperTemplateProps {
  title: string
  subtitle?: string
  description: string
  image: string
  imageAlt: string
  benefits: string[]
  downloadFile: string
  companyInfo?: {
    name: string
    description: string
  }
}

export function WhitepaperTemplate({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  benefits,
  downloadFile,
  companyInfo,
}: WhitepaperTemplateProps) {
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
    jobFunction: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission to Omeda.com
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Trigger download
      const link = document.createElement("a")
      link.href = downloadFile
      link.download = downloadFile.split("/").pop() || "whitepaper.pdf"
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
    "United States",
    "Canada",
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

  const jobFunctions = [
    "Education Administrator",
    "Teacher",
    "Principal",
    "Superintendent",
    "Program Director",
    "Curriculum Specialist",
    "Student Services",
    "Technology Coordinator",
    "Parent/Guardian",
    "Consultant",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
              {subtitle && <h2 className="text-xl text-gray-600 mb-6">{subtitle}</h2>}
              <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
            </div>

            {/* Featured Image */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={image || "/placeholder.svg"}
                alt={imageAlt}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Benefits List */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">What You'll Learn</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Info */}
            {companyInfo && (
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">About {companyInfo.name}</h4>
                <p className="text-blue-800">{companyInfo.description}</p>
              </div>
            )}
          </div>

          {/* Form Section */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <CardTitle className="text-2xl text-center">Download Your Free Whitepaper</CardTitle>
                <p className="text-blue-100 text-center">Get instant access to this comprehensive guide</p>
              </CardHeader>
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Download Started!</h3>
                    <p className="text-gray-600">
                      Your whitepaper download should begin automatically. If it doesn't, please check your downloads
                      folder.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="organization">Organization *</Label>
                      <Input
                        id="organization"
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => handleInputChange("organization", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="country">Country *</Label>
                      <Select onValueChange={(value) => handleInputChange("country", value)} required>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="street">Street Address</Label>
                      <Input
                        id="street"
                        type="text"
                        value={formData.street}
                        onChange={(e) => handleInputChange("street", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="extra">Apt, Suite, etc.</Label>
                      <Input
                        id="extra"
                        type="text"
                        value={formData.extra}
                        onChange={(e) => handleInputChange("extra", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="jobFunction">Job Function *</Label>
                      <Select onValueChange={(value) => handleInputChange("jobFunction", value)} required>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your job function" />
                        </SelectTrigger>
                        <SelectContent>
                          {jobFunctions.map((job) => (
                            <SelectItem key={job} value={job}>
                              {job}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        "Processing..."
                      ) : (
                        <>
                          <Download className="mr-2 h-5 w-5" />
                          Submit & Download
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center mt-4">
                      By submitting this form, you agree to receive communications from DATIA. You can unsubscribe at
                      any time. View our{" "}
                      <a href="/privacy-policy" className="text-blue-600 hover:underline">
                        privacy policy
                      </a>
                      .
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
