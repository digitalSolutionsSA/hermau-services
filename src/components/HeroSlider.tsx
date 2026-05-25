import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gardenSlide from '../assets/images/slides/hermau_services_garden_maintenance_home_slide.jpg'
import cleaningSlide from '../assets/images/slides/hermau_services_cleaning_services_home_slide.jpg'
import logo20 from '../assets/images/20years.png'

const slides = [
  {
    image: gardenSlide,
    eyebrow: 'Garden Maintenance',
    title: 'Pristine Gardens,\nEvery Season',
    subtitle: 'Professional lawn care, weed control and verticutting for residential and commercial properties across the Vaal Triangle.',
    cta: 'View Services',
    href: '/garden-maintenance',
  },
  {
    image: cleaningSlide,
    eyebrow: 'Cleaning Services',
    title: 'Immaculate Spaces,\nEvery Time',
    subtitle: 'Tailored commercial and residential cleaning delivered by skilled, supervised professionals with proven standards.',
    cta: 'Learn More',
    href: '/cleaning-services',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <div className="relative h-[580px] md:h-[680px] overflow-hidden">
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.image}
          alt={s.eyebrow}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Gradient overlay — heavier on left for text legibility */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(20,30,40,0.82) 0%, rgba(20,30,40,0.55) 55%, rgba(20,30,40,0.15) 100%)' }}
      />

      {/* 20-year badge */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
        <img
          src={logo20}
          alt="20 Years of Quality Service"
          className="h-20 sm:h-28 md:h-36 lg:h-44 w-auto drop-shadow-2xl"
          style={{ filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.35))' }}
        />
      </div>

      {/* Slide content — left-aligned */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#7dc240' }} />
            <span className="text-sm font-medium tracking-widest uppercase" style={{ color: '#7dc240' }}>
              {slide.eyebrow}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight" style={{ whiteSpace: 'pre-line' }}>
            {slide.title}
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            {slide.subtitle}
          </p>
          <div className="flex gap-4">
            <Link
              to={slide.href}
              className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#5da028' }}
            >
              {slide.cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded text-sm border border-white/40 hover:bg-white/10 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-6 md:left-16 lg:left-24 flex gap-2 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all rounded-full ${
              i === current ? 'w-8 h-2' : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
            style={i === current ? { backgroundColor: '#7dc240' } : {}}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
