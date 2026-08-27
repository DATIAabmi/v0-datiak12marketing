"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  // This would normally come from your admin/database
  const menuItems = [
    {
      id: 1,
      name: "Our Story",
      url: "/about/decidedly-different",
      visible: true,
      isDropdown: false,
      subItems: [],
    },
    {
      id: 2,
      name: "Services",
      url: "/services",
      visible: true,
      isDropdown: false,
      subItems: [],
    },
    {
      id: 4,
      name: "Meet the Team",
      url: "/about/our-team",
      visible: true,
      isDropdown: false,
      subItems: [],
    },
    {
      id: 5,
      name: "Advisory Board",
      url: "/about/our-advisors",
      visible: true,
      isDropdown: false,
      subItems: [],
    },
    {
      id: 6,
      name: "Trusted By",
      url: "/trusted-by",
      visible: true,
      isDropdown: false,
      subItems: [],
    },
  ]

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img src="/images/datia-ai-logo.png" alt="DATIA AI" className="h-16 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems
                .filter((item) => item.visible)
                .map((item) => (
                  <div key={item.id} className="relative group">
                    {item.isDropdown ? (
                      <div className="relative">
                        <button
                          className="flex items-center space-x-1 text-gray-700 hover:text-datia-red px-2 py-2 text-base font-medium transition-colors"
                          onMouseEnter={() => setActiveDropdown(item.id)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <span>{item.name}</span>
                          <ChevronDown size={18} />
                        </button>

                        {activeDropdown === item.id && (
                          <div
                            className="absolute left-0 mt-0 w-64 bg-white border rounded-md shadow-lg z-50 max-h-96 overflow-y-auto"
                            onMouseEnter={() => setActiveDropdown(item.id)}
                            onMouseLeave={() => setActiveDropdown(null)}
                          >
                            <div className="py-1">
                              {item.subItems
                                .filter((subItem) => subItem.visible)
                                .map((subItem) => (
                                  <div key={subItem.id}>
                                    {subItem.isCategory ? (
                                      <div className="px-4 py-2 text-base font-semibold text-gray-900 bg-gray-50 border-b">
                                        {subItem.name}
                                      </div>
                                    ) : (
                                      <Link
                                        href={subItem.url}
                                        className="block px-6 py-2 text-base text-gray-700 hover:bg-gray-100 hover:text-datia-red transition-colors"
                                      >
                                        {subItem.name}
                                      </Link>
                                    )}
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.url}
                        className="text-gray-700 hover:text-datia-red px-2 py-2 text-base font-medium transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/get-started">
              <Button className="bg-datia-red hover:bg-datia-red/90 text-white text-base px-4 py-2">
                Partner with Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-datia-red focus:outline-none focus:text-datia-red"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t max-h-96 overflow-y-auto">
              {menuItems
                .filter((item) => item.visible)
                .map((item) => (
                  <div key={item.id}>
                    {item.isDropdown ? (
                      <div>
                        <div className="text-gray-700 block px-3 py-2 text-lg font-medium border-b">{item.name}</div>
                        <div className="pl-4 bg-gray-50">
                          {item.subItems
                            .filter((subItem) => subItem.visible)
                            .map((subItem) => (
                              <div key={subItem.id}>
                                {subItem.isCategory ? (
                                  <div className="text-gray-900 font-semibold px-3 py-2 text-base border-b bg-gray-100">
                                    {subItem.name}
                                  </div>
                                ) : (
                                  <Link
                                    href={subItem.url}
                                    className="text-gray-600 block px-6 py-2 text-base hover:text-datia-red"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                )}
                              </div>
                            ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.url}
                        className="text-gray-700 hover:text-datia-red block px-3 py-2 text-lg font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              <div className="pt-4">
                <Link href="/get-started" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-datia-red hover:bg-datia-red/90 text-white text-lg px-6 py-3">
                    Partner with Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
