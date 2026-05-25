import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import { Link } from 'react-router-dom'
import headerBg from '../assets/images/slides/hermau_services_garden_maintenance_home_slide.jpg'
import garden1 from '../assets/images/garden_maintenance/hermau_services_garden_maintenance_1.jpg'
import garden2 from '../assets/images/garden_maintenance/hermau_services_garden_maintenance_2.jpg'
import vert1 from '../assets/images/garden_maintenance/verticutting/verticutting_1.jpg'
import vert2 from '../assets/images/garden_maintenance/verticutting/verticutting_2.jpg'
import vert3 from '../assets/images/garden_maintenance/verticutting/verticutting_3.jpg'
import vert4 from '../assets/images/garden_maintenance/verticutting/verticutting_4.jpg'

const services = [
  {
    title: 'Lawn Care & Mowing',
    body: `A perfectly cut lawn immediately transforms any property. We mow at the correct height for your grass type and season, ensuring a finished, attractive result that promotes thick, lush growth.`,
  },
  {
    title: 'Fertilising',
    body: `Regular fertilising every few months, combined with adding nutrients to flower beds, ensures your garden stays bright, fresh and alive. Proper nutrition is the foundation of a healthy landscape.`,
  },
  {
    title: 'Weed Control',
    body: `Weeds grow aggressively and block sunlight from the plants and lawn that need it most. Our regular weeding programme keeps your garden beautiful, healthy and nutrient-rich throughout the year.`,
  },
]

const verticuttingBenefits = [
  'Improves soil health and structure',
  'Enhances drainage capacity',
  'Promotes long-term lawn health',
  'Creates a healthier, more luscious lawn',
  'Helps the lawn retain moisture',
  'Allows better absorption of nutrients',
]

export default function GardenMaintenance() {
  return (
    <>
      <PageHeader
        title="Garden Maintenance"
        subtitle="Professional lawn care, fertilising, weed control and verticutting"
        backgroundImage={headerBg}
      />

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Our Garden Services"
            subtitle="We offer a full range of garden maintenance services for residential and commercial clients."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {services.map(({ title, body }, i) => (
              <div key={title} className="p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-5"
                  style={{ backgroundColor: '#5da028' }}
                >
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#2d4055' }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[garden1, garden2].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Garden maintenance ${i + 1}`}
                className="w-full h-72 object-cover rounded-xl shadow-md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Verticutting */}
      <section style={{ backgroundColor: '#f8f9fa' }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="w-10 h-0.5 rounded-full mb-5" style={{ backgroundColor: '#5da028' }} />
              <h2 className="text-3xl font-bold mb-2 leading-tight" style={{ color: '#2d4055' }}>Verticutting</h2>
              <p className="font-medium mb-5" style={{ color: '#5da028' }}>Let your lawn breathe.</p>
              <p className="text-gray-500 leading-relaxed mb-6">
                The verticutter is a specialised machine used for vertical mowing. Its vertical blades remove
                the thatch build-up from the grass, allowing the turf to breathe more easily and absorb vital
                nutrients more effectively.
              </p>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#2d4055' }}>
                Advantages of Verticutting
              </h4>
              <ul className="space-y-2.5">
                {verticuttingBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-gray-500 text-sm">
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#5da028' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[vert1, vert2, vert3, vert4].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Verticutting ${i + 1}`}
                  className="w-full h-44 object-cover rounded-xl shadow-md"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-20 px-6 text-white"
        style={{ background: 'linear-gradient(135deg, #1e2d3d 0%, #2d4055 100%)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-10 h-0.5 rounded-full mx-auto mb-5" style={{ backgroundColor: '#5da028' }} />
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Garden?</h2>
          <p className="text-white/65 mb-8 leading-relaxed">
            Contact us today for a free site assessment and tailored quote. We service the entire Vaal Triangle.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold px-8 py-3.5 rounded bg-white transition-colors hover:bg-gray-100"
            style={{ color: '#5da028' }}
          >
            Contact Us Today
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
