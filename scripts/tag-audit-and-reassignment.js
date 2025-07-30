#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// High-frequency tag library (from TAG_WEIGHTS with weight >= 4)
const HIGH_FREQUENCY_TAGS = {
  consciousness: 10,
  "personal-growth": 10,
  "mental-health": 10,
  healing: 10,
  therapy: 9,
  "self-reflection": 9,
  transformation: 9,
  authenticity: 9,
  values: 9,
  parenting: 8,
  "conscious-parenting": 8,
  technology: 8,
  "systems-strategy": 8,
  politics: 8,
  spirituality: 8,
  philosophy: 8,
  psychology: 8,
  wellness: 7,
  "self-care": 7,
  nutrition: 7,
  fitness: 7,
  "emotional-regulation": 7,
  mindfulness: 7,
  "emotional-health": 7,
  fasting: 7,
  health: 7,
  productivity: 6,
  "software-development": 6,
  efficiency: 6,
  workflow: 6,
  tools: 6,
  "learning-projects": 6,
  customization: 6,
  resilience: 6,
  discipline: 6,
  responsibility: 6,
  "self-improvement": 6,
  "self-mastery": 6,
  "emotional-intelligence": 6,
  "self-awareness": 6,
  meaning: 5,
  purpose: 5,
  identity: 5,
  power: 5,
  truth: 5,
  freedom: 5,
  "intentional-living": 5,
  "self-discovery": 5,
  family: 5,
  children: 5,
  "child-development": 5,
  "family-dynamics": 5,
  "social-issues": 5,
  "social-justice": 5,
  "collective-healing": 5,
  fear: 5,
  control: 5,
  "art-expression": 4,
  creativity: 4,
  expression: 4,
  symbols: 4,
  mythology: 4,
  cooking: 4,
  "diy-creation": 4,
  "healthy-eating": 4,
  micronutrients: 4,
  terminal: 4,
  wezterm: 4,
  powershell: 4,
  "oh-my-posh": 4,
  zoxide: 4,
  windows: 4,
  nvm: 4,
  fzf: 4,
  "analysis-paralysis": 4,
  "emotional-pain": 4,
  trauma: 4,
  "imposter-syndrome": 4,
  journaling: 4,
  "evidence-based": 4,
  routine: 4,
  habits: 4,
  simplicity: 4,
  minimalism: 4,
  "inner-peace": 4,
  contentment: 4,
  gratitude: 4,
  atheism: 4,
  humanism: 4,
  existentialism: 4,
  reflection: 4,
  meditation: 4,
  ritual: 4,
  learning: 4,
  books: 4,
  "self-transcendence": 4,
  education: 4,
  empathy: 4,
  compassion: 4,
  communication: 4,
  respect: 4,
  "digital-safety": 4,
  internet: 4,
  safety: 4,
};

// Content themes mapping to help with tag assignment
const CONTENT_THEMES = {
  "parenting-family": [
    "parenting",
    "family",
    "children",
    "conscious-parenting",
    "child-development",
    "family-dynamics",
  ],
  "mental-health-healing": [
    "mental-health",
    "therapy",
    "healing",
    "emotional-health",
    "emotional-regulation",
    "trauma",
    "emotional-pain",
  ],
  "personal-development": [
    "personal-growth",
    "self-improvement",
    "self-mastery",
    "self-discovery",
    "transformation",
    "values",
  ],
  "technology-development": [
    "technology",
    "software-development",
    "tools",
    "customization",
    "terminal",
    "workflow",
  ],
  "health-nutrition": [
    "health",
    "nutrition",
    "wellness",
    "self-care",
    "cooking",
    "healthy-eating",
    "micronutrients",
  ],
  "spirituality-philosophy": [
    "spirituality",
    "philosophy",
    "consciousness",
    "atheism",
    "existentialism",
    "meaning",
    "purpose",
  ],
  "productivity-efficiency": [
    "productivity",
    "efficiency",
    "workflow",
    "habits",
    "routine",
    "discipline",
  ],
  "social-issues": [
    "social-issues",
    "social-justice",
    "politics",
    "collective-healing",
    "empathy",
    "compassion",
  ],
  "creative-expression": [
    "creativity",
    "art-expression",
    "expression",
    "symbols",
    "mythology",
  ],
  "mindfulness-presence": [
    "mindfulness",
    "meditation",
    "presence",
    "inner-peace",
    "contentment",
    "gratitude",
  ],
};

