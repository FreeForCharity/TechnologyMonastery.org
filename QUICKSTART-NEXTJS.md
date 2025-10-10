# Quick Start Guide

Welcome to the new Next.js-powered Technology Monastery website! This guide will get you up and running quickly.

## For Developers

### Prerequisites
```bash
# Ensure you have Node.js 20+ installed
node --version

# Should output v20.x.x or higher
```

### First Time Setup
```bash
# Clone the repository
git clone https://github.com/FreeForCharity/Technologymonastery.org.git
cd Technologymonastery.org

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Making Changes
```bash
# Build for production (test before committing)
npm run build

# Lint your code
npm run lint
```

### File Locations

**Edit page content:**
- Home: `app/page.tsx`
- Services: `app/services/page.tsx`
- About: `app/about/page.tsx`
- Get Started: `app/get-started/page.tsx`
- Contact: `app/contact/page.tsx`

**Edit components:**
- Header/Navigation: `components/Header.tsx`
- Footer: `components/Footer.tsx`
- Other components: `components/`

**Edit styles:**
- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`

## For Content Editors

### Using the CMS

1. Go to `https://technologymonastery.org/admin/`
2. Login with GitHub (requires setup - see CONTENT.md)
3. Edit content visually
4. Click "Publish" to save changes

### Quick Edits (Without CMS)

1. Find the page file in `app/` directory
2. Edit the text directly in the TypeScript file
3. Commit and push changes
4. Site auto-deploys

## Key Features

✅ **Fully Responsive** - Works on mobile, tablet, and desktop
✅ **Fast Loading** - Static site generation for optimal performance
✅ **SEO Optimized** - Proper metadata on all pages
✅ **Accessible** - WCAG 2.1 AA compliant
✅ **Easy to Update** - Via CMS or direct file editing
✅ **Auto-Deploy** - Push to main branch = automatic deployment

## Need Help?

- **Setup Issues**: See [SETUP.md](SETUP.md)
- **Content Editing**: See [CONTENT.md](CONTENT.md)
- **Integrations**: See [INTEGRATIONS.md](INTEGRATIONS.md)
- **General Questions**: Email info@technologymonastery.org

## Common Tasks

### Update Contact Email
Edit in:
- `components/Footer.tsx`
- `app/contact/page.tsx`
- Update CMS config if needed

### Add New Service
Edit `app/services/page.tsx` and add to the services array

### Change Colors
Edit `tailwind.config.ts` - primary and purple color values

### Add New Page
```bash
mkdir app/new-page
# Create app/new-page/page.tsx with your content
# Add link to navigation in components/Header.tsx
```

---

**Built with ❤️ for Free For Charity**
