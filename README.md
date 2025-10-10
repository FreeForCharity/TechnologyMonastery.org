# Technology Monastery Website

[![Deploy to GitHub Pages](https://github.com/FreeForCharity/Technologymonastery.org/actions/workflows/deploy.yml/badge.svg)](https://github.com/FreeForCharity/Technologymonastery.org/actions/workflows/deploy.yml)

Official website for The Technology Monastery - Empowering small nonprofits with free technology solutions through our dedicated community of technology monks.

Built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## 🌟 Features

- **Modern Stack**: Next.js 15 with App Router and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Static Export**: Optimized for GitHub Pages deployment
- **Headless CMS**: Decap CMS for easy content management
- **SEO Optimized**: Built-in metadata and structured data
- **Performance**: Fast loading with static site generation
- **Accessibility**: WCAG 2.1 AA compliant
- **Analytics**: Cloudflare Zaraz integration ready
- **Integrations**: 
  - Zeffy donation forms (100% free processing)
  - VolunteerMatch widgets for volunteer recruitment

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x or later
- npm 9.x or later

### Installation

```bash
# Clone the repository
git clone https://github.com/FreeForCharity/Technologymonastery.org.git
cd Technologymonastery.org

# Install dependencies
npm install

# Run development server
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

## 📁 Project Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page  
│   ├── get-started/       # Get Started page
│   ├── privacy/           # Privacy policy
│   ├── services/          # Services page
│   ├── terms/             # Terms of service
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── Button.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── ServiceCard.tsx
├── public/                # Static assets
│   ├── admin/             # Decap CMS
│   │   ├── config.yml
│   │   └── index.html
│   └── .nojekyll          # GitHub Pages config
├── .github/
│   └── workflows/
│       └── deploy.yml     # Automated deployment
└── Documentation files
```

## 🔧 Configuration

### Technology Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **CMS**: Decap CMS
- **Deployment**: GitHub Pages
- **Analytics**: Cloudflare Zaraz

### Third-Party Integrations

See [INTEGRATIONS.md](INTEGRATIONS.md) for detailed setup instructions:

- **Zeffy**: 100% free donation processing
- **VolunteerMatch**: Volunteer recruitment
- **Cloudflare Zaraz**: Analytics and consent management
- **Decap CMS**: Content management system

## 🛠️ Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Lint code
npm run lint
```

### Making Changes

1. Create a feature branch
2. Make your changes
3. Test locally with `npm run dev`
4. Build to verify: `npm run build`
5. Create a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 🚢 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to `main` branch.

### GitHub Pages Setup

1. Go to **Settings** → **Pages**
2. Source: **GitHub Actions**
3. The workflow will automatically build and deploy

### Manual Deployment

Trigger manually via GitHub Actions:
1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages**
3. Click **Run workflow**

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment guide.

## 📝 Content Management

### Via Decap CMS

Access the CMS at: `https://technologymonastery.org/admin/`

Requires GitHub OAuth setup. See [CONTENT.md](CONTENT.md) for instructions.

### Via Code

Page content is in TypeScript files under `app/`. Edit directly and commit changes.

See [CONTENT.md](CONTENT.md) for detailed content management guide.

## 🎨 Design System

The site uses a custom blue/purple color scheme with Tailwind CSS:

**Primary Blue**: `#2c5aa0` (primary-500)
**Purple Accent**: `#8b2ca0` (purple-500)

Reusable components:
- `Button` - Styled buttons with variants
- `ServiceCard` - Service display cards
- `ContactForm` - Contact form with validation
- `Header` - Navigation header
- `Footer` - Site footer

## 🔒 Security

- No API keys in code (use environment variables)
- Content Security Policy headers
- HTTPS only
- Secure authentication for CMS
- Regular dependency updates

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast ratios

## 📊 Performance

- Static site generation
- Optimized images
- Minimal JavaScript
- Fast page loads
- Lighthouse score: 95+

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Development Setup

See [SETUP.md](SETUP.md) for detailed setup instructions.

## 📄 License

This project is licensed under the GNU Affero General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

The Technology Monastery
- Website: [technologymonastery.org](https://technologymonastery.org)
- Email: info@technologymonastery.org
- GitHub: [@FreeForCharity](https://github.com/FreeForCharity)

## 🙏 Acknowledgments

- Built for nonprofit organizations
- Powered by open-source technology
- Hosted on GitHub Pages
- CDN by Cloudflare
- Donation processing by Zeffy
- Volunteer matching by VolunteerMatch

## 📚 Documentation

- [SETUP.md](SETUP.md) - Development setup guide
- [CONTENT.md](CONTENT.md) - Content management guide
- [INTEGRATIONS.md](INTEGRATIONS.md) - Third-party integration setup
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines

---

**Part of Free For Charity** - Providing free resources and services to nonprofits worldwide.
