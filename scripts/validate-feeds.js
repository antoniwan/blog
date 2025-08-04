#!/usr/bin/env node

/**
 * Feed validation script
 * Validates RSS and JSON feeds for proper formatting and content
 */

import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Simple RSS validation
function validateRSS(xmlContent) {
  const errors = [];
  const warnings = [];
  
  // Check for required RSS elements
  if (!xmlContent.includes('<rss')) {
    errors.push('Missing RSS root element');
  }
  
  if (!xmlContent.includes('<channel>')) {
    errors.push('Missing channel element');
  }
  
  if (!xmlContent.includes('<title>')) {
    errors.push('Missing title element');
  }
  
  if (!xmlContent.includes('<description>')) {
    errors.push('Missing description element');
  }
  
  if (!xmlContent.includes('<link>')) {
    errors.push('Missing link element');
  }
  
  // Check for items
  const itemMatches = xmlContent.match(/<item>/g);
  const itemCount = itemMatches ? itemMatches.length : 0;
  
  if (itemCount === 0) {
    warnings.push('No items found in feed');
  }
  
  // Check for full content
  if (!xmlContent.includes('<content:encoded>')) {
    warnings.push('No full content provided (content:encoded)');
  }
  
  // Check for GUIDs
  if (!xmlContent.includes('<guid>')) {
    warnings.push('No GUIDs provided');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    itemCount
  };
}

// Simple JSON Feed validation
function validateJSONFeed(jsonContent) {
  const errors = [];
  const warnings = [];
  
  let feed;
  try {
    feed = JSON.parse(jsonContent);
  } catch (e) {
    errors.push('Invalid JSON format');
    return {
      isValid: false,
      errors,
      warnings,
      itemCount: 0
    };
  }
  
  // Check required fields
  if (!feed.version) {
    errors.push('Missing version field');
  }
  
  if (!feed.title) {
    errors.push('Missing title field');
  }
  
  if (!feed.home_page_url) {
    errors.push('Missing home_page_url field');
  }
  
  if (!feed.feed_url) {
    errors.push('Missing feed_url field');
  }
  
  // Check items
  if (!feed.items || !Array.isArray(feed.items)) {
    errors.push('Missing or invalid items array');
  } else {
    const itemCount = feed.items.length;
    
    if (itemCount === 0) {
      warnings.push('No items found in feed');
    }
    
    // Check first few items for required fields
    feed.items.slice(0, 3).forEach((item, index) => {
      if (!item.id) {
        errors.push(`Item ${index + 1}: Missing id`);
      }
      
      if (!item.url) {
        errors.push(`Item ${index + 1}: Missing url`);
      }
      
      if (!item.title) {
        errors.push(`Item ${index + 1}: Missing title`);
      }
      
      if (!item.date_published) {
        errors.push(`Item ${index + 1}: Missing date_published`);
      }
      
      if (!item.content_html && !item.content_text) {
        warnings.push(`Item ${index + 1}: No content provided`);
      }
    });
    
    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      itemCount
    };
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    itemCount: 0
  };
}

// Main validation function
async function validateFeeds() {
  console.log('🔍 Validating RSS and JSON Feeds...\n');
  
  try {
    // Validate RSS feed
    console.log('📡 Validating RSS Feed...');
    const rssPath = join(__dirname, '..', 'dist', 'rss.xml');
    const rssContent = readFileSync(rssPath, 'utf8');
    const rssValidation = validateRSS(rssContent);
    
    console.log(`  Status: ${rssValidation.isValid ? '✅ Valid' : '❌ Invalid'}`);
    console.log(`  Items: ${rssValidation.itemCount}`);
    console.log(`  Errors: ${rssValidation.errors.length}`);
    console.log(`  Warnings: ${rssValidation.warnings.length}`);
    
    if (rssValidation.errors.length > 0) {
      console.log('  Errors:');
      rssValidation.errors.forEach(error => console.log(`    ❌ ${error}`));
    }
    
    if (rssValidation.warnings.length > 0) {
      console.log('  Warnings:');
      rssValidation.warnings.forEach(warning => console.log(`    ⚠️  ${warning}`));
    }
    
    console.log('');
    
    // Validate JSON feed
    console.log('📄 Validating JSON Feed...');
    const jsonPath = join(__dirname, '..', 'dist', 'feed.json');
    const jsonContent = readFileSync(jsonPath, 'utf8');
    const jsonValidation = validateJSONFeed(jsonContent);
    
    console.log(`  Status: ${jsonValidation.isValid ? '✅ Valid' : '❌ Invalid'}`);
    console.log(`  Items: ${jsonValidation.itemCount}`);
    console.log(`  Errors: ${jsonValidation.errors.length}`);
    console.log(`  Warnings: ${jsonValidation.warnings.length}`);
    
    if (jsonValidation.errors.length > 0) {
      console.log('  Errors:');
      jsonValidation.errors.forEach(error => console.log(`    ❌ ${error}`));
    }
    
    if (jsonValidation.warnings.length > 0) {
      console.log('  Warnings:');
      jsonValidation.warnings.forEach(warning => console.log(`    ⚠️  ${warning}`));
    }
    
    console.log('');
    
    // Summary
    const totalErrors = rssValidation.errors.length + jsonValidation.errors.length;
    const totalWarnings = rssValidation.warnings.length + jsonValidation.warnings.length;
    
    console.log('📊 Summary:');
    console.log(`  Total Errors: ${totalErrors}`);
    console.log(`  Total Warnings: ${totalWarnings}`);
    console.log(`  Overall Status: ${totalErrors === 0 ? '✅ All feeds valid' : '❌ Issues found'}`);
    
    if (totalErrors > 0) {
      process.exit(1);
    }
    
  } catch (error) {
    console.error('❌ Error validating feeds:', error.message);
    process.exit(1);
  }
}

// Run validation if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  validateFeeds();
} 