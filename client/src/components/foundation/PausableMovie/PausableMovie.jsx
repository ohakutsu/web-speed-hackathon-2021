import classNames from 'classnames';
import React from 'react';
import { AspectRatioBox } from '../AspectRatioBox';
import { FontAwesomeIcon } from '../FontAwesomeIcon';

/**
 * @typedef {object} Props
 * @property {string} src
 */

/**
 * クリックすると再生・一時停止を切り替えます。
 * @type {React.VFC<Props>}
 */
const PausableMovie = ({ src }) => {
  const [isPlaying, setIsPlaying] = React.useState(true);

  /** @type {React.RefObject<HTMLVideoElement>} */
  const videoElementRef = React.useRef();

  /** @type {React.RefCallback<HTMLVideoElement>} */
  const videoCallbackRef = React.useCallback((element) => {
    videoElementRef.current = element;

    if (element) {
      // 視覚効果 off のとき mp4 を自動再生しない
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setIsPlaying(false);
        element.pause();
      } else {
        setIsPlaying(true);
        element.play();
      }
    }
  }, []);

  const handleClick = React.useCallback(() => {
    setIsPlaying((isPlaying) => {
      if (isPlaying) {
        videoElementRef.current?.pause();
      } else {
        videoElementRef.current?.play();
      }
      return !isPlaying;
    });
  }, []);

  return (
    <AspectRatioBox aspectHeight={1} aspectWidth={1}>
      <button className="group relative block w-full h-full" onClick={handleClick} type="button">
        <video ref={videoCallbackRef} loop={true} muted={true} className="w-full">
          <source src={src} type="video/mp4" />
        </video>
        <div
          className={classNames(
            'absolute left-1/2 top-1/2 flex items-center justify-center w-16 h-16 text-white text-3xl bg-black bg-opacity-50 rounded-full transform -translate-x-1/2 -translate-y-1/2',
            {
              'opacity-0 group-hover:opacity-100': isPlaying,
            },
          )}
        >
          <FontAwesomeIcon iconType={isPlaying ? 'pause' : 'play'} styleType="solid" />
        </div>
      </button>
    </AspectRatioBox>
  );
};

export { PausableMovie };
