import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  const SorttedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
  return SorttedPosts;
};

export const usePosts = (posts, sort, query) => {
  const SorttedPosts = useSortedPosts(posts, sort);
  const sortedAndSerachPosts = useMemo(() => {
    return SorttedPosts.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
  }, [query, SorttedPosts]);
  return sortedAndSerachPosts;
};
