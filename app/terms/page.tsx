import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - The Technology Monastery',
  description: 'Terms of service for The Technology Monastery website and services.',
}

export default function TermsPage() {
  return (
    <main id="main-content" className="section">
      <div className="container">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1>Terms of Service</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

          <h2>Agreement to Terms</h2>
          <p>
            By accessing and using The Technology Monastery website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
          </p>

          <h2>Services Description</h2>
          <p>
            The Technology Monastery provides free technology services and support to eligible nonprofit organizations. Services are provided by volunteer "technology monks" and are subject to availability.
          </p>

          <h2>Eligibility</h2>
          <p>Our services are available to:</p>
          <ul>
            <li>Registered 501(c)(3) nonprofit organizations in the United States</li>
            <li>Charitable organizations in other countries with equivalent nonprofit status</li>
            <li>Organizations that align with our mission and values</li>
          </ul>
          <p>
            We reserve the right to decline service to any organization at our discretion.
          </p>

          <h2>No Warranties</h2>
          <p>
            Our services are provided "as is" without warranties of any kind, either express or implied. While we strive to provide high-quality services, we do not guarantee:
          </p>
          <ul>
            <li>Uninterrupted or error-free service</li>
            <li>Specific results or outcomes</li>
            <li>Compatibility with all systems or platforms</li>
          </ul>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, The Technology Monastery shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
          </p>

          <h2>User Responsibilities</h2>
          <p>Organizations receiving our services agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Use services in compliance with all applicable laws</li>
            <li>Maintain the security of any accounts or systems we help establish</li>
            <li>Acknowledge The Technology Monastery in public communications when appropriate</li>
          </ul>

          <h2>Volunteer Services</h2>
          <p>
            Technology monks are independent volunteers. The Technology Monastery is not responsible for the actions or omissions of individual volunteers, though we maintain standards and oversight.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            Unless otherwise specified, solutions and materials we create for your organization become your property. We may retain the right to use general methodologies and non-identifying examples in our work with other organizations.
          </p>

          <h2>Confidentiality</h2>
          <p>
            We respect the confidentiality of information shared with us by nonprofit organizations and will not disclose such information except as required by law or with your permission.
          </p>

          <h2>Termination</h2>
          <p>
            Either party may terminate the service relationship at any time. We reserve the right to discontinue services if we determine an organization is no longer eligible or is misusing our services.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of the jurisdiction where The Technology Monastery is registered, without regard to its conflict of law provisions.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the updated terms on our website.
          </p>

          <h2>Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:info@technologymonastery.org">info@technologymonastery.org</a>
          </p>
        </div>
      </div>
    </main>
  )
}
