import { getCollection } from "astro:content";
import { SITE_URL } from "../consts";

export async function GET() {
  // Get all blog posts
  const posts = await getCollection("blog");

  // Filter for published posts only
  const publishedPosts = posts.filter(
    (post) =>
      !post.data.draft &&
      post.data.published !== false &&
      post.data.pubDate <= new Date()
  );

  // Get all static pages
  const staticPages = [
    { url: "/", lastmod: new Date(), changefreq: "daily", priority: 1.0 },
    {
      url: "/about/",
      lastmod: new Date(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: "/category/",
      lastmod: new Date(),
      changefreq: "weekly",
      priority: 0.8,
    },
    { url: "/tag/", lastmod: new Date(), changefreq: "weekly", priority: 0.8 },
  ];

  // Generate category pages
  const categoryPages = [
    "art-expression",
    "diy-creation",
    "integration-growth",
    "learning-projects",
    "metaspace",
    "parenting",
    "politics",
    "psychology",
    "systems-strategy",
  ].map((category) => ({
    url: `/category/${category}/`,
    lastmod: new Date(),
    changefreq: "weekly",
    priority: 0.7,
  }));

  // Generate blog post pages
  const blogPages = publishedPosts.map((post) => ({
    url: `/p/${post.id}/`,
    lastmod: post.data.updatedDate || post.data.pubDate,
    changefreq: "monthly",
    priority: 0.6,
  }));

  // Generate tag pages (get unique tags from published posts)
  const allTags = new Set();
  publishedPosts.forEach((post) => {
    post.data.tags?.forEach((tag) => allTags.add(tag));
  });

  const tagPages = Array.from(allTags).map((tag) => ({
    url: `/tag/${tag}/`,
    lastmod: new Date(),
    changefreq: "weekly",
    priority: 0.5,
  }));

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...categoryPages,
    ...blogPages,
    ...tagPages,
  ];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod.toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
