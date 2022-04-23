import fs from 'node:fs';
import path from 'node:path';
import { convertImage } from '../src/converters/convert_image';

const IMAGE_PATH = path.resolve(__dirname, '../../public/images');
const PROFILE_IMAGE_PATH = path.resolve(IMAGE_PATH, './profiles');

const OPTIMIZED_EXTENSION = 'webp';

/**
 * @param {Buffer} buffer
 * @param {object} options
 * @param {number} [options.width]
 * @returns {Promise<Uint8Array>}
 */
const optimizeImage = async (buffer, options) => {
  return await convertImage(buffer, {
    extension: OPTIMIZED_EXTENSION,
    width: options.width,
  });
};

const optimizeImages = () => {
  const files = fs.readdirSync(IMAGE_PATH);
  files.forEach(async (file) => {
    const filePath = path.resolve(IMAGE_PATH, file);

    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      return;
    }

    const data = fs.readFileSync(filePath);
    const image = await optimizeImage(data, { width: 600 });

    const extension = path.extname(filePath);
    const basename = path.basename(filePath, extension);
    const optimizedImagePath = path.resolve(IMAGE_PATH, `./${basename}.${OPTIMIZED_EXTENSION}`);

    fs.writeFileSync(optimizedImagePath, image);
    console.log(`Optimized: ${optimizedImagePath}`);
  });
};

const optimizeProfileImages = () => {
  const files = fs.readdirSync(PROFILE_IMAGE_PATH);
  files.forEach(async (file) => {
    const filePath = path.resolve(PROFILE_IMAGE_PATH, file);

    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      return;
    }

    const data = fs.readFileSync(filePath);
    const image = await optimizeImage(data, { width: 150 });

    const extension = path.extname(filePath);
    const basename = path.basename(filePath, extension);
    const optimizedImagePath = path.resolve(PROFILE_IMAGE_PATH, `./${basename}.${OPTIMIZED_EXTENSION}`);

    fs.writeFileSync(optimizedImagePath, image);
    console.log(`Optimized: ${optimizedImagePath}`);
  });
};

optimizeImages();
optimizeProfileImages();
