#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsDir = path.join(__dirname, "../src/content/p");

// Function to update publication dates
function updatePublicationDates() {
  const files = fs.readdirSync(postsDir);
  const updatedFiles = [];

  files.forEach((file) => {
    if (file.endsWith(".md") || file.endsWith(".mdx")) {
      const filePath = path.join(postsDir, file);
      const content = fs.readFileSync(filePath, "utf8");

      // Check if the file has a future publication date
      const pubDateMatch = content.match(/pubDate:\s*["']?(\d{4}-\d{2}-\d{2})/);

      if (pubDateMatch) {
        const pubDate = new Date(pubDateMatch[1]);
        const now = new Date();

        // If the publication date is in the future, update it to today
        if (pubDate > now) {
          const newDate = now.toISOString().split("T")[0];
          const updatedContent = content.replace(
            /pubDate:\s*["']?\d{4}-\d{2}-\d{2}[^"\n]*["']?/,
            `pubDate: "${newDate}T00:00:00.000Z"`
          );

          fs.writeFileSync(filePath, updatedContent);
          updatedFiles.push(file);
          console.log(`✅ Updated ${file} publication date to ${newDate}`);
        }
      }
    }
  });

  if (updatedFiles.length === 0) {
    console.log("✅ No files with future publication dates found.");
  } else {
    console.log(`\n📝 Updated ${updatedFiles.length} files.`);
    console.log("🔄 Rebuild your site to see changes: npm run build");
  }
}

// Function to show current publication date status
function showPublicationDateStatus() {
  const files = fs.readdirSync(postsDir);
  const pastDates = [];
  const futureDates = [];

  files.forEach((file) => {
    if (file.endsWith(".md") || file.endsWith(".mdx")) {
      const filePath = path.join(postsDir, file);
      const content = fs.readFileSync(filePath, "utf8");

      const pubDateMatch = content.match(/pubDate:\s*["']?(\d{4}-\d{2}-\d{2})/);

      if (pubDateMatch) {
        const pubDate = new Date(pubDateMatch[1]);
        const now = new Date();

        if (pubDate <= now) {
          pastDates.push({ file, date: pubDateMatch[1] });
        } else {
          futureDates.push({ file, date: pubDateMatch[1] });
        }
      }
    }
  });

  console.log("\n📊 Publication Date Status:");
  console.log(`✅ Past dates (indexable): ${pastDates.length} posts`);
  console.log(`⏳ Future dates (not indexable): ${futureDates.length} posts`);

  if (futureDates.length > 0) {
    console.log("\n📅 Posts with future dates:");
    futureDates.forEach(({ file, date }) => {
      console.log(`  - ${file}: ${date}`);
    });
  }
}

// Main execution
const command = process.argv[2];

switch (command) {
  case "update":
    updatePublicationDates();
    break;
  case "status":
    showPublicationDateStatus();
    break;
  default:
    console.log("Usage:");
    console.log(
      "  node scripts/update-publication-dates.js status  - Show current status"
    );
    console.log(
      "  node scripts/update-publication-dates.js update  - Update future dates to today"
    );
    break;
}
