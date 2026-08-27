import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhitepaperContent from "@/components/whitepaper-content"

export const metadata: Metadata = {
  title: "Right at School eBook: Improving Family Engagement Through Extended Day Enrichment Programs | DATIA",
  description:
    "Download our comprehensive eBook on improving family engagement through extended day enrichment programs. Learn proven strategies and best practices.",
}

export default function RightAtSchoolWhitepaper() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhitepaperContent />
      <Footer />
    </div>
  )
}
