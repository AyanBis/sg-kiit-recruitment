# Startup Grind KIIT - Recruitment Website

A modern, responsive recruitment website for Startup Grind KIIT — a student-led startup and entrepreneurship community at KIIT University, Bhubaneswar.

## About

This website serves as the primary recruitment platform for Startup Grind KIIT, showcasing the community's mission, events, and opportunities while providing prospective members with an easy way to apply and connect.

**Mission:** To help students build confidence, gain exposure and grow through entrepreneurship, technology, leadership and community-driven experiences.

## Technologies

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment Ready:** Vercel, Netlify

## Key Features

- **Hero Section:** Compelling introduction with community branding
- **About:** Overview of Startup Grind KIIT and core values
- **Mission & Values:** Community principles and goals
- **What We Do:** Showcase of activities (Founder Conversations, Workshops, Competitions)
- **Events:** Past events showcase with imagery
- **Community Insights:** Topics beyond events
- **Why Join:** Benefits of joining the community
- **Application Flow:** Direct links to Google Form and WhatsApp community
- **Responsive Design:** Fully mobile-optimized
- **Image Fallbacks:** Graceful fallbacks for missing assets

## Project Structure

```
sg-kiit-recruitment/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page
├── components/
│   ├── Navbar.tsx           # Sticky navigation
│   ├── Footer.tsx           # Footer with links
│   ├── ImageFallback.tsx    # Image component with fallbacks
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Mission.tsx
│       ├── WhatWeDo.tsx
│       ├── Events.tsx
│       ├── Community.tsx
│       ├── WhyJoin.tsx
│       ├── WhoShouldApply.tsx
│       ├── ApplyNow.tsx
│       └── FinalCTA.tsx
├── public/
│   └── images/
│       ├── brand/           # Logo assets
│       ├── hero/            # Hero section images
│       └── events/          # Event images
├── ASSETS_GUIDE.md          # Image placement guide
├── READY_TO_DEPLOY.md       # Deployment checklist
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sg-kiit-recruitment
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm start        # Start production server
npm run lint     # Run ESLint
```

## Adding Assets

Place images in the following locations:

- **Logo:** `/public/images/brand/sg-kiit-logo.png`
- **Hero Image:** `/public/images/hero/sg-kiit-hero.png`
- **Event Images:** `/public/images/events/`

The website includes fallbacks for all images, so it works perfectly without them.

See `ASSETS_GUIDE.md` for detailed instructions.

## Environment Variables

This project does not require environment variables for basic operation. All external links (Google Form, WhatsApp, Instagram) are hardcoded in the components.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository to Vercel
3. Deploy (automatic configuration)

### Netlify

1. Push code to GitHub
2. Import repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

See `READY_TO_DEPLOY.md` for complete deployment instructions.

## Configuration

### External Links

Update these links in the components if needed:

- **Application Form:** `https://forms.gle/3u4Kuog4NUVCny7y5`
- **WhatsApp Community:** `https://chat.whatsapp.com/JwKKsnLqkRmIsfIDTS2Bft`
- **Instagram:** `https://www.instagram.com/startupgrindkiit/`

### Design System

Colors defined in `tailwind.config.ts`:
- Background Dark: `#171719`
- Background Secondary: `#002743`
- Primary Cyan: `#35BDD2`
- Primary Blue: `#0D769D`

Fonts: Sora (headings) and Inter (body) from Google Fonts

## Development Guidelines

### Code Style

- Use TypeScript for all new components
- Follow existing component structure
- Use Tailwind CSS for styling
- Add animations with Framer Motion sparingly
- Maintain responsive design principles

### Component Guidelines

- Keep components focused and single-purpose
- Use `'use client'` directive for interactive components
- Extract reusable logic into custom hooks
- Maintain consistent naming conventions

### Accessibility

- Use semantic HTML elements
- Add proper ARIA labels
- Ensure keyboard navigation
- Maintain sufficient color contrast
- Test with screen readers

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly (mobile + desktop)
4. Ensure build succeeds (`npm run build`)
5. Submit pull request

## Support

For issues or questions about the website:
- Contact: Startup Grind KIIT team
- Instagram: [@startupgrindkiit](https://www.instagram.com/startupgrindkiit/)

## License

© 2026 Startup Grind KIIT. All rights reserved.

---

**Built with ❤️ by Startup Grind KIIT**

Part of the global Startup Grind community.
