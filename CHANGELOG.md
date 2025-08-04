# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.12.1] - 2025-08-04

### Fixed

- **RSS Feed Links**: Fixed critical issue where RSS and JSON feeds were showing broken links
  - Updated RSS feed (`/rss.xml`) to use proper URL generation
  - Updated JSON feed (`/feed.json`) to use proper URL generation
  - Fixed comments URL generation in both feeds

## [2.12.0] - 2025-08-04

### Added

- **Enhanced RSS Feed System**: Complete RSS feed overhaul with modern standards
  - **Enhanced RSS Feed** (`/rss.xml`) - Full RSS 2.0 compliance with complete content
  - **JSON Feed** (`/feed.json`) - Modern JSON Feed 1.1 specification
  - **Full Content Syndication**: Complete posts with images and metadata
  - **Image Enclosures**: Hero images automatically included as attachments
  - **Reading Time**: Reading time displayed for each post
  - **Feed Validation**: Automated testing and validation system

## [2.11.0] - 2025-08-04

### Added

- **Comprehensive Favicon System**: Added fallback favicon formats for maximum browser compatibility
  - **Favicon.ico** - Fallback for older browsers
  - **Apple Touch Icon** - iOS home screen icon
  - **PWA Icons** - PNG icons for Android/Chrome
  - **Generation Script** - Automated favicon generation from SVG source
- **Category Terminology Update**: Changed "posts" to "writings" throughout category system for consistency

## [2.10.0] - 2025-08-03

### Added

- **Social Sharing System**: Comprehensive social sharing with mobile-first responsive design
  - **Multi-Platform Support**: Twitter/X, BlueSky, Facebook, Threads, LinkedIn
  - **Native Share API**: Mobile-optimized sharing with fallback
  - **Responsive Design**: Device-specific sharing interfaces
  - **Copy Link**: Clipboard functionality with toast notifications

## [2.9.0] - 2025-08-02

### Added

- **Guided Path**: Seasonal reading experience with progress tracking
  - **Seasonal Organization**: Content organized by Spring, Summer, Fall, and Winter
  - **Progress Tracking**: Local storage-based progress with privacy-first design
  - **Reading Journey**: Users can track completion across seasons and years
  - **Responsive Design**: Optimized experience across all devices

## [2.8.0] - 2025-07-30

### Added

- **Internal Quotes API**: Stoic philosophy quotes for enhanced user experience
  - **Random Quote Endpoint**: `/api/quotes` returns random Stoic quotes with metadata
  - **Rich Metadata**: Author, work, themes, difficulty, and modern relevance
  - **Error Handling**: Robust error handling with retry logic and fallback content
  - **404 Integration**: Enhanced 404 pages with philosophical quotes

## [2.7.0] - 2025-07-29

### Added

- **Brain Science Analytics**: Writing pattern analysis and insights
  - **Writing Cadence Analysis**: Publication frequency and patterns
  - **Topic Evolution**: Content theme tracking over time
  - **Reading Time Analytics**: Content length and engagement metrics
  - **Category Distribution**: Content organization insights

## [2.6.0] - 2025-07-28

### Added

- **Enhanced Tag System**: Advanced tag management and analytics
  - **Tag Analytics**: Usage frequency and content distribution
  - **Tag Cloud**: Visual tag representation with size-based frequency
  - **Tag Management**: Comprehensive tag audit and optimization
  - **SEO Optimization**: Improved tag-based content discovery

## [2.5.0] - 2025-07-27

### Added

- **Comments System**: Privacy-focused Giscus integration
  - **GitHub Discussions**: Backend using GitHub Discussions
  - **Privacy-First**: No tracking, no ads, no third-party data collection
  - **Markdown Support**: Rich text formatting in comments
  - **Reactions**: Like and react to comments

## [2.4.0] - 2025-07-26

### Added

- **Search Functionality**: Content discovery and search capabilities
  - **Full-Text Search**: Search across all blog content
  - **Real-Time Results**: Instant search results as you type
  - **Search Highlighting**: Highlighted search terms in results
  - **Mobile Optimized**: Touch-friendly search interface

## [2.3.0] - 2025-07-25

### Added

- **Dark Mode**: Automatic theme switching with system preference detection
  - **System Preference**: Automatically matches user's system theme
  - **Manual Toggle**: User can override system preference
  - **Persistent Storage**: Remembers user's theme choice
  - **Smooth Transitions**: Elegant theme switching animations

## [2.2.0] - 2025-07-24

### Added

- **Image Optimization**: WebP conversion and optimization
  - **Sharp Integration**: High-quality image processing
  - **WebP Format**: Modern image format for better performance
  - **Clickable Modals**: Full-size image viewing
  - **Lazy Loading**: Optimized image loading performance

## [2.1.0] - 2025-07-23

### Added

- **Multi-Language Support**: English and Spanish content
  - **Language Detection**: Automatic language detection
  - **Content Filtering**: Language-specific content display
  - **SEO Optimization**: Language-specific meta tags
  - **URL Structure**: Language-aware URL routing

## [2.0.0] - 2025-07-22

### Added

- **Astro Migration**: Complete migration from previous framework
  - **Static Site Generation**: Fast, optimized static site
  - **TypeScript Support**: Full type safety and error handling
  - **Tailwind CSS**: Utility-first CSS framework
  - **MDX Support**: Markdown with JSX components
  - **Vercel Deployment**: Optimized deployment platform
