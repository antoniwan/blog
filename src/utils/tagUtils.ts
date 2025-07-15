import type { CollectionEntry } from "astro:content";

// Tag importance weights - higher numbers = more important
const TAG_WEIGHTS: Record<string, number> = {
  // Core topics
  "personal-growth": 10,
  "self-mastery": 10,
  "mental-health": 9,
  psychology: 9,
  "integration-growth": 9,
  metaspace: 8,
  "systems-strategy": 8,

  // Specific skills/areas
  cooking: 7,
  nutrition: 7,
  fitness: 7,
  mindfulness: 7,
  "emotional-regulation": 7,
  therapy: 7,
  healing: 7,

  // Professional/technical
  "software-development": 6,
  productivity: 6,
  "decision-making": 6,
  focus: 6,
  clarity: 6,

  // General concepts
  "self-improvement": 5,
  habits: 5,
  discipline: 5,
  consistency: 5,
  transformation: 5,
  growth: 5,
  wellness: 5,

  // Default weight for unlisted tags
  default: 1,
};

/**
 * Get the weight/importance of a tag
 */
export function getTagWeight(tag: string): number {
  return TAG_WEIGHTS[tag] || TAG_WEIGHTS["default"];
}

/**
 * Sort tags by importance (weight) and then alphabetically
 */
export function sortTagsByImportance(tags: string[]): string[] {
  return tags.sort((a, b) => {
    const weightA = getTagWeight(a);
    const weightB = getTagWeight(b);

    // Sort by weight first (descending)
    if (weightA !== weightB) {
      return weightB - weightA;
    }

    // Then alphabetically
    return a.localeCompare(b);
  });
}

/**
 * Get the most important tags for display, limited to maxCount
 */
export function getImportantTags(
  tags: string[],
  maxCount: number = 3
): string[] {
  const sortedTags = sortTagsByImportance(tags);
  return sortedTags.slice(0, maxCount);
}

/**
 * Calculate tag statistics across all posts
 */
export function calculateTagStats(posts: CollectionEntry<"blog">[]) {
  const tagCounts: Record<string, number> = {};
  const tagWeights: Record<string, number> = {};

  posts.forEach((post) => {
    post.data.tags?.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      tagWeights[tag] = getTagWeight(tag);
    });
  });

  return {
    tagCounts,
    tagWeights,
    totalTags: Object.keys(tagCounts).length,
    totalTagInstances: Object.values(tagCounts).reduce(
      (sum, count) => sum + count,
      0
    ),
  };
}

/**
 * Get recommended tags for a post based on its content and related posts
 */
export function getRecommendedTags(
  postTags: string[],
  allPosts: CollectionEntry<"blog">[],
  maxCount: number = 5
): string[] {
  // Get posts with similar tags
  const relatedPosts = allPosts.filter((post) =>
    post.data.tags?.some((tag) => postTags.includes(tag))
  );

  // Count tag frequency in related posts
  const relatedTagCounts: Record<string, number> = {};
  relatedPosts.forEach((post) => {
    post.data.tags?.forEach((tag) => {
      if (!postTags.includes(tag)) {
        // Don't include tags already on the post
        relatedTagCounts[tag] = (relatedTagCounts[tag] || 0) + 1;
      }
    });
  });

  // Sort by frequency and weight
  const sortedRelatedTags = Object.entries(relatedTagCounts)
    .sort(([tagA, countA], [tagB, countB]) => {
      const weightA = getTagWeight(tagA);
      const weightB = getTagWeight(tagB);
      return weightB - weightA;
    })
    .map(([tag]) => tag);

  return sortedRelatedTags.slice(0, maxCount);
}
