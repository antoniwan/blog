# StrongVault Design System

## Overview

This design system is inspired by the New York Times digital experience, focusing on editorial excellence, readability, and user experience. It combines modern web technologies (Astro, Tailwind CSS) with timeless design principles to create a world-class reading experience.

## Typography

### Font Families

- **Serif (Charter)**: Used for headings and display text
- **Sans-serif (Inter)**: Used for body text and UI elements
- **Monospace (JetBrains Mono)**: Used for code blocks and technical content

### Scale

- **Display (6xl)**: 4.5rem (72px) - Hero headlines
- **Display (5xl)**: 3.5rem (56px) - Section headlines
- **H1 (4xl)**: 2.75rem (44px) - Article headlines
- **H2 (3xl)**: 2.25rem (36px) - Major sections
- **H3 (2xl)**: 1.875rem (30px) - Subsections
- **H4 (xl)**: 1.5rem (24px) - Minor headings
- **Body (base)**: 1.125rem (18px) - Main content
- **Small (sm)**: 0.875rem (14px) - Captions, metadata

### Line Heights

- **Display**: 1.0 - 1.1 (tight for impact)
- **Headings**: 1.2 - 1.3 (balanced)
- **Body**: 1.6 (optimal readability)
- **UI Elements**: 1.4 - 1.5 (comfortable)

## Color System

### Primary Colors

- **Primary**: #2337ff (vibrant blue for interactive elements)
- **Primary Dark**: #000d8a (darker shade for hover states)

### Text Colors

- **Light Mode**: rgb(15, 18, 25) - Deep black for optimal contrast
- **Dark Mode**: rgb(229, 233, 240) - Soft white for reduced eye strain

### Background Colors

- **Light Mode**: #fff - Pure white for clarity
- **Dark Mode**: rgb(34, 41, 57) - Deep navy for comfort

### Semantic Colors

- **Success**: #10B981 - Green for positive actions
- **Warning**: #F59E0B - Yellow for cautionary states
- **Error**: #EF4444 - Red for error states
- **Info**: #3B82F6 - Blue for informational states

## Spacing

### Base Unit

- **4px**: Base unit for consistent spacing

### Scale

- **xs**: 0.25rem (4px) - Micro spacing
- **sm**: 0.5rem (8px) - Small spacing
- **md**: 1rem (16px) - Medium spacing
- **lg**: 1.5rem (24px) - Large spacing
- **xl**: 2rem (32px) - Extra large spacing
- **2xl**: 3rem (48px) - Section spacing
- **3xl**: 4rem (64px) - Major spacing
- **4xl**: 6rem (96px) - Hero spacing
- **5xl**: 8rem (128px) - Full section spacing

## Components

### Header

- Sticky positioning with backdrop blur
- Responsive navigation with smooth transitions
- Mobile-first approach with hamburger menu
- Theme toggle with animated icon

### Navigation

- Clear visual hierarchy
- Underline animations on hover
- Active state indicators
- Accessible keyboard navigation

### Footer

- Three-column layout on desktop
- Responsive grid on mobile
- Social links with hover effects
- Clear copyright information

### Buttons

- Primary: Solid background with hover state
- Secondary: Outline with hover fill
- Icon: Circular with hover scale
- All buttons include focus states

## Motion

### Principles

- Subtle and purposeful animations
- Performance-focused transitions
- Reduced motion preferences respected
- Smooth scrolling behavior

### Transitions

- **Fast**: 150ms - UI feedback
- **Medium**: 200ms - Content transitions
- **Slow**: 300ms - Page transitions
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)

## Accessibility

### Guidelines

- WCAG 2.1 AA compliance
- Minimum contrast ratio of 4.5:1
- Keyboard navigation support
- Screen reader optimization

### Implementation

- Semantic HTML structure
- ARIA attributes where needed
- Focus management
- Reduced motion support

## Responsive Design

### Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Mobile First

- Base styles for mobile
- Progressive enhancement
- Touch-friendly targets
- Responsive typography

## Dark Mode

### Implementation

- System preference detection
- Manual toggle option
- Smooth transitions
- Consistent contrast

### Color Adjustments

- Adjusted contrast ratios
- Reduced brightness
- Preserved readability
- Maintained brand colors

## Performance

### Optimization

- Minimal CSS with Tailwind
- Efficient animations
- Lazy loading for images
- Image optimization with Sharp
- Font loading strategy

### Metrics

- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s
- Cumulative Layout Shift < 0.1
- Largest Contentful Paint < 2.5s

## Usage Guidelines

### Component Implementation

1. Use Tailwind classes for styling
2. Follow component structure
3. Maintain accessibility
4. Test responsive behavior
5. Verify dark mode support

### Best Practices

- Keep components focused
- Use semantic HTML
- Maintain consistent spacing
- Follow typography scale
- Test across devices

## Future Considerations

### Planned Improvements

- Component variants
- Design tokens
- Animation library
- Icon system
- Documentation site

### Maintenance

- Regular audits
- Performance monitoring
- Accessibility testing
- Browser compatibility
- User feedback integration
