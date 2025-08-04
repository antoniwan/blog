# Comments Setup

This guide helps you set up the Giscus comment system for your Astro blog.

## What is Giscus?

Giscus is a privacy-focused comment system that uses GitHub Discussions as the backend. It's perfect for static sites because:

- ✅ **Privacy-focused**: No tracking, no ads, no third-party data collection
- ✅ **Open source**: GitHub-based, fully transparent
- ✅ **Maintainable**: Uses GitHub Discussions, so you control the data
- ✅ **Lightweight**: No database required, works with your static site
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
4. Create a category called "Comments"
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

## Disable Comments on Specific Posts

Add `showComments: false` to the frontmatter of any post:

```yaml
---
title: "My Post"
description: "Post description"
pubDate: "2025-01-01T00:00:00.000Z"
showComments: false
---
```

## Configuration Options

- **mapping**: How to map pages to discussions (`pathname`, `url`, `title`, `og:title`)
- **strict**: Only create discussions for pages with explicit frontmatter
- **reactionsEnabled**: Enable/disable reactions
- **inputPosition**: Position of the comment input (`top` or `bottom`)
- **lang**: Language for the interface
- **loading**: Loading strategy (`lazy` or `eager`) 