"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface ColorScheme {
  // Brand Colors
  primary: string
  secondary: string
  accent: string

  // Button Colors
  buttonPrimary: string
  buttonPrimaryHover: string
  buttonPrimaryText: string
  buttonSecondary: string
  buttonSecondaryHover: string
  buttonSecondaryText: string
  buttonOutline: string
  buttonOutlineHover: string
  buttonOutlineText: string

  // Text Colors
  headingPrimary: string
  headingSecondary: string
  bodyText: string
  bodyTextLight: string
  linkColor: string
  linkHover: string

  // Background Colors
  backgroundPrimary: string
  backgroundSecondary: string
  backgroundAccent: string
  backgroundDark: string

  // Border Colors
  borderPrimary: string
  borderSecondary: string
  borderAccent: string

  // Status Colors
  success: string
  warning: string
  error: string
  info: string
}

interface ColorPreset {
  name: string
  colors: ColorScheme
}

interface ColorsContextType {
  colors: ColorScheme
  updateColor: (key: keyof ColorScheme, value: string) => void
  resetToDefaults: () => void
  exportColors: () => void
  importColors: (colors: Partial<ColorScheme>) => void
  presets: ColorPreset[]
  applyPreset: (presetName: string) => void
}

const defaultColors: ColorScheme = {
  // Brand Colors
  primary: "#000000",
  secondary: "#ed1c24",
  accent: "#f3f4f6",

  // Button Colors
  buttonPrimary: "#ed1c24",
  buttonPrimaryHover: "#dc1c24",
  buttonPrimaryText: "#ffffff",
  buttonSecondary: "#000000",
  buttonSecondaryHover: "#1f2937",
  buttonSecondaryText: "#ffffff",
  buttonOutline: "#000000",
  buttonOutlineHover: "#f3f4f6",
  buttonOutlineText: "#000000",

  // Text Colors
  headingPrimary: "#000000",
  headingSecondary: "#374151",
  bodyText: "#6b7280",
  bodyTextLight: "#9ca3af",
  linkColor: "#ed1c24",
  linkHover: "#dc1c24",

  // Background Colors
  backgroundPrimary: "#ffffff",
  backgroundSecondary: "#f9fafb",
  backgroundAccent: "#f3f4f6",
  backgroundDark: "#000000",

  // Border Colors
  borderPrimary: "#e5e7eb",
  borderSecondary: "#d1d5db",
  borderAccent: "#ed1c24",

  // Status Colors
  success: "#10b981",
  warning: "#f59e0b",
  error: "#ef4444",
  info: "#3b82f6",
}

const colorPresets: Record<string, ColorScheme> = {
  default: defaultColors,
  blue: {
    ...defaultColors,
    primary: "#1e40af",
    secondary: "#3b82f6",
    buttonPrimary: "#3b82f6",
    buttonPrimaryHover: "#2563eb",
    linkColor: "#3b82f6",
    linkHover: "#2563eb",
    borderAccent: "#3b82f6",
  },
  green: {
    ...defaultColors,
    primary: "#059669",
    secondary: "#10b981",
    buttonPrimary: "#10b981",
    buttonPrimaryHover: "#059669",
    linkColor: "#10b981",
    linkHover: "#059669",
    borderAccent: "#10b981",
  },
  purple: {
    ...defaultColors,
    primary: "#7c3aed",
    secondary: "#8b5cf6",
    buttonPrimary: "#8b5cf6",
    buttonPrimaryHover: "#7c3aed",
    linkColor: "#8b5cf6",
    linkHover: "#7c3aed",
    borderAccent: "#8b5cf6",
  },
  orange: {
    ...defaultColors,
    primary: "#ea580c",
    secondary: "#f97316",
    buttonPrimary: "#f97316",
    buttonPrimaryHover: "#ea580c",
    linkColor: "#f97316",
    linkHover: "#ea580c",
    borderAccent: "#f97316",
  },
}

// Convert colorPresets object to an array of ColorPreset objects
const presetArray: ColorPreset[] = Object.entries(colorPresets).map(([name, colors]) => ({
  name,
  colors,
}))

const ColorsContext = createContext<ColorsContextType | undefined>(undefined)

export function ColorsProvider({ children }: { children: React.ReactNode }) {
  const [colors, setColors] = useState<ColorScheme>(defaultColors)

  // Load colors from localStorage on mount
  useEffect(() => {
    const savedColors = localStorage.getItem("datiak12-colors")
    if (savedColors) {
      try {
        const parsedColors = JSON.parse(savedColors)
        setColors({ ...defaultColors, ...parsedColors })
      } catch (error) {
        console.error("Error loading colors from localStorage:", error)
      }
    }
  }, [])

  // Save colors to localStorage when they change
  useEffect(() => {
    localStorage.setItem("datiak12-colors", JSON.stringify(colors))

    // Apply colors to CSS custom properties
    const root = document.documentElement
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value)
    })
  }, [colors])

  const updateColor = (key: keyof ColorScheme, value: string) => {
    setColors((prev) => ({ ...prev, [key]: value }))
  }

  const resetToDefaults = () => {
    setColors(defaultColors)
  }

  const exportColors = () => {
    const config = JSON.stringify(colors, null, 2)
    const blob = new Blob([config], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "color-scheme.json"
    a.click()
    URL.revokeObjectURL(url)
  }

  const importColors = (newColors: Partial<ColorScheme>) => {
    setColors((prev) => ({ ...prev, ...newColors }))
  }

  const applyPreset = (presetName: string) => {
    if (colorPresets[presetName]) {
      setColors(colorPresets[presetName])
    }
  }

  return (
    <ColorsContext.Provider
      value={{
        colors,
        updateColor,
        resetToDefaults,
        exportColors,
        importColors,
        presets: presetArray,
        applyPreset,
      }}
    >
      {children}
    </ColorsContext.Provider>
  )
}

export function useColors() {
  const context = useContext(ColorsContext)
  if (context === undefined) {
    throw new Error("useColors must be used within a ColorsProvider")
  }
  return context
}
