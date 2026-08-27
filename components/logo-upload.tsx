"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, X } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface LogoUploadProps {
  onLogoUploaded?: (logoData: {
    id: string
    name: string
    url: string
    companyUrl: string
  }) => void
}

export function LogoUpload({ onLogoUploaded }: LogoUploadProps) {
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const [companyName, setCompanyName] = useState("")
  const [companyUrl, setCompanyUrl] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        variant: "destructive",
      })
      return
    }

    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 2MB",
        variant: "destructive",
      })
      return
    }

    setLogoFile(file)

    // Create preview
    const reader = new FileReader()
    reader.onload = (e) => {
      setLogoPreview(e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleUpload = async () => {
    if (!logoFile || !companyName || !companyUrl) {
      toast({
        title: "Missing information",
        description: "Please provide company name, URL, and logo",
        variant: "destructive",
      })
      return
    }

    // Validate URL format
    try {
      new URL(companyUrl)
    } catch (e) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL (e.g., https://example.com)",
        variant: "destructive",
      })
      return
    }

    setIsUploading(true)

    try {
      // In a real application, you would upload the file to a storage service
      // For this demo, we'll simulate an upload delay and use the preview URL
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Generate a unique ID for the logo
      const logoId = `logo_${Date.now()}`

      // In a real app, this would be the URL returned from your storage service
      const logoUrl = logoPreview as string

      // Call the callback with the logo data
      if (onLogoUploaded) {
        onLogoUploaded({
          id: logoId,
          name: companyName,
          url: logoUrl,
          companyUrl: companyUrl,
        })
      }

      // Reset the form
      setLogoFile(null)
      setLogoPreview(null)
      setCompanyName("")
      setCompanyUrl("")

      toast({
        title: "Logo uploaded",
        description: `${companyName} logo has been added successfully`,
      })
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error uploading the logo. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  const handleCancel = () => {
    setLogoFile(null)
    setLogoPreview(null)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Company Logo</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="company-name">Company Name</Label>
          <Input
            id="company-name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="e.g., Qualcomm"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company-url">Company Website URL</Label>
          <Input
            id="company-url"
            value={companyUrl}
            onChange={(e) => setCompanyUrl(e.target.value)}
            placeholder="e.g., https://www.qualcomm.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="logo-upload">Company Logo</Label>
          <div className="flex items-center gap-4">
            <Input
              id="logo-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="cursor-pointer"
            />
            {logoPreview && (
              <Button variant="ghost" size="icon" onClick={handleCancel} className="flex-shrink-0">
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          <p className="text-sm text-gray-500">Recommended: transparent PNG, max 2MB. Ideal dimensions: 200x100px.</p>
        </div>

        {logoPreview && (
          <div className="mt-4 p-4 border rounded-md bg-gray-50">
            <p className="text-sm font-medium mb-2">Preview:</p>
            <div className="bg-white p-4 rounded-md flex items-center justify-center h-24 mb-2">
              <img
                src={logoPreview || "/placeholder.svg"}
                alt="Logo Preview"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" onClick={handleCancel} disabled={isUploading}>
          Cancel
        </Button>
        <Button onClick={handleUpload} disabled={!logoFile || !companyName || !companyUrl || isUploading}>
          {isUploading ? (
            <>
              <Upload className="mr-2 h-4 w-4 animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Upload Logo
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
