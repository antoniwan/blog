// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

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
  buildsSoftware: string;
  strongHands: string;
}

export interface SEOConfig {
  defaultImage: string;
  defaultImageAlt: string;
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
export const SITE_TITLE = "Curious Chaos Journal";
export const SHORT_SITE_TITLE = "Curious Chaos Journal";
export const SITE_DESCRIPTION =
  "Dispatches from a fractured mind navigating fatherhood, masculinity, cultura, and modern collapse. Raw reflections on thinking, culture, and the soft heart inside the hard world.";
export const SITE_URL = "https://blog.antoniwan.online";

// Author Information
export const AUTHOR: Author = {
  name: "Antoniwan",
  email: "antoniwan@antoniwan.online",
  url: "https://antoniwan.online",
  twitter: "@antoniwan",
  github: "antoniwan",
  linkedin: "antoniwan",
};

// Social Media Links
export const SOCIAL_LINKS: SocialLinks = {
  twitter: "https://twitter.com/antoniwan",
  github: "https://github.com/antoniwan",
  linkedin: "https://linkedin.com/in/antoniwan",
  bluesky: "https://bsky.app/profile/antoniwan.online",
  buildsSoftware: "https://builds.software",
  strongHands: "https://stronghandssoftheart.com",
};

// SEO Configuration
export const SEO_CONFIG: SEOConfig = {
  defaultImage: "/share-image.png",
  defaultImageAlt:
    "Curious Chaos Journal - Thinking hurts. I do it anyway. Raw reflections on fatherhood, masculinity, culture, and modern collapse.",
  defaultLocale: "en_US",
  defaultRobots: "index, follow",
  googleSiteVerification: "gUubXvBv6tFsaZTQd5vS1VUGHlaMTOyf110X3yn7jiY",
  twitterHandle: "@antoniwan",
  organizationName: "Curious Chaos Journal",
  organizationLogo: "/sh-sh-logo.svg",
  organizationLogoWidth: 512,
  organizationLogoHeight: 512,
};

// Category Emojis
export const CATEGORY_EMOJIS: Record<string, string> = {
  tech: "💻",
  health: "🏥",
  food: "🍽️",
  parenting: "👶",
  personal: "👤",
  projects: "🚀",
  thoughts: "💭",
  tutorials: "📚",
  reviews: "⭐",
  news: "📰",
  thinking: "🧠",
  fatherhood: "👨‍👧‍👦",
  masculinity: "⚔️",
  culture: "🌍",
  philosophy: "🤔",
  "modern-life": "🏙️",
  collapse: "🔥",
  reflection: "💭",
  growth: "🌱",
  identity: "🎭",
};

// Disclaimer Text
export const DISCLAIMER_TEXT =
  "The wisdom, practices, and digital alchemy shared here flow from personal experience and creative exploration. None of this constitutes medical, legal, psychological, or professional advice. Please consult qualified professionals for such guidance.";

// Site Taglines and Messaging
export const SITE_TAGLINES = {
  main: "Thinking hurts. I do it anyway.",
  subtitle:
    "Dispatches from a fractured mind navigating fatherhood, masculinity, cultura, and modern collapse — one burning question at a time.",
  description:
    "Raw reflections. No filter. Some philosophy. Occasional beauty.",
  quote: "Notes from the soft heart inside the hard world.",
  spanish: "Caos, cultura, y curiosidad sin permiso.",
  mind: "A mind on fire. A soul at work.",
  status: "Still learning. Still breaking. Still here.",
};

// SEO Keywords for better discoverability
export const SEO_KEYWORDS = [
  "thinking",
  "fatherhood",
  "masculinity",
  "culture",
  "modern collapse",
  "philosophy",
  "personal reflection",
  "parenting",
  "identity",
  "growth",
  "raw thoughts",
  "cultural navigation",
  "mindfulness",
  "self-improvement",
  "personal development",
  "modern life",
  "authenticity",
  "vulnerability",
  "strength",
  "resilience",
];
