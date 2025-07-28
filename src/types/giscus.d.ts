declare module "astro:content" {
  interface Render {
    ".md": Promise<{
      Content: import("astro").MarkdownInstance<{}>["Content"];
      headings: import("astro").MarkdownHeading[];
      remarkPluginFrontmatter: Record<string, any>;
    }>;
  }
}

// Extend the frontmatter interface to include comments option
declare module "astro" {
  interface MarkdownInstance<T> {
    frontmatter: T & {
      showComments?: boolean;
    };
  }
}

// Giscus configuration types
export interface GiscusConfig {
  repo: string;
  repoId: string;
  category: string;
  categoryId: string;
  mapping?: "pathname" | "url" | "title" | "og:title";
  strict?: boolean;
  reactionsEnabled?: boolean;
  emitMetadata?: boolean;
  inputPosition?: "top" | "bottom";
  lang?: string;
  loading?: "lazy" | "eager";
  theme?: "light" | "dark" | "auto";
}

// Comments component props
export interface CommentsProps extends GiscusConfig {
  theme?: "light" | "dark" | "auto";
}
