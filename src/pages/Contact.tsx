import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import headerBg from '../assets/images/hermau_services_main_background.jpg'

const contactItems = [
  {
    label: 'Phone',
    value: '+27 83 254 0740',
    href: 'tel:+27832540740',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'gustav.aucamp@hermaugardens.co.za',
    href: 'mailto:gustav.aucamp@hermaugardens.co.za',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Address',
    value: '6 Montana Building, 25 Rabie Street, Vanderbijlpark',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) { setStatus('sent'); form.reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear about your requirements"
        backgroundImage={headerBg}
      />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Left: details + map */}
          <div>
            <div className="w-10 h-0.5 rounded-full mb-5" style={{ backgroundColor: '#5da028' }} />
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2d4055' }}>Head Office</h2>

            <div className="space-y-6 mb-10">
              {contactItems.map(({ label, value, href, icon }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                    style={{ backgroundColor: '#2d4055' }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#5da028' }}>
                      {label}
                    </div>
                    {href ? (
                      <a href={href} className="text-gray-600 hover:text-brand-dark transition-colors font-medium text-sm break-all">
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-600 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden shadow-md h-56 border border-gray-100">
              <iframe
                title="Hermau Services Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5!2d27.8333!3d-26.7000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQyJzAwLjAiUyAyN8KwNTAnMDAuMCJF!5e0!3m2!1sen!2sza!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: form */}
          <div>
            <div className="w-10 h-0.5 rounded-full mb-5" style={{ backgroundColor: '#5da028' }} />
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2d4055' }}>Send an Enquiry</h2>

            {status === 'sent' ? (
              <div className="rounded-xl p-10 text-center border border-gray-100 shadow-sm">
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#f2f8ea' }}>
                  <svg className="w-7 h-7" style={{ color: '#5da028' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#2d4055' }}>Thank You</h3>
                <p className="text-gray-500 text-sm">We've received your enquiry and will be in touch as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'Your name' },
                  { id: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'your@email.com' },
                  { id: 'phone', label: 'Phone Number', type: 'tel', required: false, placeholder: '+27 ...' },
                ].map(({ id, label, type, required, placeholder }) => (
                  <div key={id}>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#2d4055' }} htmlFor={id}>
                      {label}{required && ' *'}
                    </label>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      required={required}
                      placeholder={placeholder}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-brand-green focus:bg-white transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#2d4055' }} htmlFor="service">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-brand-green focus:bg-white transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option value="garden-maintenance">Garden Maintenance</option>
                    <option value="verticutting">Verticutting</option>
                    <option value="cleaning-services">Cleaning Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#2d4055' }} htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-brand-green focus:bg-white transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again or call us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full text-white font-semibold py-3.5 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 text-sm tracking-wide"
                  style={{ backgroundColor: '#5da028' }}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Activate the form by replacing <code className="bg-gray-100 px-1 rounded">YOUR_FORM_ID</code> in{' '}
                  <code className="bg-gray-100 px-1 rounded">Contact.tsx</code> with your free{' '}
                  <a href="https://formspree.io" target="_blank" rel="noreferrer" className="underline hover:text-gray-600">
                    Formspree
                  </a>{' '}
                  ID.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
