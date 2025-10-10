import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us - The Technology Monastery',
  description: 'Get in touch with The Technology Monastery for technology support or volunteer opportunities.',
}

export default function ContactPage() {
  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-purple-600 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-xl text-primary-50">
              We'd love to hear from you. Reach out with questions, service requests, or to learn about volunteering.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Email</h3>
                <p className="text-gray-600 mb-2">
                  For general inquiries:
                </p>
                <a 
                  href="mailto:info@technologymonastery.org" 
                  className="text-primary-500 hover:text-primary-600 font-medium"
                >
                  info@technologymonastery.org
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Response Time</h3>
                <p className="text-gray-600">
                  We typically respond within 1-2 business days. For urgent matters, please indicate this in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Before You Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3 text-primary-500">For Nonprofits</h3>
                <p className="text-gray-600 mb-4">
                  When reaching out for services, it helps to include:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Your organization's name and mission</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Current technology challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>What you hope to achieve</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Your timeline and constraints</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-purple-500">For Volunteers</h3>
                <p className="text-gray-600 mb-4">
                  When applying to volunteer, please share:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Your technical background and skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Time commitment you can make</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Areas of interest or expertise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Why you want to become a technology monk</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8">Looking for Something Else?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a 
                href="/services" 
                className="card hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-3xl mb-3">📋</div>
                <h3 className="font-bold mb-2">View Services</h3>
                <p className="text-sm text-gray-600">See what we offer</p>
              </a>

              <a 
                href="/about" 
                className="card hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-3xl mb-3">ℹ️</div>
                <h3 className="font-bold mb-2">About Us</h3>
                <p className="text-sm text-gray-600">Learn our mission</p>
              </a>

              <a 
                href="/get-started" 
                className="card hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="font-bold mb-2">Get Started</h3>
                <p className="text-sm text-gray-600">Begin your journey</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
