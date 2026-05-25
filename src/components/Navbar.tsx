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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Hermau Services" className="h-14 w-auto" />
          <img
            src={logo20}
            alt="20 Years of Quality Service"
            className="h-14 w-auto hidden sm:block"
          />
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-brand-green border-b-2 border-brand-green pb-0.5'
                    : 'text-brand-dark hover:text-brand-green'
                }`
              }
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
        <nav className="md:hidden border-t border-gray-100 bg-white px-4 pb-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 text-sm font-medium ${
                  isActive ? 'text-brand-green' : 'text-brand-dark hover:text-brand-green'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
