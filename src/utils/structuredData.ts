import type { CollectionEntry } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export interface StructuredDataOptions {
  title: string;
  description: string;
  url: string;
  posts?: CollectionEntry<"blog">[];
  type?: "category" | "tag" | "website" | "blogpost";
  identifier?: string;
  author?: string;
  // Blog post specific
  pubDate?: Date;
  updatedDate?: Date;
  heroImage?: string;
  keywords?: string[];
  readingTime?: number;
}

export function generateStructuredData(options: StructuredDataOptions) {
  const {
    title,
    description,
    url,
    posts = [],
    type = "website",
    identifier,
    author = "Antoniwan",
    pubDate,
    updatedDate,
    heroImage,
    keywords = [],
    readingTime,
  } = options;

  const schemas: any[] = [];

  // Base WebSite schema for all pages
  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: url,
    publisher: {
      "@type": "Person",
      name: author,
      url: "https://antoniwan.online",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  });

  // Organization schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_TITLE,
    url: url,
    logo: {
      "@type": "ImageObject",
      url: new URL("/sh-sh-logo.svg", url).href,
      width: 512,
      height: 512,
    },
    sameAs: ["https://antoniwan.online", "https://twitter.com/antoniwan"],
  });

  // Person schema for author
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Person",
    name: author,
    url: "https://antoniwan.online",
    sameAs: ["https://twitter.com/antoniwan"],
    jobTitle: "Software Engineer & Writer",
    worksFor: {
      "@type": "Organization",
      name: SITE_TITLE,
    },
  });

  // Type-specific schemas
  if (type === "blogpost" && pubDate) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      description: description,
      image: heroImage ? new URL(heroImage, url).href : undefined,
      datePublished: pubDate.toISOString(),
      dateModified: updatedDate?.toISOString() || pubDate.toISOString(),
      author: {
        "@type": "Person",
        name: author,
        url: "https://antoniwan.online",
      },
      publisher: {
        "@type": "Organization",
        name: SITE_TITLE,
        url: url,
        logo: {
          "@type": "ImageObject",
          url: new URL("/sh-sh-logo.svg", url).href,
        },
      },
      keywords: keywords.join(", "),
      timeRequired: readingTime ? `PT${readingTime}M` : undefined,
    });
  } else if ((type === "category" || type === "tag") && posts.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: title,
      description: description,
      url: url,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: posts.length,
        itemListElement: posts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "BlogPosting",
            headline: post.data.title,
            description: post.data.description,
            url: new URL(`/p/${post.id}`, url).href,
            datePublished: post.data.pubDate.toISOString(),
            dateModified:
              post.data.updatedDate?.toISOString() ||
              post.data.pubDate.toISOString(),
            author: {
              "@type": "Person",
              name: author,
              url: "https://antoniwan.online",
            },
            image: post.data.heroImage
              ? new URL(post.data.heroImage, url).href
              : undefined,
            keywords: post.data.tags?.join(", "),
            articleSection: post.data.category?.join(", "),
            timeRequired: post.data.readingTime
              ? `PT${post.data.readingTime}M`
              : undefined,
          },
        })),
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: type === "category" ? "Categories" : "Tags",
            item: new URL(type === "category" ? "/category" : "/tag", url).href,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: title,
            item: url,
          },
        ],
      },
      dateModified: new Date().toISOString(),
      inLanguage: "en-US",
      ...(type === "category" && identifier
        ? {
            about: {
              "@type": "Thing",
              name: identifier,
              description: description,
            },
          }
        : {}),
      ...(type === "tag" && identifier ? { keywords: identifier } : {}),
    });
  }

  return schemas.length === 1 ? schemas[0] : schemas;
}

// Legacy function for backward compatibility
export function generateWebSiteSchema(siteUrl: string, author = "Antoniwan") {
  return generateStructuredData({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: siteUrl,
    type: "website",
    author,
  });
}
