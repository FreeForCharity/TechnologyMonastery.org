import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - The Technology Monastery',
  description:
    'The terms and conditions governing use of The Technology Monastery website and services.',
};

export default function TermsOfService() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f] py-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(138,43,226,0.1)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Terms of Service</h1>
            <p className="text-xl text-gray-300">
              <em>Last Updated: 2024</em>
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using the Technology Monastery website, you accept and agree to be
                bound by the terms and provisions of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Use License</h2>
              <p className="leading-relaxed">
                Permission is granted to temporarily download one copy of the materials on
                Technology Monastery&apos;s website for personal, non-commercial transitory viewing
                only.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Disclaimer</h2>
              <p className="leading-relaxed">
                The materials on Technology Monastery&apos;s website are provided on an &apos;as
                is&apos; basis. Technology Monastery makes no warranties, expressed or implied, and
                hereby disclaims and negates all other warranties including, without limitation,
                implied warranties or conditions of merchantability, fitness for a particular
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Limitations</h2>
              <p className="leading-relaxed">
                In no event shall Technology Monastery or its suppliers be liable for any damages
                (including, without limitation, damages for loss of data or profit, or due to
                business interruption) arising out of the use or inability to use the materials on
                Technology Monastery&apos;s website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Service Terms</h2>
              <p className="leading-relaxed mb-3">
                Technology services provided by Technology Monastery to qualifying nonprofits are
                subject to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Eligibility requirements</li>
                <li>Availability of technology monks</li>
                <li>Agreement to our service policies</li>
                <li>Compliance with applicable laws</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Donations</h2>
              <p className="leading-relaxed">
                All donations to Technology Monastery are processed through our secure third-party
                payment processor, Zeffy. Donations are typically tax-deductible to the extent
                allowed by law. Please consult with a tax professional for specific advice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Intellectual Property</h2>
              <p className="leading-relaxed">
                The content, organization, graphics, design, and other matters related to the
                Technology Monastery website are protected under applicable copyrights and other
                proprietary laws. The website source code is licensed under GNU AGPL v3.0.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Links to Third-Party Sites</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites. Technology Monastery is not
                responsible for the content or privacy practices of these sites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Modifications</h2>
              <p className="leading-relaxed">
                Technology Monastery may revise these terms of service at any time without notice.
                By using this website you are agreeing to be bound by the then current version of
                these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Governing Law</h2>
              <p className="leading-relaxed">
                These terms and conditions are governed by and construed in accordance with
                applicable laws, and you irrevocably submit to the exclusive jurisdiction of the
                courts in that location.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Contact Information</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:{' '}
                <a
                  href="mailto:legal@technologymonastery.org"
                  className="text-purple-400 underline hover:text-purple-300 transition"
                >
                  legal@technologymonastery.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
