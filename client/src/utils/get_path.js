/**
 * @param {string} imageId
 * @returns {string}
 */
function getImagePath(imageId) {
  return `/images/${imageId}.webp`;
}

/**
 * @param {string} movieId
 * @returns {string}
 */
function getMoviePath(movieId) {
  return `/movies/${movieId}.mp4`;
}

/**
 * @param {string} soundId
 * @returns {string}
 */
function getSoundPath(soundId) {
  return `/sounds/${soundId}.mp3`;
}

/**
 * @param {string} soundId
 * @returns {string}
 */
function getSoundSvgPath(soundId) {
  return `/sound_svgs/${soundId}.svg`;
}

/**
 * @param {string} profileImageId
 * @returns {string}
 */
function getProfileImagePath(profileImageId) {
  return `/images/profiles/${profileImageId}.webp`;
}

export { getImagePath, getMoviePath, getSoundPath, getSoundSvgPath, getProfileImagePath };
