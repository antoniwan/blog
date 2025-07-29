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

export interface BlogLayoutProps extends BaseLayoutProps {
  // Blog-specific additional props
  tableOfContents?: {
    level: number;
    text: string;
    slug: string;
  }[];
  showComments?: boolean;
}
