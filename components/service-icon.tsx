import { Target, TrendingUp, Zap, Users, Award, Shield, Heart, Star, Lightbulb, Rocket } from "lucide-react"

interface ServiceIconProps {
  iconName: string
  className?: string
}

export function ServiceIcon({ iconName, className = "h-6 w-6" }: ServiceIconProps) {
  const iconMap = {
    Target: Target,
    TrendingUp: TrendingUp,
    Zap: Zap,
    Users: Users,
    Award: Award,
    Shield: Shield,
    Heart: Heart,
    Star: Star,
    Lightbulb: Lightbulb,
    Rocket: Rocket,
  }

  const IconComponent = iconMap[iconName] || Target

  return <IconComponent className={className} />
}
