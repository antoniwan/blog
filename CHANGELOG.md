# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.18.1] - 2025-01-XX

### Added
- Generic blog platform setup for easy forking and customization
- Modern Astro 5.11.0 configuration
- Advanced reading progress system with smart completion detection
- Automatic reading time calculation using remark plugin
- Multilingual content support with translation linking
- Privacy-first reading data storage
- Comprehensive SEO optimization
- Dark/light mode with system preference detection
- Responsive design optimized for all devices

### Changed
- Removed personal content and branding
- Updated categories to be generic and customizable
- Simplified navigation structure
- Generic about page and home page content
- Updated site constants for easy customization

### Technical
- TypeScript 5.8.3 for type safety
- Tailwind CSS 3.4.17 for styling
- MDX support for enhanced content
- Sharp 0.33.5 for image optimization
- Vercel deployment configuration
- Comprehensive documentation

## [2.18.0] - 2025-01-XX

### Added
- Initial generic blog platform release
- Base Astro configuration
- Essential components and layouts
- Content management system
- Basic styling and theming

## Customization Guide

To customize this blog platform for your own use:

1. **Update Site Information**: Modify `src/consts.ts` with your details
2. **Replace Content**: Update the about page and sample posts
3. **Customize Categories**: Modify `src/data/categories.ts` for your topics
4. **Update Navigation**: Adjust `src/data/navigation.ts` for your structure
5. **Personalize Styling**: Customize colors and themes in `src/styles/`
6. **Add Your Content**: Replace sample posts with your own writings

## License

- **Content**: [Creative Commons Attribution-NonCommercial-ShareAlike 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
- **Code**: [MIT License](https://opensource.org/licenses/MIT)
