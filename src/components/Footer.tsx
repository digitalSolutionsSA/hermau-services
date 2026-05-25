import { Link } from 'react-router-dom'
import logo20 from '../assets/images/20years.png'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1e2d3d' }} className="text-gray-400">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logo20} alt="20 Years of Quality Service" className="h-24 w-auto mb-5" />
            <p className="text-sm leading-relaxed text-gray-500">
              A Level 4 BBBEE company established in 2006, proudly serving 450+ clients across the Vaal Triangle.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4" style={{ color: '#fff' }}>Services</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: '/garden-maintenance', label: 'Garden Maintenance' },
                { to: '/garden-maintenance', label: 'Lawn Care & Mowing' },
                { to: '/garden-maintenance', label: 'Verticutting' },
                { to: '/cleaning-services', label: 'Cleaning Services' },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="hover:text-white transition-colors flex items-center gap-2">
                    <span style={{ color: '#5da028' }}>›</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact Us' },
                { to: '/terms', label: 'Terms & Conditions' },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="hover:text-white transition-colors flex items-center gap-2">
                    <span style={{ color: '#5da028' }}>›</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <div className="text-xs text-gray-600 uppercase tracking-wider mb-1">Phone</div>
                <a href="tel:+27832540740" className="text-gray-300 hover:text-white transition-colors font-medium">
                  +27 83 254 0740
                </a>
              </li>
              <li>
                <div className="text-xs text-gray-600 uppercase tracking-wider mb-1">Email</div>
                <a href="mailto:gustav.aucamp@hermaugardens.co.za" className="text-gray-300 hover:text-white transition-colors break-all">
                  gustav.aucamp@<br />hermaugardens.co.za
                </a>
              </li>
              <li>
                <div className="text-xs text-gray-600 uppercase tracking-wider mb-1">Address</div>
                <span className="text-gray-400">6 Montana Building,<br />25 Rabie Street,<br />Vanderbijlpark</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs" style={{ borderColor: 'rgba(255,255,255,0.07)', color: '#4a5568' }}>
          <span>&copy; {new Date().getFullYear()} Hermau Services. All rights reserved.</span>
          <span>Garden Maintenance &amp; Cleaning Services · Vaal Triangle</span>
        </div>
      </div>
    </footer>
  )
}
