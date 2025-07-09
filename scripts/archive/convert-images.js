import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, "..", "public", "images", "symbols");
const targetDir = sourceDir;

// Create the target directory if it doesn't exist
if (!fs.existsSync(sourceDir)) {
  fs.mkdirSync(sourceDir, { recursive: true });
}

// List of images to convert
const images = [
  { input: "narsil.jpg", output: "narsil.avif" },
  { input: "master-sword.jpg", output: "master-sword.avif" },
  { input: "mc-ma5c.jpg", output: "ma5c.avif" },
  { input: "mjolnir.png", output: "mjolnir.avif" },
  { input: "guts-dragonslayer.jpg", output: "dragon-slayer.avif" },
  { input: "vegvisir.jpg", output: "vegvisir.avif" },
];

async function convertImages() {
  console.log("Source directory:", sourceDir);

  for (const image of images) {
    const inputPath = path.join(sourceDir, image.input);
    const outputPath = path.join(targetDir, image.output);

    if (!fs.existsSync(inputPath)) {
      console.error(`Input file not found: ${inputPath}`);
      continue;
    }

    try {
      await sharp(inputPath)
        .avif({
          quality: 80,
          effort: 9, // Maximum compression effort
        })
        .toFile(outputPath);
      console.log(`Converted ${image.input} to ${image.output}`);
    } catch (error) {
      console.error(`Error converting ${image.input}:`, error);
    }
  }
}

convertImages().catch(console.error);
