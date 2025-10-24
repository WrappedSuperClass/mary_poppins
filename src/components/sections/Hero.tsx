import Navigation from '@/components/layout/Navigation'
import Section from '@/components/layout/Section'
import Image from 'next/image'

export default function Hero() {
  return (
    <Section 
      id="hero" 
      minHeight="screen" 
      padding="none"
      className="relative"
    >
      <Navigation />
      
      {/* Main Title Image */}
      <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-10 pointer-events-none px-4 sm:px-6 lg:px-8 pt-8 sm:pt-20">
        <div className="relative w-full max-w-4xl mx-auto">
          <Image
            src="/images/title.png"
            alt="Marry Poppins Child Care"
            width={800}
            height={400}
            className="w-full h-auto object-contain translate-y-[-10vh] sm:translate-y-0"
            priority
            quality={90}
          />
        </div>
      </div>
    </Section>
  )
}