import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    language: z.array(z.string()).default(["en"]),
    category: z.array(z.string()).optional(),
    subcategory: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    published: z.boolean().optional().default(true),
    readingTime: z.number().optional(),
    author: z.string().optional(),
    authorImage: z.string().optional(),
    authorBio: z.string().optional(),
    featured: z.boolean().optional().default(false),
    heroImage: z.string().optional(),
    ogImage: z.string().optional(),
    ogImageAlt: z.string().optional(),
    canonicalUrl: z.string().url().optional(),
    robots: z
      .object({
        index: z.boolean().optional(),
        follow: z.boolean().optional(),
        noarchive: z.boolean().optional(),
        nosnippet: z.boolean().optional(),
        noimageindex: z.boolean().optional(),
      })
      .optional(),
    keywords: z.array(z.string()).optional(),
    translationGroup: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
