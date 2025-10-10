# Technology Monastery Website

[![Deploy to GitHub Pages](https://github.com/FreeForCharity/Technologymonastery.org/actions/workflows/deploy.yml/badge.svg)](https://github.com/FreeForCharity/Technologymonastery.org/actions/workflows/deploy.yml)

Official website for The Technology Monastery - Empowering small nonprofits with free technology solutions through our dedicated community of technology monks.

## 🌟 Features

- **Modern Responsive Design**: Mobile-first approach with accessibility (WCAG) compliance
- **Static Site**: Fast, secure, and easy to host on GitHub Pages
- **Headless CMS**: Decap CMS for content management
- **SEO Optimized**: Structured data, meta tags, and sitemap
- **Performance Optimized**: Lazy loading, efficient CSS/JS
- **Security Headers**: Configured for maximum security
- **Analytics**: Cloudflare Zaraz for script and consent management
- **Integrations**: 
  - Zeffy donation forms (100% free processing)
  - VolunteerMatch widgets

## 🚀 Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/FreeForCharity/Technologymonastery.org.git
cd Technologymonastery.org
```

2. Start a local server:
```bash
# Using Python 3
python3 -m http.server 8000

# Or using Node.js
npx http-server -p 8000
```

3. Open your browser to `http://localhost:8000`

### Content Management

Access the CMS at `/admin/` (e.g., `http://localhost:8000/admin/`)

**Note**: For local CMS development, you'll need to:
1. Enable local backend in `admin/config.yml`
2. Run `npx decap-server` in a separate terminal

## 📁 Project Structure

```
.
├── index.html              # Main landing page
├── privacy.html           # Privacy policy
├── terms.html             # Terms of service
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   └── main.js            # Main JavaScript
├── admin/
│   ├── index.html         # CMS admin interface
│   └── config.yml         # CMS configuration
├── _headers               # Security headers for Cloudflare
├── robots.txt             # SEO crawler instructions
├── sitemap.xml           # Site structure for search engines
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Actions CI/CD
```

## 🔧 Configuration

### Cloudflare Setup

1. **Pages Deployment**:
   - Connect your GitHub repository to Cloudflare Pages
   - Build command: None (static site)
   - Build output directory: `/`

2. **Zaraz (Analytics & Consent)**:
   - Go to Cloudflare Dashboard > Zaraz
   - Configure your tracking tools
   - Set up consent management

3. **Custom Domain**:
   - Add `technologymonastery.org` in Cloudflare Pages
   - Configure DNS settings

### Decap CMS Setup

1. **Enable GitHub OAuth**:
   - Go to GitHub Settings > Developer Settings > OAuth Apps
   - Create a new OAuth app
   - Set Homepage URL to your site
   - Set Authorization callback URL to `https://api.netlify.com/auth/done`

2. **Configure Git Gateway** (if using Netlify Identity):
   - Alternative: Use GitHub backend directly

### Third-Party Integrations

#### Zeffy Donation Form
1. Sign up at [zeffy.com](https://www.zeffy.com)
2. Create a donation form
3. Get embed code
4. Add to `index.html` in the `#zeffy-donation-form` section
5. Update `js/main.js` with your organization ID

#### VolunteerMatch Widget
1. Register at [volunteermatch.org](https://www.volunteermatch.org)
2. Get your organization's widget code
3. Add to `index.html` in the `#volunteer-widget` section

## 🛠️ Development

### Linting

```bash
# Install dependencies
npm install

# Lint CSS
npm run lint:css

# Lint JavaScript
npm run lint:js

# Lint all
npm run lint
```

### Validation

```bash
# Validate HTML
npm run validate
```

## 🚢 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

1. Enable GitHub Pages in repository settings
2. Set source to GitHub Actions
3. Push to `main` branch
4. GitHub Actions will build and deploy

## 🔒 Security

- Security headers configured in `_headers`
- Content Security Policy (CSP) enabled
- HTTPS enforced
- Regular dependency updates recommended

## ♿ Accessibility

- WCAG 2.1 Level AA compliance
- Semantic HTML5
- ARIA labels where appropriate
- Keyboard navigation support
- Skip links for screen readers
- High contrast mode support
- Reduced motion support

## 📊 Performance

- Minimal dependencies (vanilla JavaScript)
- Lazy loading for images
- Optimized CSS with CSS variables
- Efficient animations
- Fast load times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the GNU Affero General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

The Technology Monastery
- Website: [technologymonastery.org](https://technologymonastery.org)
- Email: info@technologymonastery.org

## 🙏 Acknowledgments

- Built for nonprofit organizations
- Powered by open-source technology
- Hosted on GitHub Pages
- CDN by Cloudflare
- Donation processing by Zeffy
- Volunteer matching by VolunteerMatch