import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import SectionHeading from '../components/SectionHeading'
import featureBg from '../assets/images/hermau_services_feature_background.jpg'
import extensionBg from '../assets/images/extension_background.jpg'
import gardenImg from '../assets/images/garden_maintenance/hermau_services_garden_maintenance_1.jpg'
import cleaningImg from '../assets/images/cleaning_services/hermau_services_cleaning_services_1.jpg'
import profileThumb from '../assets/images/hermau_services_company_profile_thumb.jpg'
import logo20 from '../assets/images/20years.png'

const services = [
  {
    number: '01',
    title: 'Garden Maintenance',
    desc: 'Comprehensive lawn care, fertilising, weed control and verticutting services tailored to your property.',
    href: '/garden-maintenance',
  },
  {
    number: '02',
    title: 'Cleaning Services',
    desc: 'Professional commercial and residential cleaning with trained, supervised staff and your own dedicated team.',
    href: '/cleaning-services',
  },
  {
    number: '03',
    title: 'Verticutting',
    desc: 'Specialised vertical mowing that removes thatch build-up, improves drainage and creates a healthier lawn.',
    href: '/garden-maintenance',
  },
]

const trustItems = [
  { value: '450+', label: 'Clients Served' },
  { value: '20', label: 'Years in Business' },
  { value: 'Level 4', label: 'BBBEE Rated' },
  { value: '100%', label: 'Screened Staff' },
]

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Trust bar */}
      <section style={{ backgroundColor: '#2d4055' }} className="py-5 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustItems.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold" style={{ color: '#7dc240' }}>{value}</span>
              <span className="text-xs text-white/60 mt-0.5 tracking-wide uppercase">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 20-Year Milestone */}
      <section
        className="py-16 px-6"
        style={{ background: 'linear-gradient(135deg, #1e2d3d 0%, #2d4055 100%)' }}
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-shrink-0">
            <img
              src={logo20}
              alt="20 Years of Quality Service"
              className="w-48 md:w-60 drop-shadow-2xl"
            />
          </div>
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-3">
              <div className="h-px w-8" style={{ backgroundColor: '#5da028' }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#7dc240' }}>
                A Legacy of Excellence
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Two Decades of Trusted Service<br className="hidden md:block" /> in the Vaal Triangle
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-6 max-w-xl">
              Since 2006, Hermau Services has built its reputation on quality, integrity and consistent results.
              What started as a small family business is now one of the region's leading garden maintenance and
              cleaning companies — trusted by over 450 clients.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded transition-opacity hover:opacity-90 text-white"
              style={{ backgroundColor: '#5da028' }}
            >
              Our Story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Our Services"
            subtitle="Delivering professional results to residential and commercial clients across the Vaal Triangle since 2006."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(({ number, title, desc, href }) => (
              <div
                key={title}
                className="group relative p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-transparent transition-all duration-300"
                style={{ ['--hover-border' as string]: '#5da028' }}
              >
                <div className="absolute top-6 right-6 text-6xl font-black leading-none select-none" style={{ color: '#f0f3f6' }}>
                  {number}
                </div>
                <div className="w-10 h-0.5 rounded-full mb-5" style={{ backgroundColor: '#5da028' }} />
                <h3 className="text-xl font-bold mb-3" style={{ color: '#2d4055' }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
                <Link
                  to={href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all"
                  style={{ color: '#5da028' }}
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Banner */}
      <section
        className="relative py-24 px-6"
        style={{ backgroundImage: `url(${featureBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(45,64,85,0.92) 0%, rgba(45,64,85,0.75) 50%, rgba(45,64,85,0.4) 100%)' }} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="max-w-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: '#7dc240' }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#7dc240' }}>
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Quality &amp; Reliability<br />You Can Count On
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              Every worker is thoroughly vetted before employment. Our management is onsite to ensure the highest
              standards on every job — because your property deserves nothing less.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-sm font-semibold px-7 py-3.5 rounded hover:bg-gray-100 transition-colors"
              style={{ color: '#5da028' }}
            >
              Request a Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Showcase */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="What We Do"
            subtitle="Comprehensive outdoor and indoor services delivered to the highest professional standard."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                img: gardenImg,
                title: 'Garden Maintenance',
                desc: 'Lawn mowing, edging, fertilising, weed control and verticutting. We keep your garden pristine year-round, whether residential, estate or commercial.',
                href: '/garden-maintenance',
              },
              {
                img: cleaningImg,
                title: 'Cleaning Services',
                desc: 'Full-scope commercial and residential cleaning with skilled staff, onsite supervision, own equipment and tailored service schedules.',
                href: '/cleaning-services',
              },
            ].map(({ img, title, desc, href }) => (
              <div key={title} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="overflow-hidden h-60">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-7">
                  <div className="w-8 h-0.5 rounded-full mb-4" style={{ backgroundColor: '#5da028' }} />
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#2d4055' }}>{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
                  <Link
                    to={href}
                    className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#5da028' }}
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Strip */}
      <section
        className="py-20 px-6"
        style={{ backgroundImage: `url(${extensionBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <img
              src={profileThumb}
              alt="Hermau Services"
              className="w-full md:w-72 object-cover flex-shrink-0"
            />
            <div className="p-8 md:p-10">
              <div className="w-10 h-0.5 rounded-full mb-4" style={{ backgroundColor: '#5da028' }} />
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#2d4055' }}>
                About Hermau Services
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4 text-sm">
                Hermau Garden Services is a Level 4 BBBEE company established in 2006. What began as a small
                family business grew — through dedication, quality work and the trust of our clients — into one
                of the leading service providers in the Vaal Triangle.
              </p>
              <p className="text-gray-500 leading-relaxed mb-7 text-sm">
                In 2021 we expanded to include commercial cleaning. Today we proudly serve over 450 clients
                spanning residential estates, golf clubs, office parks, schools and public spaces.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#2d4055' }}
              >
                Meet the Team
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
