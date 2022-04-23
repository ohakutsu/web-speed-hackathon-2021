import React from 'react';

import { Timeline } from '../../timeline/Timeline';
import { UserProfileHeader } from '../UserProfileHeader';

/**
 * @typedef {object} Props
 * @property {Array<Models.Post>} timeline
 * @property {Models.User} user
 * @property {React.RefObject} lastItemRef
 */

/** @type {React.VFC<Props>} */
const UserProfilePage = ({ timeline, user, lastItemRef }) => {
  return (
    <>
      <UserProfileHeader user={user} />
      <div className="mt-6 border-t border-gray-300">
        <Timeline timeline={timeline} lastItemRef={lastItemRef} />
      </div>
    </>
  );
};

export { UserProfilePage };
