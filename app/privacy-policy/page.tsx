import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - The Technology Monastery',
  description:
    'How The Technology Monastery collects, uses, and safeguards your information when you visit our website.',
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f] py-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(138,43,226,0.1)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Privacy Policy</h1>
            <p className="text-xl text-gray-300">
              <em>Last Updated: 2024</em>
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Introduction</h2>
              <p className="leading-relaxed">
                The Technology Monastery (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
                committed to protecting your privacy. This Privacy Policy explains how we collect,
                use, and safeguard your information when you visit our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Information We Collect</h2>
              <p className="leading-relaxed mb-3">
                We may collect information about your visit to our website, including:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Browser type and version</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>General location data (country/region)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">How We Use Your Information</h2>
              <p className="leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Improve our website and services</li>
                <li>Understand how visitors use our site</li>
                <li>Communicate with you about our programs</li>
                <li>Process donations (if applicable)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Third-Party Services</h2>
              <p className="leading-relaxed mb-3">We use the following third-party services:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-white">Cloudflare:</strong> For website hosting and
                  security
                </li>
                <li>
                  <strong className="text-white">Zeffy:</strong> For donation processing
                </li>
                <li>
                  <strong className="text-white">VolunteerMatch:</strong> For volunteer opportunity
                  listings
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Cookies and Tracking</h2>
              <p className="leading-relaxed">
                We use Cloudflare Zaraz for managing scripts and obtaining user consent for cookies.
                You can control cookie preferences through your browser settings or our cookie
                consent banner.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your
                personal information. However, no method of transmission over the Internet is 100%
                secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Your Rights</h2>
              <p className="leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:{' '}
                <a
                  href="mailto:privacy@technologymonastery.org"
                  className="text-purple-400 underline hover:text-purple-300 transition"
                >
                  privacy@technologymonastery.org
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new policy on this page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
