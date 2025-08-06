export interface BaseLayoutProps {
  title: string;
  description?: string;
  // Blog-specific props
  pubDate?: Date;
  updatedDate?: Date;
  heroImage?: string; // Primary image for social sharing
  readingTime?: number;
  tags?: string[];
  category?: string[];
  // SEO fields
  path?: string;
  imageAlt?: string;
  author?: string;
  keywords?: string[];
  type?: "website" | "article";
  // Structured data specific
  structuredDataType?: "website" | "article" | "category" | "tag";
  structuredDataIdentifier?: string;
  posts?: any[]; // For category/tag pages
}

export interface Translation {
  id: string;
  title: string;
  language: string[];
  path: string;
}

export interface TranslationData {
  translations: Translation[];
  currentLanguage: string;
  currentPath: string;
  hasTranslations: boolean;
}

export interface BlogLayoutProps extends BaseLayoutProps {
  // Blog-specific additional props
  categoryName?: string | null;
  tableOfContents?: {
    level: number;
    text: string;
    slug: string;
  }[];
  showComments?: boolean;
  translationData?: TranslationData;
}
