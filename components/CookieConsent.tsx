'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { analyticsConfig, isProvisioned } from '@/lib/analytics.config';

// Cookie consent banner + preferences modal, aligned with the behavior of
// FFC_Single_Page_Template src/components/cookie-consent and restyled for
// this site's dark/purple aesthetic. Consent is stored as a JSON preferences
// object in localStorage under `cookie-consent` (plus a matching cookie).
// Analytics/marketing scripts load only after the corresponding consent is
// granted; GTM (components/GoogleTagManager.tsx) listens for the
// `ffc-consent-change` CustomEvent dispatched here.
//
// The banner itself is rendered into the static export (initial state is
// visible) so a fresh browser sees it on first load; the mount effect hides
// it when a stored choice exists.

const GA_MEASUREMENT_ID = analyticsConfig.gaMeasurementId;
const META_PIXEL_ID = analyticsConfig.metaPixelId;
const CLARITY_PROJECT_ID = analyticsConfig.clarityProjectId;

interface DataLayerEvent {
  event: string;
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
    openCookiePreferences?: () => void;
  }
}

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = 'cookie-consent';

/**
 * Read the raw stored consent JSON, preferring localStorage and falling back
 * to the `cookie-consent` cookie (consent is persisted to both; localStorage
 * may be unavailable or cleared while the cookie persists).
 */
