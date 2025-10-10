import Button from '@/components/Button'
import ServiceCard from '@/components/ServiceCard'

export default function Home() {
  const services = [
    {
      icon: '☁️',
      title: 'Microsoft 365 for Nonprofits',
      description: 'Free setup and management of Microsoft 365 including email, cloud storage, and productivity tools.',
    },
    {
      icon: '🌐',
      title: 'Static Website Development',
      description: 'Professional, fast-loading static websites optimized for nonprofits. Free hosting on GitHub Pages.',
    },
    {
      icon: '🤖',
      title: 'AI Tools Integration',
      description: 'Leverage AI to automate tasks, improve efficiency, and enhance your nonprofit operations.',
    },
    {
      icon: '📱',
      title: 'Social Media Management',
      description: 'Strategic guidance and tools to maximize your nonprofit\'s social media presence and engagement.',
    },
    {
      icon: '📊',
      title: 'Business Planning',
      description: 'Technology-focused strategic planning to help your nonprofit scale and achieve its mission.',
    },
    {
      icon: '🎓',
      title: 'Training & Support',
      description: 'Ongoing training and technical support to ensure your team can effectively use all tools.',
    },
  ]

  const stats = [
    { value: '100+', label: 'Charities Supported' },
    { value: '1000+', label: 'Hours Volunteered' },
    { value: '100%', label: 'Free Services' },
  ]

  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-purple-600 text-white">
        <div className="container section">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-balance">
              Empowering Nonprofits Through Technology
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-50">
              Free, customized technology solutions delivered by our dedicated community of technology monks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/services" variant="secondary">
                Explore Services
              </Button>
              <Button href="#donate" className="bg-white text-primary-600 hover:bg-gray-100">
                Support Our Mission
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">About The Technology Monastery</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The Technology Monastery is a unique, innovative solution designed to address the challenges faced by small nonprofits in acquiring and retaining technical talent. By providing tailored technology solutions and support through a dedicated community of technology monks, we empower small nonprofits to harness the potential of technology for social impact.
            </p>
            <Button href="/about" variant="outline">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored for small nonprofits
            </p>
          </div>
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
          <div className="text-center mt-12">
            <Button href="/services">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Monks Section */}
      <section id="monks" className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">What are Technology Monks?</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                Technology monks are dedicated volunteers who commit their technical skills and expertise to serving nonprofits. Like traditional monks who dedicate themselves to a higher calling, our technology monks pledge their talents to the service of charitable organizations making a positive impact in the world.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Each technology monk brings unique skills in areas like web development, cloud computing, data management, and more. Together, we form a community of practice dedicated to democratizing access to technology for nonprofits of all sizes.
              </p>
              <div className="text-center mt-8">
                <Button href="/get-started" variant="primary">
                  Become a Technology Monk
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="section bg-primary-500 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Support Our Mission</h2>
            <p className="text-xl mb-8 text-primary-50">
              Your donation helps us provide free technology services to even more nonprofits. 100% of donations go directly to supporting charitable organizations.
            </p>
            
            {/* Zeffy Donation Integration Placeholder */}
            {/* 
              To integrate Zeffy donation forms:
              1. Sign up at https://www.zeffy.com
              2. Create a donation form in your Zeffy dashboard
              3. Get the embed code or widget code
              4. Replace this comment with the Zeffy embed code
              
              Example integration:
              <div id="zeffy-donation-form">
                <script src="https://www.zeffy.com/embed/YOUR_FORM_ID"></script>
              </div>
              
              Benefits of Zeffy:
              - 100% free processing (no fees on donations)
              - Easy donor management
              - Recurring donation support
            */}
            
            <div className="bg-white/10 border-2 border-white/20 rounded-lg p-8">
              <p className="text-lg mb-4">Zeffy Donation Form Integration</p>
              <p className="text-sm text-primary-100">
                Configure your Zeffy donation form following the instructions in INTEGRATIONS.md
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="section bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Volunteer Opportunities</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our community of technology monks and make a difference with your technical skills
            </p>
            
            {/* VolunteerMatch Widget Placeholder */}
            {/* 
              To integrate VolunteerMatch widget:
              1. Register at https://www.volunteermatch.org
              2. Claim your organization profile
              3. Get your widget code from the dashboard
              4. Replace this comment with the VolunteerMatch widget code
              
              Example integration:
              <div id="vm-widget">
                <script src="https://www.volunteermatch.org/widgets/YOUR_WIDGET_ID.js"></script>
              </div>
              
              Benefits of VolunteerMatch:
              - Connect with skilled volunteers
              - Post volunteer opportunities
              - Manage volunteer applications
            */}
            
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-8">
              <p className="text-lg mb-4 text-gray-900">VolunteerMatch Widget Integration</p>
              <p className="text-sm text-gray-600">
                Configure your VolunteerMatch widget following the instructions in INTEGRATIONS.md
              </p>
            </div>
            
            <Button href="/get-started">
              Get Started as a Volunteer
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="mb-6">Ready to Transform Your Nonprofit?</h2>
            <p className="text-xl mb-8 text-primary-50 max-w-2xl mx-auto">
              Whether you're a nonprofit needing technology support or a tech professional ready to give back, we're here to help.
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
