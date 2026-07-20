// Single source of truth for the GitHub Pages base path + site origin.
// Logic lives in base-path.js so next.config.js (CJS) shares it verbatim
// (next.config.js cannot import this TS module). See base-path.js for the
// CUSTOM_DOMAIN switch semantics (#727 / cutover epic #726).
export { basePath, siteOrigin, customDomain } from './base-path.js';
