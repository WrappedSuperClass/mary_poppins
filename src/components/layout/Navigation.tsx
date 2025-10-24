'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const navigationItems = [
  { name: 'Services', href: '#services' },
  { name: 'Founder', href: '#founder' },
  { name: 'Press', href: '#press' },
  { name: 'Reviews', href: '#reviews' },
  // { name: 'Gallery', href: '#gallery' },
  { name: 'Instagram', href: '#instagram' },
  { name: 'Contact', href: '#contact' }
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/10 backdrop-blur-md border-b border-white/20' 
        : 'bg-white/5 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" className="hover:scale-105 transition-transform duration-200">
              <Image
                src="/images/title.png"
                alt="Mary Poppins"
                width={200}
                height={80}
                className="h-12 sm:h-16 w-auto object-contain"
                quality={90}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-yellow-200 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              aria-label="Open menu"
              onClick={() => setIsOpen((v) => !v)} 
              className="text-white/90 hover:text-yellow-200 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden origin-top animate-slide-down mb-8">
            <div className="mt-2 grid gap-2 bg-white/10 border border-white/20 rounded-2xl p-4 pb-6 will-change-transform shadow-soft">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full rounded-lg px-4 py-3.5 text-white/90 hover:text-yellow-200 hover:bg-white/10 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
