import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'The Technology Monastery - Free Technology Solutions for Nonprofits',
  description: 'Empowering small nonprofits with free, customized technology solutions through our dedicated community of technology monks.',
  keywords: ['nonprofit technology', 'technology monks', 'free technology services', 'Microsoft 365 for nonprofits', 'charity technology'],
  authors: [{ name: 'The Technology Monastery' }],
  openGraph: {
    type: 'website',
    url: 'https://technologymonastery.org/',
    title: 'The Technology Monastery - Free Technology Solutions for Nonprofits',
    description: 'Empowering small nonprofits with free, customized technology solutions through our dedicated community of technology monks.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/Technologymonastery.org/manifest.json" />
        <meta name="theme-color" content="#2c5aa0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'The Technology Monastery',
              description: 'Empowering small nonprofits with free technology solutions',
              url: 'https://technologymonastery.org',
              logo: 'https://technologymonastery.org/images/logo.png',
              sameAs: [],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'General Inquiries',
                email: 'info@technologymonastery.org',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white px-4 py-2 z-50">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
