import { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'About Us - The Technology Monastery',
  description: 'Learn about The Technology Monastery, our mission, and our programs for empowering nonprofits.',
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(138,43,226,0.1)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About The Technology Monastery</h1>
            <p className="text-xl text-gray-300">
              A unique, innovative solution for small nonprofits
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Our Mission
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                The Technology Monastery is designed to address the challenges faced by small nonprofits 
                in acquiring and retaining technical talent. We understand that many nonprofits struggle 
                to afford competitive salaries for skilled technology professionals, which can hinder 
                their ability to leverage technology for social impact.
              </p>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                Our solution brings together technology professionals who are passionate about making 
                a difference with nonprofits that need their expertise. By providing tailored technology 
                solutions and support through a dedicated community of skilled professionals, we empower 
                small nonprofits to harness the potential of technology.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We believe that every nonprofit, regardless of size or budget, deserves access to 
                high-quality technology support. Through The Technology Monastery, we make this vision 
                a reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Program */}
      <section className="py-16 bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Our Team & Approach
            </h2>
            <p className="text-lg text-gray-300 mb-8 text-center">
              We are skilled professionals who have chosen to dedicate our talents 
              to serving the nonprofit sector.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">For Technology Professionals</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 font-bold">✓</span>
                    <span>A supportive community of like-minded professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 font-bold">✓</span>
                    <span>Ongoing training and professional development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 font-bold">✓</span>
                    <span>Opportunities for personal and professional growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 font-bold">✓</span>
                    <span>The satisfaction of contributing expertise to meaningful causes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 font-bold">✓</span>
                    <span>Collaborative environment for sharing ideas and innovation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">For Nonprofits</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2 font-bold">✓</span>
                    <span>Access to skilled technology professionals at no cost</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2 font-bold">✓</span>
                    <span>Customized solutions tailored to specific needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2 font-bold">✓</span>
                    <span>Ongoing support and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2 font-bold">✓</span>
                    <span>Training and knowledge transfer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2 font-bold">✓</span>
                    <span>Partnership with technology experts committed to social impact</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free for Charity Connection */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Free for Charity Connection
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              The Technology Monastery is a program of Free for Charity, a nonprofit organization 
              dedicated to supporting other nonprofits through free services and resources.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              This connection ensures that we operate with the same values of transparency, 
              accountability, and service that we help other nonprofits achieve.
            </p>
            <a
              href="https://freeforcharity.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 shadow-lg shadow-purple-500/50"
            >
              Learn More About Free for Charity
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Join Our Community
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're a nonprofit in need of technology support or a professional looking to 
            make a difference, we invite you to be part of our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/get-started" variant="secondary">
              Get Started
            </Button>
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
