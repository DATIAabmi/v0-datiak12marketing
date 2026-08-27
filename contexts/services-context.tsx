"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface Service {
  id: number
  name: string
  fullName: string
  description: string
  icon: string
  featured: boolean
  visible: boolean
}

interface ServicesContextType {
  services: Service[]
  updateService: (id: number, updates: Partial<Service>) => void
  getFeaturedServices: () => Service[]
  getVisibleServices: () => Service[]
}

const ServicesContext = createContext<ServicesContextType | undefined>(undefined)

const defaultServices: Service[] = [
  {
    id: 1,
    name: "ABMi",
    fullName: "Account-Based Marketing Intelligence",
    description:
      "Precision-targeted marketing strategies that focus on high-value accounts with personalized campaigns driven by behavioral data.",
    icon: "target",
    featured: true,
    visible: true,
  },
  {
    id: 2,
    name: "TGL",
    fullName: "Targeted Generated Leads",
    description: "Prospect identification and interest for fueling the sales pipeline with top-of-funnel leads.",
    icon: "users",
    featured: true,
    visible: true,
  },
  {
    id: 3,
    name: "PUSH",
    fullName: "Programmatic User-Specific Hyper-targeting",
    description: "Strategic advertising campaigns tailored to your ideal buyers for maximum engagement and conversion.",
    icon: "megaphone",
    featured: true,
    visible: true,
  },
  {
    id: 4,
    name: "Content Studio",
    fullName: "Content Creation & Strategy",
    description: "Custom content creation, tailored to specific goals and objectives.",
    icon: "edit",
    featured: true,
    visible: true,
  },
  {
    id: 5,
    name: "Research",
    fullName: "Market Research & Analysis",
    description: "Showcase industry expertise and product innovation.",
    icon: "search",
    featured: true,
    visible: true,
  },
]

export function ServicesProvider({ children }: { children: React.ReactNode }) {
  const [services, setServices] = useState<Service[]>(defaultServices)

  const updateService = (id: number, updates: Partial<Service>) => {
    setServices((prev) => prev.map((service) => (service.id === id ? { ...service, ...updates } : service)))
  }

  const getFeaturedServices = () => {
    return services.filter((service) => service.featured && service.visible)
  }

  const getVisibleServices = () => {
    return services.filter((service) => service.visible)
  }

  return (
    <ServicesContext.Provider
      value={{
        services,
        updateService,
        getFeaturedServices,
        getVisibleServices,
      }}
    >
      {children}
    </ServicesContext.Provider>
  )
}

export function useServices() {
  const context = useContext(ServicesContext)
  if (context === undefined) {
    throw new Error("useServices must be used within a ServicesProvider")
  }
  return context
}
