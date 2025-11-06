import { getCollection, type CollectionEntry } from 'astro:content';
import highlightsConfig from '../content/highlights.json';
import { getExcerpt } from './excerpt';

interface HighlightConfig {
  slug: string;
  title?: string;
  summary?: string;
}

interface Highlight {
  post: CollectionEntry<'blog'>;
  title: string;
  summary: string;
}

/**
 * Get highlights from config file
 * @returns Array of highlight objects with post and summary
 */
export async function getHighlights(): Promise<Highlight[]> {
  // Read highlights config
  const config = highlightsConfig as HighlightConfig[];

  // Get all posts
  const allPosts = await getCollection('blog', ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true;
  });

  // Create a map of post slugs to posts
  const postsMap = new Map<string, CollectionEntry<'blog'>>();
  allPosts.forEach((post) => {
    postsMap.set(post.id, post);
  });

  // Process highlights
  const highlights: Highlight[] = [];

  for (const highlightConfig of config) {
    const post = postsMap.get(highlightConfig.slug);

    if (!post) {
      // Skip if post not found
      continue;
    }

    // Determine title: use custom title from config, or fallback to post title
    const title = highlightConfig.title || post.data.title;

    // Determine summary with fallback chain:
    // 1. Custom summary from config
    // 2. post.data.description (required field, always exists)
    // 3. Excerpt from post body (fallback only)
    let summary = highlightConfig.summary;

    if (!summary) {
      summary = post.data.description || '';
    }

    // Final fallback: extract excerpt from body if description is empty
    if (!summary && post.body) {
      summary = getExcerpt(post.body);
    }

    highlights.push({
      post,
      title,
      summary: summary || '',
    });
  }

  return highlights;
}

