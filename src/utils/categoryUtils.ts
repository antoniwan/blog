import { getCollection } from 'astro:content';
import { categories } from '../data/categories';
import type { Category } from '../data/categories';

export interface CategoryWithCount extends Category {
  postCount: number;
}

export async function getSortedCategories(): Promise<CategoryWithCount[]> {
  // Get all posts
  const posts = await getCollection('blog', ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true;
  });

  // Get post counts by category
  const postCounts = categories.reduce(
    (acc, category) => {
      acc[category.id] = posts.filter((post) => post.data.category?.includes(category.id)).length;
      return acc;
    },
    {} as Record<string, number>,
  );

  // Sort categories by post count (most popular first) and filter out those with 0 posts
  return categories
    .filter((category) => postCounts[category.id] > 0)
    .sort((a, b) => postCounts[b.id] - postCounts[a.id])
    .map((category) => ({
      ...category,
      postCount: postCounts[category.id],
    }));
}
