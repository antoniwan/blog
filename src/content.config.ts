import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { categories } from "../data/categories";

// Create a list of valid category IDs
const validCategoryIds = categories.map((cat) => cat.id);

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    // Required fields
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    language: z.array(z.enum(["en", "es"])).default(["en"]),

    // Optional fields
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum(validCategoryIds as [string, ...string[]]).optional(),
    subcategory: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
    readingTime: z.number().optional(), // in minutes
    author: z.string().optional(),
    authorImage: z.string().optional(),
    authorBio: z.string().optional(),
    featured: z.boolean().optional().default(false),

    // SEO fields
    canonicalUrl: z.string().url().optional(),
    ogImage: z.string().optional(),
    ogImageAlt: z.string().optional(),
    robots: z
      .object({
        index: z.boolean().optional().default(true),
        follow: z.boolean().optional().default(true),
        noarchive: z.boolean().optional().default(false),
        nosnippet: z.boolean().optional().default(false),
        noimageindex: z.boolean().optional().default(false),
      })
      .optional()
      .default({}),
  }),
});

export const collections = { blog };
