import Section from '@/components/layout/Section'
import Reveal from '@/components/ui/Reveal'
import { ReactNode } from 'react'

interface SectionTemplateProps {
  id: string
  title?: string
  subtitle?: string
  children: ReactNode
  background?: 'transparent' | 'gradient' | 'solid'
  className?: string
}

export default function SectionTemplate({ 
  id, 
  title, 
  subtitle, 
  children, 
  background = 'transparent',
  className = ''
}: SectionTemplateProps) {
  return (
    <Section 
      id={id} 
      background={background}
      padding="lg"
      className={className}
    >
      <div className="relative max-w-6xl mx-auto px-6">
        {(title || subtitle) && (
          <div className="text-center mb-10 lg:mb-12">
            {title && (
              <Reveal>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/95 tracking-wide drop-shadow-lg mb-4">
                  {title}
                </h2>
              </Reveal>
            )}
            {subtitle && (
              <Reveal delayMs={120}>
                <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                  {subtitle}
                </p>
              </Reveal>
            )}
          </div>
        )}
        
        {children}
      </div>
    </Section>
  )
}
