import sharp from "sharp";
import fs from "fs/promises";
import path from "path";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const PUBLIC_DIR = path.join(process.cwd(), "public");
const ASSETS_DIR = path.join(process.cwd(), "src", "assets", "media");

async function ensureDirectoryExists(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function optimizeImage(inputPath, outputPath, maxWidth = 1200) {
  const image = sharp(inputPath);
  const metadata = await image.metadata();

  // Calculate new dimensions while maintaining aspect ratio
  const newWidth = Math.min(metadata.width, maxWidth);
  const newHeight = Math.round((newWidth / metadata.width) * metadata.height);

  // Create WebP version
  await image
    .resize(newWidth, newHeight, {
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 80 })
    .toFile(outputPath);

  console.log(
    `Optimized: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`
  );
}

async function optimizeVideo(inputPath, outputPath) {
  // Convert to WebM using ffmpeg
  const command = `ffmpeg -i "${inputPath}" -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus "${outputPath}"`;

  try {
    await execAsync(command);
    console.log(
      `Converted: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`
    );
  } catch (error) {
    console.error(`Error converting video: ${error.message}`);
  }
}

async function processMediaFiles() {
  await ensureDirectoryExists(ASSETS_DIR);

  // Process images
  const imageFiles = await fs.readdir(path.join(PUBLIC_DIR, "images"));
  for (const file of imageFiles) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(PUBLIC_DIR, "images", file);
      const outputPath = path.join(ASSETS_DIR, `${path.parse(file).name}.webp`);
      await optimizeImage(inputPath, outputPath);
    }
  }

  // Process videos
  const videoFiles = await fs.readdir(PUBLIC_DIR);
  for (const file of videoFiles) {
    if (file.match(/\.(mp4|MP4)$/i)) {
      const inputPath = path.join(PUBLIC_DIR, file);
      const outputPath = path.join(ASSETS_DIR, `${path.parse(file).name}.webm`);
      await optimizeVideo(inputPath, outputPath);
    }
  }
}

// Run the optimization
processMediaFiles().catch(console.error);
