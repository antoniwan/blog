import getReadingTime from 'reading-time';

/**
 * Calculate reading time from text content
 * @param text - The text content to analyze
 * @returns Reading time as a friendly string (e.g., "3 min read")
 */
export function calculateReadingTime(text: string): string {
  const readingTime = getReadingTime(text);
  return readingTime.text;
}

/**
 * Calculate reading time from markdown content
 * @param markdown - The markdown content to analyze
 * @returns Reading time as a friendly string (e.g., "3 min read")
 */
export function calculateReadingTimeFromMarkdown(markdown: string): string {
  // Remove markdown syntax to get plain text
  const plainText = markdown
    .replace(/^---[\s\S]*?---/g, '') // Remove frontmatter
    .replace(/#{1,6}\s+/g, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/`(.*?)`/g, '$1') // Remove inline code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '') // Remove images
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`([^`]+)`/g, '$1') // Remove code
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();

  return calculateReadingTime(plainText);
}
