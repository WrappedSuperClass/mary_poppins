import SectionTemplate from './SectionTemplate'

const ARTICLE_URL = 'https://www.gloria.hr/gl/scena/price/mary-poppins-novog-doba-splicanka-otvorila-agenciju-za-dadilje-koje-cuvaju-i-djecu-poznatih-nogometasa-15572805'

export default function Press() {
  return (
    <SectionTemplate
      id="press"
      title="In the Press"
      subtitle="Gloria: Mary Poppins novog doba — Splićanka otvorila agenciju za dadilje"
      background="transparent"
    >
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          <div className="aspect-[3/4] sm:aspect-[16/9] w-full">
            <iframe
              src={ARTICLE_URL}
              title="Gloria article about Mary Poppins childcare"
              loading="lazy"
              className="w-full h-full"
            />
          </div>
          <div className="p-4 sm:p-5 border-t border-white/10 flex items-center justify-between gap-4">
            <p className="text-white/80 text-sm sm:text-base">Having trouble viewing the article?</p>
            <a
              href={ARTICLE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl border border-white/30 bg-white/20 text-white font-semibold hover:bg-white/30 transition-all"
            >
              Open on gloria.hr
            </a>
          </div>
        </div>
      </div>
    </SectionTemplate>
  )
}


