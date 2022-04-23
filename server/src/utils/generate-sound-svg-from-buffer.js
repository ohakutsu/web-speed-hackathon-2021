import lodashChunk from 'lodash/chunk';
import lodashMap from 'lodash/map';
import lodashMax from 'lodash/max';
import lodashMean from 'lodash/mean';
import lodashZip from 'lodash/zip';
import { RenderingAudioContext as AudioContext } from 'web-audio-engine';
import { convertSound } from '../converters/convert_sound';

/**
 * @param {ArrayBuffer} data
 * @returns {Promise<{ max: number, peaks: number[] }>}
 */
export async function calculate(data) {
  const audioCtx = new AudioContext();

  // 音声をデコードする
  /** @type {AudioBuffer} */
  const buffer = await new Promise((resolve, reject) => {
    audioCtx.decodeAudioData(data.slice(0), resolve, reject);
  });
  // 左の音声データの絶対値を取る
  const leftData = lodashMap(buffer.getChannelData(0), Math.abs);
  // 右の音声データの絶対値を取る
  const rightData = lodashMap(buffer.getChannelData(1), Math.abs);

  // 左右の音声データの平均を取る
  const normalized = lodashMap(lodashZip(leftData, rightData), lodashMean);
  // 100 個の chunk に分ける
  const chunks = lodashChunk(normalized, Math.ceil(normalized.length / 100));
  // chunk ごとに平均を取る
  const peaks = lodashMap(chunks, lodashMean);
  // chunk の平均の中から最大値を取る
  const max = lodashMax(peaks);

  return { max, peaks };
}

/**
 * @param {ArrayBuffer} buffer
 * @returns {Promise<string>}
 */
export const generateSoundSvgFromBuffer = async (buffer) => {
  const wav = await convertSound(buffer, { extension: 'wav' });
  const wavBuffer = wav.buffer;
  const { max, peaks } = await calculate(wavBuffer);

  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 1">' +
    peaks
      .map((peak, idx) => {
        const ratio = peak / max;
        return `<rect fill="#2563EB" height="${ratio}" width="1" x="${idx}" y="${1 - ratio}"></rect>`;
      })
      .join('') +
    '</svg>';

  return svg;
};
