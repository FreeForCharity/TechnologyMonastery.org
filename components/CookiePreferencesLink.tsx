'use client';

// Small footer link that reopens the cookie preferences modal so visitors
// can change their consent choice at any time (consent compliance).
// CookieConsent exposes window.openCookiePreferences on mount.
export default function CookiePreferencesLink() {
  return (
    <button
      type="button"
      onClick={() => window.openCookiePreferences?.()}
      className="underline text-gray-400 hover:text-purple-400 transition-colors"
    >
      Cookie Preferences
    </button>
  );
}
