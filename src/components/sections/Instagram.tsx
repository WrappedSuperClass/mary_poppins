import SectionTemplate from './SectionTemplate'

const INSTAGRAM_USERNAME = 'poppins_childcare'

// Paste your third-party widget iframe src here (e.g., Elfsight/LightWidget)
// Example: const WIDGET_SRC = 'https://lightwidget.com/widgets/XXXXX.html'
const WIDGET_SRC: string | null = 'https://8a6f496534fc4506a09943f72f25b629.elf.site'

export default function Instagram() {
  return (
    <SectionTemplate
      id="instagram"
      title="Follow Us on Instagram"
      subtitle={`@${INSTAGRAM_USERNAME}`}
      background="transparent"
      className="pb-10 sm:pb-14"
    >
      {WIDGET_SRC ? (
        <div className="flex justify-center items-center p-3">
          <div 
            className="rounded-3xl shadow-2xl overflow-hidden"
            style={{ width: 'min(500px, 92vw)', aspectRatio: '1 / 1' }}
          >
            <iframe
              src={WIDGET_SRC}
              style={{ border: 'none', display: 'block', width: '100%', height: '100%' }}
              loading="eager"
              title="Instagram Feed"
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-10 text-center shadow-2xl max-w-md">
            <p className="text-white/90 mb-6">Instagram feed coming soon.</p>
            <a
              href={`https://instagram.com/${INSTAGRAM_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/30 bg-white/20 text-white font-semibold hover:bg-white/30 transition-all"
            >
              Follow @poppins_childcare
            </a>
          </div>
        </div>
      )}
    </SectionTemplate>
  )
}
