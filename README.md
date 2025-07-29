# Curious Chaos Journal

[![Version](https://img.shields.io/badge/version-2.2.2-blue.svg)](https://github.com/antoniwan/curious-chaos-journal/releases)

A personal digital space documenting the journey of building systems — digital, emotional, spiritual, and physical. Raw reflections on thinking, culture, and the soft heart inside the hard world.

> **"Thinking hurts. I do it anyway."**

## 🌟 Content Categories

- 🎵 **Art & Expression** — Creative soul, aesthetic power, truth-telling
- 🛠️ **DIY & Creation** — Physical builds, handmade goods, crafting
- 🧘🏽‍♂️ **Integration & Growth** — Inner mastery, parenting, masculine leadership
- 📚 **Learning Projects** — Documentation of mastery in progress
- 🌀 **Metaspace** — Reflections on the journey itself
- 👨‍👩‍👧‍👦 **Parenting** — Raising resilient children, family dynamics
- ⚖️ **Politics** — Power dynamics, social structures, collective healing
- 🧠 **Psychology** — Human behavior, social dynamics, mental processes
- 💻 **Systems & Strategy** — Technical systems, organizational design

## 🛠️ Tech Stack

- **[Astro 5.12.5](https://astro.build)** - Modern static site builder
- **[TypeScript 5.8.3](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Utility-first CSS framework
- **[MDX](https://mdxjs.com/)** - Markdown with JSX support
- **[Sharp 0.33.5](https://sharp.pixelplumbing.com/)** - Image optimization
- **[Giscus](https://giscus.app)** - Privacy-focused comments system
- **[Vercel](https://vercel.com/)** - Deployment and analytics

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/antoniwan/strongvault.git
cd strongvault
npm install

# Start development
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:4321` to see the site.

## 📦 Available Scripts

| Command                  | Action                      |
| ------------------------ | --------------------------- |
| `npm run dev`            | Start development server    |
| `npm run build`          | Build for production        |
| `npm run preview`        | Preview production build    |
| `npm run astro`          | Run Astro CLI commands      |
| `npm run setup-comments` | Setup Giscus comment system |

## 🏗️ Project Structure

```
strongvault/
├── public/                 # Static assets
│   ├── images/            # Optimized images
│   └── symbols/           # Icon assets
├── src/
│   ├── components/        # Reusable UI components
│   ├── content/p/         # Blog posts (Markdown/MDX)
│   ├── data/             # Categories and navigation
│   ├── layouts/          # Page layouts
│   ├── pages/            # Route components
│   ├── styles/           # Global styles and CSS
│   └── utils/            # Utility functions
├── astro.config.mjs      # Astro configuration
├── content.config.ts     # Content schemas
└── tailwind.config.js    # Tailwind configuration
```

## 📝 Content Management

### Blog Posts

Posts use Markdown/MDX with structured frontmatter:

```yaml
---
title: "Post Title"
description: "Post description"
pubDate: "2025-01-01T00:00:00.000Z"
heroImage: "/images/hero-image.jpg"
language: ["en", "es"]
category: ["integration-growth"]
tags: ["tag1", "tag2"]
readingTime: 5
draft: false
featured: true
---
```

### Categories & Tags

- **Categories**: 9 main categories with icons and descriptions
- **Tags**: Flexible tagging system for content discovery
- **Multi-language**: Support for English and Spanish content
- **Draft System**: Work-in-progress content management

## 🎨 Design System

### Colors

- **Primary**: Deep navy blues for strength and depth
- **Neutral**: Grayscale palette for text and backgrounds
- **Accent**: Purple tones for creativity and wisdom

### Typography

- **Sans**: Open Sans for UI and body text
- **Serif**: Source Serif Pro for headings
- **Mono**: Fira Code for code content

### Features

- ✅ **Dark Mode** - System preference detection with manual toggle
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Image Optimization** - Automatic WebP conversion
- ✅ **RSS Feed** - Full content syndication
- ✅ **SEO Optimized** - Meta tags, structured data, Open Graph
- ✅ **Accessibility** - WCAG compliant with ARIA support
- ✅ **Reading Progress** - Visual progress indicator
- ✅ **Search Functionality** - Content discovery
  ✅ **Comments System** - Privacy-focused Giscus integration

## 💬 Comments System

This blog uses [Giscus](https://giscus.app) for privacy-focused commenting. Comments are powered by GitHub Discussions, ensuring:

- 🔒 **Privacy**: No tracking, no ads, no third-party data collection
- 🆓 **Free**: No hosting costs beyond your GitHub account
- 🛠️ **Maintainable**: You control all data through GitHub
- 🎨 **Customizable**: Supports themes, reactions, and markdown

### Setup

1. **Enable GitHub Discussions** in your repository settings
2. **Create a "Comments" category** in Discussions
3. **Get configuration values** from [giscus.app](https://giscus.app)
4. **Run setup script**: `npm run setup-comments`
5. **Test locally**: `npm run dev`

For detailed setup instructions, see [docs/COMMENTS_SETUP.md](docs/COMMENTS_SETUP.md).

### Usage

- Comments appear automatically on all blog posts
- Disable comments on specific posts by adding `showComments: false` to frontmatter
- Comments are loaded lazily for optimal performance
- Theme automatically matches your site's dark/light mode

## 🔧 Configuration

- **Site URL**: `https://blog.antoniwan.online`
- **Image Optimization**: Sharp service with WebP conversion
- **Markdown**: Shiki syntax highlighting
- **Prefetch**: Intelligent link prefetching
- **Vercel Adapter**: Optimized deployment

### Content Configuration

- **Validation**: Zod schemas for frontmatter validation
- **Collections**: Structured content with TypeScript
- **Categories**: Predefined categories with icons
- **Tags**: Flexible tagging system

## 🚀 Deployment

Deployed on Vercel with:

- **Static Generation** - Pre-built files for optimal performance
- **Image Optimization** - Automatic WebP conversion
- **Analytics** - Performance monitoring and insights
- **Speed Insights** - Real-time performance metrics

## 🔒 Security Note

⚠️ **Security Vulnerabilities**: There are currently 3 high severity vulnerabilities in dependencies related to `path-to-regexp`. These are in the `@astrojs/vercel` adapter dependency chain and will be resolved when the upstream packages are updated. The vulnerabilities are in `@vercel/routing-utils` and affect path-to-regexp versions 4.0.0 - 6.2.2.

## 📄 License

### Content License

Content is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/) (CC BY-NC-SA 4.0).

This means you can:

- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material

Under the following terms:

- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made
- **NonCommercial** — You may not use the material for commercial purposes
- **ShareAlike** — If you remix, transform, or build upon the material, you must distribute your contributions under the same license

### Code License

Code is licensed under the [MIT License](https://opensource.org/licenses/MIT).

This means you can:

- Use the code for commercial purposes
- Modify the code
- Distribute the code
- Use it privately
- Sublicense it

The only requirement is that the original license and copyright notice be included in any substantial portions of the software.

---

**Built with ❤️ by [Antoniwan](https://antoniwan.online)**
