import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import headerBg from '../assets/images/hermau_services_main_background.jpg'

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
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you — get in touch today"
        backgroundImage={headerBg}
      />

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Head Office</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-700">
                  📞
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-0.5">Phone</div>
                  <a href="tel:+27832540740" className="text-gray-600 hover:text-green-700 transition-colors">
                    +27 83 254 0740
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-700">
                  ✉️
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-0.5">Email</div>
                  <a
                    href="mailto:gustav.aucamp@hermaugardens.co.za"
                    className="text-gray-600 hover:text-green-700 transition-colors break-all"
                  >
                    gustav.aucamp@hermaugardens.co.za
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-700">
                  📍
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-0.5">Address</div>
                  <p className="text-gray-600">
                    6 Montana Building<br />
                    25 Rabie Street<br />
                    Vanderbijlpark
                  </p>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-md h-56">
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

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send an Enquiry</h2>

            {status === 'sent' ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                <div className="text-3xl mb-2">✅</div>
                <h3 className="font-semibold mb-1">Thank you!</h3>
                <p className="text-sm">We received your enquiry and will respond as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="+27 ..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="service">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select a service...</option>
                    <option value="garden-maintenance">Garden Maintenance</option>
                    <option value="verticutting">Verticutting</option>
                    <option value="cleaning-services">Cleaning Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-600 text-sm">Something went wrong. Please try again or call us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-green-700 text-white font-semibold py-2.5 rounded hover:bg-green-600 transition-colors disabled:opacity-60 text-sm"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  To activate the contact form, replace <code>YOUR_FORM_ID</code> in Contact.tsx with your{' '}
                  <a href="https://formspree.io" target="_blank" rel="noreferrer" className="underline">
                    Formspree
                  </a>{' '}
                  form ID.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
