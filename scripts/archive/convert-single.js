import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(
  __dirname,
  "..",
  "public",
  "images",
  "symbols",
  "narsil.jpg"
);
const outputPath = path.join(
  __dirname,
  "..",
  "public",
  "images",
  "symbols",
  "narsil.avif"
);

console.log("Input path:", inputPath);
console.log("Output path:", outputPath);

sharp(inputPath)
  .avif({
    quality: 80,
    effort: 9,
  })
  .toFile(outputPath)
  .then((info) => {
    console.log("Conversion successful:", info);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
