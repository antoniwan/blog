# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.2.2] - 2025-01-29

### Security & Dependencies

- **Dependency Updates**: Updated all packages to latest compatible versions
  - Astro: 5.11.0 → 5.12.5
  - @astrojs/mdx: 4.3.0 → 4.3.1
  - @astrojs/sitemap: 3.4.1 → 3.4.2
  - @astrojs/vercel: 8.2.2 → 8.2.3
  - Tailwind CSS: 3.4.0 → 3.4.17
- **Security Monitoring**: Documented ongoing path-to-regexp vulnerabilities in @astrojs/vercel dependency chain
- **Lock File**: Regenerated package-lock.json with latest dependency resolutions

### Technical Details

- **Package Updates**: All dependencies updated to latest stable versions
- **Security Note**: 3 high severity vulnerabilities remain in path-to-regexp (4.0.0 - 6.2.2) via @vercel/routing-utils
- **Build System**: Improved dependency resolution and package management

### Maintenance

- 🔒 **Security Awareness**: Documented known vulnerabilities for transparency
- 📦 **Dependency Health**: Updated all packages to latest compatible versions
- 🔧 **Build Optimization**: Improved package lock file and dependency resolution

## [2.2.1] - 2025-01-29

### Fixed

- **Layout Improvements**: Enhanced blog layout with better image handling and visual consistency
  - Added default divider image for better visual separation
  - Adjusted BlogLayout image height for improved proportions
  - Removed author frontmatter value to clean up content structure
  - Updated author name for consistency across the site

### Technical Details

- **Image Assets**: Added `default-divider.avif` for consistent visual dividers
- **Layout Updates**: Improved `BlogLayout.astro` component with better image sizing
- **Content Cleanup**: Removed unused author field from frontmatter
- **Author Consistency**: Updated author name across the site

### User Experience

- 🎨 **Visual Consistency**: Better image proportions and divider usage
- 📝 **Cleaner Content**: Removed redundant author information
- 🔧 **Maintenance**: Improved code organization and consistency

## [2.2.0] - 2025-01-XX

### Fixed

- **404 Page Layout**: Resolved double header issue and simplified page structure
  - Removed duplicate title/description content that was displayed twice
  - Switched from `PageLayout` to `BaseLayout` to eliminate redundant `PageHeader` component
  - Streamlined layout with cleaner visual hierarchy and better spacing
  - Added helpful navigation links to categories and tags pages

### Technical Details

- **Layout Change**: Updated `src/pages/404.astro` to use `BaseLayout` instead of `PageLayout`
- **Content Cleanup**: Removed unused imports and redundant CSS styles
- **Improved UX**: Added large "404" number for visual impact and better user guidance
- **Navigation Enhancement**: Included links to browse categories and explore tags

### User Experience

- 🎯 **Cleaner Design**: Single, focused header without duplication
- 🧭 **Better Navigation**: Helpful links to guide users back to content
- 📱 **Responsive**: Maintains mobile-friendly layout across all devices
- ⚡ **Performance**: Reduced redundant code and improved loading

## [2.1.0] - 2025-01-XX

### Added

- **Comments System**: Integrated Giscus comments powered by GitHub Discussions
  - Privacy-focused commenting with no tracking or third-party data collection
  - Automatic theme switching (dark/light mode support)
  - Lazy loading for optimal performance
  - Per-post comment control via `showComments` frontmatter field
  - Support for reactions, markdown, and multilingual comments
- **Setup Automation**: Interactive setup script (`npm run setup-comments`)
- **Comprehensive Documentation**: Complete setup guide in `docs/COMMENTS_SETUP.md`
- **TypeScript Support**: Full type definitions for comments system
- **Content Schema Enhancement**: Added `showComments` field to blog post frontmatter

### Technical Details

- New component: `src/components/Comments.astro`
- Configuration: `src/config/giscus.ts`
- Type definitions: `src/types/giscus.d.ts`
- Setup script: `scripts/setup-comments.js`
- Integration: Comments automatically appear on all blog posts
- Optional: Disable comments on specific posts with `showComments: false`

### Features

- 🔒 **Privacy-focused**: No tracking, no ads, no third-party data collection
- 🆓 **Free**: No hosting costs beyond GitHub account
- 🛠️ **Maintainable**: Full control through GitHub Discussions
- 🎨 **Customizable**: Supports themes, reactions, and markdown
- ⚡ **Performance**: Lazy loading and minimal JavaScript footprint

## [2.0.0] - 2024-XX-XX

### Initial Release

- Complete Astro-based blog system
- Dark/light mode support
- Responsive design
- SEO optimization
- RSS feed generation
- Image optimization
- Search functionality
- Tag and category system
- Multi-language support (English/Spanish)
- Reading progress indicator
- Structured data and Open Graph support

---

## Version History

- **2.2.2**: Dependency updates and security monitoring
- **2.2.1**: Layout improvements and content cleanup
- **2.2.0**: Fixed 404 page layout and removed duplicate content
- **2.1.0**: Added Giscus comments system
- **2.0.0**: Initial stable release with core blog functionality

## Contributing

When making changes, please:

1. Update this changelog with a new entry
2. Follow semantic versioning principles
3. Include both user-facing and technical changes
4. Group changes by type (Added, Changed, Deprecated, Removed, Fixed, Security)
