import Section from '@/components/layout/Section'
import Reveal from '@/components/ui/Reveal'
import Image from 'next/image'

const services = [
  'Hotel nanny & babysitting',
  'At home nanny',
  'Travel nanny',
  'Weddings & events nanny',
  'Yacht nanny'
]

export default function Services() {
  return (
    <Section 
      id="services" 
      background="transparent"
      padding="lg"
      className="relative"
    >
      {/* Decorative clouds to keep the dreamy theme */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <Image src="/images/cloud1.png" alt="" width={600} height={400} className="absolute top-4 -left-10 w-[40vw] max-w-[520px] h-auto sm:top-0" />
        <Image src="/images/cloud2.png" alt="" width={520} height={340} className="absolute top-2 sm:top-16 right-4 w-[35vw] max-w-[460px] h-auto" />
        <Image src="/images/cloud3.png" alt="" width={520} height={340} className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[42vw] max-w-[560px] h-auto" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-10">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/95 tracking-wide drop-shadow-lg">
              Services
            </h2>
          </Reveal>
        </div>
        {/* Services Card */}
        <div className="w-full max-w-6xl mx-auto">
          {/* Glass effect card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Left side - Image (40-45% on desktop) */}
              <div className="w-full lg:w-[45%] flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <Image
                    src="/images/mati_child.PNG"
                    alt="Child care services"
                    width={600}
                    height={600}
                    className="w-full h-auto rounded-2xl shadow-lg object-cover"
                    priority
                    quality={90}
                  />
                </div>
              </div>

              {/* Right side - Services list (55-60% on desktop) */}
              <div className="w-full lg:w-[55%]">
                <ul className="space-y-6 lg:space-y-8">
                  {services.map((service, index) => (
                    <li key={index} className="group">
                      <Reveal delayMs={index * 80}>
                        <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white/95 group-hover:text-yellow-200 transition-all duration-300 tracking-wide drop-shadow-lg">
                          {service}
                        </div>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}