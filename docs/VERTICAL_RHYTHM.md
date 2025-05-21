# Vertical Rhythm System

This document outlines the vertical spacing and rhythm system used across the site to ensure consistent, elegant spacing between elements.

## Spacing Scale

We use a hierarchical spacing scale that creates visual harmony and improves readability:

```js
spacing: {
  'section': '6rem',     // 96px - Major section spacing
  'block': '3rem',       // 48px - Block-level spacing
  'element': '1.5rem',   // 24px - Element-level spacing
  'content': '1rem',     // 16px - Content-level spacing
  'tight': '0.5rem',     // 8px  - Tight spacing
}
```

## Usage Guidelines

### 1. Section Spacing

Use the `Section` component for major content blocks:

```astro
<Section padding="section">
  <!-- Section content -->
</Section>
```

- `padding="section"` for major sections (96px)
- `padding="block"` for content blocks (48px)
- `padding="element"` for smaller sections (24px)
- `padding="content"` for tight sections (16px)
- `padding="none"` for no padding

### 2. Component Spacing

For components, follow these rules:

1. **Container Padding**

   - Use `p-block` for card-like components
   - Use `p-element` for smaller components
   - Use `p-content` for tight components

2. **Internal Spacing**

   - Use `space-y-element` for major content blocks
   - Use `space-y-content` for related content
   - Use `space-y-tight` for tight groupings

3. **Gap Spacing**
   - Use `gap-element` for major gaps
   - Use `gap-content` for standard gaps
   - Use `gap-tight` for tight gaps

### 3. Content Spacing

For content elements:

1. **Headings**

   - Use `mb-element` after major headings
   - Use `mb-content` after subheadings

2. **Paragraphs**

   - Use `mb-content` between paragraphs
   - Use `mb-element` before new sections

3. **Lists**
   - Use `space-y-content` for list items
   - Use `mb-element` after lists

## Best Practices

1. **Consistency**

   - Use the same spacing value for similar elements
   - Maintain consistent spacing between related elements

2. **Hierarchy**

   - Use larger spacing for more important elements
   - Use smaller spacing for related elements

3. **Responsive Design**

   - Spacing values remain consistent across breakpoints
   - Use container padding to adjust for screen size

4. **Avoid**
   - Mixing margin and padding for vertical spacing
   - Using arbitrary spacing values
   - Stacking multiple spacing utilities

## Examples

### Section with Content

```astro
<Section padding="section">
  <div class="space-y-element">
    <h2 class="text-3xl font-bold">Section Title</h2>
    <p class="text-lg">Section description</p>
    <div class="space-y-content">
      <!-- Content items -->
    </div>
  </div>
</Section>
```

### Card Component

```astro
<article class="p-block">
  <div class="space-y-element">
    <header class="space-y-content">
      <!-- Header content -->
    </header>
    <div class="space-y-content">
      <!-- Main content -->
    </div>
  </div>
</article>
```

## Migration Guide

When updating existing components:

1. Replace arbitrary spacing values with our scale
2. Convert margin-based spacing to padding or gap
3. Use the `Section` component for major blocks
4. Implement consistent internal spacing

Remember: The goal is to create a harmonious, readable layout that guides the user through the content with intentional spacing.
