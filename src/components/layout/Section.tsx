import { ReactNode } from 'react'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  background?: 'transparent' | 'gradient' | 'solid'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  minHeight?: 'screen' | 'auto' | 'fit'
}

export default function Section({ 
  id, 
  children, 
  className = '', 
  background = 'transparent',
  padding = 'lg',
  minHeight = 'auto'
}: SectionProps) {
  const backgroundClasses = {
    transparent: '',
    gradient: 'bg-gradient-to-b from-[#9bb8ef] via-[#c8baf1] to-[#f6c1c7]',
    solid: 'bg-white'
  }

  const paddingClasses = {
    none: '',
    sm: 'py-8 sm:py-12',
    // Reduce top padding on mobile so anchors land closer to titles
    md: 'pt-10 pb-12 sm:py-16 lg:py-20',
    lg: 'pt-12 pb-16 sm:py-20 lg:py-24',
    xl: 'pt-16 pb-20 sm:py-24 lg:py-32'
  }

  const minHeightClasses = {
    screen: 'min-h-screen',
    auto: '',
    fit: 'min-h-fit'
  }

  return (
    <section 
      id={id}
      className={`
        relative w-full overflow-hidden
        scroll-mt-24 md:scroll-mt-28
        ${backgroundClasses[background]}
        ${paddingClasses[padding]}
        ${minHeightClasses[minHeight]}
        ${className}
      `}
    >
      {children}
    </section>
  )
}
