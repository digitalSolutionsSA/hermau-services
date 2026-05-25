import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import featureBg from '../assets/images/hermau_services_feature_background.jpg'
import extensionBg from '../assets/images/extension_background.jpg'
import gardenImg from '../assets/images/garden_maintenance/hermau_services_garden_maintenance_1.jpg'
import cleaningImg from '../assets/images/cleaning_services/hermau_services_cleaning_services_1.jpg'
import profileThumb from '../assets/images/hermau_services_company_profile_thumb.jpg'
import logo20 from '../assets/images/20years.png'

const features = [
  {
    icon: '🌿',
    title: 'Garden Maintenance',
    desc: 'Lawn mowing, fertilising, weed control, and professional verticutting for healthy, lush gardens.',
    href: '/garden-maintenance',
  },
  {
    icon: '🧹',
    title: 'Cleaning Services',
    desc: 'Commercial and residential cleaning with trained staff, onsite supervision, and tailor-made solutions.',
    href: '/cleaning-services',
  },
  {
    icon: '✅',
    title: 'Level 4 BBBEE',
    desc: 'Proudly a Level 4 BBBEE certified company committed to quality, honesty and reliable service since 2006.',
    href: '/about',
  },
]

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Intro Strip */}
      <section style={{ backgroundColor: '#5da028' }} className="text-white py-8 px-4 text-center">
        <p className="max-w-3xl mx-auto text-lg leading-relaxed font-medium">
          As leaders in the industry with experience since 2006, we offer excellent services over a wide range of
          industries that includes garden maintenance, residential, contract and commercial cleaning services.
        </p>
      </section>

      {/* 20-Year Milestone Banner */}
      <section style={{ backgroundColor: '#2d4055' }} className="py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <img
            src={logo20}
            alt="20 Years of Quality Service"
            className="w-52 md:w-64 lg:w-72 flex-shrink-0 drop-shadow-xl"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              20 Years of Quality Service
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4">
              Since 2006, Hermau Services has grown from a small family business into one of the leading
              garden maintenance and cleaning companies in the Vaal Triangle — built on hard work,
              commitment, and the trust of 450+ clients.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4">
              {[
                { value: '450+', label: 'Clients Served' },
                { value: '20', label: 'Years Experience' },
                { value: 'Level 4', label: 'BBBEE Rated' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div style={{ color: '#7dc240' }} className="text-3xl font-bold">{value}</div>
                  <div className="text-white/70 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2" style={{ color: '#2d4055' }}>Our Services</h2>
          <p className="text-center text-gray-500 mb-10">Trusted by 450+ clients across the Vaal Triangle</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map(({ icon, title, desc, href }) => (
              <div
                key={title}
                className="text-center p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-5xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#2d4055' }}>{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                <Link to={href} style={{ color: '#5da028' }} className="font-medium text-sm hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Banner */}
      <section
        className="relative py-20 px-4 text-white text-center"
        style={{ backgroundImage: `url(${featureBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality You Can Trust</h2>
          <p className="text-white/90 text-base md:text-lg mb-6">
            All workers are thoroughly screened before employment. We deliver reliable, trustworthy service — every time.
          </p>
          <Link
            to="/contact"
            className="bg-white font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors inline-block"
            style={{ color: '#5da028' }}
          >
            Get a Quote
          </Link>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-16 px-4 bg-brand-navy-pale">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-md group">
            <div className="overflow-hidden h-56">
              <img
                src={gardenImg}
                alt="Garden Maintenance"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-2" style={{ color: '#2d4055' }}>Garden Maintenance</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Lawn care, fertilising, weed control and verticutting services for residential, golf estates,
                housing complexes, office parks and more.
              </p>
              <Link
                to="/garden-maintenance"
                className="text-white px-5 py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity inline-block"
                style={{ backgroundColor: '#5da028' }}
              >
                Read More
              </Link>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md group">
            <div className="overflow-hidden h-56">
              <img
                src={cleaningImg}
                alt="Cleaning Services"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-2" style={{ color: '#2d4055' }}>Cleaning Services</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Commercial and residential cleaning across all sectors — skilled staff, onsite supervision,
                and tailor-made solutions for your business needs.
              </p>
              <Link
                to="/cleaning-services"
                className="text-white px-5 py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity inline-block"
                style={{ backgroundColor: '#5da028' }}
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section
        className="py-16 px-4"
        style={{ backgroundImage: `url(${extensionBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="max-w-5xl mx-auto bg-white/95 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          <img src={profileThumb} alt="Hermau Services Company Profile" className="w-full md:w-64 object-cover" />
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#2d4055' }}>About Hermau Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hermau Garden Services is a Level 4 BBBEE company established in 2006. What started as a small
              family business, through hard work, commitment and dedication, soon became one of the leaders in
              the gardening industry.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              In 2021 we expanded to include commercial cleaning. We are proudly servicing more than 450 clients
              — from residential houses and golf estates to office parks and public parks.
            </p>
            <Link
              to="/about"
              className="text-white px-6 py-2 rounded font-medium text-sm hover:opacity-90 transition-opacity inline-block"
              style={{ backgroundColor: '#5da028' }}
            >
              Read More
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
