import SectionTemplate from './SectionTemplate'
import Reveal from '@/components/ui/Reveal'
import Image from 'next/image'

export default function Founder() {
  return (
    <>
      {/* Part 1: Intro with large portrait and summary */}
      <SectionTemplate
        id="founder"
        title="Meet the Founder"
        subtitle="Matija Mladin — certified professional nanny and childcare provider"
        background="transparent"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <Reveal>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl">
                <p className="text-white/90 leading-relaxed text-lg">
                  Matija Mladin is a <strong>certified professional nanny</strong> and <strong>childcare provider</strong> with a diverse background
                  in <strong>early childhood education</strong>. Holding a degree in <strong>Early and Pre-school Education</strong> and a certificate in
                  <strong>Teaching and Assessment</strong>, <strong>Brain Development</strong>, <strong>Play</strong> and <strong>Action Planning 2024</strong>, she is dedicated to creating
                  nurturing, <strong>development-focused environments</strong> for children.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative max-w-xl mx-auto">
              <Image
                src="/images/mati_serious.PNG"
                alt="Matija Mladin portrait"
                width={900}
                height={1100}
                className="w-full h-auto rounded-3xl object-cover shadow-2xl"
                quality={90}
              />
            </div>
          </div>
        </div>
      </SectionTemplate>

      {/* Part 2: Experience and mission with image trio */}
      <SectionTemplate
        id="founder-mission"
        background="transparent"
      >
        {/* Wrapper ensures text width matches the two-image row width */}
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {/* Two images on top */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-8 items-stretch">
            <Image
              src="/images/mati_cute.PNG"
              alt="Matija smiling"
              width={900}
              height={900}
              className="w-full h-full rounded-3xl object-cover shadow-2xl"
              quality={85}
            />
            <Image
              src="/images/mati_funny.PNG"
              alt="Matija playful"
              width={900}
              height={900}
              className="w-full h-full rounded-3xl object-cover shadow-2xl"
              quality={85}
            />
          </div>

          {/* Text below, same width as the images wrapper */}
          <Reveal>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl space-y-6">
              <p className="text-white/90 leading-relaxed text-lg">
                With over <strong>8 years of experience</strong> working with children of various ages, Matija has developed a deep
                understanding of how to support each child's <strong>unique needs</strong>.
              </p>
              <p className="text-white/90 leading-relaxed text-lg">
                As the founder of <strong>Mary Poppins</strong>, a <strong>Nanny Agency</strong> and <strong>Child Education Center</strong>, she strives to set new
                standards in <strong>childcare excellence</strong>.
              </p>
            </div>
          </Reveal>
        </div>
      </SectionTemplate>
    </>
  )
}
