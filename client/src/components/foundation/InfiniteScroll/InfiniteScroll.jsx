import React from 'react';

/**
 * @typedef {object} Props
 * @property {React.ReactNode} children
 * @property {any} items
 * @property {() => void} fetchMore
 * @property {React.RefObject} lastItemRef
 */

/** @type {React.VFC<Props>} */
const InfiniteScroll = ({ children, fetchMore, items, lastItemRef }) => {
  const latestItem = items[items.length - 1];

  React.useEffect(() => {
    if (lastItemRef.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fetchMore();
          }
        });
      });

      observer.observe(lastItemRef.current);

      return () => {
        observer.disconnect();
      };
    }

    return;
  }, [latestItem, fetchMore, lastItemRef]);

  return <>{children}</>;
};

export { InfiniteScroll };
