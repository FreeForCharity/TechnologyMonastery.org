'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/site.config';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Render error:', error);
    }
  }, [error]);

  return (
    <div
      className="pt-[130px] pb-[80px] min-h-[60vh] flex items-center bg-[#0f0a1e]"
      aria-labelledby="error-heading"
    >
      <div className="w-[90%] md:w-[80%] mx-auto text-center">
        <p className="text-sm font-semibold tracking-widest text-red-400 uppercase">
          Something went wrong
        </p>
        <h1 id="error-heading" className="mt-4 text-[34px] md:text-[42px] font-bold text-white">
          We hit an unexpected error
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-300 max-w-[560px] mx-auto">
          You can try the action again, or return to the {siteConfig.name} homepage. If the problem
          persists, please report it via our{' '}
          <Link
            href={siteConfig.vulnerabilityDisclosurePath}
            className="text-purple-400 underline decoration-dotted hover:decoration-solid"
          >
            disclosure form
          </Link>
          .
        </p>
        {error.digest ? (
          <p className="mt-2 text-xs text-gray-500">Reference ID: {error.digest}</p>
        ) : null}
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-purple-500/60 text-purple-300 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
