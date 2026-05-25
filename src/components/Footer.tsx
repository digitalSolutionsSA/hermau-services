import { Link } from 'react-router-dom'
import logo20 from '../assets/images/20years.png'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#2d4055' }} className="text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="flex flex-col items-start">
          <img src={logo20} alt="20 Years of Quality Service" className="h-28 w-auto mb-4" />
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
                <Link to={to} className="hover:text-brand-green-light transition-colors">
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
              <span className="text-brand-green-light mt-0.5">📞</span>
              <a href="tel:+27832540740" className="hover:text-brand-green-light transition-colors">
                +27 83 254 0740
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-green-light mt-0.5">✉️</span>
              <a
                href="mailto:gustav.aucamp@hermaugardens.co.za"
                className="hover:text-brand-green-light transition-colors break-all"
              >
                gustav.aucamp@hermaugardens.co.za
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-green-light mt-0.5">📍</span>
              <span>6 Montana Building, 25 Rabie Street, Vanderbijlpark</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Hermau Services. All rights reserved.
      </div>
    </footer>
  )
}
