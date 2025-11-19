/**
 * Extract excerpt from markdown content
 * @param content - Markdown content string
 * @param maxLength - Maximum length of excerpt (default: 160)
 * @returns Excerpt string with ellipsis if truncated
 */
export function getExcerpt(content: string, maxLength: number = 160): string {
  if (!content) return '';

  // Try to parse as markdown AST first (if content is structured)
  // Otherwise, strip markdown syntax manually
  let text = content;

  // Strip markdown syntax patterns
  text = text
    // Remove code blocks
    .replace(/```[\s\S]*?```/g, '')
    // Remove inline code
    .replace(/`[^`]*`/g, '')
    // Remove links but keep text
    .replace(/\[([^\]]*)\]\([^\)]*\)/g, '$1')
    // Remove images
    .replace(/!\[([^\]]*)\]\([^\)]*\)/g, '')
    // Remove headers
    .replace(/^#{1,6}\s+/gm, '')
    // Remove bold/italic
    .replace(/\*\*([^\*]*)\*\*/g, '$1')
    .replace(/\*([^\*]*)\*/g, '$1')
    .replace(/__([^_]*)__/g, '$1')
    .replace(/_([^_]*)_/g, '$1')
    // Remove horizontal rules
    .replace(/^---$/gm, '')
    // Remove list markers
    .replace(/^[\s]*[-*+]\s+/gm, '')
    .replace(/^[\s]*\d+\.\s+/gm, '')
    // Remove blockquotes
    .replace(/^>\s+/gm, '')
    // Clean up extra whitespace
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Take first paragraph or first N characters
  const firstParagraph = text.split(/\n\n/)[0] || text;
  let excerpt = firstParagraph.trim();

  // If excerpt is longer than maxLength, truncate at word boundary
  if (excerpt.length > maxLength) {
    // Find the last space before maxLength
    const truncated = excerpt.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');

    if (lastSpace > 0) {
      excerpt = truncated.substring(0, lastSpace);
    } else {
      excerpt = truncated;
    }

    // Add ellipsis
    excerpt += '…';
  }

  return excerpt;
}
