# Asset Placement Guide

Place your images in the following locations for the website to display them correctly.

## Required Images

### 1. Brand Logo
**Location:** `/public/images/brand/sg-kiit-logo.png`
- The official Startup Grind KIIT logo
- Used in: Navbar and Footer
- Recommended format: PNG with transparent background
- Recommended size: 400x120px

### 2. Hero Image
**Location:** `/public/images/hero/sg-kiit-hero.png`
- Main hero section visual
- Should represent the SG KIIT community
- Recommended format: PNG or JPG
- Recommended size: 1200x1200px
- Aspect ratio: 1:1 or 4:5

### 3. Event Images
**Location:** `/public/images/events/`

Place the following event images:

#### sell-it-2026.jpg
- SELL IT — A Battle of Wits 2026 event visual
- Competition/pitch battle theme
- Recommended size: 1600x900px (16:9)

#### ignite-bootcamp.jpg
- IGNITE BOOTCAMP event visual
- Workshop/learning theme
- Recommended size: 1600x900px (16:9)

#### fireside-chat.jpg
- Fireside Chat: From Curiosity to Commitment
- Founder conversation theme
- Recommended size: 1600x900px (16:9)

#### ai-panel.jpg
- AI Panel Discussion
- Technology/AI discussion theme
- Recommended size: 1600x900px (16:9)

## Image Fallbacks

If images are not placed, the website will show tasteful branded fallbacks:

- **Logo fallback:** "Startup Grind KIIT" text
- **Hero fallback:** Branded cyan visual with SG icon
- **Event fallbacks:** Themed icons with cyan accents

The website is fully functional even without images.

## How to Add Images

1. Navigate to the project directory
2. Place images in the correct folders:
   ```
   sg-kiit-recruitment/public/images/
   ├── brand/
   │   └── sg-kiit-logo.png
   ├── hero/
   │   └── sg-kiit-hero.png
   └── events/
       ├── sell-it-2026.jpg
       ├── ignite-bootcamp.jpg
       ├── fireside-chat.jpg
       └── ai-panel.jpg
   ```
3. Rebuild the project: `npm run build`
4. Images will automatically appear

## Image Optimization Tips

- Use WebP format for better compression
- Compress images before uploading (TinyPNG, Squoosh)
- Maintain consistent quality across all images
- Test on mobile devices

## Next Steps

1. Add the real SG KIIT logo
2. Add the hero image
3. Add event images one by one
4. Test the website locally
5. Deploy!
