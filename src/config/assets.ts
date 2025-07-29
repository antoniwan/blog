// Asset Configuration
// This file contains the configuration for all static assets used in the site

export const assetConfig = {
  // Default images
  images: {
    // Default hero image for blog posts without a specific hero image
    defaultHero: "/images/default.avif",

    // Default social sharing image
    defaultSocial: "/share-image.png",

    // Site logo
    logo: "/sh-sh-logo.svg",

    // Favicon
    favicon: "/favicon.svg",
  },

  // Symbol images (for special content)
  symbols: {
    lightsaber: "/symbols/lightsaber.avif",
  },

  // Site manifest
  manifest: "/site.webmanifest",

  // Robots file
  robots: "/robots.txt",
};

// Type for asset configuration
export type AssetConfig = typeof assetConfig;
