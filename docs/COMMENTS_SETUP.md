# Comments System Setup Guide

This guide will help you set up the Giscus comment system for your Astro blog.

## What is Giscus?

Giscus is a privacy-focused, open-source comment system that uses GitHub Discussions as the backend. It's perfect for static sites like yours because:

- ✅ **Privacy-focused**: No tracking, no ads, no third-party data collection
- ✅ **Open source**: GitHub-based, fully transparent
- ✅ **Maintainable**: Uses GitHub Discussions, so you control the data
- ✅ **Lightweight**: No database required, works with your static site
- ✅ **Modern**: Supports themes, reactions, and markdown
- ✅ **Free**: No hosting costs beyond your existing GitHub account

## Setup Steps

### 1. Enable GitHub Discussions

1. Go to your GitHub repository: `https://github.com/your-username/curious-chaos-journal`
2. Click on **Settings** tab
3. Scroll down to **Features** section
4. Check the box for **Discussions**
5. Click **Save**

### 2. Create a Discussion Category

1. Go to the **Discussions** tab in your repository
2. Click **Categories** in the sidebar
3. Click **New category**
4. Create a category called "Comments" (or whatever you prefer)
5. Set it as a **Discussion** type
6. Make it **Public** so visitors can comment
7. Click **Create category**

### 3. Get Your Repository Information

1. Go to [giscus.app](https://giscus.app)
2. Enter your repository: `your-username/curious-chaos-journal`
3. Select the "Comments" category you just created
4. Choose your preferred mapping (recommended: **pathname**)
5. Copy the configuration values

### 4. Update Configuration

Edit `src/config/giscus.ts` and replace the placeholder values:

```typescript
export const giscusConfig = {
  // Your GitHub repository in the format "username/repository"
  repo: "your-username/curious-chaos-journal",

  // Repository ID - get this from giscus.app
  repoId: "YOUR_ACTUAL_REPO_ID",

  // Category name for discussions
  category: "Comments",

  // Category ID - get this from giscus.app
  categoryId: "YOUR_ACTUAL_CATEGORY_ID",

  // ... rest of the config
};
```

### 5. Install Giscus App (Optional but Recommended)

1. Go to [giscus.app](https://giscus.app)
2. Click **Install giscus** button
3. This will install the Giscus app to your repository
4. This enables automatic discussion creation and better integration

## Configuration Options

### Basic Settings

- **repo**: Your GitHub repository (format: `username/repository`)
- **repoId**: Repository ID from giscus.app
- **category**: Discussion category name
- **categoryId**: Category ID from giscus.app

### Advanced Settings

- **mapping**: How to map pages to discussions
  - `pathname`: Uses the page path (recommended)
  - `url`: Uses the full URL
  - `title`: Uses the page title
  - `og:title`: Uses Open Graph title
- **strict**: Only create discussions for pages with explicit frontmatter
- **reactionsEnabled**: Enable/disable reactions
- **inputPosition**: Position of the comment input (`top` or `bottom`)
- **lang**: Language for the interface
- **loading**: Loading strategy (`lazy` or `eager`)

## Customization

### Disable Comments on Specific Posts

Add `showComments: false` to the frontmatter of any post:

```markdown
---
title: "My Post"
description: "Post description"
showComments: false
---
```

### Custom Comment Section

You can also use the Comments component directly in any layout:

```astro
---
import Comments from '../components/Comments.astro';
import { giscusConfig } from '../config/giscus';
---

<Comments
  repo={giscusConfig.repo}
  repoId={giscusConfig.repoId}
  category={giscusConfig.category}
  categoryId={giscusConfig.categoryId}
  // ... other props
/>
```

## Privacy and Security

### What Data is Collected?

- **No personal data**: Giscus doesn't collect or store personal information
- **GitHub authentication**: Users comment using their GitHub accounts
- **Public discussions**: All comments are public and stored in your GitHub repository
- **No tracking**: No analytics, no cookies, no third-party scripts

### GDPR Compliance

- All data is stored in your GitHub repository
- Users can delete their comments by deleting them from GitHub
- No third-party data processing
- Users control their own data through GitHub

## Troubleshooting

### Comments Not Appearing

1. Check that GitHub Discussions is enabled
2. Verify your repository and category IDs
3. Ensure the Giscus app is installed (optional but recommended)
4. Check browser console for errors

### Theme Issues

The comment system automatically follows your site's theme. If you have issues:

1. Make sure your site has proper dark/light mode detection
2. Check that the `data-theme` attribute is set on your HTML element
3. The component includes CSS to handle theme switching

### Performance

- Comments are loaded lazily by default
- The script is loaded asynchronously
- No impact on initial page load
- Minimal JavaScript footprint

## Support

- **Giscus Documentation**: [giscus.app](https://giscus.app)
- **GitHub Repository**: [github.com/giscus/giscus](https://github.com/giscus/giscus)
- **Issues**: [github.com/giscus/giscus/issues](https://github.com/giscus/giscus/issues)

## Migration from Other Systems

If you're migrating from another comment system:

1. Export your existing comments
2. Create discussions in your GitHub repository
3. Copy the comments to the appropriate discussions
4. Update your site to use Giscus

The pathname mapping will automatically link existing discussions to your posts.
