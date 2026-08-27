"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const { toast } = useToast()

  const login = () => {
    if (password === "admin123") {
      setIsAuthenticated(true)
      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard",
      })
    } else {
      toast({
        title: "Login failed",
        description: "Incorrect password",
        variant: "destructive",
      })
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>Enter your password to access the admin panel</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && login()}
                  placeholder="Enter admin password"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button onClick={login}>Login</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <img src="/images/datiak12-logo.png" alt="Datiak12" className="h-8 w-auto" />
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        </div>
        <Button variant="outline" onClick={() => setIsAuthenticated(false)}>
          Logout
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Content Management</CardTitle>
            <CardDescription>Update website content</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Manage your website content and pages.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Manage Content</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Logo Management</CardTitle>
            <CardDescription>Manage company logos</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Upload and manage company logos for the Trusted By page.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={() => (window.location.href = "/admin/logos")}>
              Manage Logos
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Services</CardTitle>
            <CardDescription>Manage services</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Add, edit, and organize your service offerings.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Manage Services</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>SEO Settings</CardTitle>
            <CardDescription>Search engine optimization</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Manage meta tags, descriptions, and SEO settings.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Manage SEO</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Colors & Branding</CardTitle>
            <CardDescription>Customize appearance</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Update colors, fonts, and branding elements.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Manage Colors</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>View website statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Monitor website performance and user engagement.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">View Analytics</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
