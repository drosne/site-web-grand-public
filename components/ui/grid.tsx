import React from "react"
import { cn } from "@/lib/utils"

interface GridProps {
  children: React.ReactNode
  className?: string
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12
  gap?: "none" | "sm" | "md" | "lg" | "xl"
  responsive?: {
    sm?: 1 | 2 | 3 | 4 | 5 | 6 | 12
    md?: 1 | 2 | 3 | 4 | 5 | 6 | 12
    lg?: 1 | 2 | 3 | 4 | 5 | 6 | 12
    xl?: 1 | 2 | 3 | 4 | 5 | 6 | 12
  }
}

const colsClasses = {
  1: "grid-cols-1",
  2: "grid-cols-2", 
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  12: "grid-cols-12"
}

const gapClasses = {
  none: "gap-0",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8", 
  xl: "gap-12"
}

const responsiveColsClasses = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3", 
  4: "sm:grid-cols-4",
  5: "sm:grid-cols-5",
  6: "sm:grid-cols-6",
  12: "sm:grid-cols-12"
}

const responsiveMdClasses = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4", 
  5: "md:grid-cols-5",
  6: "md:grid-cols-6",
  12: "md:grid-cols-12"
}

const responsiveLgClasses = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5", 
  6: "lg:grid-cols-6",
  12: "lg:grid-cols-12"
}

const responsiveXlClasses = {
  1: "xl:grid-cols-1",
  2: "xl:grid-cols-2",
  3: "xl:grid-cols-3",
  4: "xl:grid-cols-4",
  5: "xl:grid-cols-5",
  6: "xl:grid-cols-6", 
  12: "xl:grid-cols-12"
}

export const Grid: React.FC<GridProps> = ({
  children,
  className,
  cols = 1,
  gap = "md",
  responsive
}) => {
  const responsiveClasses = responsive ? [
    responsive.sm && responsiveColsClasses[responsive.sm],
    responsive.md && responsiveMdClasses[responsive.md],
    responsive.lg && responsiveLgClasses[responsive.lg],
    responsive.xl && responsiveXlClasses[responsive.xl]
  ].filter(Boolean) : []

  return (
    <div 
      className={cn(
        "grid",
        colsClasses[cols],
        gapClasses[gap],
        responsiveClasses,
        className
      )}
    >
      {children}
    </div>
  )
}
