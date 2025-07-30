# Curious Chaos Journal

[![Version](https://img.shields.io/badge/version-2.8.0-blue.svg)](https://github.com/antoniwan/curious-chaos-journal/releases)

A personal blog built with Astro, documenting thoughts on technology, personal growth, and creative expression. Features an internal API for Stoic philosophy quotes.

## Overview

- **52 blog posts** with complete frontmatter compliance
- **9 content categories** with comprehensive tagging
- **Multi-language support** (English/Spanish)
- **Dark mode** with system preference detection
- **Responsive design** optimized for all devices
- **SEO optimized** with structured data and Open Graph
- **Internal API** for Stoic philosophy quotes
- **Enhanced 404 page** with professional loading states and error handling
- **Social Sharing** with mobile-first responsive design and native share API support

## Tech Stack

- **Astro 5.11.0** - Static site generator
- **TypeScript 5.8.3** - Type-safe development
- **Tailwind CSS 3.4.17** - Utility-first CSS (latest stable)
- **MDX** - Markdown with JSX support
- **Sharp 0.33.5** - Image optimization
- **Giscus** - GitHub Discussions-based comments
- **Vercel** - Deployment platform

## Quick Start

```bash
git clone https://github.com/antoniwan/curious-chaos-journal.git
cd curious-chaos-journal
npm install
npm run dev
```

Visit `http://localhost:4323` to view the site.

## Available Scripts

| Command                  | Action                      |
| ------------------------ | --------------------------- |
| `npm run dev`            | Start development server    |
| `npm run build`          | Build for production        |
| `npm run preview`        | Preview production build    |
| `npm run setup-comments` | Setup Giscus comment system |

### Content Management

| Command                                   | Action                                 |
| ----------------------------------------- | -------------------------------------- |
| `node scripts/audit-frontmatter.js`       | Audit posts for frontmatter compliance |
| `node scripts/standardize-frontmatter.js` | Standardize all posts automatically    |

## Project Structure

```
curious-chaos-journal/
├── public/                 # Static assets
├── src/
│   ├── components/        # UI components
│   ├── content/p/         # Blog posts
│   ├── data/             # Categories, navigation, and quotes
│   ├── layouts/          # Page layouts
│   ├── pages/            # Route components
│   │   └── api/          # API endpoints
│   ├── styles/           # Global styles
│   └── utils/            # Utility functions
├── scripts/              # Automation tools
├── docs/                 # Documentation
└── astro.config.mjs      # Astro configuration
```

## API

### Quotes API

The site includes an internal API for accessing Stoic philosophy quotes:

- **Endpoint**: `GET /api/quotes`
- **Purpose**: Returns random Stoic philosophy quotes with metadata
- **Use Cases**: 404 pages, future content features
- **Features**: Enhanced error handling with retry logic and fallback content
- **Documentation**: [API Documentation](docs/QUOTES_API.md)

#### Quick Example

```javascript
const response = await fetch("/api/quotes");
const data = await response.json();
console.log(data.quote.text); // Random Stoic quote
```

## Content Management

### Blog Posts

All posts follow a standardized frontmatter format. See [docs/OFFICIAL_FRONTMATTER_SPECIFICATION.md](docs/OFFICIAL_FRONTMATTER_SPECIFICATION.md) for details.

Example frontmatter:

```yaml
---
title: "Post Title"
description: "Post description"
pubDate: "2025-01-01T00:00:00.000Z"
language: ["en"]
heroImage: "/images/hero-image.jpg"
category: ["integration-growth"]
tags: ["tag1", "tag2"]
readingTime: 5
draft: false
---
```

### Categories

- **Art & Expression** - Creative content and aesthetic exploration
- **DIY & Creation** - Physical builds and handmade projects
- **Integration & Growth** - Personal development and leadership
- **Learning Projects** - Documentation of skill development
- **Metaspace** - Reflections on the journey itself
- **Parenting** - Family dynamics and child development
- **Politics** - Social structures and power dynamics
- **Psychology** - Human behavior and mental processes
- **Systems & Strategy** - Technical and organizational systems

## Features

- **Dark/Light Mode** - Automatic theme switching
- **Image Optimization** - WebP conversion with clickable modals
- **RSS Feed** - Full content syndication
- **Search Functionality** - Content discovery
- **Comments System** - Privacy-focused Giscus integration
- **Breadcrumb Navigation** - Clear page hierarchy
- **Reading Progress** - Visual progress indicator
- **Brain Science Analytics** - Writing pattern analysis
- **Tag Management** - Advanced tag usage analytics
- **Internal API** - Stoic quotes for enhanced user experience
- **Social Sharing** - Multi-platform sharing with mobile-first responsive design

## Configuration

- **Site URL**: `https://blog.antoniwan.online`
- **Image Optimization**: Sharp service with WebP conversion
- **Markdown**: Shiki syntax highlighting
- **Prefetch**: Intelligent link prefetching
- **Vercel Adapter**: Optimized deployment

## Social Sharing

The blog features a comprehensive social sharing system designed with a **mobile-first approach**:

### Supported Platforms

- 🐦 Twitter/X
- 🌀 BlueSky
- 📘 Facebook
- 🧵 Threads
- 💼 LinkedIn
- 🔗 Copy Link

### Device-Specific Experience

- **Mobile**: Floating Action Button (FAB) + in-content share button
- **Tablet**: Horizontal share bar below content
- **Desktop**: Vertical share bar in sidebar

### Features

- Native Web Share API support with fallback
- Copy-to-clipboard functionality with toast notifications
- Responsive design optimized for all devices
- Platform-specific sharing URLs
- Accessibility compliant with ARIA labels and keyboard navigation

## Documentation

Comprehensive documentation available in `docs/`:

- [Frontmatter Specification](docs/OFFICIAL_FRONTMATTER_SPECIFICATION.md)
- [Comments Setup](docs/COMMENTS_SETUP.md)
- [Brain Science Analytics](docs/BRAIN_SCIENCE_SECTION.md)
- [Tag Management](docs/TAG_MANAGEMENT_SECTION.md)
- [Quotes API](docs/QUOTES_API.md)
- [Social Sharing Implementation](docs/SOCIAL_SHARING_IMPLEMENTATION.md)

## License

- **Content**: [Creative Commons Attribution-NonCommercial-ShareAlike 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
- **Code**: [MIT License](https://opensource.org/licenses/MIT)
