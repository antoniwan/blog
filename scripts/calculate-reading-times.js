import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

// Reading speed in words per minute (average adult reading speed)
const WORDS_PER_MINUTE = 225;

// Function to count words in text (excluding frontmatter)
function countWords(content) {
  // Remove frontmatter (everything between --- markers)
  const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---\s*/, '');
  
  // Remove markdown formatting but preserve the actual words
  const plainText = contentWithoutFrontmatter
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1') // Replace image markdown with alt text
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // Replace link markdown with link text
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/`(.*?)`/g, '$1') // Remove inline code
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/#{1,6}\s+/g, '') // Remove header markers but keep the text
    .replace(/\|/g, ' ') // Replace table separators with spaces
    .replace(/- \[.*?\]/g, '') // Remove checkboxes
    .replace(/^\s*[-*+]\s+/gm, '') // Remove list markers
    .replace(/^\s*\d+\.\s+/gm, '') // Remove numbered list markers
    .replace(/^>\s*(.*)/gm, '$1') // Remove blockquote markers but keep content
    .replace(/\n+/g, ' ') // Replace multiple newlines with space
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();
  
  // Split by spaces and filter out empty strings and very short fragments
  const words = plainText.split(' ').filter(word => {
    // Remove punctuation and check if it's a meaningful word
    const cleanWord = word.replace(/[^\w]/g, '');
    return cleanWord.length > 0 && cleanWord.length > 1;
  });
  
  return words.length;
}

// Function to calculate reading time
function calculateReadingTime(wordCount) {
  const minutes = Math.ceil(wordCount / WORDS_PER_MINUTE);
  return Math.max(1, minutes); // Minimum 1 minute
}

// Function to update frontmatter with new reading time
function updateFrontmatter(content, newReadingTime) {
  return content.replace(
    /(readingTime:\s*)\d+/,
    `$1${newReadingTime}`
  );
}

// Function to add reading time if it doesn't exist
function addReadingTimeToFrontmatter(content, newReadingTime) {
  // Check if readingTime already exists
  if (content.includes('readingTime:')) {
    return updateFrontmatter(content, newReadingTime);
  }
  
  // Find the last line of frontmatter (before the closing ---)
  const lines = content.split('\n');
  let frontmatterEndIndex = -1;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      frontmatterEndIndex = i;
      break;
    }
  }
  
  if (frontmatterEndIndex === -1) {
    console.error('Could not find frontmatter end marker');
    return content;
  }
  
  // Insert reading time before the closing ---
  lines.splice(frontmatterEndIndex, 0, `readingTime: ${newReadingTime}`);
  
  return lines.join('\n');
}

// Main function to process all blog posts
function processBlogPosts() {
  const postsDir = join(process.cwd(), 'src', 'content', 'p');
  const files = readdirSync(postsDir).filter(file => file.endsWith('.md'));
  
  console.log(`Processing ${files.length} blog posts...\n`);
  
  let totalUpdated = 0;
  let totalUnchanged = 0;
  
  for (const file of files) {
    const filePath = join(postsDir, file);
    const content = readFileSync(filePath, 'utf-8');
    
    // Count words
    const wordCount = countWords(content);
    const calculatedReadingTime = calculateReadingTime(wordCount);
    
    // Check current reading time
    const currentReadingTimeMatch = content.match(/readingTime:\s*(\d+)/);
    const currentReadingTime = currentReadingTimeMatch ? parseInt(currentReadingTimeMatch[1]) : null;
    
    console.log(`${file}:`);
    console.log(`  Words: ${wordCount}`);
    console.log(`  Calculated reading time: ${calculatedReadingTime} min`);
    
    if (currentReadingTime) {
      console.log(`  Current reading time: ${currentReadingTime} min`);
      
      if (currentReadingTime !== calculatedReadingTime) {
        const updatedContent = updateFrontmatter(content, calculatedReadingTime);
        writeFileSync(filePath, updatedContent);
        console.log(`  ✅ Updated to ${calculatedReadingTime} min`);
        totalUpdated++;
      } else {
        console.log(`  ✓ Already accurate`);
        totalUnchanged++;
      }
    } else {
      const updatedContent = addReadingTimeToFrontmatter(content, calculatedReadingTime);
      writeFileSync(filePath, updatedContent);
      console.log(`  ✅ Added reading time: ${calculatedReadingTime} min`);
      totalUpdated++;
    }
    
    console.log('');
  }
  
  console.log(`\nSummary:`);
  console.log(`- Total files processed: ${files.length}`);
  console.log(`- Files updated: ${totalUpdated}`);
  console.log(`- Files unchanged: ${totalUnchanged}`);
  console.log(`- Reading speed used: ${WORDS_PER_MINUTE} words per minute`);
}

// Run the script
processBlogPosts(); 