function extractFrontmatter(content) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return null;

  const frontmatterText = frontmatterMatch[1];
  const frontmatter = {};

  const lines = frontmatterText.split("\n");
  let currentKey = null;
  let currentValue = [];

  for (const line of lines) {
    if (line.trim() === "") continue;

    const keyMatch = line.match(/^([^:]+):\s*(.*)$/);
    if (keyMatch) {
      // Save previous key-value pair
      if (currentKey) {
        if (currentValue.length === 1) {
          frontmatter[currentKey] = currentValue[0];
        } else {
          frontmatter[currentKey] = currentValue;
        }
      }

      currentKey = keyMatch[1].trim();
      const value = keyMatch[2].trim();

      if (value.startsWith("[") && value.endsWith("]")) {
        // Array value
        frontmatter[currentKey] = value
          .slice(1, -1)
          .split(",")
          .map((v) => v.trim().replace(/['"]/g, ""));
      } else if (value.startsWith(">")) {
        // Multi-line description
        currentValue = [value.slice(1).trim()];
      } else {
        currentValue = [value];
      }
    } else if (line.startsWith("  - ")) {
      // Array item
      currentValue.push(line.slice(4).trim());
    } else if (line.startsWith("  ")) {
      // Continuation of multi-line value
      currentValue[currentValue.length - 1] += "\n" + line.slice(2);
    }
  }

  // Save last key-value pair
  if (currentKey) {
    if (currentValue.length === 1) {
      frontmatter[currentKey] = currentValue[0];
    } else {
      frontmatter[currentKey] = currentValue;
    }
  }

  return frontmatter;
}

function analyzePostContent(title, description, content, existingTags = []) {
  const text = `${title} ${description} ${content}`.toLowerCase();
  const suggestedTags = new Set();

  // Add existing high-frequency tags that are still relevant
  existingTags.forEach((tag) => {
    if (HIGH_FREQUENCY_TAGS[tag]) {
      suggestedTags.add(tag);
    }
  });

  // Add specific high-frequency tags based on content analysis
  if (
    text.includes("parent") ||
    text.includes("child") ||
    text.includes("family") ||
    text.includes("daughter") ||
    text.includes("son")
  ) {
    suggestedTags.add("parenting");
    suggestedTags.add("family");
    suggestedTags.add("children");
    if (text.includes("conscious") || text.includes("mindful")) {
      suggestedTags.add("conscious-parenting");
    }
  }

  if (
    text.includes("therapy") ||
    text.includes("mental") ||
    text.includes("emotional") ||
    text.includes("healing")
  ) {
    suggestedTags.add("mental-health");
    suggestedTags.add("therapy");
    if (text.includes("heal") || text.includes("recovery")) {
      suggestedTags.add("healing");
    }
  }

  if (
    text.includes("growth") ||
    text.includes("improvement") ||
    text.includes("development") ||
    text.includes("transformation")
  ) {
    suggestedTags.add("personal-growth");
    suggestedTags.add("self-improvement");
  }

  if (
    text.includes("value") ||
    text.includes("principle") ||
    text.includes("core")
  ) {
    suggestedTags.add("values");
    suggestedTags.add("authenticity");
  }

  if (
    text.includes("technology") ||
    text.includes("software") ||
    text.includes("development")
  ) {
    suggestedTags.add("technology");
    suggestedTags.add("software-development");
  }

  if (
    text.includes("nutrition") ||
    text.includes("food") ||
    text.includes("health")
  ) {
    suggestedTags.add("nutrition");
    suggestedTags.add("health");
    suggestedTags.add("wellness");
  }

  if (
    text.includes("mindful") ||
    text.includes("meditation") ||
    text.includes("presence")
  ) {
    suggestedTags.add("mindfulness");
    suggestedTags.add("consciousness");
  }

  if (
    text.includes("productivity") ||
    text.includes("efficiency") ||
    text.includes("workflow")
  ) {
    suggestedTags.add("productivity");
    suggestedTags.add("efficiency");
  }

  if (
    text.includes("habit") ||
    text.includes("routine") ||
    text.includes("discipline")
  ) {
    suggestedTags.add("habits");
    suggestedTags.add("discipline");
  }

  if (
    text.includes("spiritual") ||
    text.includes("philosophy") ||
    text.includes("meaning")
  ) {
    suggestedTags.add("spirituality");
    suggestedTags.add("philosophy");
  }

  if (
    text.includes("terminal") ||
    text.includes("wezterm") ||
    text.includes("powershell")
  ) {
    suggestedTags.add("terminal");
    suggestedTags.add("wezterm");
    suggestedTags.add("powershell");
  }

  if (
    text.includes("cook") ||
    text.includes("recipe") ||
    text.includes("food")
  ) {
    suggestedTags.add("cooking");
    suggestedTags.add("healthy-eating");
  }

  if (
    text.includes("empathy") ||
    text.includes("compassion") ||
    text.includes("understanding")
  ) {
    suggestedTags.add("empathy");
    suggestedTags.add("compassion");
  }

  if (
    text.includes("creativity") ||
    text.includes("art") ||
    text.includes("expression")
  ) {
    suggestedTags.add("creativity");
    suggestedTags.add("art-expression");
  }

  if (
    text.includes("symbol") ||
    text.includes("mythology") ||
    text.includes("meaning")
  ) {
    suggestedTags.add("symbols");
    suggestedTags.add("mythology");
  }

  // Add some low-frequency/SEO tags based on specific content
  const seoTags = [];

  if (
    text.includes("recipe") ||
    text.includes("cook") ||
    text.includes("chicken") ||
    text.includes("lemon")
  ) {
    seoTags.push("recipes", "food");
  }

  if (
    text.includes("beef") ||
    text.includes("heart") ||
    text.includes("organ")
  ) {
    seoTags.push("beef-heart", "organ-meats");
  }

  if (text.includes("breathing") || text.includes("breath")) {
    seoTags.push("breathwork", "total-concentration-breathing");
  }

  if (text.includes("fasting") || text.includes("metabolic")) {
    seoTags.push("fasting", "metabolic-health");
  }

  if (
    text.includes("chatgpt") ||
    text.includes("ai") ||
    text.includes("customization")
  ) {
    seoTags.push("ai", "chatgpt", "customization");
  }

  if (
    text.includes("digital") ||
    text.includes("internet") ||
    text.includes("safety")
  ) {
    seoTags.push("digital-safety", "internet-safety");
  }

  if (text.includes("imposter") || text.includes("syndrome")) {
    seoTags.push("imposter-syndrome");
  }

  if (text.includes("analysis") || text.includes("paralysis")) {
    seoTags.push("analysis-paralysis");
  }

  if (text.includes("emotional") || text.includes("pain")) {
    seoTags.push("emotional-pain");
  }

  if (text.includes("trauma") || text.includes("healing")) {
    seoTags.push("trauma");
  }

  if (text.includes("journaling") || text.includes("writing")) {
    seoTags.push("journaling");
  }

  if (text.includes("evidence") || text.includes("research")) {
    seoTags.push("evidence-based");
  }

  if (text.includes("routine") || text.includes("daily")) {
    seoTags.push("routine");
  }

  if (text.includes("simplicity") || text.includes("minimal")) {
    seoTags.push("simplicity", "minimalism");
  }

  if (text.includes("inner") || text.includes("peace")) {
    seoTags.push("inner-peace");
  }

  if (text.includes("contentment") || text.includes("gratitude")) {
    seoTags.push("contentment", "gratitude");
  }

  if (text.includes("atheism") || text.includes("humanism")) {
    seoTags.push("atheism", "humanism");
  }

  if (text.includes("existential") || text.includes("meaning")) {
    seoTags.push("existentialism");
  }

  if (text.includes("reflection") || text.includes("self-reflection")) {
    seoTags.push("reflection", "self-reflection");
  }

  if (text.includes("meditation") || text.includes("mindful")) {
    seoTags.push("meditation");
  }

  if (text.includes("ritual") || text.includes("practice")) {
    seoTags.push("ritual");
  }

  if (text.includes("learning") || text.includes("education")) {
    seoTags.push("learning", "education");
  }

  if (text.includes("book") || text.includes("reading")) {
    seoTags.push("books");
  }

  if (text.includes("transcendence") || text.includes("beyond")) {
    seoTags.push("self-transcendence");
  }

  if (text.includes("communication") || text.includes("speak")) {
    seoTags.push("communication");
  }

  if (text.includes("respect") || text.includes("honor")) {
    seoTags.push("respect");
  }

  if (text.includes("safety") || text.includes("protection")) {
    seoTags.push("safety");
  }

  // Ensure we have the right distribution (70% high-frequency, 30% SEO)
  const maxTags = 15;
  const highFreqCount = Math.floor(maxTags * 0.7); // 10-11 high-frequency tags
  const seoCount = maxTags - highFreqCount; // 4-5 SEO tags

  // Sort high-frequency tags by weight and take the top ones
  const finalHighFreqTags = Array.from(suggestedTags)
    .sort(
      (a, b) => (HIGH_FREQUENCY_TAGS[b] || 0) - (HIGH_FREQUENCY_TAGS[a] || 0)
    )
    .slice(0, highFreqCount);

  // Take the top SEO tags
  const finalSeoTags = seoTags.slice(0, seoCount);

  return [...finalHighFreqTags, ...finalSeoTags];
}

function updatePostTags(filePath, newTags) {
  const content = fs.readFileSync(filePath, "utf8");
  const frontmatter = extractFrontmatter(content);

  if (!frontmatter) {
    console.error(`Could not extract frontmatter from ${filePath}`);
    return false;
  }

  // Update the tags
  frontmatter.tags = newTags;

  // Reconstruct the frontmatter
  let newFrontmatter = "---\n";

  Object.entries(frontmatter).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      newFrontmatter += `${key}:\n`;
      value.forEach((item) => {
        newFrontmatter += `  - ${item}\n`;
      });
    } else if (typeof value === "string" && value.includes("\n")) {
      newFrontmatter += `${key} >-\n  ${value.replace(/\n/g, "\n  ")}\n`;
    } else {
      newFrontmatter += `${key}: ${value}\n`;
    }
  });

  newFrontmatter += "---\n";

  // Replace the frontmatter in the content
  const newContent = content.replace(/^---\n[\s\S]*?\n---\n/, newFrontmatter);

  // Write back to file
  fs.writeFileSync(filePath, newContent, "utf8");
  return true;
}

