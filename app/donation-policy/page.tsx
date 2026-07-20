import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donation Policy - The Technology Monastery',
  description: 'Donation Policy for The Technology Monastery website.',
};

export default function DonationPolicy() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f] py-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(138,43,226,0.1)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Donation Policy</h1>
            <p className="text-xl text-gray-300">
              <strong>Effective Date:</strong> January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Tax Deductibility</h2>
              <p className="leading-relaxed">
                The Technology Monastery is a program of Free For Charity, a qualified 501(c)(3)
                nonprofit organization (EIN: 46-2471893). Donations are tax-deductible to the full
                extent allowed by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Use of Donations</h2>
              <p className="leading-relaxed mb-3">
                Donations support our mission to empower small nonprofits with free technology
                solutions by providing:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Free technology consultation and support for nonprofits</li>
                <li>Website building, hosting, and maintenance services</li>
                <li>Volunteer coordination and training</li>
                <li>Administrative costs necessary to operate our programs</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Donation Processing</h2>
              <p className="leading-relaxed">
                Donations are processed securely through our payment partners. You will receive a
                receipt for tax purposes via email after your donation is processed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Refund Policy</h2>
              <p className="leading-relaxed">
                We generally do not provide refunds for donations. However, if you believe an error
                has occurred, please contact us within 30 days of your donation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Privacy</h2>
              <p className="leading-relaxed">
                Donor information is kept confidential and will not be shared with third parties
                except as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Contact Us</h2>
              <p className="leading-relaxed">
                For questions about donations or this policy, please contact us at:{' '}
                <a
                  href="mailto:info@technologymonastery.org"
                  className="text-purple-400 underline hover:text-purple-300 transition"
                >
                  info@technologymonastery.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
