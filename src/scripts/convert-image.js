import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, '../../public/images/tcb.avif');
const outputPath = path.join(__dirname, '../../public/images/tcb.webp');

sharp(inputPath)
  .webp({ quality: 80 })
  .toFile(outputPath)
  .then(() => {
    console.log('Image converted successfully!');
  })
  .catch((err) => {
    console.error('Error converting image:', err);
  }); 