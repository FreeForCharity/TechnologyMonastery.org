import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'The Technology Monastery - Free Technology Solutions for Nonprofits',
  description: 'Empowering small nonprofits with free, customized technology solutions through our dedicated community of technology monks.',
  keywords: 'nonprofit technology, technology monks, free technology services, Microsoft 365 for nonprofits, charity technology',
  authors: [{ name: 'The Technology Monastery' }],
  openGraph: {
    type: 'website',
    url: 'https://technologymonastery.org',
    title: 'The Technology Monastery - Free Technology Solutions for Nonprofits',
    description: 'Empowering small nonprofits with free, customized technology solutions through our dedicated community of technology monks.',
    siteName: 'The Technology Monastery',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Technology Monastery - Free Technology Solutions for Nonprofits',
    description: 'Empowering small nonprofits with free, customized technology solutions through our dedicated community of technology monks.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Cloudflare Zaraz Analytics - Configure in Cloudflare Dashboard */}
        {/* 
          To configure Cloudflare Zaraz:
          1. Go to Cloudflare Dashboard > Zaraz
          2. Add your tracking tools (Google Analytics, etc.)
          3. Configure consent management
          4. Scripts will be automatically injected by Cloudflare
        */}
      </head>
      <body className="antialiased font-sans">
        <Header />
        {children}
        <Footer />
        
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-500 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
      </body>
    </html>
  )
}
