"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LogoUpload } from "@/components/logo-upload"
import { useToast } from "@/components/ui/use-toast"
import { ExternalLink, Trash2, MoveUp, MoveDown } from "lucide-react"

interface Logo {
  id: string
  name: string
  url: string
  companyUrl: string
}

export default function LogosManagementPage() {
  const [logos, setLogos] = useState<Logo[]>([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const { toast } = useToast()

  // Load logos from localStorage on mount
  useEffect(() => {
    const savedLogos = localStorage.getItem("datiak12-trusted-logos")
    if (savedLogos) {
      try {
        setLogos(JSON.parse(savedLogos))
      } catch (error) {
        console.error("Error loading logos from localStorage:", error)
      }
    } else {
      // Add real company logos as defaults if no logos exist
      const defaultLogos = [
        {
          id: "qualcomm-snapdragon",
          name: "Qualcomm Snapdragon",
          url: "/logos/qualcomm-snapdragon.webp",
          companyUrl: "https://www.qualcomm.com/snapdragon",
        },
        {
          id: "alphabest-education",
          name: "AlphaBEST Education",
          url: "/logos/alphabest-education.png",
          companyUrl: "https://www.alphabest.org/",
        },
        {
          id: "extron",
          name: "Extron",
          url: "/logos/extron.png",
          companyUrl: "https://www.extron.com/",
        },
        {
          id: "game-u",
          name: "Game U",
          url: "/logos/game-u.webp",
          companyUrl: "https://www.game-u.com",
        },
        {
          id: "right-at-school",
          name: "Right at School",
          url: "/logos/right-at-school.png",
          companyUrl: "https://www.rightatschool.com/",
        },
        {
          id: "transfinder",
          name: "Transfinder",
          url: "/logos/transfinder.png",
          companyUrl: "https://www.transfinder.com/",
        },
        {
          id: "volt",
          name: "VOLT AI",
          url: "/logos/volt.png",
          companyUrl: "https://volt.ai/",
        },
        {
          id: "schneider-electric",
          name: "Schneider Electric",
          url: "/logos/schneider-electric-new.jpeg",
          companyUrl: "https://www.se.com/ww/en/",
        },
        {
          id: "participate-learning",
          name: "Participate Learning",
          url: "/logos/participate-learning.png",
          companyUrl: "https://www.participatelearning.com/",
        },
      ]
      setLogos(defaultLogos)
    }
  }, [])

  // Save logos to localStorage when they change
  useEffect(() => {
    localStorage.setItem("datiak12-trusted-logos", JSON.stringify(logos))
  }, [logos])

  const handleLogoUploaded = (logoData: Logo) => {
    setLogos((prevLogos) => [...prevLogos, logoData])
  }

  const handleRemoveLogo = (id: string) => {
    setLogos((prevLogos) => prevLogos.filter((logo) => logo.id !== id))
    toast({
      title: "Logo removed",
      description: "The logo has been removed successfully",
    })
  }

  const handleMoveLogo = (id: string, direction: "up" | "down") => {
    const index = logos.findIndex((logo) => logo.id === id)
    if ((direction === "up" && index === 0) || (direction === "down" && index === logos.length - 1)) {
      return
    }

    const newLogos = [...logos]
    const newIndex = direction === "up" ? index - 1 : index + 1
    const temp = newLogos[index]
    newLogos[index] = newLogos[newIndex]
    newLogos[newIndex] = temp

    setLogos(newLogos)
  }

  const login = () => {
    if (password === "admin123") {
      setIsAuthenticated(true)
      toast({
        title: "Login successful",
        description: "Welcome to the logo management dashboard",
      })
    } else {
      toast({
        title: "Login failed",
        description: "Incorrect password",
        variant: "destructive",
      })
    }
  }

  const exportLogosConfig = () => {
    const config = JSON.stringify(logos, null, 2)
    const blob = new Blob([config], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "trusted-logos-config.json"
    a.click()
    URL.revokeObjectURL(url)

    toast({
      title: "Logos exported",
      description: "Logos configuration has been exported successfully",
    })
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Logo Management Login</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && login()}
                  placeholder="Enter admin password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <Button onClick={login}>Login</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Logo Management</h1>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={exportLogosConfig}>
            Export Config
          </Button>
          <Button variant="outline" onClick={() => (window.location.href = "/admin")}>
            Back to Admin
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <LogoUpload onLogoUploaded={handleLogoUploaded} />
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Trusted By Logos ({logos.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {logos.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No logos added yet. Upload your first company logo to get started.
                </div>
              ) : (
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {logos.map((logo, index) => (
                    <div key={logo.id} className="flex items-center gap-4 p-3 border rounded-md bg-white">
                      <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-md overflow-hidden">
                        <img
                          src={logo.url || "/placeholder.svg"}
                          alt={logo.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{logo.name}</div>
                        <a
                          href={logo.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline flex items-center"
                        >
                          {logo.companyUrl.replace(/^https?:\/\//, "")}
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                      <div className="flex space-x-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleMoveLogo(logo.id, "up")}
                          disabled={index === 0}
                          title="Move up"
                        >
                          <MoveUp className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleMoveLogo(logo.id, "down")}
                          disabled={index === logos.length - 1}
                          title="Move down"
                        >
                          <MoveDown className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveLogo(logo.id)}
                          className="text-red-500 hover:text-red-700"
                          title="Remove logo"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Logo Preview</h2>
        <div className="p-6 border rounded-md bg-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {logos.map((logo) => (
              <div key={logo.id} className="flex items-center justify-center p-4">
                <img src={logo.url || "/placeholder.svg"} alt={logo.name} className="max-h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
