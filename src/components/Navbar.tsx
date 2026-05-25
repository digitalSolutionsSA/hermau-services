import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/hermau_services_logo.png'
import logo20 from '../assets/images/20years.png'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/garden-maintenance', label: 'Garden Maintenance' },
  { to: '/cleaning-services', label: 'Cleaning Services' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div style={{ backgroundColor: '#2d4055' }} className="hidden md:block text-white/80 text-xs py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <a href="tel:+27832540740" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +27 83 254 0740
            </a>
            <a href="mailto:gustav.aucamp@hermaugardens.co.za" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              gustav.aucamp@hermaugardens.co.za
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            25 Rabie Street, Vanderbijlpark
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-4 flex-shrink-0">
            <img src={logo} alt="Hermau Services" className="h-14 w-auto" />
            <div className="hidden sm:block w-px h-10 bg-gray-200" />
            <img src={logo20} alt="20 Years of Quality Service" className="hidden sm:block h-12 w-auto" />
          </Link>

          <nav className="hidden md:flex gap-1 items-center">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-600 hover:text-brand-dark hover:bg-brand-navy-pale'
                  }`
                }
                style={({ isActive }) => isActive ? { backgroundColor: '#5da028' } : {}}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded text-brand-dark hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="md:hidden border-t border-gray-100 px-6 pb-4 pt-2">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-2.5 text-sm font-medium border-b border-gray-50 last:border-0 ${
                    isActive ? 'text-brand-green' : 'text-gray-600'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
