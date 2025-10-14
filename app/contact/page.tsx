import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - The Technology Monastery',
  description: 'Get in touch with The Technology Monastery. Contact us for technology support, partnership opportunities, or general inquiries.',
};

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(138,43,226,0.1)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get In Touch</h1>
            <p className="text-xl text-gray-300">
              We'd love to hear from you
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <a
                      href="mailto:info@technologymonastery.org"
                      className="text-purple-400 hover:text-purple-300 text-lg"
                    >
                      info@technologymonastery.org
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Response Time</h3>
                    <p className="text-gray-300">
                      We typically respond within 1-2 business days.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Office Hours</h3>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 5:00 PM EST
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Reasons */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">What Can We Help With?</h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">🏢 Nonprofit Services</h3>
                    <p className="text-gray-300 text-sm">
                      Questions about applying for technology services for your nonprofit
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">👨‍💻 Join Our Team</h3>
                    <p className="text-gray-300 text-sm">
                      Interested in becoming part of our team or volunteering
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">🤝 Partnerships</h3>
                    <p className="text-gray-300 text-sm">
                      Partnership opportunities and collaboration inquiries
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">💝 Donations</h3>
                    <p className="text-gray-300 text-sm">
                      Questions about supporting our mission financially
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">❓ General Inquiries</h3>
                    <p className="text-gray-300 text-sm">
                      Any other questions or information requests
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Send Us a Message</h2>
            <p className="text-center text-gray-400 mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8">
              <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 bg-[#0f0a1e]/50 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 bg-[#0f0a1e]/50 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-2 bg-[#0f0a1e]/50 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 bg-[#0f0a1e]/50 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="nonprofit-services">Nonprofit Services</option>
                    <option value="join-team">Join Our Team</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="donation">Donation Inquiry</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-2 bg-[#0f0a1e]/50 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-colors transform hover:scale-105 shadow-lg shadow-purple-500/50"
                  >
                    Send Message
                  </button>
                </div>

                <p className="text-sm text-gray-400 text-center">
                  * Required fields
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Support Our Mission</h2>
            <p className="text-lg text-gray-300 mb-6">
              Your donation helps us provide free technology services to nonprofits. We use Zeffy 
              for 100% free donation processing - no fees deducted from your contribution.
            </p>
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8">
              <p className="text-gray-300 mb-4">
                Donation form will be embedded here via Zeffy
              </p>
              <p className="text-sm text-gray-400">
                All donations are tax-deductible to the extent allowed by law.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
