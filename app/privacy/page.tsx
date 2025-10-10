import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - The Technology Monastery',
  description: 'Privacy policy for The Technology Monastery website and services.',
}

export default function PrivacyPage() {
  return (
    <main id="main-content" className="section">
      <div className="container">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1>Privacy Policy</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

          <h2>Introduction</h2>
          <p>
            The Technology Monastery ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
          </p>

          <h2>Information We Collect</h2>
          <h3>Information You Provide</h3>
          <p>We may collect information that you provide directly to us, including:</p>
          <ul>
            <li>Name and contact information (email address, phone number)</li>
            <li>Organization name and details</li>
            <li>Messages and inquiries you send to us</li>
            <li>Volunteer application information</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our website, we may automatically collect certain information about your device and browsing activity through cookies and similar technologies, including:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide requested services</li>
            <li>Communicate with you about our services and programs</li>
            <li>Improve our website and services</li>
            <li>Analyze website usage and trends</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
          </p>
          <ul>
            <li>With service providers who help us operate our website and provide services</li>
            <li>When required by law or to protect our rights</li>
            <li>With your explicit consent</li>
          </ul>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to improve your experience on our website. You can control cookies through your browser settings. Analytics are managed through Cloudflare Zaraz.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under 13 years of age. We do not knowingly collect personal information from children under 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:info@technologymonastery.org">info@technologymonastery.org</a>
          </p>
        </div>
      </div>
    </main>
  )
}
