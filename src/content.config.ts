import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { categories } from "./data/categories";
import type { Category } from "./data/categories";

// Create a list of valid category IDs
const validCategoryIds = categories.map((cat: Category) => cat.id);

// Date validation and formatting
const dateSchema = z.union([
  z.string().transform((str) => new Date(str)),
  z.date(),
  z.number().transform((num) => new Date(num))
]).refine((date) => !isNaN(date.getTime()), {
  message: "Invalid date format"
});

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/p/` directory.
  loader: glob({ base: "./src/content/p", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    // Required fields
    title: z.string(),
    description: z.string(),
    pubDate: dateSchema,
    language: z.array(z.enum(["en", "es"])).default(["en"]),

    // Optional fields
    updatedDate: dateSchema.optional(),
    heroImage: z.string().optional(),
    category: z
      .array(z.enum(validCategoryIds as [string, ...string[]]))
      .optional(),
    subcategory: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
    readingTime: z.number().optional(), // in minutes
    author: z.string().optional(),
    authorImage: z.string().optional(),
    authorBio: z.string().optional(),
    featured: z.boolean().optional().default(false),

    // Translation group for multilingual posts
    translationGroup: z.string().optional(),

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
