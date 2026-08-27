"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Palette } from "lucide-react"

interface ColorPickerProps {
  color: string
  onChange: (color: string) => void
  label?: string
  className?: string
}

export function ColorPicker({ color, onChange, label, className }: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState(color)

  const handleColorChange = (newColor: string) => {
    setInputValue(newColor)
    onChange(newColor)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)

    // Validate hex color
    if (/^#[0-9A-F]{6}$/i.test(value)) {
      onChange(value)
    }
  }

  const presetColors = [
    "#000000",
    "#ffffff",
    "#ed1c24",
    "#dc1c24",
    "#1e40af",
    "#3b82f6",
    "#059669",
    "#10b981",
    "#7c3aed",
    "#8b5cf6",
    "#ea580c",
    "#f97316",
    "#ef4444",
    "#f59e0b",
    "#10b981",
    "#3b82f6",
    "#6b7280",
    "#9ca3af",
    "#d1d5db",
    "#e5e7eb",
    "#f3f4f6",
    "#f9fafb",
    "#374151",
    "#1f2937",
  ]

  return (
    <div className={className}>
      {label && <Label className="block mb-2">{label}</Label>}
      <div className="flex items-center space-x-2">
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-12 h-10 p-0 border-2" style={{ backgroundColor: color }}>
              <span className="sr-only">Pick color</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <div className="space-y-4">
              <div>
                <Label htmlFor="color-input">Color Value</Label>
                <Input
                  id="color-input"
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="#000000"
                  className="font-mono"
                />
              </div>

              <div>
                <Label>Color Picker</Label>
                <input
                  type="color"
                  value={color}
                  onChange={(e) => handleColorChange(e.target.value)}
                  className="w-full h-10 rounded border cursor-pointer"
                />
              </div>

              <div>
                <Label>Preset Colors</Label>
                <div className="grid grid-cols-6 gap-2 mt-2">
                  {presetColors.map((presetColor) => (
                    <button
                      key={presetColor}
                      className="w-8 h-8 rounded border-2 border-gray-200 hover:border-gray-400 transition-colors"
                      style={{ backgroundColor: presetColor }}
                      onClick={() => handleColorChange(presetColor)}
                      title={presetColor}
                    />
                  ))}
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="#000000"
          className="font-mono flex-1"
        />

        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
          <Palette className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
