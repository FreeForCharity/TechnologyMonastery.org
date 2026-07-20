// Analytics & tracking IDs — the single place to change them.
// Modeled on FFC_Single_Page_Template src/lib/analytics.config.ts.
//
// These are NOT secrets. They are public, client-side identifiers that get
// baked into the static export and are visible in the page source anyway.
// They live here (rather than hardcoded inside components) so the site can
// be pointed at different accounts by editing this one file.
//
// Placeholder values (starting with 'XXXX') leave that integration inert.
export const analyticsConfig = {
  // Google Tag Manager container ID (provisioned for technologymonastery.org).
  gtmId: 'GTM-MM2SXD6R',

  // Google Analytics 4 measurement ID (provisioned for technologymonastery.org).
  gaMeasurementId: 'G-35T2Q27S8L',

  // Meta (Facebook) Pixel ID — not provisioned for this site.
  metaPixelId: 'XXXXXXXXXXXXXXX',

  // Microsoft Clarity project ID — not provisioned for this site.
  clarityProjectId: 'XXXXXXXXXX',
} as const;

/** True when the given ID is a real, provisioned identifier (not a placeholder). */
export function isProvisioned(id: string): boolean {
  return id.length > 0 && !id.startsWith('XXXX');
}
