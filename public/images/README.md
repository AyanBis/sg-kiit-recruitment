# Images Directory

Place your images here for optimal organization.

## Recommended Structure

```
public/images/
├── hero.jpg              # Hero section image
├── logo.png              # Logo (if using image logo)
├── og-image.jpg          # Open Graph image for social sharing
├── twitter-image.jpg     # Twitter card image
└── events/
    ├── event-1.jpg
    ├── event-2.jpg
    └── ...
```

## Image Optimization Tips

1. **Format**: Use WebP or AVIF for better compression
2. **Size**: 
   - Hero images: 1200x1200px or larger
   - Event posters: 800x600px
   - Logo: 400x100px (adjust based on design)
   - OG images: 1200x630px
3. **Compression**: Use tools like TinyPNG, Squoosh, or ImageOptim
4. **Alt Text**: Always provide descriptive alt text in your components

## Using Images in Components

```tsx
import Image from 'next/image';

<Image
  src="/images/your-image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

## Next.js Image Optimization

Next.js automatically optimizes images using the `next/image` component:
- Automatic lazy loading
- Automatic WebP/AVIF conversion
- Responsive images
- Prevents Cumulative Layout Shift (CLS)
