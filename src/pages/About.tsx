import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import { Link } from 'react-router-dom'
import headerBg from '../assets/images/hermau_services_main_background.jpg'
import teamImg from '../assets/images/hermau_services_team/team.jpg'
import profileThumb from '../assets/images/hermau_services_company_profile_thumb.jpg'
import logo20 from '../assets/images/20years.png'

const stats = [
  { value: '450+', label: 'Clients Served' },
  { value: '2006', label: 'Year Established' },
  { value: 'Level 4', label: 'BBBEE Rating' },
  { value: '28 yrs', label: "Director's Industry Experience" },
]

const clientTypes = [
  'Residential Houses',
  'Golf Estates',
  'Housing Complexes',
  'School Sport Fields',
  'Retirement Complexes',
  'Office Parks',
  'Commercial Gardens',
  'Public Parks',
  'Municipal Road Verges',
]

const values = [
  { title: 'Quality', desc: 'We maintain the highest standards on every job, every time — no exceptions.' },
  { title: 'Honesty', desc: 'Transparent pricing, realistic expectations, and integrity in everything we do.' },
  { title: 'Reliability', desc: 'You can count on us. All staff are thoroughly screened and professionally managed.' },
]

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Building trust through quality service since 2006"
        backgroundImage={headerBg}
      />

      {/* Who We Are */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="w-10 h-0.5 rounded-full mb-5" style={{ backgroundColor: '#5da028' }} />
              <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight" style={{ color: '#2d4055' }}>
                A Family Business Built<br />on Hard Work &amp; Trust
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Hermau Garden Services is a <strong style={{ color: '#2d4055' }}>Level 4 BBBEE</strong> company
                established in 2006. What started as a small family business, through hard work, commitment and
                dedication, soon became one of the leaders in the gardening industry.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                In 2021 we expanded our business to include commercial cleaning, and we pride ourselves in offering
                tailor-made solutions for commercial and residential garden maintenance and cleaning services.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Today we proudly service more than 450 clients — from residential houses and golf estates to
                office parks, school sport fields, retirement complexes and municipal road verges.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#5da028' }}
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div>
              <img
                src={profileThumb}
                alt="Hermau Services"
                className="w-full rounded-xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#f8f9fa' }} className="py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold mb-1" style={{ color: '#5da028' }}>{value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 20-year callout */}
      <section
        className="py-16 px-6"
        style={{ background: 'linear-gradient(135deg, #1e2d3d 0%, #2d4055 100%)' }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
          <img src={logo20} alt="20 Years of Quality Service" className="h-36 w-auto flex-shrink-0 drop-shadow-xl" />
          <div>
            <div className="w-10 h-0.5 rounded-full mb-4 mx-auto sm:mx-0" style={{ backgroundColor: '#5da028' }} />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
              Celebrating 20 Years of Excellence
            </h2>
            <p className="text-white/65 leading-relaxed max-w-lg">
              Two decades of dedication to quality, honesty and reliability — serving the Vaal Triangle
              with consistent professionalism and growing stronger every year.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Our Values" subtitle="The principles that have guided us for 20 years." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ title, desc }, i) => (
              <div key={title} className="p-8 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: '#5da028' }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: '#2d4055' }}>{title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director / Team */}
      <section style={{ backgroundColor: '#f8f9fa' }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <img src={teamImg} alt="Our Team" className="w-full rounded-xl shadow-xl object-cover" />
          </div>
          <div>
            <div className="w-10 h-0.5 rounded-full mb-5" style={{ backgroundColor: '#5da028' }} />
            <h2 className="text-3xl font-bold mb-5 leading-tight" style={{ color: '#2d4055' }}>
              Leadership &amp; Team
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              The Director, Gustav Aucamp, brings 28 years of experience in forensics to the business.
              Quality, honesty and reliability are our priorities — all workers are thoroughly screened
              before employment to ensure trustworthy, professional service on every job.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our dedicated team is committed to delivering the highest standard of service, ensuring that
              clients can rely on Hermau Services completely.
            </p>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#2d4055' }}>
              Clients We Serve
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {clientTypes.map((type) => (
                <li key={type} className="flex items-center gap-2.5 text-gray-500 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#5da028' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
