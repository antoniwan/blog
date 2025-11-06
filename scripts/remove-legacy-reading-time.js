#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '../src/content/p');

function removeReadingTimeField(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Check if file has readingTime field
    if (content.includes('readingTime:')) {
      console.log(`Processing: ${path.basename(filePath)}`);

      // Remove readingTime line and any trailing whitespace
      const updatedContent = content
        .replace(/readingTime:\s*\d+\s*\n/g, '') // Remove readingTime: X lines
        .replace(/readingTime:\s*\d+\s*$/gm, '') // Remove readingTime: X at end of file
        .replace(/\n\s*\n\s*\n/g, '\n\n') // Clean up multiple empty lines
        .replace(/\n\s*\n---/g, '\n---'); // Clean up before frontmatter end

      // Write back to file
      fs.writeFileSync(filePath, updatedContent);
      console.log(`✓ Updated: ${path.basename(filePath)}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let processedCount = 0;
  let totalCount = 0;

  for (const file of files) {
    if (file.endsWith('.md')) {
      totalCount++;
      const filePath = path.join(dirPath, file);
      if (removeReadingTimeField(filePath)) {
        processedCount++;
      }
    }
  }

  return { processedCount, totalCount };
}

console.log('🚀 Removing legacy readingTime fields from markdown files...\n');

const { processedCount, totalCount } = processDirectory(contentDir);

console.log(`\n✅ Complete!`);
console.log(`📊 Processed: ${processedCount}/${totalCount} files`);
console.log(`🗑️  Removed readingTime fields from ${processedCount} files`);
console.log(`\n💡 All reading times are now automatically calculated using the remark plugin!`);
