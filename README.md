# Curious Chaos Journal

[![Version](https://img.shields.io/badge/version-2.14.0-blue.svg)](https://github.com/antoniwan/curious-chaos-journal/releases)

A personal blog exploring fatherhood, masculinity, culture, and modern collapse through raw reflections on thinking, consciousness, and the soft heart inside the hard world.

## Overview

- **52+ writings** exploring personal growth, consciousness, and modern life
- **9 content categories** covering fatherhood, psychology, politics, and more
- **Multilingual system** with automatic translation discovery (English/Spanish)
- **Dark mode** with system preference detection
- **Responsive design** optimized for all devices
- **SEO optimized** with structured data and Open Graph
- **Guided Path** - Seasonal reading experience with progress tracking

## Tech Stack

- **Astro 5.11.0** - Static site generator
- **TypeScript 5.8.3** - Type-safe development
- **Tailwind CSS 3.4.17** - Utility-first CSS
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
| `npm run validate-feeds` | Validate RSS and JSON feeds |

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
└── astro.config.mjs      # Astro configuration
```

## Content Management

### Blog Writings

All writings follow a standardized frontmatter format. See [docs/frontmatter-spec.md](docs/frontmatter-spec.md) for details.

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
featured: true
translationGroup: "unique-group-id" # Links related translations
draft: false
---
```

### Multilingual Content

The site supports bilingual content with automatic translation discovery:

**Publishing Translations:**

1. Set the same `translationGroup` value in both language versions
2. Use `featured: true` for the primary language (usually English)
3. Use `featured: false` for secondary languages to prevent duplicate listings
4. The system automatically links translations with language flags

**Example Translation Pair:**

```yaml
# English version
translationGroup: "my-article"
featured: true
language: ["en"]

# Spanish version
translationGroup: "my-article"
featured: false
language: ["es"]
```

### Categories

- **Art & Expression** - Creative content and aesthetic exploration
- **DIY & Creation** - Physical builds and handmade projects
- **Integration & Growth** - Personal development and consciousness
- **Learning Projects** - Documentation of skill development
- **Metaspace** - Reflections on the journey itself
- **Parenting** - Family dynamics and child development
- **Politics** - Social structures and power dynamics
- **Psychology** - Human behavior and mental processes
- **Systems & Strategy** - Technical and organizational systems

## Features

- **Dark/Light Mode** - Automatic theme switching
- **Image Optimization** - WebP conversion with clickable modals
- **RSS Feed** - Full content syndication with enhanced metadata
- **JSON Feed** - Modern feed format for better compatibility
- **Search Functionality** - Content discovery
- **Comments System** - Privacy-focused Giscus integration
- **Breadcrumb Navigation** - Clear page hierarchy
- **Reading Progress** - Visual progress indicator for writings
- **Brain Science Analytics** - Writing pattern analysis
- **Tag Management** - Advanced tag usage analytics
- **Internal API** - Stoic quotes for enhanced user experience
- **Social Sharing** - Multi-platform sharing with mobile-first responsive design
- **Guided Path** - Seasonal reading experience with progress tracking and privacy-first design
- **Multilingual Support** - Automatic translation discovery and language switching

## API

### Quotes API

The site includes an internal API for accessing Stoic philosophy quotes:

- **Endpoint**: `GET /api/quotes`
- **Purpose**: Returns random Stoic philosophy quotes with metadata
- **Documentation**: [API Documentation](docs/quotes-api.md)

## Documentation

Essential documentation available in `docs/`:

- [Frontmatter Specification](docs/frontmatter-spec.md)
- [Comments Setup](docs/comments-setup.md)
- [Quotes API](docs/quotes-api.md)
- [Multilingual Setup](docs/multilingual-setup.md)

## License

- **Content**: [Creative Commons Attribution-NonCommercial-ShareAlike 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
- **Code**: [MIT License](https://opensource.org/licenses/MIT)
