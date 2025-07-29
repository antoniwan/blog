import type { CollectionEntry } from "astro:content";
import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_URL,
  AUTHOR,
  SOCIAL_LINKS,
  SEO_CONFIG,
} from "../consts";
import { generateCanonicalUrl, generateImageUrl } from "./seo";

export interface StructuredDataOptions {
  title: string;
  description: string;
  path: string; // Simplified: just the path, URL will be auto-generated
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
    path,
    posts = [],
    type = "website",
    identifier,
    author = AUTHOR.name,
    pubDate,
    updatedDate,
    heroImage,
    keywords = [],
    readingTime,
  } = options;

  const url = generateCanonicalUrl(path);
  const schemas: any[] = [];

  // Base WebSite schema for all pages
  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    inLanguage: "en-US",
    publisher: {
      "@type": "Person",
      name: author,
      url: AUTHOR.url,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    dateModified: new Date().toISOString(),
  });

  // Organization schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SEO_CONFIG.organizationName,
    url: SITE_URL,
    inLanguage: "en-US",
    logo: {
      "@type": "ImageObject",
      url: generateImageUrl(SEO_CONFIG.organizationLogo),
      width: SEO_CONFIG.organizationLogoWidth,
      height: SEO_CONFIG.organizationLogoHeight,
    },
    sameAs: Object.values(SOCIAL_LINKS),
    dateModified: new Date().toISOString(),
  });

  // Person schema for author
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Person",
    name: author,
    url: AUTHOR.url,
    inLanguage: "en-US",
    sameAs: [SOCIAL_LINKS.twitter, SOCIAL_LINKS.github, SOCIAL_LINKS.bluesky],
    jobTitle: "Software Engineer & Writer",
    worksFor: {
      "@type": "Organization",
      name: SEO_CONFIG.organizationName,
    },
    knowsAbout: [
      "Software Development",
      "Personal Growth",
      "Mental Health",
      "Parenting",
      "Technology",
      "Thinking",
      "Fatherhood",
      "Masculinity",
      "Culture",
      "Modern Collapse",
      "Philosophy",
      "Cultural Navigation",
    ],
  });

  // Type-specific schemas
  if (type === "blogpost" && pubDate) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      description: description,
      image: generateImageUrl(heroImage),
      datePublished: pubDate.toISOString(),
      dateModified: updatedDate?.toISOString() || pubDate.toISOString(),
      author: {
        "@type": "Person",
        name: author,
        url: AUTHOR.url,
      },
      publisher: {
        "@type": "Organization",
        name: SEO_CONFIG.organizationName,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: generateImageUrl(SEO_CONFIG.organizationLogo),
        },
      },
      keywords: keywords.join(", "),
      timeRequired: readingTime ? `PT${readingTime}M` : undefined,
      url: url,
      inLanguage: "en-US",
      articleSection: keywords.length > 0 ? keywords[0] : undefined,
      wordCount:
        description.split(" ").length + keywords.join(" ").split(" ").length,
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
            url: generateCanonicalUrl(`/p/${post.id}`),
            datePublished: post.data.pubDate.toISOString(),
            dateModified:
              post.data.updatedDate?.toISOString() ||
              post.data.pubDate.toISOString(),
            author: {
              "@type": "Person",
              name: author,
              url: AUTHOR.url,
            },
            image: generateImageUrl(post.data.heroImage),
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
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: type === "category" ? "Categories" : "Tags",
            item: generateCanonicalUrl(
              type === "category" ? "/category" : "/tag"
            ),
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
