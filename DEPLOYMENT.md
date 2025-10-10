# Deployment Checklist for Technology Monastery Website

This checklist will help you deploy and configure the Technology Monastery website.

## ✅ Initial Setup (Complete)

- [x] Landing page created with responsive design
- [x] Accessibility features implemented (WCAG 2.1 AA)
- [x] SEO optimization complete
- [x] Security headers configured
- [x] GitHub Actions CI/CD workflow created
- [x] Decap CMS configured
- [x] Code committed to repository

## 📋 Next Steps to Deploy

### 1. Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The site will automatically deploy on next push to `main` branch
4. Site will be available at: `https://freeforcharity.github.io/Technologymonastery.org/`

### 2. Setup Cloudflare Pages (Recommended)

#### Option A: Cloudflare Pages Direct Deployment
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Pages** → **Create a project**
3. Connect your GitHub account and select this repository
4. Configure build settings:
   - **Build command**: (leave empty - static site)
   - **Build output directory**: `/`
   - **Root directory**: `/`
5. Click **Save and Deploy**

#### Option B: Cloudflare as CDN for GitHub Pages
1. Add your domain in Cloudflare
2. Point DNS to GitHub Pages
3. Enable **Always Use HTTPS**
4. Configure Zaraz (see below)

### 3. Configure Cloudflare Zaraz (Analytics & Consent)

1. In Cloudflare Dashboard, go to **Zaraz**
2. Click **Get Started** or **Configure**
3. Add your analytics tools:
   - Google Analytics (optional)
   - Facebook Pixel (optional)
   - Custom tracking tools
4. Setup **Consent Management**:
   - Enable consent banner
   - Configure cookie categories
   - Set compliance mode (GDPR, CCPA, etc.)
5. Save configuration

### 4. Setup Custom Domain

1. Purchase domain: `technologymonastery.org`
2. In Cloudflare Pages or GitHub Pages:
   - Add custom domain
   - Configure DNS records
   - Enable HTTPS (automatic with Cloudflare)
3. Update `CNAME` file in repository (if using GitHub Pages)
4. Update all URLs in:
   - `index.html` (canonical URL, Open Graph)
   - `sitemap.xml`
   - `manifest.json`
   - `robots.txt`

### 5. Configure Zeffy Donation Integration

