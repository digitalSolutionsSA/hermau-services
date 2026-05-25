import PageHeader from '../components/PageHeader'
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
    title: 'Lawn Care',
    body: `A perfectly cut lawn immediately transforms any garden. It is therefore essential to mow your grass at
    the proper height. Depending on the type of grass, the season and condition of the grass, proper mowing will
    ensure that your lawn is looking finished and attractive, and it also promotes thick, lush growth.`,
  },
  {
    title: 'Fertilising',
    body: `Fertilising your lawn every few months and adding nutrients to the flower beds ensures your garden
    is looking bright, fresh, and alive. Proper nutrition is the foundation of a healthy, beautiful garden.`,
  },
  {
    title: 'Weed Control',
    body: `Weeds grow much faster and more aggressively than other plants, and if left unattended, they will
    block out the necessary sunlight that your garden plants require to thrive and survive. Regular weeding
    will ensure that your plants and lawn will continue to not only look beautiful but be healthy and rich
    in nutrients.`,
  },
]

const verticuttingBenefits = [
  'Improve soil health',
  'Improve drainage',
  'Promotes long-term health',
  'Creates a healthier, more luscious lawn',
  'Retain moisture',
  'Absorb more nutrients',
]

const gallery = [garden1, garden2]
const verticuttingGallery = [vert1, vert2, vert3, vert4]

export default function GardenMaintenance() {
  return (
    <>
      <PageHeader
        title="Garden Maintenance"
        subtitle="Professional lawn care, fertilising, weed control and verticutting services"
        backgroundImage={headerBg}
      />

      {/* Services */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Garden Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {services.map(({ title, body }) => (
              <div key={title} className="p-6 bg-green-50 rounded-lg border border-green-100">
                <h3 className="text-lg font-semibold text-green-800 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Garden maintenance ${i + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Verticutting */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-start mb-10">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Verticutting</h2>
              <h3 className="text-base font-semibold text-green-700 mb-2">Let your lawn breathe.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The verticutter is a machine used for vertical mowing. The machine has vertical blades that remove
                the thatch build-up of the grass. By removing the thatch it allows the turf to breathe easier and
                to better absorb important nutrients.
              </p>
              <h4 className="font-semibold text-gray-700 mb-3">Advantages of Verticutting:</h4>
              <ul className="space-y-2">
                {verticuttingBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-gray-600 text-sm">
                    <span className="text-green-600 font-bold">✓</span> {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full md:w-96 flex-shrink-0">
              {verticuttingGallery.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Verticutting ${i + 1}`}
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-green-700 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to transform your garden?</h2>
        <p className="text-white/90 mb-6">Contact us today for a free assessment and tailored quote.</p>
        <Link
          to="/contact"
          className="bg-white text-green-700 font-semibold px-8 py-3 rounded hover:bg-green-50 transition-colors inline-block"
        >
          Contact Us
        </Link>
      </section>
    </>
  )
}
