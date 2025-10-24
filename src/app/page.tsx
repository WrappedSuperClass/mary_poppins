import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Founder from '@/components/sections/Founder'
import Gallery from '@/components/sections/Gallery'
import Instagram from '@/components/sections/Instagram'
import Contact from '@/components/sections/Contact'
import ParallaxBackground from '@/components/ParallaxBackground'
import Press from '@/components/sections/Press'
import Reviews from '@/components/sections/Reviews'

export default function Home() {
  return (
    <main className="relative">
      {/* Global Background for all sections */}
      <ParallaxBackground />
      
      {/* Hero Section - Title and Navigation */}
      <Hero />
      
      {/* Services Section - Main services card */}
      <Services />
      
      {/* Meet the Founder */}
      <Founder />

      {/* Gallery */}
      {/* <Gallery /> */}

      {/* Press */}
      <Press />

      {/* Reviews */}
      <Reviews />

      {/* Instagram */}
      <Instagram />

      {/* Contact */}
      <Contact />
      
      {/* 
        Add new sections here easily:
        
        <About />
        <Testimonials />
        <Contact />
        etc.
      */}
    </main>
  )
}