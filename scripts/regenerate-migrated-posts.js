import fs from "fs";
import path from "path";
import { migratePost } from "./migrate-medium-posts.js";

// Configuration
const SOURCE_DIR = "../docs/FOR_MIGRATION_FROM_MEDIUM";
const DEST_DIR = "../src/content/p";

// List of posts that were migrated (from the migration report)
const migratedPosts = [
  "the-definition-and-practice-of-my-core-values-make-me-free",
  "you-had-me-at-the-first-half-well-played-lol",
  "on-feeling-overpowered",
  "things-i-have-learned-this-week-regarding-a-4-year-olds-long-curly-hair",
  "note-to-self-to-be-or-what-not-to-be",
  "the-inner-work-truly-never-ends",
  "embracing-the-spiritual-abyss-an-atheists-search-for-meaning",
  "conquering-imposter-syndrome-with-evidence-based-journaling",
  "brief-notes-on-finding-serenity-in-self-control",
  "briefly-on-empathy-as-a-double-edged-sword",
  "sharpen-your-tools",
  "on-cooking-on-everything-and-foundations",
  "on-the-application-of-empathy-and-compassion",
  "on-simplicity-and-peace-of-mind",
  "on-overcoming-analysis-paralysis",
  "you-are-joking-right",
  "who-really-raised-me",
  "-my-mental-health-routine-unfiltered",
  "-pa-la-nena-que-vive-en-ti",
  "mercy-through-the-blade-the-silent-law-of-leadership",
  "also-yes-timing-and-delivery-are-deeply-important-agreed",
  "forging-the-stronghand-terminal-from-chaos-to-command",
  "this-insight-is-sick-af-i-appreciate-you-brother",
  "what-happens-when-you-leave-the-algorithm-behind",
  "why-i-built-buildssoftware-and-what-im-building-next",
];

async function regeneratePosts() {
  console.log("🔄 Regenerating migrated posts with improved conversion...\n");

  let regenerated = 0;
  let errors = 0;

  for (const slug of migratedPosts) {
    try {
      // Find the corresponding HTML file
      const htmlFiles = fs
        .readdirSync(SOURCE_DIR)
        .filter((file) => file.endsWith(".html"))
        .map((file) => path.join(SOURCE_DIR, file));

      let htmlFile = null;
      for (const file of htmlFiles) {
        const result = migratePost(file);
        if (result && result.slug === slug) {
          htmlFile = file;
          break;
        }
      }

      if (!htmlFile) {
        console.log(`❌ Could not find HTML file for: ${slug}`);
        errors++;
        continue;
      }

      // Regenerate the post
      const result = migratePost(htmlFile);

      if (!result) {
        console.log(`❌ Failed to regenerate: ${slug}`);
        errors++;
        continue;
      }

      // Write the improved markdown file
      const markdownPath = path.join(DEST_DIR, `${slug}.md`);
      fs.writeFileSync(markdownPath, result.frontmatter);

      console.log(`✅ Regenerated: ${slug}.md`);
      regenerated++;
    } catch (error) {
      console.error(`❌ Error regenerating ${slug}:`, error.message);
      errors++;
    }
  }

  console.log(`\n📊 Regeneration Summary:`);
  console.log(`  Successfully regenerated: ${regenerated}`);
  console.log(`  Errors: ${errors}`);
  console.log(`  Total processed: ${migratedPosts.length}`);
}

regeneratePosts().catch(console.error);
