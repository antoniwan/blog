import { SITE_TITLE, SITE_DESCRIPTION, AUTHOR } from "../consts";

export interface SEOConfig {
  title: string;
  description?: string;
  url?: string;
  image?: string;
  author?: string;
  keywords?: string[];
  pubDate?: Date;
  updatedDate?: Date;
}

export function generateMetaTags(config: SEOConfig) {
  const {
    title,
    description = SITE_DESCRIPTION,
    url,
    image,
    author = AUTHOR.name,
    keywords = [],
    pubDate,
    updatedDate,
  } = config;

  const fullTitle = `${title} | ${SITE_TITLE}`;
  const canonical = url || "";
  const ogImage = image || "/share-image.png";

  return {
    title: fullTitle,
    description,
    canonical,
    ogImage,
    author,
    keywords,
    pubDate: pubDate?.toISOString(),
    updatedDate: updatedDate?.toISOString(),
  };
}

export const DEFAULT_ROBOTS = {
  index: true,
  follow: true,
};

export const SOCIAL_LINKS = {
  twitter: "@antoniwan",
  website: "https://antoniwan.online",
  github: "https://github.com/antoniwan",
};
