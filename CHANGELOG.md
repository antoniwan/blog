# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2024-05-03

### Breaking Changes
- Removed deprecated components (PageSection, TableOfContents, Figure)
- Refactored layout system with new Section component
- Consolidated layout logic and removed deprecated pages
- Updated navigation structure with new dropdown system
- Changed category URLs to include trailing slashes

### Added
- New Section component for consistent layout structure
- Enhanced theme management with centralized functions
- New animation utilities and transition settings
- Structured data for blog posts to improve SEO
- Table of contents generation for blog posts
- New social media links (BlueSky, YouTube)
- Enhanced vertical rhythm system for improved spacing
- New layout types and additional props for customization

### Improved
- Refactored layout components for better structure and maintainability
- Enhanced Tailwind configuration for typography and spacing
- Improved theme toggle functionality with system preference support
- Enhanced accessibility features across all components
- Streamlined content presentation and organization
- Improved mobile responsiveness and navigation
- Enhanced SEO with structured data
- Better handling of reduced motion preferences
- Improved image optimization with updated Sharp version
- Enhanced blog post structure and layout consistency

### Technical
- Removed unused rehype-image-size plugin
- Updated Sharp dependency to version 0.33.5
- Changed hero image format from AVIF to WEBP for better compatibility
- Refactored author information and category emojis in consts.ts
- Enhanced class-based styling for dynamic class management
- Improved theme initialization and management
- Streamlined layout container implementation
- Enhanced TypeScript types and component props

## [1.3.1] - 2024-05-03

### Improved
- Updated documentation and README files
- Enhanced documentation links and organization
- Improved package dependencies
- Updated package lock file

## [1.3.0] - 2024-05-03

### Added
- Replaced Source Serif 4 with Fraunces font for enhanced typography
- Added new font families and improved line heights for better readability
- Enhanced typography with adjusted letter spacing and margin styles

### Improved
- Refactored Tailwind CSS configuration for better typography management
- Enhanced table styles for better responsiveness and readability on mobile
- Improved UI/UX with cleaner tag design and better spacing
- Enhanced SEO with improved page titles and metadata consistency
- Streamlined site configuration with centralized constants
- Improved component organization and maintainability

### Technical
- Refactored BlogPost and PostCard components for better image handling
- Enhanced SearchBar styles for improved user experience
- Improved code organization with centralized constants for site configuration
- Enhanced BaseHead component for better metadata management

## [1.2.1] - 2024-05-03

### Improved

- Updated package dependencies
- Improved version management
- Enhanced documentation

## [1.2.0] - 2024-05-03

### Added

- New media architecture with optimized components:
  - Figure component for responsive image handling
  - Gallery component for grid-based media display
- Media optimization scripts for images
- WebP format conversion for all images
- Proper aspect ratio handling for all media
- Lazy loading with eager loading option for above-the-fold content
- Accessibility-first design for all media components
- Reduced motion support across all components

### Improved

- Enhanced media performance with optimized formats
- Better accessibility with proper ARIA attributes
- Improved responsive design for media content
- Optimized image loading and caching
- Enhanced dark mode support for media
- Better mobile responsiveness for media galleries
- Improved SEO with proper image metadata

### Technical

- Implemented Sharp for image optimization
- Enhanced TypeScript types for media components
- Improved build process with media optimization
- Added proper error handling for media processing
- Enhanced documentation for media components

## [1.1.2] - 2024-05-03

### Improved

- Updated documentation and README files
- Updated package dependencies
- Improved package lock file

## [1.1.1] - 2024-05-03

### Improved

- Enhanced SEO meta tags and canonical URL configuration
- Updated documentation and README links
- Improved site description and metadata accuracy
- Fixed canonical URL to properly point to https://blog.antoniwan.online/

## [1.1.0] - 2024-05-03

### Added

- Vercel Speed Insights integration for real-time performance monitoring
- Reading progress indicator for blog posts
- Back to top button for improved navigation
- Skip to main content accessibility feature
- Multi-language support (English, Spanish)
- Category and tag organization system
- Reading time estimation
- Publication and update date tracking
- Reduced motion preferences support
- Enhanced typography with drop caps and improved blockquotes
- Dark mode optimizations for better readability

### Improved

- Enhanced blog post metadata display
- Improved accessibility with semantic HTML and ARIA labels
- Optimized image handling and lazy loading
- Refined dark mode color scheme
- Enhanced typography and spacing
- Improved mobile responsiveness

## [1.0.0] - 2024-05-03

### Added

- Initial release of Strong Vault, a personal digital space for documenting systems and growth
- Core blog functionality with Astro static site generator
- Content structure for multiple categories:
  - Art & Expression
  - DIY & Creation
  - Integration & Growth
  - Learning Projects
  - Metaspace
  - Parenting
  - Politics
  - Psychology
  - Systems & Strategy
- Modern tech stack:
  - Astro for static site generation
  - TypeScript for type safety
  - MDX for enhanced markdown content
  - Tailwind CSS for styling
- Project documentation:
  - Comprehensive README
  - Design system documentation
  - Implementation recommendations
  - Development notes

### Technical Features

- Responsive design with mobile-first approach
- Dark mode support
- Image optimization with Sharp
- RSS feed support
- Sitemap generation
- Vercel Analytics integration
- Tailwind CSS with custom design tokens
- TypeScript configuration
- PostCSS for CSS processing
- Automated build and preview scripts

### Documentation

- Project structure documentation
- Development setup instructions
- Available scripts and commands
- License information (CC BY 4.0)
- Roadmap and future plans
- Design system documentation
- Implementation recommendations