1. Sign up at [zeffy.com](https://www.zeffy.com/)
2. Complete nonprofit verification
3. Create a donation form:
   - Go to **Forms** → **Create Form**
   - Customize donation amounts and fields
   - Get embed code
4. Add to website:
   - Open `index.html`
   - Find `<div id="zeffy-donation-form">`
   - Replace placeholder with Zeffy embed code
5. Update `js/main.js`:
   - Find `initZeffyForm()` function
   - Add your organization ID
6. Test donation flow

### 6. Setup VolunteerMatch Widget

1. Register organization at [volunteermatch.org](https://www.volunteermatch.org/)
2. Complete nonprofit profile
3. Get widget code:
   - Go to organization dashboard
   - Find **Widget** or **Embed** section
   - Copy widget code
4. Add to website:
   - Open `index.html`
   - Find `<div id="volunteer-widget">`
   - Replace placeholder with VolunteerMatch widget
5. Update `js/main.js`:
   - Find `initVolunteerMatchWidget()` function
   - Configure widget settings
6. Test volunteer listings

### 7. Configure Decap CMS Authentication

#### Option A: Using GitHub Backend (Recommended for GitHub Pages)
1. Enable GitHub OAuth:
   - Go to GitHub **Settings** → **Developer settings** → **OAuth Apps**
   - Click **New OAuth App**
   - Application name: "Technology Monastery CMS"
   - Homepage URL: `https://technologymonastery.org`
   - Authorization callback URL: `https://technologymonastery.org/admin/`
2. Get Client ID and Client Secret
3. Update `admin/config.yml` to use GitHub backend directly
4. Add credentials to site configuration

#### Option B: Using Netlify Identity (if using Netlify)
1. Deploy to Netlify (or use Netlify for identity only)
2. Enable Identity in Netlify dashboard
3. Enable Git Gateway
4. Invite CMS users via email

### 8. Add Branding Assets

Create and add the following:

1. **Logo**: 
   - Create logo image
   - Add as `/images/logo.png` (or .svg)
   - Update `index.html` to display logo

2. **Favicon**:
   ```html
   <link rel="icon" type="image/png" href="/images/favicon.png">
   ```

3. **PWA Icons**:
   - Create 192x192px icon → `/images/icon-192.png`
   - Create 512x512px icon → `/images/icon-512.png`
   - Icons should be square with transparent background

4. **Social Media Images**:
   - Create Open Graph image (1200x630px)
   - Add to `index.html` meta tags:
   ```html
   <meta property="og:image" content="https://technologymonastery.org/images/og-image.png">
   ```

### 9. Email Setup

1. Configure email for domain:
   - `info@technologymonastery.org`
   - `privacy@technologymonastery.org`
   - `legal@technologymonastery.org`

2. Update contact email in:
   - `index.html`
   - `privacy.html`
   - `terms.html`
   - `_data/settings.json`

### 10. Analytics & Monitoring

1. **Google Search Console**:
   - Add property for your domain
   - Submit sitemap: `https://technologymonastery.org/sitemap.xml`
   - Verify ownership

2. **Google Analytics** (optional, via Zaraz):
   - Create GA4 property
   - Add tracking ID to Zaraz

3. **Uptime Monitoring**:
   - Use Cloudflare Analytics
   - Or setup external monitoring (UptimeRobot, Pingdom)

### 11. Security Checklist

- [x] Security headers configured in `_headers`
- [x] HTTPS enabled (automatic with Cloudflare/GitHub Pages)
- [x] Content Security Policy configured
- [ ] Review and test CSP (may need adjustments for third-party widgets)
- [ ] Enable DDoS protection in Cloudflare
- [ ] Configure rate limiting if needed
- [ ] Regular security audits

### 12. Testing Checklist

Before going live, test:

- [ ] All internal links work
- [ ] All external links open in new tabs
- [ ] Mobile responsiveness on multiple devices
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Keyboard navigation works
- [ ] Screen reader accessibility
- [ ] Page load speed (Google PageSpeed Insights)
- [ ] SEO (Google Search Console, SEO analyzers)
- [ ] Forms submission (donation, contact)
- [ ] 404 error page (create custom one)

### 13. Content Updates

Use Decap CMS to manage:
1. Access `/admin/` on your site
2. Login with configured authentication
3. Edit sections:
   - Hero text
   - About content
   - Services
   - Impact statistics
4. Add blog posts
5. Create new pages

### 14. Post-Launch

1. **Social Media**:
   - Create accounts (Facebook, Twitter, LinkedIn)
   - Update links in `_data/settings.json`
   - Share launch announcement

2. **Directory Listings**:
   - Submit to nonprofit directories
   - Register with VolunteerMatch
   - Add to Google My Business (if applicable)

3. **Backups**:
   - Git repository is your backup
   - Export CMS content regularly
   - Document custom configurations

4. **Maintenance**:
   - Review analytics monthly
   - Update content regularly
   - Keep dependencies updated
   - Monitor for security issues

## 🆘 Support

If you need help:
- Review documentation in `README.md`
- Check `CONTRIBUTING.md` for development guidelines
- Open an issue on GitHub
- Email: info@technologymonastery.org

## 📊 Success Metrics

Track these KPIs:
- Website visitors
- Donation conversion rate
- Volunteer sign-ups
- Contact form submissions
- Page load speed
- Mobile vs desktop traffic
- Bounce rate

---

**Note**: This checklist assumes you're deploying to production. For staging/testing, create a separate branch and deploy to a test domain first.
