import type { CollectionEntry } from "astro:content";

// Tag importance weights - higher numbers = more important
const TAG_WEIGHTS: Record<string, number> = {
  // Core themes (highest priority) - foundational topics
  consciousness: 10,
  "personal-growth": 10,
  "mental-health": 10,
  healing: 10,
  therapy: 9,
  "self-reflection": 9,
  transformation: 9,
  authenticity: 9,
  values: 9,

  // Major life areas
  parenting: 8,
  "conscious-parenting": 8,
  technology: 8,
  "systems-strategy": 8,
  politics: 8,
  spirituality: 8,
  philosophy: 8,
  psychology: 8,

  // Health & wellness (high priority)
  wellness: 7,
  "self-care": 7,
  nutrition: 7,
  fitness: 7,
  "emotional-regulation": 7,
  mindfulness: 7,
  "emotional-health": 7,
  fasting: 7,
  health: 7,

  // Professional & technical
  productivity: 6,
  "software-development": 6,
  development: 6,
  efficiency: 6,
  workflow: 6,
  tools: 6,
  "learning-projects": 6,
  customization: 6,

  // Personal development skills
  resilience: 6,
  discipline: 6,
  responsibility: 6,
  "self-improvement": 6,
  "self-mastery": 6,
  "emotional-intelligence": 6,
  "self-awareness": 6,

  // Content themes
  meaning: 5,
  purpose: 5,
  identity: 5,
  power: 5,
  truth: 5,
  freedom: 5,
  "intentional-living": 5,
  "self-discovery": 5,

  // Family & relationships
  family: 5,
  children: 5,
  "child-development": 5,
  "family-dynamics": 5,

  // Social & cultural
  "social-issues": 5,
  "social-justice": 5,
  "collective-healing": 5,
  fear: 5,
  control: 5,

  // Creative & expressive
  "art-expression": 4,
  creativity: 4,
  expression: 4,
  symbols: 4,
  mythology: 4,

  // Practical skills
  cooking: 4,
  "diy-creation": 4,
  "healthy-eating": 4,
  micronutrients: 4,

  // Technical topics
  terminal: 4,
  wezterm: 4,
  powershell: 4,
  "oh-my-posh": 4,
  zoxide: 4,
  windows: 4,
  nvm: 4,
  fzf: 4,

  // Mental health specific
  "analysis-paralysis": 4,
  "emotional-pain": 4,
  trauma: 4,
  "imposter-syndrome": 4,
  journaling: 4,
  "evidence-based": 4,

  // Lifestyle & habits
  routine: 4,
  habits: 4,
  simplicity: 4,
  minimalism: 4,
  "inner-peace": 4,
  contentment: 4,
  gratitude: 4,

  // Spiritual & philosophical
  atheism: 4,
  humanism: 4,
  existentialism: 4,
  reflection: 4,
  meditation: 4,
  ritual: 4,

  // Learning & education
  learning: 4,
  books: 4,
  "self-transcendence": 4,
  education: 4,

  // Communication & empathy
  empathy: 4,
  compassion: 4,
  communication: 4,
  respect: 4,

  // Digital & safety
  "digital-safety": 4,
  internet: 4,
  safety: 4,

  // Specific topics
  "beef-heart": 3,
  "organ-meats": 3,
  "total-concentration-breathing": 3,
  breathwork: 3,
  "stronghand-terminal": 3,
  illuminati: 3,
  "builds-software": 3,

  // General concepts (lower priority)
  growth: 3,
  change: 3,
  evolution: 3,
  progress: 3,
  improvement: 3,
  development: 3,
  mastery: 3,
  excellence: 3,

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
