import PageHeader from '../components/PageHeader'
import headerBg from '../assets/images/hermau_services_main_background.jpg'
import teamImg from '../assets/images/hermau_services_team/team.jpg'
import profileThumb from '../assets/images/hermau_services_company_profile_thumb.jpg'

const stats = [
  { value: '450+', label: 'Happy Clients' },
  { value: '2006', label: 'Established' },
  { value: 'Level 4', label: 'BBBEE Rating' },
  { value: '28 yrs', label: "Director's Experience" },
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

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="A trusted name in garden maintenance and cleaning services since 2006"
        backgroundImage={headerBg}
      />

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
            <img
              src={profileThumb}
              alt="Hermau Services"
              className="w-full md:w-72 rounded-lg shadow-md object-cover flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hermau Garden Services is a <strong>Level 4 BBBEE</strong> company that was established in 2006.
                Which started as a small family business, through hard work, commitment and dedication, soon became
                one of the leaders in the gardening industry.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                In 2021 we expanded our business to include commercial cleaning to our profile, and we pride
                ourselves in offering tailor made solutions for commercial &amp; residential garden maintenance
                and cleaning services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Currently we are proudly servicing more than 450 clients which varies from residential houses,
                Golf Estates, Housing Complexes, School sport fields, Retirement Complexes, Office Parks,
                Commercial Gardens, public parks and municipal road verges.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center p-5 bg-green-50 rounded-lg border border-green-100">
                <div className="text-3xl font-bold text-green-700 mb-1">{value}</div>
                <div className="text-sm text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          <img
            src={teamImg}
            alt="Our Team"
            className="w-full md:w-80 rounded-lg shadow-md object-cover flex-shrink-0"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Leadership &amp; Values</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Director, Gustav Aucamp, has 28 years' experience in forensics. Quality, honesty and reliability
              is our priority — therefore we ensure that all workers are thoroughly screened before employment to
              ensure that we offer a reliable and trustworthy service.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our dedicated team is committed to delivering the highest standard of service on every job, ensuring
              that our clients can rely on us completely.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Clients We Serve</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {clientTypes.map((type) => (
                <li key={type} className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="text-green-600">✓</span> {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
