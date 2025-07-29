// Giscus Configuration
// This file contains the configuration for the Giscus comment system
// You'll need to set up GitHub Discussions and get these values from giscus.app

export const giscusConfig = {
  // Your GitHub repository in the format "username/repository"
  repo: "antoniwan/curious-chaos-journal",

  // Repository ID - get this from giscus.app
  repoId: "R_kgDOOioNWQ",

  // Category name for discussions (default: "Announcements")
  category: "Ideas",

  // Category ID - get this from giscus.app
  categoryId: "DIC_kwDOOioNWc4CtgLt",

  // Mapping between pages and discussions
  // Options: "pathname", "url", "title", "og:title"
  mapping: "title",

  // Strict mapping - only create discussions for pages with explicit frontmatter
  strict: false, // Set to false to allow automatic discussion creation

  // Enable reactions
  reactionsEnabled: true,

  // Emit metadata for discussions
  emitMetadata: false,

  // Input position
  inputPosition: "bottom" as const,

  // Language
  lang: "en",

  // Loading strategy
  loading: "lazy" as const,

  // Theme - will automatically follow your site's theme
  theme: "light" as const, // Will be dynamically updated by JavaScript
};
