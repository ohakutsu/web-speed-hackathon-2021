import React from 'react';

import { TimelineItem } from '../TimelineItem';

/**
 * @typedef {object} Props
 * @property {Array<Models.Post>} timeline
 * @property {React.RefObject} lastItemRef
 */

/** @type {React.VFC<Props>} */
const Timeline = ({ timeline, lastItemRef }) => {
  const lastItemIndex = timeline.length - 1;
  return (
    <section>
      {timeline.map((post, index) => {
        return <TimelineItem key={post.id} post={post} ref={index === lastItemIndex ? lastItemRef : undefined} />;
      })}
    </section>
  );
};

export { Timeline };
