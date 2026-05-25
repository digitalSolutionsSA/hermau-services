import { Link } from 'react-router-dom'
import bottomLogo from '../assets/images/hermau_services_bottom_logo.png'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <img src={bottomLogo} alt="Hermau Services" className="h-14 w-auto mb-4" />
          <p className="text-sm leading-relaxed">
            A Level 4 BBBEE company established in 2006, proudly servicing more than 450 clients across
            the Vaal Triangle.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold text-base mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/garden-maintenance', label: 'Garden Maintenance' },
              { to: '/cleaning-services', label: 'Cleaning Services' },
              { to: '/contact', label: 'Contact Us' },
              { to: '/terms', label: 'Terms & Conditions' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="hover:text-green-400 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-base mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">📞</span>
              <span>+27 83 254 0740</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">✉️</span>
              <a
                href="mailto:gustav.aucamp@hermaugardens.co.za"
                className="hover:text-green-400 transition-colors break-all"
              >
                gustav.aucamp@hermaugardens.co.za
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">📍</span>
              <span>6 Montana Building, 25 Rabie Street, Vanderbijlpark</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Hermau Services. All rights reserved.
      </div>
    </footer>
  )
}
