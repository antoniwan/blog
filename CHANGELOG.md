# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.4.1] - 2025-01-30

### Fixed

- **Homepage Post Coverage**: Fixed critical issue where 4 featured posts were hidden from users
  - Resolved object reference comparison bug in post filtering logic
  - Updated filtering to use post IDs instead of object references for proper comparison
  - Ensured 100% post coverage on homepage (52/52 posts now visible)
  - Enhanced progress indicator with percentage completion for better UX
- **Complete Archive Section**: All posts now appear in the archive section, including featured posts beyond the top 4
- **User Experience**: Users can now discover every post through scrolling, with no hidden content

### Technical Details

- **Post Filtering Logic**: Changed from `!featuredPosts.includes(post)` to `!featuredPostIds.includes(post.id)`
- **Progress Indicator**: Added percentage completion display in LazyPosts component
- **Archive Description**: Updated to encourage exploration of complete collection
- **Build Verification**: Confirmed all 52 posts are now properly accessible

### User Experience

- 📚 **Complete Discovery**: All 52 posts are now discoverable on the homepage
- 🎯 **No Hidden Content**: Featured posts beyond the top 4 now appear in the archive section
- 📊 **Better Progress Tracking**: Percentage completion indicator for archive exploration
- 🔍 **Full Coverage**: 100% post visibility ensures users don't miss any content

## [2.4.0] - 2025-01-30

### Added

- **Breadcrumb Navigation**: Comprehensive breadcrumb system providing clear page hierarchy and navigation context
- **Enhanced Mobile Navigation**: Complete refactor of mobile navigation with improved search toggle and better UX
- **Image Modal System**: Clickable image modals for enhanced blog post image viewing experience
- **Simplified SEO System**: Streamlined SEO implementation with hero image prioritization and automatic meta tag generation
- **Navigation Refinements**: Logo now serves as primary home link with streamlined main navigation

### Changed

- **Navigation Architecture**: Removed redundant home link from main navigation, logo now handles home navigation
- **Mobile Search Experience**: Dedicated mobile search toggle with full-width search bar implementation
- **SEO Cleanup**: Comprehensive tree-shaking of SEO system, removed deprecated fields and unused code
- **Component Refactoring**: Enhanced CategoryCard and PostCard components with improved styling and visual hierarchy
- **Layout Improvements**: Better responsive design and visual consistency across all pages

### Fixed

- **SEO System**: Removed deprecated `ogImage` and `ogImageAlt` fields, simplified to use only `heroImage`
- **Navigation Consistency**: Unified navigation experience across desktop and mobile
- **Accessibility**: Improved focus management and keyboard navigation in mobile menu
- **Performance**: Optimized meta tag generation and reduced bundle size through code cleanup

### Technical Details

- **SEO Simplification**: Removed 50+ lines of redundant code, eliminated confusing multiple image fields
- **Navigation System**: Enhanced mobile navigation with proper event handling and cleanup
- **Image Handling**: Added clickable modal functionality for blog post images
- **Code Quality**: Comprehensive cleanup of unused imports and deprecated functionality
- **Build Optimization**: Faster build times and improved dependency management

### User Experience

- 🧭 **Clear Navigation**: Breadcrumbs provide context and easy navigation throughout the site
- 📱 **Better Mobile UX**: Improved mobile navigation with dedicated search and better touch targets
- 🎨 **Enhanced Visuals**: Clickable image modals and improved visual hierarchy
- 🔍 **Improved Search**: Better mobile search experience with dedicated toggle
- ⚡ **Performance**: Faster loading and smoother interactions
- ♿ **Accessibility**: Better keyboard navigation and focus management

## [2.3.0] - 2025-01-30

### Added

- **Enhanced Image Handling**: Improved blog post image display with full-width, centered styling and clickable modal functionality
- **Hero Image Support**: Added hero image support to SEO and structured data generation with improved meta tag prioritization
- **Frontmatter Management**: Enhanced content management with js-yaml dependency and improved metadata structure
- **Search Experience**: Enhanced search result styles for better user experience

### Changed

- **About Page Layout**: Refactored About page layout by removing unnecessary container for hero image, enhancing image styling with shadow effects, and updating global CSS for improved responsiveness and visual appeal
- **Global CSS Improvements**: Updated global CSS for improved responsiveness and visual effects across the site
- **Component Styling**: Refactored CategoryCard and PostCard components for improved styling with better margins for headings and paragraphs, and updated featured post display with an icon for better visual appeal

### Fixed

- **Structured Data Validation**: Fixed Open Graph `article:author` property to use proper profile URL instead of author name string, resolving validation errors

### Technical Details

- **Dependencies**: Added js-yaml dependency for enhanced frontmatter management
- **SEO Enhancement**: Improved image prioritization in meta tags and structured data
- **Responsive Design**: Better mobile and desktop experience with improved CSS
- **Visual Consistency**: Enhanced shadow effects and visual hierarchy
- **Meta Tags**: Fixed article:author to use AUTHOR.url for proper Open Graph compliance

### User Experience

- 🎨 **Visual Improvements**: Better image display, shadows, and visual hierarchy
- 📱 **Responsive Design**: Enhanced mobile and desktop experience
- 🔍 **Search Enhancement**: Improved search result presentation
- 📝 **Content Management**: Better frontmatter and metadata handling
- 🔧 **SEO Compliance**: Fixed structured data validation for better search engine understanding

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

- **2.4.1**: Fixed homepage post coverage issue, ensuring 100% post visibility and complete archive access
- **2.4.0**: Breadcrumb navigation, enhanced mobile experience, simplified SEO system, and comprehensive refactoring
- **2.3.0**: Enhanced image handling, hero image support, and improved user experience
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
