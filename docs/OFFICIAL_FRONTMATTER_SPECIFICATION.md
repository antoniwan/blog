# Official Blog Post Frontmatter Specification

## Overview

This document defines the official frontmatter specification for all blog posts in the Curious Chaos Journal. All posts must follow this standardized format to ensure consistency, maintainability, and proper SEO functionality.

## 📋 Required Fields

### `title` (string)

- **Required**: Yes
- **Description**: The main title of the blog post
- **Format**: String with proper capitalization
- **Example**: `"The Underrated Superfood: Why Beef Heart Should Be on Your Plate"`

### `description` (string)

- **Required**: Yes
- **Description**: A concise summary of the post content (used for SEO and social sharing)
- **Format**: String, typically 150-160 characters
- **Example**: `"Nutritional comparison of beef heart with common meats, showing its iron, B12, zinc, and CoQ10 content."`

### `pubDate` (date)

- **Required**: Yes
- **Description**: Publication date of the post
- **Format**: ISO 8601 date string
- **Example**: `"2025-05-01T16:45:00.000Z"`

### `language` (array)

- **Required**: Yes
- **Description**: Language(s) of the post content
- **Format**: Array of language codes
- **Values**: `["en"]`, `["es"]`, `["en", "es"]`
- **Default**: `["en"]`

## 📝 Optional Fields

### `updatedDate` (date)

- **Required**: No
- **Description**: Last modification date of the post
- **Format**: ISO 8601 date string
- **Example**: `"2025-05-15T10:30:00.000Z"`

### `heroImage` (string)

- **Required**: No
- **Description**: Primary image for social sharing and post display
- **Format**: Path to image file
- **Example**: `"/images/beef-heart-comparison-chart.png"`
- **Note**: This is the **primary** image for social sharing

### `category` (array)

- **Required**: No
- **Description**: Main categories for the post
- **Format**: Array of category slugs
- **Available Categories**: See `src/data/categories.ts`
- **Example**: `["integration-growth", "learning-projects"]`

### `subcategory` (string)

- **Required**: No
- **Description**: Specific subcategory for the post
- **Format**: String
- **Example**: `"Nutrition"`

### `tags` (array)

- **Required**: No
- **Description**: Keywords and topics for the post
- **Format**: Array of tag strings
- **Example**: `["nutrition", "health", "wellness", "cooking"]`

### `readingTime` (number)

- **Required**: No
- **Description**: Estimated reading time in minutes
- **Format**: Integer
- **Example**: `3`

### `draft` (boolean)

- **Required**: No
- **Description**: Whether the post is a draft (not ready for publication)
- **Format**: Boolean
- **Default**: `false`
- **Example**: `false`

### `featured` (boolean)

- **Required**: No
- **Description**: Whether the post should be featured on the homepage
- **Format**: Boolean
- **Default**: `false`
- **Example**: `false`

### `published` (boolean)

- **Required**: No
- **Description**: Whether the post should be published on the site
- **Format**: Boolean
- **Default**: `true`
- **Example**: `true`

### `showComments` (boolean)

- **Required**: No
- **Description**: Whether to show comments on this post
- **Format**: Boolean
- **Default**: `true`
- **Example**: `true`

### `author` (string)

- **Required**: No
- **Description**: Author name (overrides default author)
- **Format**: String
- **Example**: `"John Doe"`

### `authorImage` (string)

- **Required**: No
- **Description**: Author profile image
- **Format**: Path to image file
- **Example**: `"/images/author.jpg"`

### `authorBio` (string)

- **Required**: No
- **Description**: Author biography
- **Format**: String
- **Example**: `"John Doe is a writer and developer focused on personal growth."`

### `translationGroup` (string)

- **Required**: No
- **Description**: Group identifier for multilingual posts
- **Format**: String
- **Example**: `"beef-heart-nutrition"`

### `keywords` (array)

- **Required**: No
- **Description**: SEO keywords for the post
- **Format**: Array of strings
- **Example**: `["nutrition", "health", "beef heart", "superfood"]`

## 🔄 Field Order

Fields must be ordered exactly as follows:

1. `title`
2. `description`
3. `pubDate`
4. `language`
5. `updatedDate`
6. `heroImage`
7. `category`
8. `subcategory`
9. `tags`
10. `readingTime`
11. `draft`
12. `featured`
13. `published`
14. `showComments`
15. `author`
16. `authorImage`
17. `authorBio`
18. `translationGroup`
19. `keywords`

## 📄 Example Frontmatter

```yaml
---
title: "The Underrated Superfood: Why Beef Heart Should Be on Your Plate"
description: >-
  Nutritional comparison of beef heart with common meats, showing its iron, B12,
  zinc, and CoQ10 content. Includes cooking methods and ways to add it to your
  diet.
pubDate: "2025-05-01T16:45:00.000Z"
language:
  - en
heroImage: /images/beef-heart-comparison-chart.png
category:
  - integration-growth
  - learning-projects
  - diy-creation
subcategory: Nutrition
tags:
  - nutrition
  - health
  - wellness
  - cooking
  - self-care
  - learning-projects
  - integration-growth
  - fitness
  - healthy-eating
  - micronutrients
readingTime: 3
draft: false
featured: false
published: true
showComments: true
---
```

## 🚫 Deprecated Fields

The following fields are **deprecated** and should **not** be used:

- `canonicalUrl` - Removed in favor of automatic canonical URL generation
- `ogImage` - Replaced by `heroImage`
- `ogImageAlt` - Replaced by automatic alt text generation
- `robots` - Replaced by automatic robots meta tag generation

## 🔧 Validation

### Content Schema

The frontmatter is validated against the schema defined in `src/content.config.ts`.

### Automated Auditing

Use the audit script to check frontmatter compliance:

```bash
node scripts/audit-frontmatter.js
```

### Automated Standardization

Use the standardization script to fix frontmatter issues:

```bash
node scripts/standardize-frontmatter.js
```

## 📊 Field Usage Statistics

Based on the current blog posts:

- **Required fields**: 100% usage across all posts
- **heroImage**: 29.4% of posts have custom hero images
- **subcategory**: 35.3% of posts specify a subcategory
- **author**: 5.9% of posts specify a custom author
- **translationGroup**: 3.9% of posts are part of translation groups

## 🎯 Best Practices

### 1. **Consistent Formatting**

- Use proper YAML syntax
- Maintain consistent indentation (2 spaces)
- Use quotes for strings with special characters

### 2. **SEO Optimization**

- Write compelling, keyword-rich descriptions
- Use relevant tags and categories
- Include a hero image for better social sharing

### 3. **Content Organization**

- Choose appropriate categories and subcategories
- Use descriptive tags for better discoverability
- Set accurate reading time estimates

### 4. **Multilingual Support**

- Use `language` array for language specification
- Use `translationGroup` for related posts in different languages
- Ensure consistent metadata across translations

## 🔄 Migration Guide

### From Legacy Format

If you have posts with deprecated fields:

1. Run the audit script to identify issues
2. Run the standardization script to fix them automatically
3. Verify the changes with another audit

### Manual Migration

To manually migrate a post:

1. Remove deprecated fields (`canonicalUrl`, `ogImage`, `ogImageAlt`, `robots`)
2. Reorder fields according to the specification
3. Add missing required fields with appropriate defaults
4. Ensure proper YAML formatting

## 📝 Notes

- All posts are automatically validated during the build process
- The standardization script can be run safely on all posts
- Frontmatter changes are tracked in version control
- Regular audits ensure ongoing compliance

---

**Last Updated**: December 2024  
**Version**: 1.0  
**Maintainer**: Blog Development Team
