// Single source of truth for the site's origin + base path, shared by
// next.config.js (CJS) and lib/site-config.ts (TS re-export).
//
// The CUSTOM_DOMAIN switch selects between the two deploy origins:
//   unset  -> GitHub Pages project URL (today's default):
//             basePath /FFC-EX-technologymonastery.org
//   set    -> custom-domain build (cutover, #726): basePath '',
//             origin https://<CUSTOM_DOMAIN>
// Development always serves from the root.
const repoBase = '/FFC-EX-technologymonastery.org';
const customDomain = process.env.CUSTOM_DOMAIN || '';

const isProd = process.env.NODE_ENV === 'production';
const basePath = customDomain ? '' : isProd ? repoBase : '';
const siteOrigin = customDomain
  ? `https://${customDomain}`
  : `https://freeforcharity.github.io${repoBase}`;

module.exports = { basePath, siteOrigin, customDomain };
