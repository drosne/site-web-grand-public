import React from "react"
import { cn } from "@/lib/utils"
import { Container } from "./container"

interface SectionProps {
  children: React.ReactNode
  className?: string
  backgroundColor?: "white" | "gray" | "primary" | "secondary" | "muted" | "transparent"
  padding?: "none" | "sm" | "md" | "lg" | "xl"
  containerSize?: "sm" | "md" | "lg" | "xl" | "full"
  disableContainer?: boolean
  id?: string
}

const backgroundColorClasses = {
  white: "bg-white",
  gray: "bg-gray-50",
  primary: "bg-primary",
  secondary: "bg-secondary", 
  muted: "bg-muted",
  transparent: "bg-transparent"
}

const paddingClasses = {
  none: "",
  sm: "py-8",
  md: "py-16", 
  lg: "py-24",
  xl: "py-32"
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  backgroundColor = "white",
  padding = "lg",
  containerSize = "lg",
  disableContainer = false,
  id
}) => {
  const sectionClasses = cn(
    "w-full",
    backgroundColorClasses[backgroundColor],
    paddingClasses[padding],
    className
  )

  const content = disableContainer ? (
    children
  ) : (
    <Container size={containerSize}>
      {children}
    </Container>
  )

  return (
    <section className={sectionClasses} id={id}>
      {content}
    </section>
  )
}
