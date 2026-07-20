import Link from 'next/link';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'Page Not Found - The Technology Monastery',
  description: `The page you requested could not be found on ${siteConfig.name}.`,
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div
      className="pt-[130px] pb-[80px] min-h-[60vh] flex items-center bg-[#0f0a1e]"
      aria-labelledby="not-found-heading"
    >
      <div className="w-[90%] md:w-[80%] mx-auto text-center">
        <p className="text-sm font-semibold tracking-widest text-purple-400 uppercase">404</p>
        <h1
          id="not-found-heading"
          className="mt-4 text-[34px] md:text-[42px] font-bold text-white"
        >
          We can&apos;t find that page
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-300 max-w-[560px] mx-auto">
          The link you followed may be broken, or the page may have been moved. Head back to the
          homepage to keep exploring {siteConfig.name}.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Go to homepage
          </Link>
          <Link
            href={siteConfig.vulnerabilityDisclosurePath}
            className="inline-flex items-center justify-center border border-purple-500/60 text-purple-300 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Report an issue
          </Link>
        </div>
      </div>
    </div>
  );
}
