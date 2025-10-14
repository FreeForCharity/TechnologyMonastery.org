import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  const services = [
    {
      icon: '🏛️',
      title: 'Charity State Registered Agent Status',
      description: 'Professional registered agent services to help your nonprofit maintain compliance with state requirements.',
    },
    {
      icon: '🌐',
      title: 'Charity Domain Name Registration',
      description: 'Secure your nonprofit\'s online presence with professional domain registration and management.',
    },
    {
      icon: '☁️',
      title: 'Microsoft 365 Grant Establishment',
      description: 'Access to Microsoft 365 nonprofit grants and comprehensive setup assistance.',
    },
    {
      icon: '⚙️',
      title: 'Microsoft Cloud for Nonprofits',
      description: 'Full setup and configuration of Microsoft Cloud services tailored to nonprofit needs.',
    },
    {
      icon: '📚',
      title: 'Staff & Volunteer Training',
      description: 'Comprehensive training programs to help your team maximize technology effectiveness.',
    },
    {
      icon: '🤝',
      title: 'Ongoing Technical Support',
      description: 'Continuous support from our technology monks to ensure your systems run smoothly.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Empowering Nonprofits Through Technology
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Free, customized technology solutions delivered by our dedicated community of technology monks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/services" variant="primary">
                Explore Services
              </Button>
              <Button href="/contact" variant="secondary">
                Support Our Mission
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Supported Charities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">Free</div>
              <div className="text-gray-600">All Services</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Technical Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About The Technology Monastery
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The Technology Monastery is a unique, innovative solution designed to address the challenges 
              faced by small nonprofits in acquiring and retaining technical talent.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By providing tailored technology solutions and support through a dedicated community of 
              technology monks, we empower small nonprofits to harness the potential of technology for 
              social impact, while overcoming the obstacles that hinder their ability to attract and 
              retain skilled technical professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              All services provided free of charge to qualifying small nonprofits
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Monks Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Our Technology Monks
            </h2>
            <p className="text-lg mb-6 text-blue-100 text-center">
              Technology monks are skilled professionals who have chosen to dedicate their talents to 
              serving the nonprofit sector.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8">
              <p className="mb-4 text-blue-100">
                By residing and working on-site at the Technology Monastery, they benefit from:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>A supportive community of like-minded professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Ongoing training and professional development</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Opportunities for personal and professional growth</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>The satisfaction of contributing expertise to meaningful causes</span>
                </li>
              </ul>
              <p className="text-blue-100">
                Our monks foster a strong collaborative community, sharing ideas and supporting one 
                another in their pursuit of excellence and social impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a nonprofit looking for technology support or a professional wanting to 
            make a difference, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/get-started" variant="primary">
              Get Started
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