async function auditAndReassignTags() {
  const postsDir = path.join(__dirname, "../src/content/p");
  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".md"));

  console.log(`Found ${files.length} posts to audit and reassign tags...\n`);

  let totalTagsChanged = 0;
  let totalHighFreqTags = 0;
  let totalSeoTags = 0;

  for (const file of files) {
    const filePath = path.join(postsDir, file);
    const content = fs.readFileSync(filePath, "utf8");
    const frontmatter = extractFrontmatter(content);

    if (!frontmatter) {
      console.error(`Could not extract frontmatter from ${file}`);
      continue;
    }

    const title = frontmatter.title || "";
    const description = frontmatter.description || "";
    const existingTags = frontmatter.tags || [];

    // Get the main content (everything after frontmatter)
    const contentMatch = content.match(/^---\n[\s\S]*?\n---\n([\s\S]*)$/);
    const mainContent = contentMatch ? contentMatch[1] : "";

    const newTags = analyzePostContent(
      title,
      description,
      mainContent,
      existingTags
    );

    // Count tag types
    const highFreqCount = newTags.filter(
      (tag) => HIGH_FREQUENCY_TAGS[tag]
    ).length;
    const seoCount = newTags.filter((tag) => !HIGH_FREQUENCY_TAGS[tag]).length;

    totalHighFreqTags += highFreqCount;
    totalSeoTags += seoCount;

    // Check if tags changed
    const tagsChanged =
      JSON.stringify(existingTags.sort()) !== JSON.stringify(newTags.sort());

    if (tagsChanged) {
      console.log(`📝 ${file}`);
      console.log(
        `   Old tags (${existingTags.length}): ${existingTags.join(", ")}`
      );
      console.log(`   New tags (${newTags.length}): ${newTags.join(", ")}`);
      console.log(`   High-freq: ${highFreqCount}, SEO: ${seoCount}`);
      console.log("");

      updatePostTags(filePath, newTags);
      totalTagsChanged++;
    } else {
      console.log(`✅ ${file} - No changes needed`);
    }
  }

  console.log("\n📊 SUMMARY");
  console.log(`Posts processed: ${files.length}`);
  console.log(`Posts with tag changes: ${totalTagsChanged}`);
  console.log(`Total high-frequency tags: ${totalHighFreqTags}`);
  console.log(`Total SEO tags: ${totalSeoTags}`);
  console.log(
    `Average tags per post: ${((totalHighFreqTags + totalSeoTags) / files.length).toFixed(1)}`
  );
  console.log(
    `High-frequency tag ratio: ${((totalHighFreqTags / (totalHighFreqTags + totalSeoTags)) * 100).toFixed(1)}%`
  );
}

// Run the audit
auditAndReassignTags().catch(console.error);
