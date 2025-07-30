#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// High-frequency tag library (70% of tags should come from here)
const HIGH_FREQUENCY_TAGS = {
  // Core themes (highest priority) - foundational topics
  'consciousness': 10,
  'personal-growth': 10,
  'mental-health': 10,
  'healing': 10,
  'therapy': 9,
  'self-reflection': 9,
  'transformation': 9,
  'authenticity': 9,
  'values': 9,

  // Major life areas
  'parenting': 8,
  'conscious-parenting': 8,
  'technology': 8,
  'systems-strategy': 8,
  'politics': 8,
  'spirituality': 8,
  'philosophy': 8,
  'psychology': 8,

  // Health & wellness (high priority)
  'wellness': 7,
  'self-care': 7,
  'nutrition': 7,
  'fitness': 7,
  'emotional-regulation': 7,
  'mindfulness': 7,
  'emotional-health': 7,
  'fasting': 7,
  'health': 7,

  // Professional & technical
  'productivity': 6,
  'software-development': 6,
  'efficiency': 6,
  'workflow': 6,
  'tools': 6,
  'learning-projects': 6,
  'customization': 6,

  // Personal development skills
  'resilience': 6,
  'discipline': 6,
  'responsibility': 6,
  'self-improvement': 6,
  'self-mastery': 6,
  'emotional-intelligence': 6,
  'self-awareness': 6,

  // Content themes
  'meaning': 5,
  'purpose': 5,
  'identity': 5,
  'power': 5,
  'truth': 5,
  'freedom': 5,
  'intentional-living': 5,
  'self-discovery': 5,

  // Family & relationships
  'family': 5,
  'children': 5,
  'child-development': 5,
  'family-dynamics': 5,

  // Social & cultural
  'social-issues': 5,
  'social-justice': 5,
  'collective-healing': 5,
  'fear': 5,
  'control': 5,

  // Creative & expressive
  'art-expression': 4,
  'creativity': 4,
  'expression': 4,
  'symbols': 4,
  'mythology': 4,

  // Practical skills
  'cooking': 4,
  'diy-creation': 4,
  'healthy-eating': 4,
  'micronutrients': 4,

  // Technical topics
  'terminal': 4,
  'wezterm': 4,
  'powershell': 4,
  'oh-my-posh': 4,
  'zoxide': 4,
  'windows': 4,
  'nvm': 4,
  'fzf': 4,

  // Mental health specific
  'analysis-paralysis': 4,
  'emotional-pain': 4,
  'trauma': 4,
  'imposter-syndrome': 4,
  'journaling': 4,
  'evidence-based': 4
};

const POSTS_DIR = path.join(__dirname, '../src/content/p');

function parseFrontmatter(content) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return null;

  const frontmatter = frontmatterMatch[1];
  const lines = frontmatter.split('\n');
  const result = {};

  let currentKey = null;
  let currentValue = [];

  for (const line of lines) {
    if (line.startsWith('  ') && currentKey) {
      // Continuation of previous value
      currentValue.push(line.substring(2));
    } else if (line.includes(':')) {
      // Save previous key-value pair
      if (currentKey) {
        result[currentKey] = currentValue.join('\n').trim();
      }

      // Start new key-value pair
      const [key, ...valueParts] = line.split(':');
      currentKey = key.trim();
      currentValue = [valueParts.join(':').trim()];
    }
  }

  // Save last key-value pair
  if (currentKey) {
    result[currentKey] = currentValue.join('\n').trim();
  }

  return result;
}

function analyzePost(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const frontmatter = parseFrontmatter(content);
  
  if (!frontmatter) {
    return { error: 'No frontmatter found' };
  }

  const tags = frontmatter.tags;
  if (!tags) {
    return { status: 'no-tags', tagCount: 0, highFreqCount: 0, lowFreqCount: 0 };
  }

  // Parse tags array
  const tagArray = tags.split('\n')
    .map(line => line.trim())
    .filter(line => line.startsWith('- '))
    .map(line => line.substring(2).trim());

  const highFreqTags = tagArray.filter(tag => HIGH_FREQUENCY_TAGS[tag]);
  const lowFreqTags = tagArray.filter(tag => !HIGH_FREQUENCY_TAGS[tag]);

  const highFreqPercentage = tagArray.length > 0 ? (highFreqTags.length / tagArray.length) * 100 : 0;

  return {
    status: 'has-tags',
    tagCount: tagArray.length,
    highFreqCount: highFreqTags.length,
    lowFreqCount: lowFreqTags.length,
    highFreqPercentage: Math.round(highFreqPercentage),
    tags: tagArray,
    highFreqTags,
    lowFreqTags
  };
}

