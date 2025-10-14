import { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Our Services - The Technology Monastery',
  description: 'Free technology services for small nonprofits including Microsoft 365, domain registration, technical support, and more.',
};

export default function Services() {
  const coreServices = [
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
  ];

  const additionalServices = [
    {
      icon: '🌐',
      title: 'Static Website Development',
      description: 'Professional, fast, and secure static websites built with modern technologies.',
    },
    {
      icon: '🤖',
      title: 'AI Tools & Automation',
      description: 'Leverage artificial intelligence to streamline operations and improve efficiency.',
    },
    {
      icon: '📱',
      title: 'Social Media Management',
      description: 'Strategic social media support to amplify your nonprofit\'s message and reach.',
    },
    {
      icon: '📊',
      title: 'Business Planning & Strategy',
      description: 'Technology-focused business planning and strategic consulting for nonprofits.',
    },
    {
      icon: '📚',
      title: 'Staff & Volunteer Training',
      description: 'Comprehensive training programs to help your team maximize technology effectiveness.',
    },
    {
      icon: '🤝',
      title: 'Ongoing Technical Support',
      description: 'Continuous support from our technical team to ensure your systems run smoothly.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(138,43,226,0.1)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive technology solutions tailored for small nonprofits
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Technology Services
            </h2>
            <p className="text-lg text-gray-400">
              Essential technology infrastructure and support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coreServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-400">
              Extended support to help your organization thrive
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Free Services Notice */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-white">100% Free for Qualifying Nonprofits</h2>
            <p className="text-xl text-blue-100 mb-8">
              All services are provided at no cost to qualifying small nonprofits. Our mission is 
              to remove technology barriers so you can focus on your important work.
            </p>
            <Button href="/get-started" variant="secondary">
              Apply for Services
            </Button>
          </div>
        </div>
      </section>

      {/* Microsoft Partnership */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Microsoft Partnership
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              We're working towards Silver Partner status with Microsoft, which will enable us to 
              provide even more comprehensive services to the nonprofits we serve.
            </p>
            <p className="text-lg text-gray-300">
              This partnership allows us to offer Microsoft 365, Azure, and other cloud services 
              with expert setup, configuration, and ongoing support.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
