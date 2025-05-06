import { exec } from "child_process";
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

// Video optimization settings
const videoSettings = {
  codec: "libx264",
  preset: "medium",
  crf: "28", // Lower values = higher quality, 28 is a good balance
  maxWidth: "1280",
  maxHeight: "720",
  fps: "30",
};

// Process videos
const processVideo = (filename) => {
  if (!filename.endsWith(".mp4") && !filename.endsWith(".MP4")) return;

  const sourcePath = path.join(sourceDir, filename);
  const targetPath = path.join(
    targetDir,
    filename.toLowerCase().replace(".mp4", "-optimized.mp4")
  );

  const command = `ffmpeg -i "${sourcePath}" -c:v ${videoSettings.codec} -preset ${videoSettings.preset} -crf ${videoSettings.crf} -vf "scale='min(${videoSettings.maxWidth},iw)':'min(${videoSettings.maxHeight},ih)':force_original_aspect_ratio=decrease" -r ${videoSettings.fps} -c:a aac -b:a 128k "${targetPath}"`;

  exec(command, (error) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      return;
    }
    console.log(`Processed: ${sourcePath}`);
  });
};

// Process all files
const files = fs.readdirSync(sourceDir);
files.forEach((file) => {
  if (
    file.startsWith("lemon-pepper-chicken") &&
    (file.endsWith(".mp4") || file.endsWith(".MP4"))
  ) {
    processVideo(file);
  }
});
