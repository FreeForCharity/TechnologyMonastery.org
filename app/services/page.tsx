import type { Metadata } from 'next'
import ServiceCard from '@/components/ServiceCard'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Our Services - The Technology Monastery',
  description: 'Comprehensive free technology services for nonprofits including Microsoft 365, websites, AI tools, and more.',
}

export default function ServicesPage() {
  const services = [
    {
      icon: '☁️',
      title: 'Microsoft 365 for Nonprofits',
      description: 'Complete setup and management of Microsoft 365 suite including professional email, OneDrive cloud storage, Teams collaboration, and all Office applications. We handle everything from domain setup to user training.',
    },
    {
      icon: '🌐',
      title: 'Static Website Development',
      description: 'Custom-designed, fast-loading static websites built with modern technologies. Includes responsive design, SEO optimization, content management system integration, and free hosting on GitHub Pages or Cloudflare.',
    },
    {
      icon: '🤖',
      title: 'AI Tools Integration',
      description: 'Harness the power of artificial intelligence for your nonprofit. We help integrate AI tools for content creation, data analysis, donor communication, and administrative automation to save time and resources.',
    },
    {
      icon: '📱',
      title: 'Social Media Management',
      description: 'Strategic planning and tools for effective social media presence. Includes platform selection, content strategy, scheduling tools setup, analytics tracking, and best practices training for your team.',
    },
    {
      icon: '📊',
      title: 'Business & Technology Planning',
      description: 'Strategic technology roadmap development aligned with your nonprofit\'s mission and goals. Includes needs assessment, solution recommendations, implementation planning, and long-term technology strategy.',
    },
    {
      icon: '🔒',
      title: 'Security & Compliance',
      description: 'Essential cybersecurity setup and compliance guidance. Includes secure password management, two-factor authentication, data protection policies, and compliance with nonprofit regulations.',
    },
    {
      icon: '💾',
      title: 'Data Management',
      description: 'Donor database setup and management using free or low-cost CRM solutions. Includes data migration, customization, reporting, and training to help you better track and engage with supporters.',
    },
    {
      icon: '📧',
      title: 'Email Marketing',
      description: 'Setup and training for email marketing platforms with nonprofit discounts. Includes list management, template design, campaign strategy, and analytics to effectively communicate with your supporters.',
    },
    {
      icon: '🎓',
      title: 'Training & Support',
      description: 'Comprehensive training sessions and ongoing technical support for all services. We ensure your team is confident and capable of managing technology independently while providing backup when needed.',
    },
  ]

  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-purple-600 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Our Services</h1>
            <p className="text-xl text-primary-50">
              Comprehensive technology solutions designed specifically for small nonprofits. All services are provided completely free of charge by our community of dedicated technology monks.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Contact Us</h3>
              <p className="text-gray-600">
                Reach out through our contact form or email to tell us about your nonprofit and technology needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Consultation</h3>
              <p className="text-gray-600">
                We schedule a free consultation to understand your needs and recommend the best solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Implementation</h3>
              <p className="text-gray-600">
                Our technology monks implement the solutions and provide training to ensure your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">Eligibility</h2>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <p className="text-lg text-gray-600 mb-6">
                Our services are available to:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Registered 501(c)(3) nonprofit organizations in the United States</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Charitable organizations in other countries with equivalent nonprofit status</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Organizations with limited technology budgets and resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Nonprofits committed to using technology to further their mission</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary-500 to-purple-600">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-primary-50">
              Let us help your nonprofit leverage technology to maximize your impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/get-started" className="bg-white text-primary-600 hover:bg-gray-100">
                Request Services
              </Button>
              <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white/10">
                Ask Questions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
