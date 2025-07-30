#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Corrected tags from manual audit
const CORRECTED_TAGS = {
  "an-hour-of-hair-brushing-what-my-daughter-taught-me-about-time.md": [
    "parenting",
    "family",
    "children",
    "consciousness",
    "self-reflection",
    "values",
    "authenticity",
    "personal-growth",
    "presence",
    "time",
    "connection",
    "patience",
  ],
  "beef-heart-nutrition.md": [
    "nutrition",
    "health",
    "wellness",
    "cooking",
    "self-care",
    "micronutrients",
    "healthy-eating",
    "beef-heart",
    "organ-meats",
    "recipes",
    "food",
  ],
  "bend-dont-break-learning-to-flow-again.md": [
    "personal-growth",
    "resilience",
    "consciousness",
    "healing",
    "mental-health",
    "mindfulness",
    "self-reflection",
    "transformation",
    "adaptability",
    "change",
    "flow",
  ],
  "brief-notes-on-finding-serenity-in-self-control.md": [
    "consciousness",
    "discipline",
    "emotional-regulation",
    "inner-peace",
    "mental-health",
    "self-mastery",
    "self-reflection",
    "serenity",
    "self-control",
  ],
  "briefly-on-empathy-as-a-double-edged-sword.md": [
    "empathy",
    "compassion",
    "emotional-intelligence",
    "communication",
    "consciousness",
    "mental-health",
    "self-reflection",
    "boundaries",
    "relationships",
  ],
  "como-proteger-ninos-digital.md": [
    "conscious-parenting",
    "child-development",
    "children",
    "family",
    "family-dynamics",
    "digital-safety",
    "responsibility",
    "safety",
    "technology",
    "internet-safety",
    "protection",
  ],
  "conquering-imposter-syndrome-with-evidence-based-journaling.md": [
    "imposter-syndrome",
    "mental-health",
    "personal-growth",
    "self-reflection",
    "therapy",
    "journaling",
    "evidence-based",
    "healing",
    "authenticity",
    "confidence",
    "self-doubt",
  ],
  "customizing-chatgpt.md": [
    "technology",
    "software-development",
    "customization",
    "productivity",
    "efficiency",
    "tools",
    "ai",
    "chatgpt",
    "automation",
  ],
  "embracing-the-spiritual-abyss-an-atheists-search-for-meaning.md": [
    "spirituality",
    "atheism",
    "philosophy",
    "consciousness",
    "meaning",
    "purpose",
    "self-reflection",
    "existentialism",
    "humanism",
    "meaning-making",
  ],
  "fasting-metabolic-ritual.md": [
    "fasting",
    "health",
    "wellness",
    "self-care",
    "ritual",
    "mental-health",
    "consciousness",
    "metabolic-health",
    "health-optimization",
  ],
  "fear-control-politics.md": [
    "politics",
    "fear",
    "control",
    "social-issues",
    "consciousness",
    "mental-health",
    "social-justice",
    "collective-healing",
    "manipulation",
    "social-control",
  ],
  "forging-stronghand-terminal.md": [
    "technology",
    "software-development",
    "customization",
    "terminal",
    "wezterm",
    "powershell",
    "tools",
    "efficiency",
    "workflow",
    "development-tools",
    "terminal-setup",
  ],
  "guia-ipad-es.md": [
    "conscious-parenting",
    "child-development",
    "children",
    "family",
    "digital-safety",
    "responsibility",
    "safety",
    "technology",
    "ipad",
    "screen-time",
    "digital-parenting",
  ],
  "i-became-what-i-used-to-mock.md": [
    "authenticity",
    "consciousness",
    "healing",
    "personal-growth",
    "self-reflection",
    "transformation",
    "values",
    "identity",
    "self-acceptance",
    "personal-change",
  ],
  "illuminalganti.md": [
    "philosophy",
    "consciousness",
    "critical-thinking",
    "skepticism",
    "conspiracy-theories",
    "illuminati",
  ],
  "learning-construction-self.md": [
    "personal-growth",
    "learning",
    "self-improvement",
    "self-discovery",
    "self-mastery",
    "transformation",
    "development",
    "growth-mindset",
    "self-construction",
  ],
  "lemon-pepper-chicken.md": [
    "cooking",
    "nutrition",
    "health",
    "healthy-eating",
    "food",
    "recipes",
    "chicken",
    "meal-prep",
  ],
  "life-statement-transformation.md": [
    "personal-growth",
    "transformation",
    "values",
    "self-reflection",
    "life-purpose",
    "life-statement",
    "personal-mission",
  ],
  "mercy-through-the-blade.md": [
    "consciousness",
    "healing",
    "personal-growth",
    "transformation",
    "spirituality",
    "philosophy",
    "mercy",
    "forgiveness",
    "personal-healing",
  ],
  "my-mental-health-routine-unfiltered.md": [
    "mental-health",
    "self-care",
    "emotional-health",
    "therapy",
    "wellness",
    "routine",
    "mental-health-routine",
    "self-care-practices",
  ],
  "note-to-self-on-being-a-conscious-parent.md": [
    "conscious-parenting",
    "parenting",
    "family",
    "children",
    "consciousness",
    "self-reflection",
    "responsibility",
    "role-modeling",
    "parent-behavior",
  ],
  "note-to-self-to-be-or-what-not-to-be.md": [
    "consciousness",
    "existentialism",
    "meaning",
    "purpose",
    "philosophy",
    "self-reflection",
    "existential-crisis",
    "life-questions",
  ],
  "notes-on-respect.md": [
    "respect",
    "communication",
    "empathy",
    "interpersonal-skills",
    "relationships",
    "social-skills",
  ],
  "notes-on-self-control.md": [
    "discipline",
    "emotional-regulation",
    "self-control",
    "self-discipline",
    "self-mastery",
    "willpower",
  ],
  "on-cooking-on-everything-and-foundations.md": [
    "cooking",
    "nutrition",
    "health",
    "healthy-eating",
    "basic-skills",
    "foundations",
    "life-skills",
  ],
  "on-feeling-overpowered.md": [
    "emotional-regulation",
    "mental-health",
    "personal-power",
    "feeling-overpowered",
    "overwhelm",
    "identity",
    "self-awareness",
  ],
  "on-limits-growth-and-the-meaning-of-my-life.md": [
    "personal-growth",
    "meaning",
    "limits",
    "growth-boundaries",
    "life-meaning",
    "personal-limits",
  ],
  "on-overcoming-analysis-paralysis.md": [
    "analysis-paralysis",
    "mental-health",
    "decision-making",
    "mental-blocks",
    "overthinking",
    "paralysis",
  ],
  "on-simplicity-and-peace-of-mind.md": [
    "simplicity",
    "inner-peace",
    "mindfulness",
    "consciousness",
    "peace-of-mind",
    "simple-living",
  ],
  "on-the-application-of-empathy-and-compassion.md": [
    "empathy",
    "compassion",
    "emotional-intelligence",
    "communication",
    "interpersonal-skills",
    "compassionate-living",
    "relationships",
  ],
  "pa-la-nena-que-vive-en-ti.md": [
    "healing",
    "self-reflection",
    "inner-child",
    "inner-work",
    "personal-healing",
    "self-compassion",
  ],
  "power-intentional-living.md": [
    "intentional-living",
    "consciousness",
    "personal-growth",
    "personal-power",
    "intentional-life",
    "self-mastery",
  ],
  "redirigir-curiosidad-sexual-infantil.md": [
    "conscious-parenting",
    "child-development",
    "children",
    "family",
    "parenting",
    "child-sexuality",
    "sexual-education",
    "parent-guidance",
  ],
  "reflections-from-a-tough-weekend.md": [
    "self-reflection",
    "personal-growth",
    "healing",
    "resilience",
    "difficult-times",
    "growth-through-pain",
    "personal-reflection",
  ],
  "sharpen-your-tools.md": [
    "productivity",
    "efficiency",
    "tools",
    "optimization",
    "skill-development",
    "tool-sharpening",
    "workflow",
  ],
  "some-books-for-self-transcendence.md": [
    "books",
    "learning",
    "self-transcendence",
    "personal-growth",
    "spirituality",
    "book-recommendations",
    "spiritual-books",
    "transcendence",
  ],
  "some-notes-on-overcoming-emotional-pain.md": [
    "emotional-pain",
    "mental-health",
    "healing",
    "therapy",
    "emotional-healing",
    "pain-management",
    "trauma-healing",
  ],
  "symbols-of-power.md": [
    "symbols",
    "mythology",
    "consciousness",
    "power",
    "art-expression",
    "personal-symbols",
    "power-symbols",
    "symbolic-meaning",
  ],
  "the-definition-and-practice-of-my-core-values-make-me-free.md": [
    "values",
    "authenticity",
    "personal-growth",
    "freedom",
    "core-values",
    "personal-freedom",
    "value-system",
  ],
  "the-inner-work-truly-never-ends.md": [
    "personal-growth",
    "inner-work",
    "continuous-growth",
    "lifelong-learning",
    "personal-development",
    "self-reflection",
  ],
  "the-joy-of-building-my-own-digital-sandbox.md": [
    "creativity",
    "diy-creation",
    "technology",
    "software-development",
    "learning-projects",
    "personal-projects",
    "digital-sandbox",
    "tech-joy",
  ],
  "the-paradox-of-modernity-progress-without-peace.md": [
    "philosophy",
    "consciousness",
    "social-issues",
    "modern-life",
    "modernity",
    "progress-paradox",
    "social-criticism",
  ],
  "things-i-have-learned-this-week-regarding-a-4-year-olds-long-curly-hair.md":
    [
      "parenting",
      "children",
      "family",
      "learning",
      "child-care",
      "curly-hair",
      "hair-care",
      "practical-parenting",
    ],
  "toddler-internet-safety.md": [
    "conscious-parenting",
    "child-development",
    "children",
    "digital-safety",
    "safety",
    "child-protection",
    "toddler-safety",
    "online-safety",
  ],
  "total-concentration-breathing.md": [
    "breathwork",
    "mindfulness",
    "health",
    "self-care",
    "breathing",
    "breathing-techniques",
    "total-concentration-breathing",
  ],
  "transforming-life-through-values.md": [
    "transformation",
    "values",
    "personal-growth",
    "therapy",
    "mental-health",
    "authenticity",
    "accountability",
    "responsibility",
    "habits",
  ],
  "vs-code-title-bar-signaling.md": [
    "technology",
    "software-development",
    "customization",
    "development-tools",
    "vs-code",
    "title-bar",
    "signaling",
    "tools",
  ],
  "what-are-we-even-calling-democracy.md": [
    "politics",
    "social-issues",
    "democracy",
    "governance",
    "political-systems",
    "social-criticism",
  ],
  "what-happens-when-you-leave-the-algorithm-behind.md": [
    "technology",
    "social-issues",
    "algorithm-free",
    "algorithms",
    "digital-detox",
    "social-media",
  ],
  "who-really-raised-me.md": [
    "family",
    "personal-growth",
    "healing",
    "self-reflection",
    "family-history",
    "personal-story",
    "upbringing",
  ],
  "why-i-built-buildssoftware-and-what-im-building-next.md": [
    "technology",
    "software-development",
    "personal-growth",
    "builds-software",
    "entrepreneurship",
    "personal-projects",
    "tech-entrepreneurship",
  ],
  "you-are-joking-right.md": [
    "communication",
    "consciousness",
    "emotional-intelligence",
    "emotional-regulation",
    "healing",
    "mental-health",
    "personal-growth",
    "self-awareness",
    "self-reflection",
    "therapy",
  ],
};

