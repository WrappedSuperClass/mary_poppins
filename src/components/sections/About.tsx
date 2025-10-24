import SectionTemplate from './SectionTemplate'

export default function About() {
  return (
    <SectionTemplate
      id="about"
      title="About Mary Poppins"
      subtitle="Trusted childcare services with over 5 years of experience"
      background="solid"
      className="bg-gradient-to-b from-blue-50 to-purple-50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">Our Story</h3>
          <p className="text-gray-600 leading-relaxed">
            Mary Poppins Child Care has been providing exceptional childcare services 
            to families across the region. Our experienced nannies are carefully 
            selected and trained to provide the highest quality care for your children.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">80+</div>
              <div className="text-sm text-gray-600">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Why Choose Us?</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">Fully licensed and insured</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">Background checked nannies</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">24/7 availability</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">Flexible scheduling</span>
            </li>
          </ul>
        </div>
      </div>
    </SectionTemplate>
  )
}
