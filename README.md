# StrongVault

A personal digital space where I document my journey of building systems — digital, emotional, spiritual, and physical. This is more than just a blog; it's a living document of my exploration, creation, and growth.

## 🌟 What You'll Find Here

- 🎵 **Art & Expression** — creative soul, aesthetic power, truth-telling
- 🛠️ **DIY & Creation** — physical builds, handmade goods, crafting
- 🧘🏽‍♂️ **Integration & Growth** — inner mastery, parenting, masculine leadership
- 📚 **Learning Projects** — documentation of mastery in progress
- 🌀 **Metaspace** — reflections on the journey itself
- 👨‍👩‍👧‍👦 **Parenting** — raising resilient children, family dynamics, and personal growth
- ⚖️ **Politics** — power dynamics, social structures, and collective healing
- 🧠 **Psychology** — human behavior, social dynamics, and mental processes
- 💻 **Systems & Strategy** — technical systems, organizational design, and strategic thinking

## 🛠️ Tech Stack

- **[Astro 5.11.0](https://astro.build)** - Modern static site builder with SSR capabilities
- **[TypeScript 5.8.3](https://www.typescriptlang.org/)** - Type-safe JavaScript development
- **[MDX](https://mdxjs.com/)** - Markdown with JSX support for enhanced content
- **[Tailwind CSS 3.4.0](https://tailwindcss.com/)** - Utility-first CSS framework with custom design system
- **[Sharp 0.33.5](https://sharp.pixelplumbing.com/)** - High-performance image optimization
- **[Vercel Analytics](https://vercel.com/analytics)** - Performance monitoring and insights
- **[Vercel Speed Insights](https://vercel.com/speed-insights)** - Real-time performance metrics
- **[PostCSS](https://postcss.org/)** - CSS processing with Autoprefixer
- **[date-fns 4.1.0](https://date-fns.org/)** - Modern date utility library

## 🚀 Features

### Core Features

- ✅ **Responsive Design** - Mobile-first approach with optimized layouts
- ✅ **Dark Mode Support** - System preference detection with manual toggle
- ✅ **Image Optimization** - Automatic WebP conversion and lazy loading
- ✅ **RSS Feed** - Full RSS feed support for content syndication
- ✅ **Sitemap Generation** - Automatic XML sitemap for SEO
- ✅ **Vercel Integration** - Analytics, Speed Insights, and deployment
- ✅ **TypeScript** - Full type safety across the application
- ✅ **Content Collections** - Structured content management with validation
- ✅ **Reading Progress** - Visual reading progress indicator
- ✅ **Back to Top** - Smooth scroll to top functionality
- ✅ **Accessibility** - WCAG compliant with skip links and ARIA support
- ✅ **SEO Optimized** - Meta tags, structured data, and Open Graph support

### Content Management

- ✅ **Multi-language Support** - English and Spanish content
- ✅ **Category Organization** - 9 main categories with icons and descriptions
- ✅ **Tag System** - Flexible tagging for content discovery
- ✅ **Reading Time Estimation** - Automatic calculation based on content length
- ✅ **Publication Tracking** - Creation and update date management
- ✅ **Draft System** - Draft posts for work-in-progress content
- ✅ **Featured Posts** - Highlight important content
- ✅ **Hero Images** - Support for featured images with optimization
- ✅ **Content Validation** - Schema-based frontmatter validation

### Design System

- ✅ **Custom Color Palette** - Primary, neutral, and semantic color scales
- ✅ **Typography System** - Custom font families with responsive scaling
- ✅ **Spacing System** - Consistent vertical rhythm and spacing
- ✅ **Component Library** - Reusable UI components with consistent styling
- ✅ **Dark Mode** - Complete dark theme with CSS custom properties
- ✅ **Responsive Breakpoints** - Mobile-first responsive design
- ✅ **Animation System** - Smooth transitions with reduced motion support

### Performance

- ✅ **Image Optimization** - Sharp-based processing with WebP conversion
- ✅ **Lazy Loading** - Intelligent image loading with eager option for above-the-fold
- ✅ **Code Splitting** - Automatic code splitting for optimal loading
- ✅ **Caching Strategy** - Optimized caching for static assets
- ✅ **Prefetch Strategy** - Intelligent link prefetching
- ✅ **Bundle Optimization** - Minimal bundle sizes with tree shaking

### Developer Experience

- ✅ **Hot Module Replacement** - Fast development with instant updates
- ✅ **Type Safety** - Full TypeScript integration with strict mode
- ✅ **Content Validation** - Runtime validation of content frontmatter
- ✅ **Development Server** - Fast local development with live reload

## 📦 Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/antoniwan/strongvault.git
cd strongvault
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## 🏗️ Project Structure

```text
strongvault/
├── public/                 # Static assets and images
│   ├── images/            # Optimized images and media
│   └── symbols/           # Icon and symbol assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── BackToTop.astro
│   │   ├── BaseHead.astro
│   │   ├── Disclaimer.astro
│   │   ├── Footer.astro
│   │   ├── FormattedDate.astro
│   │   ├── Header.astro
│   │   ├── Logo.astro
│   │   ├── MobileNav.astro
│   │   ├── Navigation.astro
│   │   ├── PageHeader.astro
│   │   ├── PostCard.astro
│   │   ├── ReadingProgress.astro
│   │   └── ThemeToggle.astro
│   ├── content/          # Content collections
│   │   └── p/           # Blog posts (Markdown/MDX)
│   ├── data/            # Static data and configurations
│   │   ├── categories.ts # Category definitions
│   │   └── navigation.ts # Navigation structure
│   ├── layouts/         # Page layouts and templates
│   │   ├── BaseLayout.astro
│   │   ├── BlogLayout.astro
│   │   ├── HomeLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/           # Route components and pages
│   │   ├── category/    # Category pages
│   │   ├── p/          # Blog post pages
│   │   └── tag/        # Tag pages
│   ├── scripts/        # Build and utility scripts
│   └── styles/         # Global styles and CSS
│       ├── design-system.css # Design system styles
│       ├── fonts.css   # Font definitions
│       ├── global.css  # Global styles
│       ├── main.css    # Main stylesheet
│       └── typography.css # Typography styles
├── astro.config.mjs    # Astro configuration
├── content.config.ts   # Content collection schemas
├── package.json        # Dependencies and scripts
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🧞 Available Scripts

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Installs project dependencies                    |
| `npm run dev`       | Starts development server at `localhost:4321`    |
| `npm run build`     | Builds production site to `./dist/`              |
| `npm run preview`   | Previews production build locally                |
| `npm run astro`     | Runs Astro CLI commands                          |

## 📝 Content Structure

### Blog Posts

Posts are written in Markdown/MDX format with structured frontmatter:

```yaml
---
title: "Post Title"
description: "Post description"
pubDate: "2025-01-01T00:00:00.000Z"
heroImage: "/images/hero-image.jpg"
language: ["en", "es"]
category: ["integration-growth", "learning-projects"]
tags: ["tag1", "tag2"]
readingTime: 5
draft: false
featured: true
---
```

### Categories

The blog is organized into 9 main categories:

- 🎵 **Art & Expression** - Creative and aesthetic content
- 🛠️ **DIY & Creation** - Physical builds and crafting
- 🧘🏽‍♂️ **Integration & Growth** - Personal development and mastery
- 📚 **Learning Projects** - Documentation of skills and knowledge
- 🌀 **Metaspace** - Reflections on the journey itself
- 👨‍👩‍👧‍👦 **Parenting** - Family dynamics and child-rearing
- ⚖️ **Politics** - Social structures and power dynamics
- 🧠 **Psychology** - Human behavior and mental processes
- 💻 **Systems & Strategy** - Technical systems and strategic thinking

## 🎨 Design System

### Colors

- **Primary**: Deep navy blues representing strength and depth
- **Neutral**: Grayscale palette for text and backgrounds
- **Accent**: Purple tones for creativity and wisdom
- **Semantic**: Success, warning, error, and info colors

### Typography

- **Sans**: Open Sans for UI and body text
- **Serif**: Source Serif Pro for headings and emphasis
- **Mono**: Fira Code for code and technical content

### Spacing

- **Section**: 4rem (64px) for major sections
- **Block**: 2rem (32px) for block-level elements
- **Element**: 1rem (16px) for element-level spacing
- **Content**: 0.75rem (12px) for content-level spacing

## 🔧 Configuration

### Astro Configuration

- **Site URL**: `https://blog.antoniwan.online`
- **Image Optimization**: Sharp service with WebP conversion
- **Markdown**: Shiki syntax highlighting with GitHub Dark theme
- **Prefetch**: Intelligent link prefetching strategy
- **Vercel Adapter**: Optimized for Vercel deployment

### Content Configuration

- **Validation**: Zod schemas for frontmatter validation
- **Collections**: Structured content collections with TypeScript
- **Categories**: Predefined categories with icons and descriptions
- **Tags**: Flexible tagging system for content organization

## 🚀 Deployment

The site is deployed on Vercel with the following optimizations:

- **Static Generation**: Pre-built static files for optimal performance
- **Image Optimization**: Automatic WebP conversion and responsive images
- **CDN**: Global content delivery network
- **Analytics**: Built-in performance monitoring
- **Speed Insights**: Real-time performance metrics

## 📊 Content Overview

The blog currently features diverse content across multiple domains:

- **Technical Guides**: Terminal customization, development workflows
- **Health & Nutrition**: Nutritional analysis, dietary insights
- **Personal Development**: Self-mastery, parenting, life philosophy
- **Creative Expression**: Art, aesthetics, and personal projects
- **Systems Thinking**: Strategic approaches to life and work

## 🤝 Connect With Me

- 🛠 [Builds.software](https://builds.software) — my technical portfolio
- 💜 [Strong Hands, Soft Heart](https://stronghandssoftheart.com) — my brand
- 🐙 [GitHub](https://github.com/antoniwan) — open source & code
- 🌀 [BlueSky](https://bsky.app/profile/antoniwan.online) — my social brain

## 📄 License

This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

---

> "If you're building something good, or trying to become someone better, I'm probably down to help. Get in touch." — Antonio Rodríguez Martínez

## 🆕 Recent Updates

- **v2.0.0**: Complete redesign with enhanced design system
- **Enhanced Typography**: Improved font system with better readability
- **Image Optimization**: Upgraded to Sharp 0.33.5 for better performance
- **Content Validation**: Added comprehensive frontmatter validation
- **Accessibility**: Improved WCAG compliance and keyboard navigation
- **Performance**: Optimized bundle sizes and loading strategies
- **Content Organization**: Structured content with 9 main categories
- **Multi-language Support**: English and Spanish content support
