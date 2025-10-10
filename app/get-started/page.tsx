import type { Metadata } from 'next'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Get Started - The Technology Monastery',
  description: 'Start your journey with The Technology Monastery - request services or become a technology monk volunteer.',
}

export default function GetStartedPage() {
  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-purple-600 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Get Started</h1>
            <p className="text-xl text-primary-50">
              Ready to transform your nonprofit with technology or volunteer your skills?
            </p>
          </div>
        </div>
      </section>

      {/* Two Paths Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* For Nonprofits */}
            <div className="card border-2 border-primary-200">
              <div className="text-4xl mb-4">🏢</div>
              <h2 className="text-2xl font-bold mb-4">For Nonprofits</h2>
              <p className="text-gray-600 mb-6">
                Get free technology services for your organization. Our technology monks are ready to help you leverage modern tools to maximize your impact.
              </p>
              
              <h3 className="text-lg font-bold mb-3">What You'll Get:</h3>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span>Free consultation to assess your needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span>Customized technology solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span>Implementation and training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span>Ongoing support as needed</span>
                </li>
              </ul>
              
              <Button href="/contact" className="w-full">
                Request Services
              </Button>
            </div>

            {/* For Volunteers */}
            <div className="card border-2 border-purple-200">
              <div className="text-4xl mb-4">🧑‍💻</div>
              <h2 className="text-2xl font-bold mb-4">For Volunteers</h2>
              <p className="text-gray-600 mb-6">
                Become a technology monk and use your technical skills to make a real difference in the nonprofit sector.
              </p>
              
              <h3 className="text-lg font-bold mb-3">What You'll Do:</h3>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Provide technology services to nonprofits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Collaborate with fellow technology monks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Expand your skills and experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Make a meaningful impact</span>
                </li>
              </ul>
              
              <Button href="/contact" variant="secondary" className="w-full">
                Become a Technology Monk
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process for Nonprofits */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Our Process for Nonprofits</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Initial Contact</h3>
                  <p className="text-gray-600">
                    Reach out through our contact form or email. Tell us about your organization and what technology challenges you're facing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Needs Assessment</h3>
                  <p className="text-gray-600">
                    We'll schedule a free consultation call to understand your needs, current technology setup, and goals.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Solution Design</h3>
                  <p className="text-gray-600">
                    We'll create a customized plan with recommended solutions, timeline, and implementation approach.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Implementation</h3>
                  <p className="text-gray-600">
                    Our technology monks will implement the solution, working closely with your team throughout the process.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Training & Handoff</h3>
                  <p className="text-gray-600">
                    We provide comprehensive training to ensure your team can confidently use and maintain the new systems.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                    6
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">
                    We remain available for questions, troubleshooting, and additional support as your needs evolve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Requirements */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Volunteer Requirements</h2>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <p className="text-lg text-gray-600 mb-6">
                To become a technology monk, we look for individuals who:
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Have professional experience in technology (web development, cloud infrastructure, IT support, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Can commit to at least 5-10 hours per month of volunteer work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Are passionate about using technology for social good</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Can communicate technical concepts clearly to non-technical audiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Are willing to learn and collaborate with other volunteers</span>
                </li>
              </ul>
              <p className="text-gray-600">
                Don't meet all the requirements but still want to help? Reach out! We're always looking for passionate individuals and can help you develop the skills you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Is there really no cost?</h3>
                <p className="text-gray-600">
                  Yes! All our services are provided completely free of charge by volunteer technology monks. We may recommend free or low-cost third-party tools, but we never charge for our time or expertise.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">How long does implementation take?</h3>
                <p className="text-gray-600">
                  It varies based on the complexity of your needs. Simple projects like email setup might take just a few days, while a custom website could take several weeks. We'll provide a timeline during the consultation.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">What if we need ongoing support?</h3>
                <p className="text-gray-600">
                  We provide initial training and documentation to help you manage systems independently. However, we remain available for questions and troubleshooting. For more extensive ongoing needs, we can discuss continued partnership.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Can volunteers work remotely?</h3>
                <p className="text-gray-600">
                  Absolutely! Most of our volunteer work is done remotely. We use collaboration tools and video calls to work effectively with nonprofits and fellow technology monks worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-gradient-to-r from-primary-500 to-purple-600">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-primary-50">
              Take the first step today. Whether you need help or want to volunteer, we're here for you.
            </p>
            <Button href="/contact" className="bg-white text-primary-600 hover:bg-gray-100">
              Contact Us Now
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
