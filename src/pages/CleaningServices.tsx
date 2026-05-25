import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'
import headerBg from '../assets/images/slides/hermau_services_cleaning_services_home_slide.jpg'
import clean1 from '../assets/images/cleaning_services/hermau_services_cleaning_services_1.jpg'
import clean2 from '../assets/images/cleaning_services/hermau_services_cleaning_services_2.jpg'
import clean3 from '../assets/images/cleaning_services/hermau_services_cleaning_services_3.jpg'

const cleaningAreas = [
  'Floors & Tiles',
  'Walls & Ceilings',
  'Windows',
  'Carpets',
  'Furniture',
  'Kitchens',
  'Bathrooms & Change Rooms',
  'Any other requirements',
]

const differentiators = [
  {
    title: 'Skilled Staff',
    desc: 'All cleaning is carried out by trained professionals with proven experience across commercial and residential environments.',
  },
  {
    title: 'Onsite Management',
    desc: 'Dedicated supervision on every job ensures consistent quality and immediate resolution of any concerns.',
  },
  {
    title: 'Own Equipment',
    desc: 'We bring our own professional-grade cleaning equipment and supply all required chemicals and consumables.',
  },
  {
    title: 'Tailored to You',
    desc: 'Every client has unique requirements. We design a service schedule and scope that fits your business perfectly.',
  },
]

export default function CleaningServices() {
  return (
    <>
      <PageHeader
        title="Cleaning Services"
        subtitle="Commercial and residential cleaning solutions across all sectors"
        backgroundImage={headerBg}
      />

      {/* Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="w-10 h-0.5 rounded-full mx-auto mb-5" style={{ backgroundColor: '#5da028' }} />
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#2d4055' }}>Professional Cleaning Services</h2>
            <p className="text-gray-500 leading-relaxed">
              At Hermau Services we deliver commercial cleaning services across all sectors, ensuring your property
              provides an enjoyable, hygienic environment for employees and guests. Every job is staffed by trained
              professionals with onsite supervision and management.
            </p>
          </div>

          {/* Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {differentiators.map(({ title, desc }, i) => (
              <div key={title} className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4"
                  style={{ backgroundColor: '#2d4055' }}
                >
                  {i + 1}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: '#2d4055' }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[clean1, clean2, clean3].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Cleaning services ${i + 1}`}
                className="w-full h-60 object-cover rounded-xl shadow-md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Scope of Work */}
      <section style={{ backgroundColor: '#f8f9fa' }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <div className="w-10 h-0.5 rounded-full mb-5" style={{ backgroundColor: '#5da028' }} />
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#2d4055' }}>Comprehensive Scope</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              We supply our own cleaning equipment and provide all required chemicals for your office, business
              or home. Our routine cleaning programme covers:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {cleaningAreas.map((area) => (
                <li key={area} className="flex items-center gap-3 text-gray-500 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#5da028' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="w-8 h-0.5 rounded-full mb-5" style={{ backgroundColor: '#5da028' }} />
            <h3 className="text-xl font-bold mb-3" style={{ color: '#2d4055' }}>A Service Built Around You</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              We understand that every business operates differently. Our team will work with you to design a
              cleaning schedule and scope that minimises disruption to your daily operations while maintaining
              the highest possible standards.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              We serve offices, retail spaces, industrial facilities, residential properties, schools, medical
              facilities and more — across the entire Vaal Triangle.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#5da028' }}
            >
              Request a Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6"
        style={{ background: 'linear-gradient(135deg, #1e2d3d 0%, #2d4055 100%)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-10 h-0.5 rounded-full mx-auto mb-5" style={{ backgroundColor: '#5da028' }} />
          <h2 className="text-3xl font-bold text-white mb-4">Get a Cleaning Quote Today</h2>
          <p className="text-white/65 mb-8 leading-relaxed">
            Let us build a tailored cleaning solution for your business or home. Contact us for a free, no-obligation assessment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold px-8 py-3.5 rounded bg-white hover:bg-gray-100 transition-colors"
            style={{ color: '#5da028' }}
          >
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
