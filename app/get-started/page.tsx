import { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Get Started - The Technology Monastery',
  description: 'Start your journey with The Technology Monastery. Learn about our intake process and how to apply for free technology services.',
};

export default function GetStarted() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(138,43,226,0.1)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get Started</h1>
            <p className="text-xl text-gray-300">
              Begin your journey with free technology support
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Are You Eligible?
            </h2>
            <p className="text-lg text-gray-300 mb-8 text-center">
              Our services are designed for small nonprofits. You may be eligible if:
            </p>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 md:p-8 mb-8">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 font-bold text-xl">✓</span>
                  <span className="text-lg">You are a registered 501(c)(3) nonprofit organization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 font-bold text-xl">✓</span>
                  <span className="text-lg">Your organization has a limited technology budget</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 font-bold text-xl">✓</span>
                  <span className="text-lg">You need technology support to further your mission</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 font-bold text-xl">✓</span>
                  <span className="text-lg">You're committed to working with our dedicated team</span>
                </li>
              </ul>
            </div>

            <p className="text-center text-gray-400">
              Don't meet all criteria? Contact us anyway - we may still be able to help!
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Our Intake Process
            </h2>
            
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg shadow-purple-500/50">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Initial Contact</h3>
                  <p className="text-lg text-gray-300">
                    Reach out to us via our contact form or email at{' '}
                    <a href="mailto:info@technologymonastery.org" className="text-purple-400 hover:underline">
                      info@technologymonastery.org
                    </a>
                    . Tell us about your organization and what technology challenges you're facing.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg shadow-purple-500/50">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Discovery Call</h3>
                  <p className="text-lg text-gray-300">
                    We'll schedule a call to learn more about your organization, your current technology 
                    setup, and your goals. This helps us understand how we can best support you.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg shadow-purple-500/50">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Needs Assessment</h3>
                  <p className="text-lg text-gray-300">
                    Our technical team will conduct a comprehensive needs assessment to identify 
                    the best solutions for your organization. This includes reviewing your current 
                    systems and future requirements.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg shadow-purple-500/50">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Service Proposal</h3>
                  <p className="text-lg text-gray-300">
                    We'll create a customized service proposal outlining the technology solutions 
                    we recommend, the implementation timeline, and ongoing support plan.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg shadow-purple-500/50">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Implementation & Support</h3>
                  <p className="text-lg text-gray-300">
                    Once approved, our technical team will begin implementing your solutions. 
                    We'll provide training for your team and ongoing support to ensure success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Prepare */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              What to Prepare
            </h2>
            <p className="text-lg text-gray-300 mb-8 text-center">
              To help us serve you better, please have the following information ready:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Organization Details</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Legal nonprofit name and EIN</li>
                  <li>• Mission statement</li>
                  <li>• Number of staff and volunteers</li>
                  <li>• Current annual budget</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Technology Information</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Current technology systems in use</li>
                  <li>• Specific challenges you're facing</li>
                  <li>• Technology goals and priorities</li>
                  <li>• Any existing technical documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Technology?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step toward free, professional technology support for your nonprofit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary">
              Contact Us Today
            </Button>
            <Button href="/services" variant="primary">
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
