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
  url?: string;
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

export function generateMetaTags(config: SEOConfig): MetaTags {
  const {
    title,
    description = SITE_DESCRIPTION,
    url,
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
  const canonical = url || "";
  const ogImage = image || SEO_CONFIG.defaultImage;
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

export function generateSocialLinks() {
  return Object.values(SOCIAL_LINKS);
}

export function generateCanonicalUrl(path: string, baseUrl = SITE_URL): string {
  return new URL(path, baseUrl).href;
}

export function generateImageUrl(
  imagePath: string,
  baseUrl = SITE_URL
): string {
  return new URL(imagePath, baseUrl).href;
}

export const DEFAULT_ROBOTS = SEO_CONFIG.defaultRobots;
export const DEFAULT_LOCALE = SEO_CONFIG.defaultLocale;
export const DEFAULT_IMAGE = SEO_CONFIG.defaultImage;