export function readStoredConsentRaw(): string | null {
  try {
    const fromStorage = window.localStorage.getItem(STORAGE_KEY);
    if (fromStorage) return fromStorage;
  } catch {
    // localStorage unavailable — fall through to the cookie.
  }
  const match = document.cookie
    .split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${STORAGE_KEY}=`));
  if (!match) return null;
  try {
    return decodeURIComponent(match.slice(STORAGE_KEY.length + 1));
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  // Visible by default so the banner is part of the prerendered HTML.
  const [showBanner, setShowBanner] = useState(true);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be changed
    functional: true, // Always true, cannot be changed
    analytics: false,
    marketing: false,
  });
  const [savedPreferencesBackup, setSavedPreferencesBackup] =
    useState<CookiePreferences>(preferences);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const loadGoogleAnalytics = useCallback(() => {
    if (
      isProvisioned(GA_MEASUREMENT_ID) &&
      typeof window !== 'undefined' &&
      !document.querySelector('script[src*="googletagmanager.com/gtag"]')
    ) {
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(gaScript);

      const gaConfigScript = document.createElement('script');
      const secureFlag = window.location.protocol === 'https:' ? ';Secure' : '';
      gaConfigScript.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          'anonymize_ip': true,
          'cookie_flags': 'SameSite=Lax${secureFlag}'
        });
      `;
      document.head.appendChild(gaConfigScript);
    }
  }, []);

  const loadMetaPixel = useCallback(() => {
    if (
      isProvisioned(META_PIXEL_ID) &&
      typeof window !== 'undefined' &&
      !document.querySelector('script[src*="fbevents.js"]')
    ) {
      const fbScript = document.createElement('script');
      fbScript.textContent = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${META_PIXEL_ID}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(fbScript);
    }
  }, []);

  const loadMicrosoftClarity = useCallback(() => {
    if (
      isProvisioned(CLARITY_PROJECT_ID) &&
      typeof window !== 'undefined' &&
      !document.querySelector('script[src*="clarity.ms"]')
    ) {
      const clarityScript = document.createElement('script');
      clarityScript.textContent = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
      `;
      document.head.appendChild(clarityScript);
    }
  }, []);

  const deleteAnalyticsCookies = useCallback(() => {
    const cookiesToDelete = ['_ga', '_gid', '_fbp', 'fr', '_clck', '_clsk'];
    cookiesToDelete.forEach((name) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
    });
    document.cookie.split(';').forEach((cookie) => {
      const cookieName = cookie.split('=')[0].trim();
      if (cookieName.startsWith('_ga_')) {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
      }
    });
  }, []);

  const applyConsent = useCallback(
    (prefs: CookiePreferences, previousPrefs?: CookiePreferences) => {
      const cookieValue = JSON.stringify(prefs);
      const secureFlag = window.location.protocol === 'https:' ? '; Secure' : '';
      document.cookie = `${STORAGE_KEY}=${encodeURIComponent(cookieValue)}; path=/; max-age=31536000; SameSite=Lax${secureFlag}`;

      if (previousPrefs) {
        if (
          (previousPrefs.analytics && !prefs.analytics) ||
          (previousPrefs.marketing && !prefs.marketing)
        ) {
          deleteAnalyticsCookies();
        }
      }

      // Expose the coarse choice for styling/other scripts. "accepted" when
      // any tracking category (analytics or marketing) is granted.
      document.documentElement.dataset.cookieConsent =
        prefs.analytics || prefs.marketing ? 'accepted' : 'declined';

      // GA4 documented opt-out flag: prevents an already-loaded gtag.js from
      // recreating cookies or sending further hits after withdrawal.
      if (isProvisioned(GA_MEASUREMENT_ID)) {
        (window as unknown as Record<string, boolean>)[`ga-disable-${GA_MEASUREMENT_ID}`] =
          !prefs.analytics;
      }

      // Push consent update to the GTM dataLayer.
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'consent_update',
        functional_consent: prefs.functional ? 'granted' : 'denied',
        analytics_consent: prefs.analytics ? 'granted' : 'denied',
        marketing_consent: prefs.marketing ? 'granted' : 'denied',
      });

      // Signal the consent-gated GTM loader (components/GoogleTagManager.tsx).
      window.dispatchEvent(
        new CustomEvent('ffc-consent-change', {
          detail: { analytics: prefs.analytics, marketing: prefs.marketing },
        })
      );

      if (prefs.analytics) {
        // Direct gtag.js load alongside the GTM container mirrors the FFC
        // template architecture (cookie-consent loads gtag; GTM is the tag
        // management umbrella). The FFC-provisioned GTM container does not
        // duplicate the GA4 page_view tag, so this does not double-count.
        loadGoogleAnalytics();
        loadMicrosoftClarity();
      }
      if (prefs.marketing) {
        loadMetaPixel();
      }
    },
    [deleteAnalyticsCookies, loadGoogleAnalytics, loadMetaPixel, loadMicrosoftClarity]
  );

  const loadPreferencesFromLocalStorage = useCallback(
    (hideBannerIfPresent = true) => {
      try {
        const consent = readStoredConsentRaw();
        if (!consent) return;
        let savedPreferences: CookiePreferences;
        try {
          savedPreferences = JSON.parse(consent);
        } catch {
          return;
        }
        if (
          typeof savedPreferences === 'object' &&
          savedPreferences !== null &&
          typeof savedPreferences.necessary === 'boolean' &&
          typeof savedPreferences.analytics === 'boolean' &&
          typeof savedPreferences.marketing === 'boolean'
        ) {
          const updatedPreferences: CookiePreferences = {
            ...savedPreferences,
            // Necessary and functional are always-on; force them true even if
            // the stored JSON was tampered with.
            necessary: true,
            functional: true,
          };
          setPreferences(updatedPreferences);
          setSavedPreferencesBackup(updatedPreferences);
          applyConsent(updatedPreferences);
          if (hideBannerIfPresent) setShowBanner(false);
        }
      } catch {
        // localStorage unavailable — keep the banner visible.
      }
    },
    [applyConsent]
  );

  const handleCancelPreferences = useCallback(() => {
    setPreferences(savedPreferencesBackup);
    setShowPreferences(false);
    // If the modal was reopened via window.openCookiePreferences() and the
    // visitor already has a stored choice, return to the hidden steady state
    // instead of re-showing the banner.
    if (readStoredConsentRaw()) {
      setShowBanner(false);
    }
  }, [savedPreferencesBackup]);

  useEffect(() => {
    window.openCookiePreferences = () => {
      setShowBanner(true);
      setShowPreferences(true);
      loadPreferencesFromLocalStorage(false);
    };
    loadPreferencesFromLocalStorage(true);
    return () => {
      delete window.openCookiePreferences;
    };
  }, [loadPreferencesFromLocalStorage]);

  // Focus management for the preferences modal.
  useEffect(() => {
    if (showPreferences && modalRef.current) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
      const handleKeydown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleCancelPreferences();
          return;
        }
        // Trap focus within the dialog while it is open.
        if (e.key === 'Tab' && modalRef.current) {
          const focusable = modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          const active = document.activeElement;
          if (e.shiftKey) {
            if (active === first || !modalRef.current.contains(active)) {
              e.preventDefault();
              last.focus();
            }
          } else if (active === last || !modalRef.current.contains(active)) {
            e.preventDefault();
            first.focus();
          }
        }
      };
      document.addEventListener('keydown', handleKeydown);
      return () => {
        document.removeEventListener('keydown', handleKeydown);
        if (previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
      };
    }
  }, [showPreferences, handleCancelPreferences]);

  const persist = (prefs: CookiePreferences) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch (e) {
      console.warn('Unable to save preferences to localStorage:', e);
    }
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    persist(allAccepted);
    applyConsent(allAccepted, savedPreferencesBackup);
    setSavedPreferencesBackup(allAccepted);
    setShowBanner(false);
  };

  const handleDeclineAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(onlyNecessary);
    persist(onlyNecessary);
    deleteAnalyticsCookies();
    applyConsent(onlyNecessary, savedPreferencesBackup);
    setSavedPreferencesBackup(onlyNecessary);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    persist(preferences);
    applyConsent(preferences, savedPreferencesBackup);
    setSavedPreferencesBackup(preferences);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleShowPreferences = () => {
    setSavedPreferencesBackup(preferences);
    setShowPreferences(true);
  };

  if (!showBanner) {
    return null;
  }

  if (showPreferences) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-preferences-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleCancelPreferences();
          }
        }}
      >
        <div
          ref={modalRef}
          className="bg-[#0f0a1e] border border-purple-500/30 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6">
            <h2 id="cookie-preferences-title" className="text-2xl font-bold text-white mb-4">
              Cookie Preferences
            </h2>
            <p className="text-gray-300 mb-6">
              We use cookies to enhance your browsing experience and analyze our traffic. You can
              choose which types of cookies you allow.
            </p>

            {/* Necessary Cookies */}
            <div className="mb-6 p-4 bg-purple-900/20 border border-purple-500/20 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">Necessary Cookies</h3>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    aria-label="Necessary cookies (always active)"
                    className="w-5 h-5 text-purple-600 bg-gray-500 rounded cursor-not-allowed"
                  />
                  <span className="ml-2 text-sm text-gray-400">Always Active</span>
                </div>
              </div>
              <p className="text-sm text-gray-300">
                These cookies are essential for the website to function properly. They enable basic
                features like page navigation and storing your cookie consent preferences.
              </p>
            </div>

            {/* Functional Cookies */}
            <div className="mb-6 p-4 bg-purple-900/20 border border-purple-500/20 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">Functional Cookies</h3>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    disabled
                    aria-label="Functional cookies (always active)"
                    className="w-5 h-5 text-purple-600 bg-gray-500 rounded cursor-not-allowed"
                  />
                  <span className="ml-2 text-sm text-gray-400">Always Active</span>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-2">
                These cookies enable enhanced functionality that is essential for our core
                services, such as donation processing.
              </p>
              <p className="text-xs text-gray-400">Services: Zeffy (Donation Processing)</p>
            </div>

            {/* Analytics Cookies */}
            <div className="mb-6 p-4 bg-purple-900/20 border border-purple-500/20 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">Analytics Cookies</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences({ ...preferences, analytics: e.target.checked })
                    }
                    className="sr-only peer"
                    aria-label="Enable analytics cookies"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-400/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
              <p className="text-sm text-gray-300 mb-2">
                These cookies help us understand how visitors interact with our website by
                collecting and reporting information anonymously.
              </p>
              <p className="text-xs text-gray-400">
                Services: Google Tag Manager, Google Analytics
              </p>
            </div>

            {/* Marketing Cookies */}
            <div className="mb-6 p-4 bg-purple-900/20 border border-purple-500/20 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">Marketing Cookies</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) =>
                      setPreferences({ ...preferences, marketing: e.target.checked })
                    }
                    className="sr-only peer"
                    aria-label="Enable marketing cookies"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-400/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
              <p className="text-sm text-gray-300 mb-2">
                These cookies are used to track visitors across websites to display relevant and
                engaging content. No marketing services are currently active on this site.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                onClick={handleSavePreferences}
                className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-500 transition-colors"
              >
                Save Preferences
              </button>
              <button
                onClick={handleCancelPreferences}
                className="flex-1 px-6 py-3 bg-transparent border border-purple-500/40 text-gray-300 rounded-lg font-semibold hover:text-white hover:border-purple-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0514] border-t border-purple-500/30 shadow-2xl"
      role="region"
      aria-label="Cookie consent notice"
    >
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-2">We Value Your Privacy</h3>
            <p className="text-sm text-gray-300 mb-3">
              We use cookies to improve your experience and analyze site usage. By clicking
              &quot;Accept All&quot;, you consent to our use of cookies for analytics and
              marketing purposes. You can manage your preferences or decline non-essential
              cookies.
            </p>
            <div className="flex items-center gap-4 text-xs">
              <Link
                href="/privacy-policy/"
                className="text-purple-400 underline hover:text-purple-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookie-policy/"
                className="text-purple-400 underline hover:text-purple-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <button
              onClick={handleDeclineAll}
              className="px-6 py-2.5 bg-transparent border border-purple-500/40 text-gray-300 rounded-lg font-semibold hover:text-white hover:border-purple-400 transition-colors text-sm whitespace-nowrap"
            >
              Decline All
            </button>
            <button
              onClick={handleShowPreferences}
              className="px-6 py-2.5 bg-transparent border border-purple-500/40 text-gray-300 rounded-lg font-semibold hover:text-white hover:border-purple-400 transition-colors text-sm whitespace-nowrap"
            >
              Customize
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-500 transition-colors text-sm whitespace-nowrap"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
