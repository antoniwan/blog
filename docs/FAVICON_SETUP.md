# Favicon Setup

This document describes the favicon implementation for the Curious Chaos Journal.

## Current Implementation

The site uses a modern favicon setup with multiple formats for maximum browser compatibility:

### Files Generated

- **`favicon.svg`** (296B) - Primary SVG favicon for modern browsers
- **`favicon.ico`** (286B) - Fallback ICO format for older browsers
- **`apple-touch-icon.png`** (1.2KB) - 180x180 PNG for iOS devices
- **`favicon-192x192.png`** (1.3KB) - PWA icon for Android/Chrome
- **`favicon-512x512.png`** (3.8KB) - Large PWA icon for high-DPI displays

### HTML Implementation

The favicons are included in `BaseHead.astro`:

```html
<!-- Favicon & Icons -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
```

### Web App Manifest

The `site.webmanifest` includes all favicon sizes for PWA support:

```json
{
  "icons": [
    {
      "src": "/favicon.svg",
      "sizes": "any",
      "type": "image/svg+xml",
      "purpose": "any maskable"
    },
    {
      "src": "/favicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/favicon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/apple-touch-icon.png",
      "sizes": "180x180",
      "type": "image/png",
      "purpose": "any"
    }
  ]
}
```

## Regenerating Favicons

To regenerate all favicon files from the source SVG:

```bash
npm run generate-favicons
```

This will:
1. Read the source `public/favicon.svg`
2. Generate all required sizes and formats
3. Save them to the `public/` directory

## Browser Support

- **Modern Browsers**: Use SVG favicon (best quality, smallest size)
- **Older Browsers**: Fall back to ICO format
- **iOS Safari**: Uses apple-touch-icon.png
- **Android Chrome**: Uses PWA icons from manifest
- **PWA Installation**: Full support with all icon sizes

## Design

The favicon design is a simple diamond shape with a horizontal line, representing:
- **Geometric precision** and structure
- **Visual balance** with the horizontal line
- **Scalability** - works well at all sizes
- **Brand consistency** with the site's minimalist aesthetic

## Performance

- **Total size**: ~7KB for all favicon files
- **Caching**: Browsers cache favicons aggressively
- **Loading**: Favicons load with high priority
- **Impact**: Minimal performance impact

## Maintenance

- Source file: `public/favicon.svg`
- Regeneration: Run `npm run generate-favicons`
- Testing: Check across different browsers and devices
- Updates: Modify SVG source and regenerate all formats 