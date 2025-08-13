// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import { assetConfig } from "./config/assets";

// TypeScript interfaces for better type safety
export interface Author {
  name: string;
  email: string;
  url: string;
  twitter: string;
  github: string;
  linkedin: string;
}

export interface SocialLinks {
  twitter: string;
  github: string;
  linkedin: string;
  bluesky: string;
  website: string;
  portfolio: string;
}

export interface SEOConfig {
  defaultImage: string;
  defaultImageAlt: string;
  defaultHeroImage: string;
  defaultLocale: string;
  defaultRobots: string;
  googleSiteVerification: string;
  twitterHandle: string;
  organizationName: string;
  organizationLogo: string;
  organizationLogoWidth: number;
  organizationLogoHeight: number;
}

// Site Information
export const SITE_TITLE = "Astro Personal Blog";
export const SHORT_SITE_TITLE = "Astro Blog";
export const SITE_DESCRIPTION =
  "A modern personal blog built with Astro. Share your thoughts, ideas, and experiences with the world.";
export const SITE_URL = "https://yourdomain.com";

// Author Information
export const AUTHOR: Author = {
  name: "Your Name",
  email: "your.email@example.com",
  url: "https://yourdomain.com",
  twitter: "@yourusername",
  github: "yourusername",
  linkedin: "yourusername",
};

// Social Media Links
export const SOCIAL_LINKS: SocialLinks = {
  twitter: "https://twitter.com/yourusername",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  bluesky: "https://bsky.app/profile/yourusername.bsky.social",
  website: "https://yourdomain.com",
  portfolio: "https://portfolio.yourdomain.com",
};

// SEO Configuration
export const SEO_CONFIG: SEOConfig = {
  defaultImage: assetConfig.images.defaultSocial,
  defaultImageAlt:
    "Astro Personal Blog - A modern platform for sharing thoughts, ideas, and experiences.",
  defaultHeroImage: assetConfig.images.defaultHero,
  defaultLocale: "en_US",
  defaultRobots: "index, follow",
  googleSiteVerification: "your-google-verification-code",
  twitterHandle: "@yourusername",
  organizationName: "Astro Personal Blog",
  organizationLogo: assetConfig.images.logo,
  organizationLogoWidth: 512,
  organizationLogoHeight: 512,
};

// Category Emojis
export const CATEGORY_EMOJIS: Record<string, string> = {
  tech: "💻",
  health: "🏥",
  food: "🍽️",
  family: "👶",
  personal: "👤",
  projects: "🚀",
  thoughts: "💭",
  tutorials: "📚",
  reviews: "⭐",
  news: "📰",
  thinking: "🧠",
  relationships: "👨‍👩‍👧‍👦",
  culture: "🌍",
  philosophy: "🤔",
  "modern-life": "🏙️",
  reflection: "💭",
  growth: "🌱",
  identity: "🎭",
  creativity: "🎨",
  learning: "📖",
};

// Disclaimer Text
export const DISCLAIMER_TEXT =
  "The content shared here represents personal opinions and experiences. This blog is for informational and entertainment purposes only. Please consult qualified professionals for professional advice.";

// Site Taglines and Messaging
export const SITE_TAGLINES = {
  main: "Share Your Story",
  subtitle:
    "A modern platform for writers, thinkers, and creators to share their thoughts with the world.",
  description:
    "Modern blogging. Clean design. Powerful features.",
  quote: "Where ideas find their voice.",
  spanish: "Comparte tu historia con el mundo.",
  mind: "A platform for thoughtful content.",
  status: "Always evolving. Always improving.",
};

// SEO Keywords for better discoverability
export const SEO_KEYWORDS = [
  "blog",
  "personal blog",
  "writing",
  "content creation",
  "thoughts",
  "ideas",
  "personal growth",
  "reflection",
  "modern web",
  "astro",
  "blogging platform",
  "content management",
  "digital publishing",
  "creative writing",
  "personal development",
  "modern life",
  "authenticity",
  "vulnerability",
  "strength",
  "resilience",
];
