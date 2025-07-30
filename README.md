# Curious Chaos Journal

[![Version](https://img.shields.io/badge/version-2.4.0-blue.svg)](https://github.com/antoniwan/curious-chaos-journal/releases)

A personal digital space documenting the journey of building systems — digital, emotional, spiritual, and physical. Raw reflections on thinking, culture, and the soft heart inside the hard world.

> **"Thinking hurts. I do it anyway."**

## 📊 Project Status

- **51 blog posts** with 100% frontmatter compliance
- **207 pages** generated successfully
- **9 content categories** with comprehensive tagging
- **Multi-language support** (English/Spanish)
- **Complete documentation** suite available
- **Enhanced navigation** with breadcrumbs and improved UX
- **Simplified SEO system** with hero image prioritization

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

- **[Astro 5.11.0](https://astro.build)** - Modern static site builder
- **[TypeScript 5.8.3](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Utility-first CSS framework
- **[MDX](https://mdxjs.com/)** - Markdown with JSX support
- **[Sharp 0.33.5](https://sharp.pixelplumbing.com/)** - Image optimization
- **[Giscus](https://giscus.app)** - Privacy-focused comments system
- **[Vercel](https://vercel.com/)** - Deployment and analytics

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/antoniwan/curious-chaos-journal.git
cd curious-chaos-journal
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

### Content Management

| Command                                   | Action                                     |
| ----------------------------------------- | ------------------------------------------ |
| `node scripts/audit-frontmatter.js`       | Audit all posts for frontmatter compliance |
| `node scripts/standardize-frontmatter.js` | Standardize all posts automatically        |

## 🏗️ Project Structure

```
curious-chaos-journal/
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
├── scripts/              # Automation tools
├── docs/                 # Comprehensive documentation
├── astro.config.mjs      # Astro configuration
├── content.config.ts     # Content schemas
└── tailwind.config.js    # Tailwind configuration
```

## 📝 Content Management

### Blog Posts

All blog posts follow the **Official Frontmatter Specification** for consistency and SEO optimization. See [docs/OFFICIAL_FRONTMATTER_SPECIFICATION.md](docs/OFFICIAL_FRONTMATTER_SPECIFICATION.md) for complete details.

#### Quick Example

```yaml
---
title: "Post Title"
description: "Post description for SEO and social sharing"
pubDate: "2025-01-01T00:00:00.000Z"
language:
  - en
heroImage: "/images/hero-image.jpg"
category:
  - integration-growth
  - learning-projects
subcategory: "Personal Development"
tags:
  - tag1
  - tag2
  - tag3
readingTime: 5
draft: false
featured: false
published: true
showComments: true
---
```

#### Frontmatter Management

- **Audit**: `node scripts/audit-frontmatter.js` - Check compliance
- **Standardize**: `node scripts/standardize-frontmatter.js` - Fix issues automatically
- **Validation**: Automatic validation during build process

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
- ✅ **Image Optimization** - Automatic WebP conversion with clickable modals
- ✅ **RSS Feed** - Full content syndication
- ✅ **SEO Optimized** - Meta tags, structured data, Open Graph with hero image prioritization
- ✅ **Accessibility** - WCAG compliant with ARIA support
- ✅ **Reading Progress** - Visual progress indicator
- ✅ **Search Functionality** - Content discovery
- ✅ **Comments System** - Privacy-focused Giscus integration
- ✅ **Breadcrumb Navigation** - Clear page hierarchy and navigation
- ✅ **Enhanced Mobile Experience** - Improved mobile navigation and search

## 🧭 Navigation & User Experience

### Breadcrumb Navigation

The site now features comprehensive breadcrumb navigation that provides clear context and easy navigation:

- **Page Hierarchy**: Shows current location within the site structure
- **Quick Navigation**: Click any breadcrumb to navigate to that level
- **Accessibility**: Proper ARIA labels and semantic markup
- **Responsive Design**: Adapts to mobile and desktop layouts

### Enhanced Mobile Experience

Mobile navigation has been completely refactored for better usability:

- **Improved Search**: Dedicated mobile search toggle with full-width search bar
- **Better Navigation**: Cleaner mobile menu with proper touch targets
- **Smooth Transitions**: Optimized animations and transitions
- **Accessibility**: Proper focus management and keyboard navigation

### Navigation Refinements

- **Logo as Home Link**: The logo now serves as the primary home navigation
- **Streamlined Menu**: Removed redundant home link from main navigation
- **Category Dropdowns**: Enhanced category navigation with icons and descriptions
- **Consistent Styling**: Unified navigation experience across all pages

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
- **Image Optimization**: Sharp service with WebP conversion and clickable modals
- **Markdown**: Shiki syntax highlighting
- **Prefetch**: Intelligent link prefetching
- **Vercel Adapter**: Optimized deployment
- **SEO System**: Simplified hero image prioritization with automatic meta tag generation

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

## 📚 Documentation

Comprehensive documentation is available in the `docs/` directory:

- **[Official Frontmatter Specification](docs/OFFICIAL_FRONTMATTER_SPECIFICATION.md)** - Complete frontmatter guide
- **[Comments Setup Guide](docs/COMMENTS_SETUP.md)** - Giscus integration instructions
- **[Frontmatter Audit Summary](docs/FRONTMATTER_AUDIT_AND_STANDARDIZATION_SUMMARY.md)** - Audit results and statistics
- **[SEO Audit & Improvements](docs/SEO_AUDIT_AND_IMPROVEMENTS.md)** - SEO optimization details
- **[Markdown Cleanup Verification](docs/MARKDOWN_CLEANUP_VERIFICATION.md)** - Content quality assurance

## 🔒 Security Note

⚠️ **Security Vulnerabilities**: There are currently 3 high severity vulnerabilities in dependencies related to `path-to-regexp`. These are in the `@astrojs/vercel` adapter dependency chain and will be resolved when the upstream packages are updated. The vulnerabilities are in `@vercel/routing-utils` and affect path-to-regexp versions 4.0.0 - 6.2.2.

**Status**: These vulnerabilities are documented and monitored. They do not affect the security of the deployed site as they are in the build-time dependency chain only.

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
