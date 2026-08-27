"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import { useColors } from "@/contexts/colors-context"
import { cn } from "@/lib/utils"

interface ManagedButtonProps extends ButtonProps {
  colorScheme?: "primary" | "secondary" | "outline"
}

export function ManagedButton({ colorScheme = "primary", className, style, ...props }: ManagedButtonProps) {
  const { colors } = useColors()

  const getButtonStyles = () => {
    switch (colorScheme) {
      case "primary":
        return {
          backgroundColor: colors.buttonPrimary,
          color: colors.buttonPrimaryText,
          borderColor: colors.buttonPrimary,
        }
      case "secondary":
        return {
          backgroundColor: colors.buttonSecondary,
          color: colors.buttonSecondaryText,
          borderColor: colors.buttonSecondary,
        }
      case "outline":
        return {
          backgroundColor: "transparent",
          color: colors.buttonOutlineText,
          borderColor: colors.buttonOutline,
          border: `2px solid ${colors.buttonOutline}`,
        }
      default:
        return {}
    }
  }

  const getHoverClass = () => {
    switch (colorScheme) {
      case "primary":
        return "hover:opacity-90"
      case "secondary":
        return "hover:opacity-90"
      case "outline":
        return "hover:opacity-90"
      default:
        return ""
    }
  }

  return (
    <Button
      className={cn(getHoverClass(), className)}
      style={{
        ...getButtonStyles(),
        ...style,
      }}
      {...props}
    />
  )
}
