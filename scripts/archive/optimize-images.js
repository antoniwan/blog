import sharp from "sharp";
const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "../public");
const targetDir = path.join(
  __dirname,
  "../public/recipes/lemon-pepper-chicken"
);

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Image optimization settings
const imageSettings = {
  quality: 80,
  width: 1200,
  height: 800,
  fit: "cover",
};

// Process images
const processImage = async (filename) => {
  if (!filename.endsWith(".jpeg") && !filename.endsWith(".jpg")) return;

  const sourcePath = path.join(sourceDir, filename);
  const targetPath = path.join(targetDir, filename);

  try {
    await sharp(sourcePath)
      .resize(imageSettings.width, imageSettings.height, {
        fit: imageSettings.fit,
        position: "center",
      })
      .jpeg({ quality: imageSettings.quality })
      .toFile(targetPath);
    console.log(`Optimized ${filename}`);
  } catch (error) {
    console.error(`Error processing ${filename}:`, error);
  }
};

// Process videos (just copy them for now)
const processVideo = async (filename) => {
  if (!filename.endsWith(".mp4") && !filename.endsWith(".MP4")) return;

  const sourcePath = path.join(sourceDir, filename);
  const targetPath = path.join(targetDir, filename.toLowerCase());

  try {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copied video ${filename}`);
  } catch (error) {
    console.error(`Error copying video ${filename}:`, error);
  }
};

// Process all files
const files = fs.readdirSync(sourceDir);
files.forEach(async (file) => {
  if (file.startsWith("lemon-pepper-chicken")) {
    if (file.endsWith(".jpeg") || file.endsWith(".jpg")) {
      await processImage(file);
    } else if (file.endsWith(".mp4") || file.endsWith(".MP4")) {
      await processVideo(file);
    }
  }
});
