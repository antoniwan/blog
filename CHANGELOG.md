# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

- **2.1.0**: Added Giscus comments system
- **2.0.0**: Initial stable release with core blog functionality

## Contributing

When making changes, please:

1. Update this changelog with a new entry
2. Follow semantic versioning principles
3. Include both user-facing and technical changes
4. Group changes by type (Added, Changed, Deprecated, Removed, Fixed, Security)
