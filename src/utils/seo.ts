import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_URL,
  AUTHOR,
  SEO_CONFIG,
  SEO_KEYWORDS,
} from "../consts";

// Simplified SEO configuration interface
export interface SEOConfig {
  title: string;
  description?: string;
  path?: string;
  heroImage?: string; // Primary image for social sharing
  imageAlt?: string;
  author?: string;
  keywords?: string[];
  pubDate?: Date;
  updatedDate?: Date;
  type?: "website" | "article";
  locale?: string;
  robots?: string;
}

// Simplified meta tags interface
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
  ogType: "website" | "article";
}

// Generate canonical URL
export function generateCanonicalUrl(path: string): string {
  return new URL(path, SITE_URL).href;
}

// Generate image URL with proper heroImage prioritization
export function generateImageUrl(heroImage?: string): string {
  // Priority: heroImage > default social image
  const imagePath = heroImage || SEO_CONFIG.defaultImage;
  return new URL(imagePath, SITE_URL).href;
}

// Detect Open Graph type
export function detectOGType(pubDate?: Date, type?: string): "article" | "website" {
  return (pubDate || type === "article") ? "article" : "website";
}

// Generate optimized meta tags
export function generateMetaTags(config: SEOConfig): MetaTags {
  const {
    title,
    description = SITE_DESCRIPTION,
    path,
    heroImage,
    imageAlt,
    author = AUTHOR.name,
    keywords = [],
    pubDate,
    updatedDate,
    type,
    locale = SEO_CONFIG.defaultLocale,
    robots = SEO_CONFIG.defaultRobots,
  } = config;

  const fullTitle = `${title} | ${SITE_TITLE}`;
  const canonical = path ? generateCanonicalUrl(path) : "";
  const ogImage = generateImageUrl(heroImage);
  const ogImageAlt = imageAlt || `${title} - ${SITE_TITLE}`;
  const ogType = detectOGType(pubDate, type);

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
    ogType,
  };
}

// Generate keywords from tags and categories
export function generateKeywords(tags?: string[], categories?: string[]): string[] {
  const keywords: string[] = [];
  
  if (tags) keywords.push(...tags);
  if (categories) keywords.push(...categories);
  keywords.push(...SEO_KEYWORDS);
  
  return [...new Set(keywords)]; // Remove duplicates
}

// Generate image alt text
export function generateImageAlt(title: string, customAlt?: string): string {
  return customAlt || `${title} - ${SITE_TITLE}`;
}

// Constants for consistent usage
export const DEFAULT_ROBOTS = SEO_CONFIG.defaultRobots;
export const DEFAULT_LOCALE = SEO_CONFIG.defaultLocale;
