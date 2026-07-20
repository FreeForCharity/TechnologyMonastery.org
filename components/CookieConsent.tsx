'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'ffc-cookie-consent';

type ConsentChoice = 'accepted' | 'declined';

export default function CookieConsent() {
  // Render the banner by default (including in the static export) so it is
  // visible on first load; hide it after hydration if a choice is stored.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      // localStorage unavailable (e.g. blocked); keep the banner visible
    }
    if (stored === 'accepted' || stored === 'declined') {
      document.documentElement.dataset.cookieConsent = stored;
      setVisible(false);
    }
  }, []);

  const handleChoice = (choice: ConsentChoice) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Ignore storage errors; the choice still applies for this page view
    }
    document.documentElement.dataset.cookieConsent = choice;
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-0 inset-x-0 z-50 bg-[#0a0514] border-t border-purple-500/20 text-white shadow-lg"
    >
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300 text-center sm:text-left">
          We use cookies to improve your experience and analyze site usage.{' '}
          <a
            href="/privacy-policy/"
            className="text-purple-400 underline hover:text-purple-300 transition"
          >
            Privacy Policy
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleChoice('accepted')}
            className="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => handleChoice('declined')}
            className="px-4 py-2 rounded-md border border-purple-500/40 text-gray-300 hover:text-white hover:border-purple-400 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
