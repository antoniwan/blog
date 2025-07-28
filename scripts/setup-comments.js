#!/usr/bin/env node

/**
 * Giscus Comments Setup Script
 *
 * This script helps you set up the Giscus comment system for your Astro blog.
 * Run this script after following the setup guide in docs/COMMENTS_SETUP.md
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configPath = path.join(__dirname, "../src/config/giscus.ts");

console.log("🎯 Giscus Comments Setup Helper\n");

console.log("This script will help you configure the Giscus comment system.");
console.log("Make sure you have:");
console.log("1. ✅ Enabled GitHub Discussions in your repository");
console.log('2. ✅ Created a "Comments" category');
console.log("3. ✅ Visited giscus.app to get your configuration values\n");

// Read current config
let configContent = "";
try {
  configContent = fs.readFileSync(configPath, "utf8");
} catch (error) {
  console.error("❌ Could not read giscus config file:", error.message);
  process.exit(1);
}

// Check if config needs updating
const needsUpdate =
  configContent.includes("YOUR_REPO_ID") ||
  configContent.includes("your-username/curious-chaos-journal");

if (!needsUpdate) {
  console.log("✅ Giscus configuration appears to be already set up!");
  console.log(
    "If you need to make changes, edit src/config/giscus.ts manually.\n"
  );
  process.exit(0);
}

console.log("⚠️  Configuration needs to be updated with your actual values.\n");

// Get user input
const readline = await import("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query) =>
  new Promise((resolve) => rl.question(query, resolve));

try {
  console.log("Please provide the following information from giscus.app:\n");

  const repo = await question(
    "GitHub repository (format: username/repository): "
  );
  const repoId = await question("Repository ID: ");
  const category =
    (await question("Category name (default: Comments): ")) || "Comments";
  const categoryId = await question("Category ID: ");

  rl.close();

  // Update config
  let updatedConfig = configContent
    .replace(/repo: "your-username\/curious-chaos-journal"/, `repo: "${repo}"`)
    .replace(/repoId: "YOUR_REPO_ID"/, `repoId: "${repoId}"`)
    .replace(/category: "Comments"/, `category: "${category}"`)
    .replace(/categoryId: "YOUR_CATEGORY_ID"/, `categoryId: "${categoryId}"`);

  // Write updated config
  fs.writeFileSync(configPath, updatedConfig);

  console.log("\n✅ Configuration updated successfully!");
  console.log("\nNext steps:");
  console.log("1. Test your site locally: npm run dev");
  console.log("2. Check that comments appear on your blog posts");
  console.log("3. Deploy your changes");
  console.log("\nFor more information, see docs/COMMENTS_SETUP.md");
} catch (error) {
  console.error("❌ Error during setup:", error.message);
  rl.close();
  process.exit(1);
}
