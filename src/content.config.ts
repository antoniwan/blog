import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    // Required fields
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),

    // Optional fields
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.string().optional(),
    subcategory: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
    readingTime: z.number().optional(), // in minutes
    author: z.string().optional(),
    authorImage: z.string().optional(),
    authorBio: z.string().optional(),
    featured: z.boolean().optional().default(false),
    canonicalUrl: z.string().url().optional(),
    ogImage: z.string().optional(),
    ogImageAlt: z.string().optional(),
  }),
});

export const collections = { blog };
