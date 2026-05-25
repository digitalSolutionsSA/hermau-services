import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gardenSlide from '../assets/images/slides/hermau_services_garden_maintenance_home_slide.jpg'
import cleaningSlide from '../assets/images/slides/hermau_services_cleaning_services_home_slide.jpg'

const slides = [
  {
    image: gardenSlide,
    title: 'Garden Maintenance',
    subtitle: 'Professional lawn care, weed control and verticutting services for residential and commercial properties.',
    cta: 'Our Services',
    href: '/garden-maintenance',
  },
  {
    image: cleaningSlide,
    title: 'Cleaning Services',
    subtitle: 'Tailored commercial and residential cleaning solutions delivered by skilled, supervised professionals.',
    cta: 'Learn More',
    href: '/cleaning-services',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <div className="relative h-[520px] md:h-[620px] overflow-hidden">
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.image}
          alt={s.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {slide.title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 drop-shadow">
          {slide.subtitle}
        </p>
        <Link
          to={slide.href}
          className="bg-green-700 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded transition-colors text-base"
        >
          {slide.cta}
        </Link>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
