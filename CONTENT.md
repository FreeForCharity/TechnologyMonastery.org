# Content Management Guide

This guide explains how to update and manage content on the Technology Monastery website.

## Table of Contents

- [Accessing the CMS](#accessing-the-cms)
- [Editing Pages](#editing-pages)
- [Managing Content via Code](#managing-content-via-code)
- [Best Practices](#best-practices)

## Accessing the CMS

### Decap CMS Admin Interface

The website uses Decap CMS (formerly Netlify CMS) for content management.

**Access URL**: `https://technologymonastery.org/admin/`

### Authentication Setup

Before you can use the CMS, you need to set up authentication:

#### Option 1: GitHub Backend (Recommended for GitHub Pages)

1. **Create GitHub OAuth App**:
   - Go to [GitHub Settings → Developer Settings → OAuth Apps](https://github.com/settings/developers)
   - Click "New OAuth App"
   - Fill in the details:
     - **Application name**: Technology Monastery CMS
     - **Homepage URL**: `https://technologymonastery.org`
     - **Authorization callback URL**: `https://technologymonastery.org/admin/`
   - Click "Register application"
   - Copy the **Client ID** and generate a **Client Secret**

2. **Configure the CMS**:
   - Update `public/admin/config.yml` to use GitHub backend
   - The configuration is already set up to use `git-gateway`

3. **Grant Access**:
   - Users need to be collaborators on the GitHub repository
   - They'll authenticate via GitHub when accessing the CMS

#### Option 2: Netlify Identity (Alternative)

If you prefer using Netlify for authentication:

1. Deploy the site to Netlify (or use Netlify just for identity)
2. Enable Netlify Identity in your site dashboard
3. Enable Git Gateway in Identity settings
4. Invite users via email

## Editing Pages

### Via Decap CMS (Recommended for Non-Technical Users)

1. Navigate to `https://technologymonastery.org/admin/`
2. Log in with your credentials
3. Select the collection/page you want to edit
4. Make your changes in the visual editor
5. Click "Publish" or "Save Draft"
6. Changes are automatically committed to the GitHub repository

**Available Collections**:
- **Site Configuration**: Global settings, contact email, social media links
- **Hero Section**: Home page hero content
- **About Section**: About page content
- **Services**: Service offerings and descriptions
- **Impact Section**: Statistics and impact metrics
- **Blog Posts**: Create and manage blog posts
- **Pages**: Create and edit static pages

### Via Code (For Developers)

All page content is stored in TypeScript/TSX files in the `app/` directory.

## Managing Content via Code

### Updating Page Content

Page content is directly embedded in the React components. To update:

1. **Home Page** (`app/page.tsx`):
   - Edit the hero section text
   - Update services array
   - Modify stats data

2. **Services Page** (`app/services/page.tsx`):
   - Edit the services array to add/remove/modify services

3. **About Page** (`app/about/page.tsx`):
   - Update mission, values, and impact sections

4. **Other Pages**:
   - Each page is in its own directory under `app/`
   - Edit the `page.tsx` file in each directory

### Example: Updating Home Page Services

Open `app/page.tsx` and find the `services` array:

```typescript
const services = [
  {
    icon: '☁️',
    title: 'Microsoft 365 for Nonprofits',
    description: 'Free setup and management...',
  },
  // Add more services here
]
```

### Example: Updating Contact Email

1. **In Footer** (`components/Footer.tsx`):
```typescript
<a href="mailto:info@technologymonastery.org">
  info@technologymonastery.org
</a>
```

2. **In Contact Page** (`app/contact/page.tsx`):
```typescript
<a href="mailto:info@technologymonastery.org">
  info@technologymonastery.org
</a>
```

### Adding a New Page

1. Create a new directory under `app/`:
   ```bash
   mkdir app/new-page
   ```

2. Create a `page.tsx` file:
   ```typescript
   import type { Metadata } from 'next'

   export const metadata: Metadata = {
     title: 'New Page - The Technology Monastery',
     description: 'Description of the new page',
   }

   export default function NewPage() {
     return (
       <main id="main-content">
         <section className="section">
           <div className="container">
             <h1>New Page Title</h1>
             <p>Page content here...</p>
           </div>
         </section>
       </main>
     )
   }
   ```

3. The page will automatically be available at `/new-page/`

4. Add a link to the page in the navigation (`components/Header.tsx`)

### Styling Guidelines

The site uses Tailwind CSS for styling. Common utility classes:

**Layout**:
- `container` - Responsive container with max-width
- `section` - Vertical padding for sections

**Text**:
- `text-primary-500` - Primary blue color
- `text-purple-500` - Purple accent color
- `text-gray-600` - Body text color

**Components**:
- `btn btn-primary` - Primary button
- `btn btn-secondary` - Secondary button
- `card` - Card with shadow and padding

**Responsive**:
- `md:` prefix - Medium screens (768px+)
- `lg:` prefix - Large screens (1024px+)

## Content Types

### Service Cards

Services are displayed using the `ServiceCard` component:

```typescript
import ServiceCard from '@/components/ServiceCard'

<ServiceCard
  icon="🌐"
  title="Service Name"
  description="Service description"
/>
```

### Buttons

Use the `Button` component for consistent styling:

```typescript
import Button from '@/components/Button'

<Button href="/services" variant="primary">
  View Services
</Button>
```

Variants: `primary`, `secondary`, `outline`

### Contact Forms

The contact form is in `components/ContactForm.tsx`. To customize:

1. Edit form fields
2. Update form submission logic (currently a placeholder)
3. Integrate with your preferred form handling service

## SEO and Metadata

Each page has metadata defined in its `page.tsx` file:

```typescript
export const metadata: Metadata = {
  title: 'Page Title - The Technology Monastery',
  description: 'Page description for SEO',
}
```

This automatically generates:
- `<title>` tags
- Open Graph tags for social sharing
- Twitter Card tags
- Proper meta descriptions

## Best Practices

### Content Writing

1. **Headlines**: Use clear, action-oriented language
2. **Descriptions**: Keep under 160 characters for SEO
3. **Accessibility**: Use descriptive link text (avoid "click here")
4. **Consistency**: Maintain consistent tone and terminology

### Images

1. Store images in `public/images/`
2. Use descriptive file names (e.g., `nonprofit-technology-services.jpg`)
3. Optimize images before uploading (compress, resize)
4. Always include alt text for accessibility

### Links

1. **Internal links**: Use Next.js `Link` component
   ```typescript
   import Link from 'next/link'
   <Link href="/about">About Us</Link>
   ```

2. **External links**: Use regular anchor tags
   ```typescript
   <a href="https://example.com" target="_blank" rel="noopener noreferrer">
     External Site
   </a>
   ```

### Testing Changes

Before publishing content changes:

1. **Preview locally**:
   ```bash
   npm run dev
   ```

2. **Test on mobile**: Use browser dev tools

3. **Check accessibility**: Use browser extensions like axe DevTools

4. **Verify links**: Ensure all links work correctly

5. **Build test**:
   ```bash
   npm run build
   ```

## Publishing Workflow

### Via CMS

1. Make changes in the CMS
2. Click "Save Draft" to save without publishing
3. Click "Publish" when ready
4. Changes are committed to GitHub and trigger automatic deployment

### Via Code

1. Make changes to files
2. Test locally with `npm run dev`
3. Commit changes to a branch
4. Create a pull request
5. After review and merge to `main`, site auto-deploys

## Troubleshooting

### CMS Not Loading

1. Check if you're authenticated
2. Verify `public/admin/config.yml` configuration
3. Check browser console for errors
4. Ensure GitHub OAuth is properly configured

### Changes Not Appearing

1. Clear browser cache
2. Check if changes were committed to GitHub
3. Verify GitHub Actions deployment succeeded
4. Wait a few minutes for CDN cache to clear

### Content Formatting Issues

1. Use Markdown preview in CMS
2. Test locally before publishing
3. Check Tailwind CSS classes are applied correctly

## Support

For content management assistance:
- Email: info@technologymonastery.org
- GitHub Issues: [Report a problem](https://github.com/FreeForCharity/Technologymonastery.org/issues)
- Documentation: See [SETUP.md](SETUP.md) for technical setup
