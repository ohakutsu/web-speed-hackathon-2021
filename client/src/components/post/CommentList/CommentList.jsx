import React from 'react';

import { CommentItem } from '../CommentItem';

/**
 * @typedef {object} Props
 * @property {Array<Models.Comment>} comments
 * @property {React.RefObject} lastItemRef
 */

/** @type {React.VFC<Props>} */
const CommentList = ({ comments, lastItemRef }) => {
  const lastItemIndex = comments.length - 1;
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <CommentItem key={comment.id} comment={comment} ref={index === lastItemIndex ? lastItemRef : undefined} />
        );
      })}
    </div>
  );
};

export { CommentList };
