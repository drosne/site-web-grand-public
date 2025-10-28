import React from "react"
import { Section } from "./section"
import { Container } from "./container"
import { Grid } from "./grid"

// Types pour les différentes sections
export interface SectionData {
  id?: string
  type: "hero" | "features" | "testimonials" | "cta" | "logos" | "custom"
  backgroundColor?: "white" | "gray" | "primary" | "secondary" | "muted" | "transparent"
  padding?: "none" | "sm" | "md" | "lg" | "xl"
  containerSize?: "sm" | "md" | "lg" | "xl" | "full"
  content: React.ReactNode
}

interface RenderSectionsProps {
  sections: SectionData[]
  className?: string
}

export const RenderSections: React.FC<RenderSectionsProps> = ({ 
  sections, 
  className 
}) => {
  if (!sections || sections.length === 0) {
    return null
  }

  return (
    <div className={className}>
      {sections.map((section, index) => (
        <Section
          key={section.id || index}
          id={section.id}
          backgroundColor={section.backgroundColor}
          padding={section.padding}
          containerSize={section.containerSize}
        >
          {section.content}
        </Section>
      ))}
    </div>
  )
}

// Composants utilitaires pour créer des sections rapidement
export const HeroSection: React.FC<{
  children: React.ReactNode
  backgroundColor?: SectionData["backgroundColor"]
  padding?: SectionData["padding"]
}> = ({ children, backgroundColor = "white", padding = "xl" }) => (
  <Section backgroundColor={backgroundColor} padding={padding} containerSize="lg">
    {children}
  </Section>
)

export const FeaturesSection: React.FC<{
  children: React.ReactNode
  backgroundColor?: SectionData["backgroundColor"]
  padding?: SectionData["padding"]
}> = ({ children, backgroundColor = "white", padding = "lg" }) => (
  <Section backgroundColor={backgroundColor} padding={padding} containerSize="lg">
    {children}
  </Section>
)

export const LogosSection: React.FC<{
  children: React.ReactNode
  backgroundColor?: SectionData["backgroundColor"]
  padding?: SectionData["padding"]
}> = ({ children, backgroundColor = "white", padding = "lg" }) => (
  <Section backgroundColor={backgroundColor} padding={padding} containerSize="lg">
    {children}
  </Section>
)
