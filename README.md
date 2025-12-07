# Stayll Landing Page

A modern, responsive landing page for Stayll - an AI-powered lease and tenant intelligence platform.

## Features

- **Modern Design**: Clean, professional landing page with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Lead Capture**: Integrated lead capture form with email marketing integration
- **Performance**: Optimized for fast loading and great user experience

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4.0
- **Components**: React 19, TypeScript
- **Animations**: AOS (Animate On Scroll), Framer Motion
- **Deployment**: Vercel

## Getting Started

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Set up environment variables (optional, for lead capture):
   - `LEAD_WEBHOOK_URL` - Webhook URL for lead notifications (Slack, Discord, etc.)
   - `CONVERTKIT_API_KEY` - ConvertKit API key (optional)
   - `CONVERTKIT_FORM_ID` - ConvertKit form ID (optional)
   - `MAILCHIMP_API_KEY` - Mailchimp API key (optional)
   - `MAILCHIMP_LIST_ID` - Mailchimp list ID (optional)
   - `GA4_MEASUREMENT_ID` - Google Analytics 4 measurement ID (optional)
   - `GA4_API_SECRET` - Google Analytics 4 API secret (optional)
4. Run the development server: `pnpm dev`

## Project Structure

```
/app
  /(default)      # Landing page routes
  /api/leads      # Lead capture API endpoint
  /privacy        # Privacy policy page
  /terms          # Terms of service page
/components       # React components
  /ui             # UI components (header, footer, logo)
  # Landing page sections (hero, features, pricing, etc.)
/public           # Static assets (images, fonts, videos)
```

## Deployment

The landing page is automatically deployed to Vercel on every push to the main branch.

---

Built with ❤️ for Stayll.
