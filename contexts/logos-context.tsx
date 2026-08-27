"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export interface Logo {
  id: string
  name: string
  url: string
  companyUrl: string
}

interface LogosContextType {
  logos: Logo[]
  addLogo: (logo: Logo) => void
  removeLogo: (id: string) => void
  updateLogos: (newLogos: Logo[]) => void
}

const LogosContext = createContext<LogosContextType | undefined>(undefined)

export function LogosProvider({ children }: { children: ReactNode }) {
  const [logos, setLogos] = useState<Logo[]>([])

  // Load logos from localStorage on mount
  useEffect(() => {
    const savedLogos = localStorage.getItem("datiak12-trusted-logos")
    if (savedLogos) {
      try {
        setLogos(JSON.parse(savedLogos))
      } catch (error) {
        console.error("Error loading logos from localStorage:", error)
      }
    }
  }, [])

  // Save logos to localStorage when they change
  useEffect(() => {
    localStorage.setItem("datiak12-trusted-logos", JSON.stringify(logos))
  }, [logos])

  const addLogo = (logo: Logo) => {
    setLogos((prevLogos) => [...prevLogos, logo])
  }

  const removeLogo = (id: string) => {
    setLogos((prevLogos) => prevLogos.filter((logo) => logo.id !== id))
  }

  const updateLogos = (newLogos: Logo[]) => {
    setLogos(newLogos)
  }

  return <LogosContext.Provider value={{ logos, addLogo, removeLogo, updateLogos }}>{children}</LogosContext.Provider>
}

export function useLogos() {
  const context = useContext(LogosContext)
  if (context === undefined) {
    throw new Error("useLogos must be used within a LogosProvider")
  }
  return context
}
