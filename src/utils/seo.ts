import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_URL,
  AUTHOR,
  SOCIAL_LINKS,
  SEO_CONFIG,
} from "../consts";

export interface SEOConfig {
  title: string;
  description?: string;
  path?: string; // Simplified: just the path, URL will be auto-generated
  image?: string;
  imageAlt?: string;
  author?: string;
  keywords?: string[];
  pubDate?: Date;
  updatedDate?: Date;
  type?: "website" | "article" | "profile";
  locale?: string;
  robots?: string;
}

export interface MetaTags {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogImageAlt: string;
  author: string;
  keywords: string;
  pubDate?: string;
  updatedDate?: string;
  robots: string;
  locale: string;
}

// Enhanced URL generation with automatic fallbacks
export function generateCanonicalUrl(path: string, baseUrl = SITE_URL): string {
  return new URL(path, baseUrl).href;
}

// Enhanced image URL generation with optimization
export function generateImageUrl(
  imagePath: string,
  baseUrl = SITE_URL
): string {
  if (!imagePath) return new URL(SEO_CONFIG.defaultImage, baseUrl).href;
  return new URL(imagePath, baseUrl).href;
}

// Simplified meta tag generation with automatic URL handling
export function generateMetaTags(config: SEOConfig): MetaTags {
  const {
    title,
    description = SITE_DESCRIPTION,
    path,
    image,
    imageAlt,
    author = AUTHOR.name,
    keywords = [],
    pubDate,
    updatedDate,
    type = "website",
    locale = SEO_CONFIG.defaultLocale,
    robots = SEO_CONFIG.defaultRobots,
  } = config;

  const fullTitle = `${title} | ${SITE_TITLE}`;
  const canonical = path ? generateCanonicalUrl(path) : "";
  const ogImage = generateImageUrl(image || SEO_CONFIG.defaultImage);
  const ogImageAlt = imageAlt || title;

  return {
    title: fullTitle,
    description,
    canonical,
    ogImage,
    ogImageAlt,
    author,
    keywords: keywords.join(", "),
    pubDate: pubDate?.toISOString(),
    updatedDate: updatedDate?.toISOString(),
    robots,
    locale,
  };
}

// Enhanced social links generation
export function generateSocialLinks() {
  return Object.values(SOCIAL_LINKS);
}

// Constants for consistent usage
export const DEFAULT_ROBOTS = SEO_CONFIG.defaultRobots;
export const DEFAULT_LOCALE = SEO_CONFIG.defaultLocale;
export const DEFAULT_IMAGE = SEO_CONFIG.defaultImage;

// Utility for automatic keyword generation from tags and categories
export function generateKeywords(
  tags?: string[],
  categories?: string[]
): string[] {
  const keywords: string[] = [];

  if (tags) keywords.push(...tags);
  if (categories) keywords.push(...categories);

  // Add site-wide keywords
  keywords.push(
    "blog",
    "personal",
    "technology",
    "health",
    "food",
    "parenting"
  );

  return [...new Set(keywords)]; // Remove duplicates
}

// Utility for automatic image alt text generation
export function generateImageAlt(title: string, customAlt?: string): string {
  return customAlt || `${title} - ${SITE_TITLE}`;
}
