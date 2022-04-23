import fs from 'node:fs';
import path from 'node:path';
import { generateSoundSvgFromBuffer } from '../src/utils/generate-sound-svg-from-buffer';

const SOUND_PATH = path.resolve(__dirname, '../../public/sounds');
const SOUND_SVG_PATH = path.resolve(__dirname, '../../public/sound_svgs');

const generateSoundSvg = async () => {
  const files = fs.readdirSync(SOUND_PATH);

  for (let file of files) {
    const filePath = path.resolve(SOUND_PATH, file);
    const data = fs.readFileSync(filePath);

    const svg = await generateSoundSvgFromBuffer(data);

    const soundId = path.basename(file, path.extname(file));
    const svgFilePath = path.resolve(SOUND_SVG_PATH, `./${soundId}.svg`);
    fs.writeFileSync(svgFilePath, svg);

    console.log(`Generated: ${svgFilePath}`);
  }
};

generateSoundSvg();
