# Integration Configuration Guide

This guide explains how to configure third-party integrations for the Technology Monastery website.

## Table of Contents

- [Zeffy Donation Forms](#zeffy-donation-forms)
- [VolunteerMatch Widget](#volunteermatch-widget)
- [Cloudflare Zaraz Analytics](#cloudflare-zaraz-analytics)
- [Decap CMS Authentication](#decap-cms-authentication)

---

## Zeffy Donation Forms

Zeffy provides 100% free donation processing for nonprofits (no platform fees or transaction fees).

### Benefits

- ✅ 100% free - no fees on donations
- ✅ Easy donor management dashboard
- ✅ Recurring donation support
- ✅ Multiple payment methods
- ✅ Tax receipt automation
- ✅ Customizable donation forms

### Setup Instructions

#### 1. Create Zeffy Account

1. Go to [zeffy.com](https://www.zeffy.com)
2. Sign up for a free nonprofit account
3. Verify your nonprofit status (501(c)(3) documentation required)

#### 2. Create a Donation Form

1. Log into your Zeffy dashboard
2. Navigate to **Forms** → **Create New Form**
3. Choose **Donation Form**
4. Customize:
   - Donation amounts (one-time and recurring)
   - Form fields (name, email, address, etc.)
   - Branding (colors, logo, messaging)
   - Thank you message

#### 3. Get Embed Code

1. Click **Publish** on your form
2. Select **Embed** option
3. Copy the embed code (JavaScript snippet)

#### 4. Add to Website

**Location**: The donation section is in `app/page.tsx` (home page)

Find the comment block that says `Zeffy Donation Integration Placeholder` (around line 185):

```typescript
{/* Zeffy Donation Integration Placeholder */}
{/* 
  To integrate Zeffy donation forms:
  1. Sign up at https://www.zeffy.com
  ...
*/}
```

Replace the placeholder div with your Zeffy embed code:

```tsx
{/* Zeffy Donation Form */}
<div id="zeffy-donation-form">
  <script 
    src="https://www.zeffy.com/embed/donation-form/YOUR_FORM_ID"
    defer
  ></script>
</div>
```

Or use the iframe method:

```tsx
<iframe
  title="Donation form powered by Zeffy"
  src="https://www.zeffy.com/en-US/donation-form/YOUR_FORM_ID"
  style={{ width: '100%', height: '700px', border: 'none' }}
></iframe>
```

#### 5. Alternative: Direct Link

If you prefer a simple button that links to your Zeffy form:

```tsx
<a 
  href="https://www.zeffy.com/donation-form/YOUR_FORM_ID"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary"
>
  Donate Now
</a>
```

### Testing

1. Test the form with a small donation
2. Verify donation appears in Zeffy dashboard
3. Check email confirmations are working
4. Test both one-time and recurring options

### Customization

You can customize the form appearance through:
1. Zeffy dashboard settings
2. CSS overrides in `app/globals.css`

---

## VolunteerMatch Widget

VolunteerMatch helps connect volunteers with nonprofit opportunities.

### Benefits

- ✅ Access to large volunteer network
- ✅ Post unlimited volunteer opportunities
- ✅ Manage volunteer applications
- ✅ Track volunteer hours
- ✅ Free for nonprofits

### Setup Instructions

#### 1. Create VolunteerMatch Account

1. Go to [volunteermatch.org](https://www.volunteermatch.org)
2. Click **For Nonprofits** → **Sign Up**
3. Complete organization profile
4. Verify nonprofit status

#### 2. Create Volunteer Opportunities

1. Log into your VolunteerMatch dashboard
2. Click **Post an Opportunity**
3. Fill in details:
   - Opportunity title
   - Description
   - Skills needed
   - Time commitment
   - Location (or remote)
4. Publish the opportunity

#### 3. Get Widget Code

1. In your dashboard, go to **Tools** → **Widgets**
2. Choose widget style:
   - Search widget (allows visitors to search opportunities)
   - Opportunities widget (displays your specific opportunities)
   - Application widget (direct application form)
3. Customize appearance and settings
4. Copy the widget code

#### 4. Add to Website

**Location**: The volunteer section is in `app/page.tsx` (home page)

Find the comment block that says `VolunteerMatch Widget Placeholder` (around line 210):

```typescript
{/* VolunteerMatch Widget Placeholder */}
{/* 
  To integrate VolunteerMatch widget:
  1. Register at https://www.volunteermatch.org
  ...
*/}
```

Replace the placeholder div with your VolunteerMatch widget code:

```tsx
{/* VolunteerMatch Widget */}
<div id="vm-widget">
  <script 
    type="text/javascript" 
    src="https://www.volunteermatch.org/widgets/YOUR_WIDGET_ID.js"
  ></script>
</div>
```

Or use the iframe embed:

```tsx
<iframe
  title="Volunteer opportunities powered by VolunteerMatch"
  src="https://www.volunteermatch.org/widgets/iframe/YOUR_WIDGET_ID"
  style={{ width: '100%', height: '600px', border: 'none' }}
></iframe>
```

### Alternative Approach: Direct Link

Simple button linking to your organization's VolunteerMatch page:

```tsx
<a 
  href="https://www.volunteermatch.org/search/org/YOUR_ORG_ID"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary"
>
  View Volunteer Opportunities
</a>
```

---

## Cloudflare Zaraz Analytics

Cloudflare Zaraz is a third-party tool manager that improves performance and privacy.

### Benefits

- ✅ Better performance (loads tools through Cloudflare's edge network)
- ✅ Enhanced privacy and consent management
- ✅ Centralized tool configuration
- ✅ No impact on Core Web Vitals
- ✅ Easy to add/remove tracking tools
- ✅ Built-in consent management

### Setup Instructions

#### 1. Cloudflare Account Setup

**Prerequisites**: Your domain must be using Cloudflare (as DNS or CDN)

1. Log into [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your domain (`technologymonastery.org`)

#### 2. Enable Zaraz

1. In Cloudflare dashboard, navigate to **Zaraz**
2. If not already enabled, click **Enable Zaraz**
3. Zaraz is now active for your domain

#### 3. Add Tracking Tools

**Google Analytics Example**:

1. In Zaraz dashboard, click **Add tool**
2. Search for "Google Analytics"
3. Click **Add tool**
4. Configure:
   - **Tool name**: Google Analytics
   - **Measurement ID**: G-XXXXXXXXXX (from your GA4 property)
5. Set up triggers (e.g., "Pageview" on "All Pages")
6. Click **Save**

**Other Popular Tools**:
- Google Tag Manager
- Facebook Pixel
- Hotjar
- Mixpanel
- And 100+ more

#### 4. Configure Consent Management

1. In Zaraz, go to **Consent**
2. Enable **Consent Mode**
3. Choose consent model:
   - **Opt-in** (GDPR compliant - default deny)
   - **Opt-out** (default allow, users can opt out)
4. Customize consent banner appearance
5. Save settings

#### 5. Website Configuration

**The site is already configured for Zaraz!**

In `app/layout.tsx`, there's a comment explaining Zaraz:

```tsx
{/* Cloudflare Zaraz Analytics - Configure in Cloudflare Dashboard */}
{/* 
  To configure Cloudflare Zaraz:
  1. Go to Cloudflare Dashboard > Zaraz
  2. Add your tracking tools (Google Analytics, etc.)
  3. Configure consent management
  4. Scripts will be automatically injected by Cloudflare
*/}
```

**No code changes needed** - Cloudflare automatically injects the necessary scripts when the domain is accessed through Cloudflare's network.

### Testing

1. Visit your site with browser dev tools open
2. Check Network tab for Zaraz requests
3. Verify analytics data appears in your tracking tool (may take 24-48 hours)
4. Test consent banner functionality

### Custom Events

You can send custom events from your site to Zaraz:

```typescript
// In a client component or useEffect
if (typeof window !== 'undefined' && window.zaraz) {
  window.zaraz.track('button_click', {
    button_name: 'Donate Now',
    location: 'hero_section'
  })
}
```

Add TypeScript types by creating `types/zaraz.d.ts`:

```typescript
interface Window {
  zaraz?: {
    track: (eventName: string, properties?: Record<string, any>) => void
  }
}
```

---

## Decap CMS Authentication

Decap CMS (formerly Netlify CMS) is already configured in `public/admin/`. You just need to set up authentication.

### Option 1: GitHub Backend (Recommended)

**Best for**: GitHub Pages deployments

#### Setup Steps

1. **Create OAuth App**:
   - Go to [GitHub Settings → Developer Settings → OAuth Apps](https://github.com/settings/developers)
   - Click **New OAuth App**
   - Fill in:
     - **Application name**: Technology Monastery CMS
     - **Homepage URL**: `https://technologymonastery.org`
     - **Authorization callback URL**: `https://technologymonastery.org/admin/`
   - Click **Register application**

2. **Get Credentials**:
   - Copy **Client ID**
   - Click **Generate a new client secret**
   - Copy **Client Secret** (save securely - shown only once)

3. **Configure Access**:
   - Users must be collaborators on the GitHub repository
   - When they visit `/admin/`, they'll authenticate via GitHub
   - After auth, they can edit content which commits directly to GitHub

4. **Update CMS Config** (if needed):
   
   Edit `public/admin/config.yml` to ensure it has:
   ```yaml
   backend:
     name: git-gateway
     branch: main
   ```

### Option 2: Netlify Identity

**Best for**: If you deploy to Netlify or want email-based auth

#### Setup Steps

1. **Deploy to Netlify** (or just use for identity):
   - Connect your GitHub repo to Netlify
   - Or use Netlify just for the Identity service

2. **Enable Identity**:
   - In Netlify dashboard → **Identity**
   - Click **Enable Identity**

3. **Enable Git Gateway**:
   - In Identity settings → **Services** → **Git Gateway**
   - Click **Enable Git Gateway**

4. **Invite Users**:
   - Go to Identity tab
   - Click **Invite users**
   - Enter email addresses
   - Users will receive invitation emails

5. **Update CMS Config**:
   
   The config is already set to use `git-gateway`, which works with both GitHub and Netlify Identity.

### Testing CMS Access

1. Navigate to `https://technologymonastery.org/admin/`
2. Click login
3. Authenticate via GitHub (or email if using Netlify Identity)
4. You should see the CMS dashboard
5. Try editing a page and saving

---

## Troubleshooting

### Zeffy Not Loading

- Check embed code is correct
- Verify Zeffy account is active
- Check browser console for JavaScript errors
- Ensure form ID matches your Zeffy form

### VolunteerMatch Widget Issues

- Verify widget ID is correct
- Check organization is verified on VolunteerMatch
- Ensure you have active opportunities posted
- Try iframe method if JavaScript widget fails

### Zaraz Not Tracking

- Confirm domain is using Cloudflare
- Verify Zaraz is enabled in dashboard
- Check tool configuration (Measurement ID, etc.)
- Wait 24-48 hours for data to appear
- Test with browser dev tools network tab

### CMS Authentication Failing

- Verify OAuth app settings are correct
- Check callback URL matches exactly
- Ensure user is a repository collaborator (for GitHub backend)
- Clear browser cache and try again
- Check browser console for error messages

---

## Security Considerations

### API Keys and Secrets

- ✅ **DO**: Store API keys in environment variables (`.env.local`)
- ❌ **DON'T**: Commit API keys to GitHub
- ✅ **DO**: Use client-side embed codes when possible
- ✅ **DO**: Rotate secrets if accidentally exposed

### Third-Party Scripts

- ✅ **DO**: Use Cloudflare Zaraz to manage third-party scripts
- ✅ **DO**: Review privacy policies of integrated services
- ✅ **DO**: Implement consent management for GDPR compliance
- ❌ **DON'T**: Load tracking scripts before user consent

---

## Support

For integration assistance:

- **Zeffy Support**: [support.zeffy.com](https://support.zeffy.com)
- **VolunteerMatch**: [help.volunteermatch.org](https://help.volunteermatch.org)
- **Cloudflare Zaraz**: [developers.cloudflare.com/zaraz](https://developers.cloudflare.com/zaraz)
- **Decap CMS**: [decapcms.org/docs](https://decapcms.org/docs)

For site-specific issues:
- Email: info@technologymonastery.org
- GitHub: [Open an issue](https://github.com/FreeForCharity/Technologymonastery.org/issues)
