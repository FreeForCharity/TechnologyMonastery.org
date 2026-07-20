// Post-build origin fixup (#727): makes the exported artifact honest about
// the origin it will serve from.
// - Rewrites out/sitemap.xml URLs to the active origin (the committed
//   sitemap historically hardcoded the apex even for project-URL deploys).
// - Emits out/CNAME only for custom-domain builds, so project-URL deploys
//   never carry a domain claim.
// - Mirrors public/.well-known into out/ — Next's static export skips
//   dot-directories in public/, which 404'd the canonical RFC 9116
//   security.txt location (#53).
import { readFileSync, writeFileSync, existsSync, cpSync } from 'node:fs';
import { basePath, siteOrigin, customDomain } from '../lib/base-path.js';

const sitemapPath = 'out/sitemap.xml';
if (existsSync(sitemapPath)) {
  const sm = readFileSync(sitemapPath, 'utf8');
  const rewritten = sm.replace(/https:\/\/[^<\s]*?(\/[^<\s]*)?(?=<\/loc>)/g, (full) => {
    const path = full.replace(/^https:\/\/[^/]+/, '').replace(/^\/FFC-EX-technologymonastery\.org/, '');
    return `${siteOrigin}${path}`;
  });
  writeFileSync(sitemapPath, rewritten);
  console.log(`sitemap.xml origin -> ${siteOrigin}`);
}

if (existsSync('public/.well-known')) {
  cpSync('public/.well-known', 'out/.well-known', { recursive: true });
  console.log('.well-known mirrored into out/');
}

if (customDomain) {
  writeFileSync('out/CNAME', `${customDomain}\n`);
  console.log(`CNAME emitted: ${customDomain}`);
} else {
  console.log('project-URL build: no CNAME emitted');
}
console.log(`basePath='${basePath}'`);
