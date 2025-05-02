# StrongVault Design System

## Overview

This design system is inspired by the New York Times digital experience, focusing on editorial excellence, readability, and user experience. It combines modern web technologies (Astro, Tailwind CSS) with timeless design principles to create a world-class reading experience.

## Typography

### Font Families

- **Serif**: Used for headings and display text (e.g., NYT-style headlines)
- **Sans-serif**: Used for body text and UI elements

### Scale

- **H1**: 3rem (48px) - 4rem (64px) - 5rem (80px)
- **H2**: 2.25rem (36px) - 3rem (48px)
- **H3**: 1.875rem (30px) - 2.25rem (36px)
- **H4**: 1.5rem (24px) - 1.875rem (30px)
- **Body**: 1.125rem (18px) - 1.25rem (20px)
- **Small**: 0.875rem (14px) - 1rem (16px)

### Line Heights

- **Headings**: 1.1 - 1.2
- **Body**: 1.5 - 1.6
- **UI Elements**: 1.4

## Color System

### Primary Colors

- **Primary**: Brand color for interactive elements
- **Primary Dark**: Darker shade for hover states
- **Text**: Main text color
- **Background**: Main background color

### Semantic Colors

- **Success**: Green for positive actions
- **Warning**: Yellow for cautionary states
- **Error**: Red for error states
- **Info**: Blue for informational states

### Grayscale

- **Gray-100**: Light backgrounds
- **Gray-200**: Subtle borders
- **Gray-300**: Secondary text
- **Gray-400**: Tertiary text
- **Gray-800**: Dark mode backgrounds
- **Gray-900**: Dark mode text

## Spacing

### Base Unit

- **4px**: Base unit for consistent spacing

### Scale

- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)

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

- **Fast**: 150ms
- **Medium**: 200ms
- **Slow**: 300ms
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)

## Accessibility

### Guidelines

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader optimization
- Color contrast requirements
- Focus management
- ARIA attributes

### Focus States

- Visible outline
- High contrast
- Consistent styling
- Keyboard-only navigation

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

- Minimal CSS
- Efficient animations
- Lazy loading
- Image optimization
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
