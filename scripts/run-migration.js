import fs from "fs";
import path from "path";
import { migratePost } from "./migrate-medium-posts.js";

// Configuration
const SOURCE_DIR = "../docs/FOR_MIGRATION_FROM_MEDIUM";
const DEST_DIR = "../src/content/p";
const IMAGES_DIR = "../public/images";

// Migration report
const report = {
  migrated: [],
  skipped: [],
  errors: [],
  totalProcessed: 0,
};

// Function to check if post already exists
function postExists(slug) {
  const existingFiles = fs.readdirSync(DEST_DIR);
  return existingFiles.some((file) => file.startsWith(slug));
}

// Function to download image
async function downloadImage(imageUrl, localPath) {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const buffer = await response.arrayBuffer();
    fs.writeFileSync(localPath, Buffer.from(buffer));
    return true;
  } catch (error) {
    console.error(`Failed to download image ${imageUrl}:`, error.message);
    return false;
  }
}

// Function to process images for a post
async function processImages(images, slug) {
  const postImagesDir = path.join(IMAGES_DIR, slug);

  // Create directory if it doesn't exist
  if (!fs.existsSync(postImagesDir)) {
    fs.mkdirSync(postImagesDir, { recursive: true });
  }

  const processedImages = [];

  for (const image of images) {
    try {
      const filename = path.basename(image.src);
      const localPath = path.join(postImagesDir, filename);

      // Download image
      const success = await downloadImage(image.src, localPath);

      if (success) {
        processedImages.push({
          original: image.src,
          local: `/images/${slug}/${filename}`,
          alt: image.alt,
        });
      }
    } catch (error) {
      console.error(`Error processing image:`, error);
    }
  }

  return processedImages;
}

// Function to update image references in content
function updateImageReferences(content, processedImages) {
  let updatedContent = content;

  for (const image of processedImages) {
    updatedContent = updatedContent.replace(
      new RegExp(image.original.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
      image.local
    );
  }

  return updatedContent;
}

// Main migration function
async function runMigration() {
  console.log("🚀 Starting Medium post migration...\n");

  // Get all HTML files
  const htmlFiles = fs
    .readdirSync(SOURCE_DIR)
    .filter((file) => file.endsWith(".html"))
    .map((file) => path.join(SOURCE_DIR, file));

  console.log(`Found ${htmlFiles.length} HTML files to process.\n`);

  for (const htmlFile of htmlFiles) {
    report.totalProcessed++;

    try {
      console.log(`Processing: ${path.basename(htmlFile)}`);

      // Migrate post
      const result = migratePost(htmlFile);

      if (!result) {
        report.errors.push({
          file: path.basename(htmlFile),
          error: "Failed to extract metadata",
        });
        continue;
      }

      // Check if post already exists
      if (postExists(result.slug)) {
        console.log(`  ⏭️  Skipped: Post already exists (${result.slug})`);
        report.skipped.push({
          file: path.basename(htmlFile),
          title: result.metadata.title,
          slug: result.slug,
          reason: "Already exists",
        });
        continue;
      }

      // Process images
      console.log(`  📸 Processing ${result.images.length} images...`);
      const processedImages = await processImages(result.images, result.slug);

      // Update content with local image paths
      let finalContent = result.frontmatter;
      if (processedImages.length > 0) {
        finalContent = updateImageReferences(finalContent, processedImages);
      }

      // Write markdown file
      const markdownPath = path.join(DEST_DIR, `${result.slug}.md`);
      fs.writeFileSync(markdownPath, finalContent);

      console.log(`  ✅ Migrated: ${result.slug}.md`);
      report.migrated.push({
        file: path.basename(htmlFile),
        title: result.metadata.title,
        slug: result.slug,
        categories: result.metadata.categories,
        images: processedImages.length,
      });
    } catch (error) {
      console.error(
        `  ❌ Error processing ${path.basename(htmlFile)}:`,
        error.message
      );
      report.errors.push({
        file: path.basename(htmlFile),
        error: error.message,
      });
    }

    console.log(""); // Empty line for readability
  }

  // Generate report
  generateReport();
}

// Function to generate migration report
function generateReport() {
  console.log("\n" + "=".repeat(60));
  console.log("📊 MIGRATION REPORT");
  console.log("=".repeat(60));

  console.log(`\n📈 Summary:`);
  console.log(`  Total files processed: ${report.totalProcessed}`);
  console.log(`  Successfully migrated: ${report.migrated.length}`);
  console.log(`  Skipped (already exist): ${report.skipped.length}`);
  console.log(`  Errors: ${report.errors.length}`);

  if (report.migrated.length > 0) {
    console.log(`\n✅ Migrated Posts:`);
    report.migrated.forEach((post) => {
      console.log(`  • ${post.title}`);
      console.log(`    Slug: ${post.slug}`);
      console.log(`    Categories: ${post.categories.join(", ")}`);
      console.log(`    Images: ${post.images}`);
      console.log("");
    });
  }

  if (report.skipped.length > 0) {
    console.log(`\n⏭️  Skipped Posts:`);
    report.skipped.forEach((post) => {
      console.log(`  • ${post.title} (${post.reason})`);
    });
  }

  if (report.errors.length > 0) {
    console.log(`\n❌ Errors:`);
    report.errors.forEach((error) => {
      console.log(`  • ${error.file}: ${error.error}`);
    });
  }

  // Save detailed report to file
  const reportPath = path.join(process.cwd(), "migration-report.json");
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n📄 Detailed report saved to: ${reportPath}`);
}

// Run migration
runMigration().catch(console.error);
