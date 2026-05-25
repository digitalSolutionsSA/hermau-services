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
  'Any other cleaning requirements',
]

const whyUs = [
  { icon: '👷', title: 'Skilled Staff', desc: 'All cleaning work is performed by trained cleaning professionals.' },
  { icon: '👁️', title: 'Onsite Supervision', desc: 'Every job has dedicated management and supervision onsite.' },
  { icon: '🧴', title: 'Own Equipment', desc: 'We supply our own cleaning equipment and all required chemicals.' },
  { icon: '✂️', title: 'Tailor-Made', desc: 'We customise our services to your specific business requirements.' },
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
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#2d4055' }}>Professional Cleaning Services</h2>
            <p className="text-gray-600 leading-relaxed">
              At Hermau Services we offer commercial cleaning services across all sectors that will ensure that your
              commercial property and office provides an enjoyable working environment for guests and employees.
              All our commercial cleaning work is performed by skilled cleaning staff with onsite supervision
              and management.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {whyUs.map(({ icon, title, desc }) => (
              <div key={title} className="text-center p-5 rounded-lg border" style={{ backgroundColor: '#f0f7e8', borderColor: '#c8e6a0' }}>
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: '#2d4055' }}>{title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[clean1, clean2, clean3].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Cleaning services ${i + 1}`}
                className="w-full h-56 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Areas */}
      <section className="py-14 px-4 bg-brand-navy-pale">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#2d4055' }}>What We Clean</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                With our commercial cleaning service we use our own cleaning equipment and provide required
                chemicals for all your office and business cleaning. Our routine cleaning covers:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {cleaningAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-gray-600 text-sm">
                    <span style={{ color: '#5da028' }} className="font-bold">✓</span> {area}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-80 flex-shrink-0 bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#2d4055' }}>Tailored to You</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We realise that every business has different cleaning requirements and therefore we will tailor
                our services to your needs and requirements to ensure minimal disruption to your daily operations.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                We service offices, retail spaces, industrial sites, residential properties, and everything in between.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 text-white text-center" style={{ backgroundColor: '#2d4055' }}>
        <h2 className="text-2xl font-bold mb-3">Get a Cleaning Quote Today</h2>
        <p className="text-white/80 mb-6">Let us create a tailored cleaning solution for your business.</p>
        <Link
          to="/contact"
          className="bg-white font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors inline-block"
          style={{ color: '#5da028' }}
        >
          Contact Us
        </Link>
      </section>
    </>
  )
}
