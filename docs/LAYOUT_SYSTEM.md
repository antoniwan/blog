# Layout System Documentation

## Overview

Our layout system provides a consistent, responsive, and maintainable way to structure content across the blog. It uses a combination of Tailwind CSS utilities and a custom `LayoutContainer` component to ensure visual harmony and optimal readability.

## Core Principles

1. **Content-First Design**

   - Main content is optimized for readability (65ch max-width)
   - Wider content areas use 85ch max-width
   - Full-width elements are used sparingly and intentionally

2. **Responsive Behavior**

   - Mobile-first approach with progressive enhancement
   - Consistent padding scales across breakpoints
   - Fluid typography and spacing

3. **Visual Hierarchy**
   - Clear distinction between different content types
   - Consistent alignment and spacing
   - Proper use of white space

## LayoutContainer Component

The `LayoutContainer` component is the foundation of our layout system. It provides consistent width constraints and padding across different content types.

### Props

```typescript
interface Props {
  /**
   * The type of content being contained
   */
  type?: "content" | "container" | "card" | "media";

  /**
   * The size variant for the container
   */
  size?: "narrow" | "default" | "wide";

  /**
   * Whether to apply responsive padding
   */
  padding?: "none" | "sm" | "md" | "lg";

  /**
   * Additional classes to apply
   */
  className?: string;
}
```

### Usage Examples

```astro
<!-- Blog post content -->
<LayoutContainer type="content" padding="md">
  <article class="prose">
    <!-- Content -->
  </article>
</LayoutContainer>

<!-- Page container -->
<LayoutContainer type="container" size="default" padding="md">
  <main>
    <!-- Page content -->
  </main>
</LayoutContainer>

<!-- Card component -->
<LayoutContainer type="card" padding="none">
  <div class="card">
    <!-- Card content -->
  </div>
</LayoutContainer>

<!-- Full-width media -->
<LayoutContainer type="media">
  <img src="..." alt="..." />
</LayoutContainer>
```

## Width Tokens

Our layout system uses the following width tokens:

```js
maxWidth: {
  // Content widths
  'prose': '65ch',      // Optimal reading width
  'prose-wide': '85ch', // Wider content area

  // Layout containers
  'container': '1280px',     // Default container
  'container-narrow': '1024px', // For focused content
  'container-wide': '1536px',   // For full-width layouts

  // Component widths
  'card': '400px',
  'card-wide': '600px',
  'media': '100%'
}
```

## Padding System

The padding system provides consistent spacing across different screen sizes:

```js
padding: {
  'none': '',                    // No padding
  'sm': 'px-4 md:px-6',         // Small padding
  'md': 'px-4 md:px-8 lg:px-12', // Medium padding
  'lg': 'px-4 md:px-12 lg:px-16' // Large padding
}
```

## Best Practices

1. **Content Width**

   - Use `type="content"` for main blog content
   - Use `type="content" size="wide"` for wider content areas
   - Never exceed 85ch for text content

2. **Container Usage**

   - Use `type="container"` for page-level containers
   - Use `type="card"` for card components
   - Use `type="media"` for full-width media elements

3. **Padding**

   - Use `padding="md"` as the default
   - Use `padding="lg"` for hero sections
   - Use `padding="sm"` for tight layouts
   - Use `padding="none"` for full-bleed elements

4. **Responsive Design**
   - Test layouts across all breakpoints
   - Ensure content remains readable on mobile
   - Use appropriate padding for different screen sizes

## Common Patterns

### Blog Post Layout

```astro
<LayoutContainer type="content" padding="md">
  <article class="prose">
    <h1>{title}</h1>
    <div class="content">
      {content}
    </div>
  </article>
</LayoutContainer>
```

### Card Grid Layout

```astro
<LayoutContainer type="container" size="default" padding="md">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map(item => (
      <LayoutContainer type="card" padding="none">
        <Card item={item} />
      </LayoutContainer>
    ))}
  </div>
</LayoutContainer>
```

### Hero Section

```astro
<LayoutContainer type="container" size="wide" padding="lg">
  <div class="hero">
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
</LayoutContainer>
```

## Maintenance

1. **Adding New Widths**

   - Add new width tokens to `tailwind.config.js`
   - Update the `LayoutContainer` component if needed
   - Document the new width in this guide

2. **Modifying Existing Widths**

   - Consider the impact on existing layouts
   - Test across different content types
   - Update documentation

3. **Code Review Checklist**
   - Verify correct usage of `LayoutContainer`
   - Check responsive behavior
   - Ensure consistent padding
   - Validate content width constraints
