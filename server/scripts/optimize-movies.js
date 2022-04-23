import fs from 'node:fs';
import path from 'node:path';
import { exit } from 'node:process';
import { convertMovie } from '../src/converters/convert_movie';

const MOVIE_PATH = path.resolve(__dirname, '../../public/movies');
const OPTIMIZED_EXTENSION = 'mp4';

const optimizeMovies = async () => {
  const files = fs.readdirSync(MOVIE_PATH);

  for (let file of files) {
    const filePath = path.resolve(MOVIE_PATH, file);
    const data = fs.readFileSync(filePath);

    const optimized = await convertMovie(data, { extension: OPTIMIZED_EXTENSION });

    const extension = path.extname(filePath);
    const basename = path.basename(filePath, extension);
    const optimizedFilePath = path.resolve(MOVIE_PATH, `./${basename}.${OPTIMIZED_EXTENSION}`);

    fs.writeFileSync(optimizedFilePath, optimized);

    console.log(`Optimized: ${optimizedFilePath}`);
  }

  exit(0);
};

optimizeMovies();
