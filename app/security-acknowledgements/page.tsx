import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Security Acknowledgements - The Technology Monastery',
  description: 'Security Acknowledgements for The Technology Monastery website.',
};

export default function SecurityAcknowledgements() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f] py-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(138,43,226,0.1)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Security Acknowledgements
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-gray-300">
            <p className="leading-relaxed">
              The Technology Monastery would like to extend our sincere gratitude to the following
              security researchers for their invaluable contributions in helping us keep our
              platform safe. By responsibly disclosing vulnerabilities, they have played a crucial
              role in protecting our users and our data.
            </p>
            <div className="bg-purple-900/20 border-l-4 border-purple-500/60 p-5 rounded-r-lg">
              <p className="leading-relaxed">
                As of now, we have not received any vulnerability reports that qualify for public
                acknowledgment. This page will be updated to credit researchers as reports are
                submitted and validated according to our policy.
              </p>
            </div>
            <p className="leading-relaxed">
              If you believe you have found a security vulnerability, please refer to our{' '}
              <Link
                href="/vulnerability-disclosure-policy/"
                className="text-purple-400 font-bold underline decoration-dotted hover:decoration-solid transition-all"
              >
                Vulnerability Disclosure Policy
              </Link>{' '}
              for instructions on how to report it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
