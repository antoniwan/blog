# Development Guide

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Setup

```bash
# Clone and install
git clone https://github.com/antoniwan/strongvault.git
cd strongvault
npm install

# Start development
npm run dev
```

## Project Structure

### Key Directories

- `src/content/p/` - Blog posts (Markdown/MDX)
- `src/components/` - Reusable UI components
- `src/layouts/` - Page layouts and templates
- `src/pages/` - Route components
- `src/styles/` - Global styles and CSS
- `src/data/` - Static data (categories, navigation)
- `public/images/` - Optimized images

### Content Management

#### Adding a New Post

1. Create a new `.md` or `.mdx` file in `src/content/p/`
2. Use the frontmatter schema:

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

#### Categories

Categories are defined in `src/data/categories.ts`:

```typescript
{
  id: "category-id",
  name: "Category Name",
  description: "Category description",
  icon: "🎵"
}
```

### Styling

#### Design System

- **Colors**: Defined in `src/styles/design-system.css`
- **Typography**: Custom fonts in `src/styles/fonts.css`
- **Components**: Tailwind CSS with custom utilities

#### Adding Styles

1. **Global styles**: Edit `src/styles/global.css`
2. **Component styles**: Use Tailwind classes in components
3. **Custom utilities**: Add to `tailwind.config.js`

### Components

#### Component Structure

```astro
---
// Component logic
---

<!-- Template -->
<div class="component">
  <!-- Content -->
</div>

<style>
  /* Scoped styles */
</style>
```

#### Common Patterns

- Use TypeScript interfaces for props
- Implement dark mode support
- Add accessibility attributes
- Use semantic HTML

### Build & Deployment

#### Development

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview build
```

#### Deployment

- **Vercel**: Automatic deployment from main branch
- **Manual**: Build and deploy `dist/` folder

## Best Practices

### Code Quality

- ✅ Use TypeScript for type safety
- ✅ Follow Astro component patterns
- ✅ Implement responsive design
- ✅ Add accessibility features
- ✅ Optimize images and assets

### Content

- ✅ Use descriptive frontmatter
- ✅ Optimize images for web
- ✅ Write clear, engaging content
- ✅ Use proper heading hierarchy
- ✅ Include alt text for images

### Performance

- ✅ Optimize bundle sizes
- ✅ Use lazy loading for images
- ✅ Implement proper caching
- ✅ Minimize JavaScript usage
- ✅ Optimize CSS delivery

## Troubleshooting

### Common Issues

#### Build Errors

```bash
# Clear cache and rebuild
rm -rf dist/
npm run build
```

#### Image Optimization

- Ensure images are in `public/images/`
- Use WebP format when possible
- Optimize before adding to project

#### TypeScript Errors

```bash
# Check types
npm run astro check
```

## Contributing

### Workflow

1. Create feature branch
2. Make changes
3. Test locally
4. Submit pull request

### Guidelines

- Follow existing code patterns
- Add tests for new features
- Update documentation
- Ensure accessibility compliance

---

_For questions, contact: antoniwan@antoniwan.online_
