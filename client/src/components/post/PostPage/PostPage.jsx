import React from 'react';

import { CommentList } from '../CommentList';
import { PostItem } from '../PostItem';

/**
 * @typedef {object} Props
 * @property {Array<Models.Comment>} comments
 * @property {Models.Post} post
 * @property {React.RefObject} lastItemRef
 */

/** @type {React.VFC<Props>} */
const PostPage = ({ comments, post, lastItemRef }) => {
  return (
    <>
      <PostItem post={post} />
      <CommentList comments={comments} lastItemRef={lastItemRef} />
    </>
  );
};

export { PostPage };
