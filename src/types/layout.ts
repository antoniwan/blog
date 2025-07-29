export interface BaseLayoutProps {
  title: string;
  description?: string;
  // Blog-specific props
  pubDate?: Date;
  updatedDate?: Date;
  heroImage?: string;
  readingTime?: number;
  tags?: string[];
  category?: string[];
  // SEO fields
  path?: string;
  image?: string;
  imageAlt?: string;
  author?: string;
  keywords?: string[];
  type?: "website" | "article" | "profile";
  // Structured data specific
  structuredDataType?: "website" | "blogpost" | "category" | "tag";
  structuredDataIdentifier?: string;
  posts?: any[]; // For category/tag pages
}

export interface BlogLayoutProps extends BaseLayoutProps {
  // Blog-specific additional props
  tableOfContents?: {
    items: Array<{
      text: string;
      slug: string;
      depth: number;
    }>;
  };
  showComments?: boolean;
}
