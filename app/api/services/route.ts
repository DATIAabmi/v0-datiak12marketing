import { type NextRequest, NextResponse } from "next/server"

// In a real application, this would connect to your database
let services = [
  {
    id: 1,
    name: "ABMi",
    fullName: "Account-Based Marketing Intelligence",
    description:
      "Precision-targeted marketing strategies that focus on high-value accounts with personalized campaigns.",
    icon: "Target",
    visible: true,
    featured: true,
    order: 1,
  },
  {
    id: 2,
    name: "TGL",
    fullName: "Targeted Growth Lists",
    description:
      "Data-driven prospect identification and list building to fuel your sales pipeline with qualified leads.",
    icon: "TrendingUp",
    visible: true,
    featured: true,
    order: 2,
  },
  {
    id: 3,
    name: "PUSH",
    fullName: "Performance Marketing",
    description: "Results-driven campaigns optimized for maximum ROI and measurable business impact.",
    icon: "Zap",
    visible: true,
    featured: true,
    order: 3,
  },
]

let nextId = 4

export async function GET() {
  return NextResponse.json({ services })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, service, services: newServices } = body

    switch (action) {
      case "create":
        const newService = {
          ...service,
          id: nextId++,
          order: services.length + 1,
        }
        services.push(newService)
        return NextResponse.json({ success: true, service: newService })

      case "update":
        const index = services.findIndex((s) => s.id === service.id)
        if (index !== -1) {
          services[index] = { ...services[index], ...service }
          return NextResponse.json({ success: true, service: services[index] })
        }
        return NextResponse.json({ success: false, error: "Service not found" }, { status: 404 })

      case "delete":
        services = services.filter((s) => s.id !== service.id)
        return NextResponse.json({ success: true })

      case "reorder":
        services = newServices
        return NextResponse.json({ success: true, services })

      case "bulk_update":
        services = newServices
        return NextResponse.json({ success: true, services })

      default:
        return NextResponse.json({ success: false, error: "Invalid action" }, { status: 400 })
    }
  } catch (error) {
    console.error("Services API error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
