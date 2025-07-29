import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_URL,
  AUTHOR,
  SOCIAL_LINKS,
  SEO_CONFIG,
  SEO_KEYWORDS,
} from "../consts";

export interface SEOConfig {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  heroImage?: string;
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
  ogType: string;
}

// Simplified URL generation
export function generateCanonicalUrl(path: string, baseUrl = SITE_URL): string {
  return new URL(path, baseUrl).href;
}

// Enhanced image URL generation with proper prioritization
export function generateImageUrl(
  imagePath?: string,
  heroImage?: string,
  baseUrl = SITE_URL
): string {
  // Priority: image > heroImage > default
  const finalImage = imagePath || heroImage || SEO_CONFIG.defaultImage;
  return new URL(finalImage, baseUrl).href;
}

// Automatic Open Graph type detection
export function detectOGType(
  pubDate?: Date,
  type?: string
): "article" | "website" {
  if (pubDate || type === "article") return "article";
  return "website";
}

// Simplified meta tag generation with improved image handling
export function generateMetaTags(config: SEOConfig): MetaTags {
  const {
    title,
    description = SITE_DESCRIPTION,
    path,
    image,
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
  const ogImage = generateImageUrl(image, heroImage);
  const ogImageAlt = imageAlt || title;
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
  keywords.push(...SEO_KEYWORDS);

  return [...new Set(keywords)]; // Remove duplicates
}

// Utility for automatic image alt text generation
export function generateImageAlt(title: string, customAlt?: string): string {
  return customAlt || `${title} - ${SITE_TITLE}`;
}

// Enhanced URL utilities for better consistency
export function ensureTrailingSlash(path: string): string {
  return path.endsWith("/") ? path : `${path}/`;
}

export function removeTrailingSlash(path: string): string {
  return path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
}
