'use client'

import SectionTemplate from './SectionTemplate'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useEffect, useState } from 'react'

const albumImages = [
  '/images/album/IMG_0361.PNG',
  '/images/album/IMG_0365.PNG',
  '/images/album/IMG_0366.PNG',
  '/images/album/photo_5449651481411191901_y.jpg',
  '/images/album/photo_5449651481411191902_y.jpg',
  '/images/album/photo_5449651481411191903_w.jpg'
]

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <SectionTemplate id="gallery" title="Childcare Moments" background="transparent">
      <div className="max-w-6xl mx-auto">
        {/* Add vertical padding inside the viewport so scaled center slide is not clipped */}
        <div className="overflow-hidden py-8 sm:py-10 lg:py-12" ref={emblaRef}>
          <div className="flex -mx-4">
            {albumImages.map((src, i) => {
              const isActive = i === selectedIndex
              return (
                <div key={src} className="px-4 flex-[0_0_70%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]">
                  <div
                    className={`relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl transition-transform duration-500 ease-out shadow-2xl ${
                      isActive ? 'scale-105' : 'scale-90'
                    }`}
                    style={{ transformOrigin: 'center' }}
                  >
                    <Image src={src} alt="Gallery image" fill className="object-cover" sizes="(max-width: 768px) 70vw, (max-width: 1024px) 45vw, 30vw" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </SectionTemplate>
  )
}
