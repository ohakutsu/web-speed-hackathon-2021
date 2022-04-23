import React from 'react';
import { getSoundSvgPath } from '../../../utils/get_path';

/**
 * @typedef {object} Props
 * @property {number} soundId
 */

/**
 * @type {React.VFC<Props>}
 */
const SoundWaveSVG = ({ soundId }) => {
  const soundSvgPath = getSoundSvgPath(soundId);

  return <img className="w-full h-full" src={soundSvgPath} loading="lazy" />;
};

export { SoundWaveSVG };