// High-frequency tag library for validation
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

async function implementCorrectedTags() {
  const postsDir = path.join(__dirname, "../src/content/p");
  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".md"));

  console.log(`Found ${files.length} posts to update with corrected tags...\n`);

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

    const existingTags = frontmatter.tags || [];
    const correctedTags = CORRECTED_TAGS[file] || [];

    if (correctedTags.length === 0) {
      console.warn(`⚠️  No corrected tags found for ${file}`);
      continue;
    }

    // Count tag types
    const highFreqCount = correctedTags.filter(
      (tag) => HIGH_FREQUENCY_TAGS[tag]
    ).length;
    const seoCount = correctedTags.filter(
      (tag) => !HIGH_FREQUENCY_TAGS[tag]
    ).length;

    totalHighFreqTags += highFreqCount;
    totalSeoTags += seoCount;

    // Check if tags changed
    const tagsChanged =
      JSON.stringify(existingTags.sort()) !==
      JSON.stringify(correctedTags.sort());

    if (tagsChanged) {
      console.log(`📝 ${file}`);
      console.log(
        `   Old tags (${existingTags.length}): ${existingTags.join(", ")}`
      );
      console.log(
        `   New tags (${correctedTags.length}): ${correctedTags.join(", ")}`
      );
      console.log(`   High-freq: ${highFreqCount}, SEO: ${seoCount}`);
      console.log("");

      updatePostTags(filePath, correctedTags);
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

// Run the implementation
implementCorrectedTags().catch(console.error);
