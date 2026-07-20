'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { analyticsConfig, isProvisioned } from '@/lib/analytics.config';
import { readStoredConsentRaw } from '@/components/CookieConsent';

// Google Tag Manager integration, ported from FFC_Single_Page_Template
// src/components/google-tag-manager. One deliberate difference from the
// template: GTM here is CONSENT-GATED. The container only loads after the
// visitor grants analytics consent in the cookie banner (CookieConsent
// signals via the `ffc-consent-change` CustomEvent and persists the choice
// in the `cookie-consent` localStorage entry).
//
// The template's noscript iframe fallback is intentionally omitted: without
// JavaScript the consent banner cannot collect a choice, so loading the
// noscript tracking iframe would bypass consent.
const GTM_ID = analyticsConfig.gtmId;

export type ConsentChangeDetail = {
  analytics: boolean;
  marketing: boolean;
};

function hasStoredAnalyticsConsent(): boolean {
  try {
    // Reads localStorage with a cookie fallback (consent persists to both).
    const raw = readStoredConsentRaw();
    if (!raw) return false;
    const prefs = JSON.parse(raw) as { analytics?: boolean };
    return prefs.analytics === true;
  } catch {
    return false;
  }
}

export default function GoogleTagManager() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!isProvisioned(GTM_ID)) return;
    if (hasStoredAnalyticsConsent()) {
      setEnabled(true);
    }
    const onConsentChange = (event: Event) => {
      const detail = (event as CustomEvent<ConsentChangeDetail>).detail;
      // Track the LATEST consent value: if consent is withdrawn before the
      // GTM script has actually executed, this prevents it from loading at
      // all. An already-running container cannot be unloaded — for that case
      // CookieConsent deletes analytics cookies and pushes a consent_update
      // event so GTM tags stop firing.
      setEnabled(detail?.analytics === true);
    };
    window.addEventListener('ffc-consent-change', onConsentChange);
    return () => window.removeEventListener('ffc-consent-change', onConsentChange);
  }, []);

  if (!enabled || !isProvisioned(GTM_ID)) {
    return null;
  }

  return (
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `,
      }}
    />
  );
}
