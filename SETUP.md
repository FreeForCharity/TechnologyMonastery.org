# Setup Guide - Technology Monastery Website

This guide will help you set up the Technology Monastery website for local development and deployment.

## Prerequisites

- **Node.js**: Version 20.x or later
- **npm**: Version 9.x or later (comes with Node.js)
- **Git**: For version control

## Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/FreeForCharity/Technologymonastery.org.git
cd Technologymonastery.org
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 15
- React 18
- TypeScript
- Tailwind CSS 3
- And other dependencies

### 3. Run the Development Server

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

## Project Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── get-started/       # Get Started page
│   ├── privacy/           # Privacy policy page
│   ├── services/          # Services page
│   ├── terms/             # Terms of service page
│   ├── globals.css        # Global styles (Tailwind)
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── Button.tsx         # Button component
│   ├── ContactForm.tsx    # Contact form component
│   ├── Footer.tsx         # Footer component
│   ├── Header.tsx         # Header/navigation component
│   └── ServiceCard.tsx    # Service card component
├── public/                # Static assets
│   ├── admin/             # Decap CMS files
│   │   ├── config.yml     # CMS configuration
│   │   └── index.html     # CMS admin interface
│   ├── images/            # Images and media
│   └── .nojekyll          # GitHub Pages configuration
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## Environment Configuration

### Required Environment Variables

Create a `.env.local` file in the root directory for local development (this file is gitignored):

```env
# No environment variables are required for basic functionality
# Add any API keys or sensitive configuration here as needed
```

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **CMS**: Decap CMS
- **Deployment**: GitHub Pages (via GitHub Actions)
- **Analytics**: Cloudflare Zaraz (configured separately)

## Development Workflow

### Making Changes

1. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and test locally:
   ```bash
   npm run dev
   ```

3. Build to ensure no errors:
   ```bash
   npm run build
   ```

4. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

5. Push and create a pull request:
   ```bash
   git push origin feature/your-feature-name
   ```

### Running Linter

```bash
npm run lint
```

This runs Next.js's built-in ESLint configuration.

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### GitHub Actions Workflow

The deployment workflow (`.github/workflows/deploy.yml`) does the following:

1. Checks out the code
2. Sets up Node.js
3. Installs dependencies (`npm ci`)
4. Builds the site (`npm run build`)
5. Uploads the `out/` directory to GitHub Pages
6. Deploys to GitHub Pages

### Manual Deployment

If needed, you can manually trigger a deployment:

1. Go to the repository on GitHub
2. Navigate to **Actions** → **Deploy to GitHub Pages**
3. Click **Run workflow**

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Clear the Next.js cache:
   ```bash
   rm -rf .next out
   ```

2. Reinstall dependencies:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. Try building again:
   ```bash
   npm run build
   ```

### Port Already in Use

If port 3000 is already in use, you can specify a different port:

```bash
npm run dev -- -p 3001
```

### TypeScript Errors

If you see TypeScript errors, ensure your editor is using the workspace TypeScript version:

In VS Code: Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux) and select "TypeScript: Select TypeScript Version" → "Use Workspace Version"

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Decap CMS Documentation](https://decapcms.org/docs)

## Getting Help

If you encounter issues:

1. Check the [GitHub Issues](https://github.com/FreeForCharity/Technologymonastery.org/issues)
2. Review the [Contributing Guide](CONTRIBUTING.md)
3. Contact the team at info@technologymonastery.org
