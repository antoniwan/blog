import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from "../consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  const publishedPosts = posts.filter(
    (post) =>
      !post.data.draft &&
      post.data.published !== false &&
      post.data.pubDate <= new Date()
  );

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: SITE_URL,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      updatedDate: post.data.updatedDate,
      link: `/p/${post.id}/`,
      categories: post.data.category || [],
      author: post.data.author || "Antoniwan",
    })),
  });
}
