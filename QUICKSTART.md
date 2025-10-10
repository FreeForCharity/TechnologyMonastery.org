# Quick Reference Guide

Common tasks and useful commands for maintaining the Technology Monastery website.

## 🚀 Local Development

### Start Local Server

```bash
# Python (recommended)
python3 -m http.server 8000

# Node.js
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Then open: http://localhost:8000

### Access CMS Locally

1. Start local server
2. Navigate to http://localhost:8000/admin/
3. For local CMS development:
   - Uncomment `local_backend: true` in `admin/config.yml`
   - Run: `npx decap-server` in separate terminal

## 🔧 Maintenance

### Update Content (via CMS)

1. Go to `https://yourdomain.com/admin/`
2. Login with configured credentials
3. Select collection to edit (Hero, About, Services, etc.)
4. Make changes
5. Click "Publish"
6. Changes will be committed to GitHub automatically

### Update Content (Manual)

Edit JSON files in `_data/` directory:
- `_data/settings.json` - Site settings
- `_data/hero.json` - Hero section
- `_data/about.json` - About section
- `_data/services.json` - Services list
- `_data/impact.json` - Impact statistics

### Add Blog Post

Via CMS:
1. Go to `/admin/`
2. Click "Blog Posts" → "New Blog Post"
3. Fill in details
4. Click "Publish"

Manually:
1. Create file in `_posts/YYYY-MM-DD-post-title.md`
2. Add frontmatter:
```markdown
---
title: "Post Title"
date: 2024-01-01
author: "Author Name"
excerpt: "Brief description"
---

Post content here...
```

### Update Donation Form

1. Login to Zeffy dashboard
2. Edit your donation form
3. Copy new embed code
4. Edit `index.html`
5. Replace code in `<div id="zeffy-donation-form">`
6. Test the form

### Update Volunteer Widget

1. Login to VolunteerMatch
2. Get updated widget code
3. Edit `index.html`
4. Replace code in `<div id="volunteer-widget">`
5. Test the widget

## 🎨 Styling Changes

### Update Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #2c5aa0;      /* Main brand color */
    --secondary-color: #5a8fd6;    /* Secondary brand color */
    --accent-color: #f39c12;       /* Accent/CTA color */
    /* etc. */
}
```

### Update Fonts

In `css/styles.css`, modify the `body` font-family:

```css
body {
    font-family: 'Your Font', -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
}
```

Don't forget to add font link in `index.html` `<head>` if using web fonts.

### Adjust Spacing

Modify spacing variables in `css/styles.css`:

```css
:root {
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 3rem;
    --spacing-xl: 4rem;
}
```

## 📊 Analytics

### View Analytics (Cloudflare)

1. Login to Cloudflare Dashboard
2. Select your domain
3. Go to "Analytics & Logs" → "Web Analytics"

### Track Custom Events

Add to `js/main.js`:

```javascript
// Track button click
trackEvent('button_click', {
    button_name: 'Donate Now',
    location: 'hero'
});

// Track form submission
trackEvent('form_submit', {
    form_name: 'contact'
});
```

## 🔒 Security

### Update Security Headers

Edit `_headers` file:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  # Add more headers as needed
```

### Review Content Security Policy

In `_headers`, update CSP if adding new external resources:

```
Content-Security-Policy: default-src 'self'; script-src 'self' https://newdomain.com; ...
```

## 🐛 Troubleshooting

### Site Not Deploying

1. Check GitHub Actions tab for errors
2. Review workflow file: `.github/workflows/deploy.yml`
3. Ensure GitHub Pages is enabled
4. Check branch settings

### CMS Not Loading

1. Check browser console for errors
2. Verify `admin/config.yml` is correct
3. Check authentication setup
4. Test with local backend first

### Widgets Not Showing

1. Check browser console for errors
2. Verify CSP allows the widget domain
3. Test embed code independently
4. Check if organization IDs are correct

### Mobile Menu Not Working

1. Check browser console for JavaScript errors
2. Clear browser cache
3. Test in incognito mode
4. Verify `js/main.js` is loaded correctly

## 📱 Testing

### Test Responsiveness

Use browser DevTools:
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test different screen sizes:
   - Mobile: 375x667 (iPhone)
   - Tablet: 768x1024 (iPad)
   - Desktop: 1920x1080

### Test Accessibility

**Automated Testing:**
- Use axe DevTools browser extension
- Use WAVE browser extension
- Run Lighthouse in Chrome DevTools

**Manual Testing:**
- Navigate with keyboard only (Tab, Shift+Tab, Enter)
- Test with screen reader (NVDA, JAWS, VoiceOver)
- Check color contrast
- Verify alt text on images

### Test Performance

1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit for:
   - Performance
   - Accessibility
   - Best Practices
   - SEO
4. Address any issues

## 🔄 Common Updates

### Add New Service

1. Edit `index.html`
2. Find `<div class="services-grid">`
3. Add new service card:

```html
<article class="service-card">
    <div class="service-icon" aria-hidden="true">🎯</div>
    <h3>Service Title</h3>
    <p>Service description...</p>
</article>
```

### Add New Section

1. Add section in `index.html` after existing sections
2. Use semantic HTML structure
3. Add corresponding styles in `css/styles.css`
4. Update navigation if needed

### Change Contact Email

Update in:
1. `index.html` (Contact section)
2. `privacy.html` (Privacy contact)
3. `terms.html` (Legal contact)
4. `_data/settings.json` (Site settings)
5. `README.md` (Documentation)

## 🚨 Emergency Fixes

### Rollback to Previous Version

```bash
# Find commit to rollback to
git log --oneline

# Revert to specific commit
git revert <commit-hash>

# Push changes
git push origin main
```

### Quick Fix Deployment

```bash
# Make your fix
# Stage changes
git add .

# Commit
git commit -m "Fix: Brief description"

# Push (triggers automatic deployment)
git push origin main
```

## 📞 Support

**Documentation:**
- README.md - General overview
- CONTRIBUTING.md - Development guidelines
- DEPLOYMENT.md - Deployment steps

**Resources:**
- [Decap CMS Docs](https://decapcms.org/docs/)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [GitHub Pages Docs](https://docs.github.com/pages)

**Contact:**
- GitHub Issues: Report bugs and request features
- Email: info@technologymonastery.org
