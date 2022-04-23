import React from 'react';

import { Timeline } from '../Timeline';

/**
 * @typedef {object} Props
 * @property {Array<Models.Post>} timeline
 * @property {React.RefObject} lastItemRef
 */

/** @type {React.VFC<Props>} */
const TimelinePage = ({ timeline, lastItemRef }) => {
  return <Timeline timeline={timeline} lastItemRef={lastItemRef} />;
};

export { TimelinePage };
