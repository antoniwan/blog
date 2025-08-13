# Astro Personal Blog

[![Version](https://img.shields.io/badge/version-2.18.1-blue.svg)](https://github.com/yourusername/astro-personal-blog/releases)

A modern, feature-rich personal blog built with Astro. Perfect for writers, thinkers, and creators who want to share their thoughts with the world.

## Overview

- **Modern Blog Platform** - Built with Astro 5.11.0 for optimal performance
- **Content Categories** - Organized content management system
- **Multilingual Support** - Built-in translation linking system
- **Dark/Light Mode** - Automatic theme switching with system preference detection
- **Responsive Design** - Optimized for all devices and screen sizes
- **SEO Optimized** - Structured data, Open Graph, and comprehensive meta tags
- **Advanced Reading System** - Smart progress tracking with toast notifications
- **Automatic Reading Time** - Calculated reading times for all content using Astro remark plugin
- **Guided Path** - Seasonal reading experience with privacy-first progress tracking

## Tech Stack

- **Astro 5.11.0** - Static site generator
- **TypeScript 5.8.3** - Type-safe development
- **Tailwind CSS 3.4.17** - Utility-first CSS
- **MDX** - Markdown with JSX support
- **Sharp 0.33.5** - Image optimization
- **Reading Time Plugin** - Automatic reading time calculation using remark plugin
- **Giscus** - GitHub Discussions-based comments
- **Vercel** - Deployment platform

## Quick Start

```bash
git clone https://github.com/yourusername/astro-personal-blog.git
cd astro-personal-blog
npm install
npm run dev
```

Visit `http://localhost:4323` to view the site.

## Available Scripts

| Command                     | Action                           |
| --------------------------- | -------------------------------- |
| `npm run dev`               | Start development server         |
| `npm run build`             | Build for production             |
| `npm run preview`           | Preview production build         |
| `npm run setup-comments`    | Setup Giscus comment system      |
| `npm run generate-favicons` | Generate favicon assets          |
| `npm run validate-feeds`    | Validate RSS and JSON feeds      |
| `npm run audit-frontmatter` | Audit frontmatter consistency    |
| `npm run standardize-frontmatter` | Standardize frontmatter format |
| `npm run remove-legacy-reading-time` | Remove legacy reading time fields |

## Project Structure

```text
astro-personal-blog/
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

### Blog Posts

All posts follow a standardized frontmatter format. See [docs/frontmatter-spec.md](docs/frontmatter-spec.md) for details.

Example frontmatter:

```yaml
---
title: "Post Title"
description: "Post description"
pubDate: "2025-01-01T00:00:00.000Z"
language: ["en"]
heroImage: "/images/hero-image.jpg"
category: ["personal-growth"]
tags: ["tag1", "tag2"]
# minutesRead: "5 min read" # Automatically calculated
featured: true
translationGroup: "unique-group-id" # Links related translations
draft: false
---
```

### Reading Time System

**Automatic Reading Time Calculation:**

- **Remark Plugin Integration** - Uses Astro's remark plugin system for automatic calculation
- **Content-Based Calculation** - Reading time calculated from actual content length, not estimates
- **Consistent Display** - Reading times appear across all components (posts, cards, feeds, analytics)
- **SEO Optimized** - Structured data includes accurate reading time for search engines

### Reading Progress System

Advanced reading progress tracking with intelligent completion detection:

**Smart Completion Detection:**

- Triggers "read" status at 75% of article content (excluding comments/footer)
- Toast notification appears with green checkmark and "Read" confirmation
- Progress syncs instantly across all browser tabs
- Positioned to avoid conflicts with Back-to-Top button

**Privacy-First Storage:**

- All data stored locally in browser localStorage
- Schema versioning for future-proof data migration
- Automatic data pruning keeps 50 most recent posts when over quota
- No server tracking or analytics - completely private

**Cross-Component Reactivity:**

- Real-time updates across all reading indicators
- Chapter progress updates automatically
- Guided Path progress reflects immediately
- Custom events for seamless communication

### Multilingual Content

The site supports bilingual content with translation linking:

**Publishing Translations:**

1. Set the same `translationGroup` value in both language versions
2. Use `featured: true` for the primary language (usually English)
3. Use `featured: false` for secondary languages to prevent duplicate listings
4. The system links translations and displays language toggles

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

### Default Categories

- **Art & Expression** - Creative content and aesthetic exploration
- **DIY & Creation** - Physical builds and handmade projects
- **Personal Growth** - Personal development and consciousness
- **Learning Projects** - Documentation of skill development
- **Metaspace** - Reflections on the journey itself
- **Family & Relationships** - Family dynamics and personal growth
- **Society & Culture** - Social structures and cultural dynamics
- **Psychology** - Human behavior and mental processes
- **Systems & Strategy** - Technical and organizational systems

## Features

### 🎨 **User Experience**

- **Dark/Light Mode** - Automatic theme switching with system preference detection
- **Advanced Reading System** - Smart progress tracking that triggers at 75% completion (before comments/footer)
- **Toast Notifications** - Lightweight, non-intrusive "Read" confirmations with smooth animations
- **Cross-Tab Synchronization** - Reading progress syncs instantly across browser tabs
- **Mobile-First Design** - Responsive layouts optimized for all screen sizes

### 📚 **Content & Navigation**

- **Search Functionality** - Intelligent content discovery across all writings
- **Guided Path** - Seasonal reading experience with chapter progress tracking
- **Breadcrumb Navigation** - Clear page hierarchy and location awareness
- **Tag Management** - Advanced tag usage analytics and filtering
- **Writing Analytics** - Writing pattern analysis and insights

### 🔒 **Privacy & Security**

- **Privacy-First Storage** - All reading data stored locally with no tracking
- **XSS Protection** - Secure DOM manipulation throughout the application
- **Data Validation** - Robust localStorage data integrity checking
- **Schema Versioning** - Future-proof data migration system
- **Storage Quotas** - Automatic data pruning with 5MB limits

### 🌐 **Technical Features**

- **Image Optimization** - WebP conversion with clickable modals
- **RSS/JSON Feeds** - Full content syndication with enhanced metadata
- **Comments System** - Privacy-focused Giscus integration
- **Social Sharing** - Multi-platform sharing (Twitter, BlueSky, Facebook, Threads, LinkedIn)
- **Internal API** - Stoic quotes system for enhanced user experience
- **Multilingual Support** - Translation linking with language toggles

## API

### Quotes API

The site includes an internal API for accessing Stoic philosophy quotes:

- **Endpoint**: `GET /api/quotes`
- **Purpose**: Returns random Stoic philosophy quotes with metadata
- **Documentation**: [API Documentation](docs/quotes-api.md)

## Recent Updates (v2.18.1)

### 🚀 **Major Enhancements**

- **Automatic Reading Time** - Implemented Astro remark plugin for automatic reading time calculation
- **Reading Time Integration** - Full integration across all components, feeds, and analytics
- **Navigation Updates** - Enhanced navigation system with improved content organization
- **Content Management** - Streamlined content updates and management workflows
- **Script Automation** - Added frontmatter audit and standardization tools
- **Smart Reading Progress** - Optimized completion detection at 75% of content
- **Toast Notifications** - Lightweight "Read" confirmations with smooth animations
- **Cross-Tab Sync** - Reading progress syncs instantly across browser tabs
- **Security Hardening** - Fixed XSS vulnerabilities and added data validation
- **Storage Optimization** - Centralized configuration with schema versioning
- **Component Cleanup** - Memory leak prevention with proper event listener cleanup

### 🔧 **Technical Improvements**

- **Reading Time Plugin** - Custom remark plugin for automatic content analysis
- **Content Integration** - Full integration across feeds, structured data, and analytics
- **Type Safety** - Enhanced TypeScript types for new reading time fields
- Centralized storage constants across all components
- Enhanced LocalStorageManager with quota management
- Custom events for real-time reactivity (`reading-data-updated`)
- Performance optimizations with throttled scroll events

## Documentation

Essential documentation available in `docs/`:

- [Frontmatter Specification](docs/frontmatter-spec.md)
- [Comments Setup](docs/comments-setup.md)
- [Quotes API](docs/quotes-api.md)
- [Multilingual Setup](docs/multilingual-setup.md)

## Customization

This blog platform is designed to be easily customizable:

1. **Update Site Information** - Modify `src/consts.ts` with your details
2. **Replace Content** - Update the about page and sample posts
3. **Customize Categories** - Modify `src/data/categories.ts` for your topics
4. **Update Navigation** - Adjust `src/data/navigation.ts` for your structure
5. **Personalize Styling** - Customize colors and themes in `src/styles/`
6. **Add Your Content** - Replace sample posts with your own writings

## License

- **Content**: [Creative Commons Attribution-NonCommercial-ShareAlike 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
- **Code**: [MIT License](https://opensource.org/licenses/MIT)
