# Deployment Guide

This guide covers deploying the Startup Grind KIIT recruitment website to various platforms.

## Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Steps:

1. Push your code to GitHub, GitLab, or Bitbucket
2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js and configure settings
6. Click "Deploy"

### Environment Variables (if needed):
- Add any environment variables in the Vercel dashboard under Settings → Environment Variables

## Netlify

### Steps:

1. Push your code to a Git repository
2. Visit [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

## Custom Server / VPS

### Prerequisites:
- Node.js 18+ installed
- PM2 or similar process manager

### Steps:

1. Clone your repository on the server:
```bash
git clone <your-repo-url>
cd sg-kiit-recruitment
```

2. Install dependencies:
```bash
npm install
```

3. Build the application:
```bash
npm run build
```

4. Start with PM2:
```bash
pm2 start npm --name "sg-kiit" -- start
```

5. Configure Nginx as reverse proxy:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

6. Setup SSL with Let's Encrypt:
```bash
sudo certbot --nginx -d yourdomain.com
```

## Docker

### Dockerfile (create in root):
```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### Build and run:
```bash
docker build -t sg-kiit-recruitment .
docker run -p 3000:3000 sg-kiit-recruitment
```

## Post-Deployment Checklist

- [ ] Test all sections load correctly
- [ ] Verify mobile responsiveness
- [ ] Test form submission
- [ ] Update social media links
- [ ] Update contact email
- [ ] Add real event images
- [ ] Setup analytics (Google Analytics, Plausible, etc.)
- [ ] Configure SEO meta tags for social sharing
- [ ] Test page speed with Lighthouse
- [ ] Setup monitoring (UptimeRobot, StatusCake, etc.)

## Custom Domain

### Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS

## Performance Optimization

After deployment:
- Enable compression on your server/CDN
- Setup CDN for static assets (Cloudflare, etc.)
- Enable caching headers
- Optimize images if not already done
- Monitor Core Web Vitals

## Support

For deployment issues:
- Next.js: https://nextjs.org/docs/deployment
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
