import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import sharp from 'sharp';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGE_PATH = path.resolve(__dirname, '../../public/images');

const resizeImages = (dir_path) => {
  const files = fs.readdirSync(dir_path);
  files.forEach(async (file) => {
    const file_path = path.resolve(dir_path, file);

    const stats = fs.statSync(file_path);
    if (stats.isDirectory()) {
      resizeImages(file_path);
      return;
    }

    const data = fs.readFileSync(file_path);

    const resizedData = await sharp(data)
      .resize({
        fit: 'cover',
        height: undefined,
        width: 800,
      })
      .toFormat('jpeg')
      .toBuffer();

    fs.writeFileSync(file_path, resizedData);
    console.log(`Resized: ${file_path}`);
  });
};

resizeImages(IMAGE_PATH);
