# Setup Guide for Astro Personal Blog

This guide will help you customize this generic blog platform for your own personal use.

## 🚀 Quick Start

1. **Fork or Clone** this repository
2. **Install Dependencies**: `npm install`
3. **Start Development**: `npm run dev`
4. **Customize** the content and configuration
5. **Deploy** to your preferred hosting platform

## 📝 Essential Customizations

### 1. Update Site Information (`src/consts.ts`)

```typescript
// Site Information
export const SITE_TITLE = "Your Blog Name";
export const SHORT_SITE_TITLE = "Your Blog";
export const SITE_DESCRIPTION = "Your blog description here";
export const SITE_URL = "https://yourdomain.com";

// Author Information
export const AUTHOR: Author = {
  name: "Your Name",
  email: "your.email@example.com",
  url: "https://yourdomain.com",
  twitter: "@yourusername",
  github: "yourusername",
  linkedin: "yourusername",
};

// Social Media Links
export const SOCIAL_LINKS: SocialLinks = {
  twitter: "https://twitter.com/yourusername",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  bluesky: "https://bsky.app/profile/yourusername.bsky.social",
  website: "https://yourdomain.com",
  portfolio: "https://portfolio.yourdomain.com",
};
```

### 2. Update Package.json

```json
{
  "name": "your-blog-name",
  "repository": {
    "url": "https://github.com/yourusername/your-blog-name.git"
  },
  "homepage": "https://yourdomain.com"
}
```

### 3. Update Astro Configuration (`astro.config.mjs`)

```javascript
image: {
  domains: ["yourdomain.com"],
  remotePatterns: [
    {
      protocol: "https",
      hostname: "yourdomain.com",
      pathname: "/images/**",
    },
  ],
},
```

### 4. Customize Categories (`src/data/categories.ts`)

Modify the categories to match your content themes:

```typescript
export const categories: Category[] = [
  {
    id: "your-category",
    name: "Your Category Name",
    description: "Description of your category",
    icon: "🎯",
  },
  // Add more categories...
];
```

### 5. Update Navigation (`src/data/navigation.ts`)

Adjust the navigation structure to match your categories and content organization.

### 6. Replace Sample Content

- **About Page**: Update `src/pages/about.astro` with your information
- **Home Page**: Modify `src/pages/index.astro` with your messaging
- **Sample Posts**: Replace the content in `src/content/p/` with your own writings

### 7. Update Site Manifest (`public/site.webmanifest`)

```json
{
  "name": "Your Blog Name",
  "short_name": "Your Blog",
  "description": "Your blog description",
  "categories": ["blog", "your-topics", "content-creation"]
}
```

## 🎨 Styling Customizations

### Colors and Themes

The blog uses CSS custom properties for theming. You can customize colors in `src/styles/global.css`:

```css
:root {
  --color-primary: 59 130 246;    /* Blue */
  --color-accent: 168 85 247;     /* Purple */
  --color-text: 15 23 42;         /* Dark text */
  --color-bg: 255 255 255;        /* White background */
}

[data-theme="dark"] {
  --color-primary: 59 130 246;    /* Blue */
  --color-accent: 168 85 247;     /* Purple */
  --color-text: 248 250 252;      /* Light text */
  --color-bg: 15 23 42;           /* Dark background */
}
```

### Typography

Customize fonts in `src/styles/fonts.css` and `src/styles/typography.css`.

### Logo

Replace the logo in the `Logo.astro` component or update the SVG in the component itself.

## 📱 Content Management

### Frontmatter Format

All blog posts use a standardized frontmatter format:

```yaml
---
title: "Your Post Title"
description: "Brief description of your post"
pubDate: "2025-01-01T00:00:00.000Z"
language: ["en"]
heroImage: "/images/your-hero-image.jpg"
category: ["your-category"]
tags: ["tag1", "tag2"]
featured: true
translationGroup: "unique-group-id" # For multilingual content
draft: false
---
```

### Multilingual Support

To add content in multiple languages:

1. Create posts with the same `translationGroup`
2. Set `featured: true` for the primary language
3. Set `featured: false` for secondary languages
4. Use appropriate language codes in the `language` field

### Images

- Place images in `public/images/`
- Use `.avif` format for optimal performance
- Include hero images for featured posts
- Optimize images before adding to the project

## 🔧 Advanced Features

### Reading Progress System

The blog includes an advanced reading progress system that:
- Tracks reading progress locally
- Shows completion status
- Syncs across browser tabs
- Respects user privacy

### Comments System

Comments are powered by Giscus (GitHub Discussions):
1. Set up a GitHub repository
2. Enable Discussions
3. Configure Giscus in `src/config/giscus.ts`
4. Run `npm run setup-comments`

### API Endpoints

The blog includes several API endpoints:
- `/api/quotes` - Random Stoic philosophy quotes
- `/feed.json` - JSON feed for content syndication
- `/rss.xml` - RSS feed for traditional readers

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Astro configuration
3. Deploy with zero configuration

### Other Platforms

The blog can be deployed to any static hosting platform:
- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

## 📚 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run setup-comments # Setup Giscus comment system
npm run generate-favicons # Generate favicon assets
npm run validate-feeds # Validate RSS and JSON feeds
npm run audit-frontmatter # Audit frontmatter consistency
npm run standardize-frontmatter # Standardize frontmatter format
```

## 🎯 Next Steps

After customizing the basic configuration:

1. **Add Your Content**: Start writing and publishing your posts
2. **Customize Styling**: Adjust colors, fonts, and layout to match your brand
3. **Set Up Analytics**: Add Google Analytics or other tracking tools
4. **Configure SEO**: Update meta tags and structured data
5. **Set Up Comments**: Configure the Giscus comment system
6. **Deploy**: Deploy to your chosen hosting platform

## 🤝 Support

This blog platform is designed to be self-contained and easy to customize. If you need help:

1. Check the documentation in the `docs/` folder
2. Review the component code in `src/components/`
3. Examine the utility functions in `src/utils/`
4. Look at the existing content for examples

## 📄 License

- **Code**: MIT License - Feel free to modify and use
- **Content**: Creative Commons Attribution-NonCommercial-ShareAlike 4.0
- **Third-party Assets**: Check individual licenses for images and other assets

---

Happy blogging! 🎉
