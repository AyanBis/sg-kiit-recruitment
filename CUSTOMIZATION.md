# Customization Guide

This guide will help you customize the Startup Grind KIIT recruitment website to match your specific needs.

## Quick Customizations

### 1. Update Social Media Links

**File:** `components/Footer.tsx`

Replace the placeholder `#` with your actual social media URLs:

```typescript
const socialLinks = [
  { icon: AtSign, href: 'https://instagram.com/sgkiit', label: 'Instagram', name: 'Instagram' },
  { icon: Send, href: 'https://linkedin.com/company/sgkiit', label: 'LinkedIn', name: 'LinkedIn' },
  { icon: Mail, href: 'mailto:contact@sgkiit.com', label: 'Email', name: 'Email' }
];
```

### 2. Update Contact Email

**Files to update:**
- `components/sections/ApplyNow.tsx`
- `components/Footer.tsx`

Replace `contact@sgkiit.com` with your actual email address.

### 3. Add Real Images

#### Hero Section Image
**File:** `components/sections/Hero.tsx`

1. Add your hero image to `public/images/hero.jpg`
2. Replace the placeholder div with:

```tsx
import Image from 'next/image';

<div className="relative rounded-premium-lg overflow-hidden shadow-cyan-glow-lg">
  <Image
    src="/images/hero.jpg"
    alt="Startup Grind KIIT Community"
    width={600}
    height={600}
    className="w-full h-full object-cover"
  />
</div>
```

#### Event Images
**File:** `components/sections/Events.tsx`

1. Add event images to `public/images/events/`
2. Update each event card:

```tsx
<div className="aspect-[4/3] relative overflow-hidden">
  <Image
    src="/images/events/sell-it-2026.jpg"
    alt="SELL IT - A Battle of Wits 2026"
    fill
    className="object-cover"
  />
  <div className="absolute top-4 left-4">
    <span className="bg-background-dark/80 text-white text-xs font-semibold px-3 py-1 rounded-full">
      {event.type}
    </span>
  </div>
</div>
```

### 4. Change Brand Colors

**File:** `tailwind.config.ts`

Modify the color palette:

```typescript
colors: {
  background: {
    dark: "#171719",      // Main background
    secondary: "#002743",  // Secondary background
  },
  card: "#002743",         // Card backgrounds
  primary: {
    cyan: "#35BDD2",       // Primary cyan accent
    blue: "#0D769D",       // Primary blue (buttons)
  },
  light: {
    text: "#A6D2D9",       // Light text color
  },
},
```

### 5. Update Logo

**Option 1: Text Logo (Current)**
**File:** `components/Navbar.tsx`

Already implemented as text. To change, update line:
```tsx
<span className="font-sora text-xl lg:text-2xl font-bold text-white group-hover:text-primary-cyan transition-colors">
  Startup Grind KIIT
</span>
```

**Option 2: Image Logo**
1. Add logo to `public/images/logo.png`
2. Replace the text with:

```tsx
import Image from 'next/image';

<Image
  src="/images/logo.png"
  alt="Startup Grind KIIT"
  width={200}
  height={50}
  className="h-10 w-auto"
/>
```

### 6. Form Submission Integration

**File:** `components/sections/ApplyNow.tsx`

#### Option A: Use Formspree
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  if (response.ok) {
    alert('Application submitted successfully!');
    // Reset form
  }
};
```

#### Option B: Use Google Forms API
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const formBody = new URLSearchParams({
    'entry.NAME_FIELD': formData.fullName,
    'entry.EMAIL_FIELD': formData.email,
    // Map other fields
  });
  
  await fetch('YOUR_GOOGLE_FORM_URL', {
    method: 'POST',
    body: formBody,
    mode: 'no-cors'
  });
  
  alert('Application submitted!');
};
```

#### Option C: Custom Backend
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('/api/apply', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  const result = await response.json();
  if (result.success) {
    // Handle success
  }
};
```

### 7. Update SEO Metadata

**File:** `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Your Custom Title",
  description: "Your custom description",
  keywords: "your, keywords, here",
  openGraph: {
    title: "Your OG Title",
    description: "Your OG Description",
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Your Twitter Title",
    description: "Your Twitter Description",
    images: ['/twitter-image.jpg'],
  },
};
```

## Content Customizations

### Update Event Details

**File:** `components/sections/Events.tsx`

Modify the `events` array:

```typescript
const events = [
  {
    title: 'Your Event Name',
    type: 'Event Type',
    description: 'Your event description',
    color: 'bg-primary-blue' // or 'bg-primary-cyan'
  },
  // Add more events...
];
```

### Modify Mission & Values

**File:** `components/sections/Mission.tsx`

Update mission text and values array:

```typescript
const values = [
  'Your first value',
  'Your second value',
  'Your third value',
  // Add more values...
];
```

### Update "What We Do" Cards

**File:** `components/sections/WhatWeDo.tsx`

Modify the `cards` array and import different icons from Lucide React:

```typescript
import { YourIcon1, YourIcon2 } from 'lucide-react';

const cards = [
  {
    icon: YourIcon1,
    title: 'Your Activity',
    description: 'Your description'
  },
  // Add more cards...
];
```

## Styling Customizations

### Change Fonts

**File:** `app/globals.css`

Update Google Fonts import:

```css
@import url('https://fonts.googleapis.com/css2?family=YourHeadingFont:wght@300;400;500;600;700;800&family=YourBodyFont:wght@300;400;500;600;700&display=swap');

:root {
  --font-sora: 'YourHeadingFont', sans-serif;
  --font-inter: 'YourBodyFont', sans-serif;
}
```

### Adjust Border Radius

**File:** `tailwind.config.ts`

```typescript
borderRadius: {
  'premium': '16px',    // Change from 20px
  'premium-lg': '20px', // Change from 24px
}
```

### Modify Animations

**File:** Individual component files

Framer Motion animation settings can be adjusted in each component:

```typescript
// Change duration
transition={{ duration: 1.0 }} // Default is 0.6

// Change delay
transition={{ delay: 0.5 }} // Adjust as needed

// Change animation type
initial={{ opacity: 0, y: 50 }} // Increase y value for larger movement
```

## Advanced Customizations

### Add Analytics

**File:** `app/layout.tsx`

Add Google Analytics or Plausible:

```tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Add New Sections

1. Create new component in `components/sections/YourSection.tsx`
2. Import and add to `app/page.tsx`:

```tsx
import YourSection from '@/components/sections/YourSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* Add your section */}
      <YourSection />
      {/* ... other sections */}
    </main>
  );
}
```

### Make Sections Removable/Optional

You can easily remove any section by commenting it out in `app/page.tsx`:

```tsx
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      {/* <Mission /> */}  {/* This section is now hidden */}
      <WhatWeDo />
      {/* Rest of sections */}
    </main>
  );
}
```

## Testing Your Changes

After making changes:

1. **Development:** `npm run dev` - Test locally
2. **Build:** `npm run build` - Check for errors
3. **Production:** `npm start` - Test production build

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs
- Framer Motion Docs: https://www.framer.com/motion/
- Lucide Icons: https://lucide.dev/icons
