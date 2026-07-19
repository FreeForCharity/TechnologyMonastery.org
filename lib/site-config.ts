// Single source of truth for the GitHub Pages project base path.
// Must match basePath in next.config.js; empty in development, where
// next dev serves from the domain root.
export const basePath =
  process.env.NODE_ENV === 'production' ? '/FFC-EX-technologymonastery.org' : '';
