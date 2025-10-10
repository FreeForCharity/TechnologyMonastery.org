import type { Metadata } from 'next'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'About Us - The Technology Monastery',
  description: 'Learn about The Technology Monastery mission, our technology monks concept, and connection to Free For Charity.',
}

export default function AboutPage() {
  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-purple-600 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">About The Technology Monastery</h1>
            <p className="text-xl text-primary-50">
              Empowering small nonprofits through dedicated technology services and a community of passionate volunteers
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Our Mission</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                The Technology Monastery exists to solve a critical challenge facing small nonprofits: the difficulty in acquiring and retaining technical talent. While large nonprofits can afford dedicated IT staff and expensive technology consultants, smaller organizations often struggle with limited budgets and lack of technical expertise.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We bridge this gap by providing free, professional-grade technology services through our community of technology monks—skilled volunteers who dedicate their expertise to empowering nonprofits. Our mission is to democratize access to technology, ensuring that organizations of all sizes can leverage modern tools to maximize their social impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Monks Concept */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">The Technology Monks Concept</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                The concept of "technology monks" draws inspiration from traditional monastic communities who dedicate their lives to service, learning, and the preservation of knowledge. Our technology monks embody these same principles, but apply them to the digital realm.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Each technology monk brings specialized skills—whether in web development, cloud infrastructure, data management, cybersecurity, or other technical domains. They commit to using these skills not for personal profit, but in service of charitable organizations working to make the world a better place.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Like traditional monks who take vows of service, our technology monks pledge to:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1.5">•</span>
                  <span>Provide their services freely and without expectation of payment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1.5">•</span>
                  <span>Continuously learn and share knowledge within the community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1.5">•</span>
                  <span>Maintain the highest standards of quality and professionalism</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1.5">•</span>
                  <span>Respect the unique needs and missions of each nonprofit they serve</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1.5">•</span>
                  <span>Foster collaboration and mutual support among fellow monks</span>
                </li>
              </ul>
              <p className="text-lg leading-relaxed">
                This unique approach creates a sustainable model for technology support that goes beyond typical pro bono work. It builds a dedicated community of practice, where knowledge is preserved, skills are refined, and the collective expertise grows over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free For Charity Connection */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Part of Free For Charity</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                The Technology Monastery is a flagship project of <strong>Free For Charity</strong>, a broader initiative dedicated to providing free resources, services, and support to nonprofit organizations worldwide.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Free For Charity operates on the principle that access to professional services shouldn't be limited by budget. By mobilizing volunteers with specialized skills and leveraging free and low-cost technology platforms, we help nonprofits operate more efficiently and effectively.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Through The Technology Monastery, Free For Charity specifically addresses the technology gap that prevents many small nonprofits from achieving their full potential. We believe that every charitable organization deserves access to modern, reliable technology infrastructure—regardless of their size or budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-500 mb-3">100+</div>
              <p className="text-gray-600 font-medium">Nonprofits Supported</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-500 mb-3">1000+</div>
              <p className="text-gray-600 font-medium">Volunteer Hours</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-500 mb-3">100%</div>
              <p className="text-gray-600 font-medium">Free Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary-500">Service</h3>
                <p className="text-gray-600">
                  We exist to serve nonprofits and their missions. Every decision is guided by what best helps the organizations we support.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary-500">Excellence</h3>
                <p className="text-gray-600">
                  We maintain professional standards in all our work, delivering solutions that are reliable, secure, and effective.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary-500">Accessibility</h3>
                <p className="text-gray-600">
                  Technology should be available to all nonprofits, regardless of size or budget. We work to eliminate barriers to access.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary-500">Community</h3>
                <p className="text-gray-600">
                  We build lasting relationships with the nonprofits we serve and foster collaboration among our technology monks.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary-500">Learning</h3>
                <p className="text-gray-600">
                  We continuously improve our skills and share knowledge, ensuring we provide the most current and effective solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary-500">Sustainability</h3>
                <p className="text-gray-600">
                  We build systems and train teams to create long-term technology sustainability for the nonprofits we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary-500 to-purple-600">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="mb-6">Join Our Community</h2>
            <p className="text-xl mb-8 text-primary-50">
              Whether you need technology support for your nonprofit or want to volunteer as a technology monk, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/get-started" className="bg-white text-primary-600 hover:bg-gray-100">
                Get Started
              </Button>
              <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