function main() {
  const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md'));
  
  console.log('=== TAG STATUS ANALYSIS ===\n');
  
  let totalPosts = files.length;
  let postsWithTags = 0;
  let postsWithoutTags = 0;
  let postsWithManyTags = 0;
  let postsWithFewTags = 0;
  let postsWithGoodDistribution = 0;
  
  const postsNeedingUpdate = [];
  const postsWithTooManyTags = [];

  for (const file of files) {
    const filePath = path.join(POSTS_DIR, file);
    const analysis = analyzePost(filePath);
    
    if (analysis.error) {
      console.log(`❌ ${file}: ${analysis.error}`);
      continue;
    }

    if (analysis.status === 'no-tags') {
      postsWithoutTags++;
      postsNeedingUpdate.push({ file, reason: 'no tags' });
      console.log(`❌ ${file}: No tags`);
    } else {
      postsWithTags++;
      
      if (analysis.tagCount > 15) {
        postsWithManyTags++;
        postsWithTooManyTags.push({ file, tagCount: analysis.tagCount, tags: analysis.tags });
        console.log(`⚠️  ${file}: ${analysis.tagCount} tags (too many)`);
      } else if (analysis.tagCount <= 3) {
        postsWithFewTags++;
        postsNeedingUpdate.push({ file, reason: 'too few tags', tagCount: analysis.tagCount });
        console.log(`⚠️  ${file}: ${analysis.tagCount} tags (too few)`);
      } else {
        console.log(`✅ ${file}: ${analysis.tagCount} tags (${analysis.highFreqPercentage}% high-freq)`);
      }

      if (analysis.highFreqPercentage >= 70) {
        postsWithGoodDistribution++;
      } else {
        postsNeedingUpdate.push({ 
          file, 
          reason: 'poor distribution', 
          highFreqPercentage: analysis.highFreqPercentage,
          highFreqCount: analysis.highFreqCount,
          lowFreqCount: analysis.lowFreqCount
        });
      }
    }
  }

  console.log('\n=== SUMMARY ===');
  console.log(`Total posts: ${totalPosts}`);
  console.log(`Posts with tags: ${postsWithTags}`);
  console.log(`Posts without tags: ${postsWithoutTags}`);
  console.log(`Posts with >15 tags: ${postsWithManyTags}`);
  console.log(`Posts with ≤3 tags: ${postsWithFewTags}`);
  console.log(`Posts with good distribution (≥70% high-freq): ${postsWithGoodDistribution}`);
  console.log(`Posts needing updates: ${postsNeedingUpdate.length}`);

  if (postsWithTooManyTags.length > 0) {
    console.log('\n=== POSTS WITH TOO MANY TAGS ===');
    postsWithTooManyTags.forEach(({ file, tagCount, tags }) => {
      console.log(`${file}: ${tagCount} tags`);
      console.log(`  Tags: ${tags.join(', ')}`);
    });
  }

  if (postsNeedingUpdate.length > 0) {
    console.log('\n=== POSTS NEEDING UPDATES ===');
    postsNeedingUpdate.forEach(({ file, reason, tagCount, highFreqPercentage, highFreqCount, lowFreqCount }) => {
      if (reason === 'no tags') {
        console.log(`${file}: No tags`);
      } else if (reason === 'too few tags') {
        console.log(`${file}: Only ${tagCount} tags`);
      } else if (reason === 'poor distribution') {
        console.log(`${file}: ${highFreqPercentage}% high-freq (${highFreqCount}/${highFreqCount + lowFreqCount})`);
      }
    });
  }
}

main(); 