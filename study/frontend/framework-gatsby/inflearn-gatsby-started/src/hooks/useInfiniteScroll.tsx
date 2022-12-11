import React from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

interface Props {
  selectedCategory: string;
  posts: Queries.getPostListQuery['allMarkdownRemark']['edges'];
}

const NUMBER_OF_ITEMS_PER_PAGE = 10;

const useInfiniteScroll = (selectedCategory: string, posts: Queries.getPostListQuery['allMarkdownRemark']['edges']) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(1);
  const postListByCategory = useMemo(() => {
    return posts.filter(({ node: { frontmatter } }) => {
      return selectedCategory !== 'All' ? frontmatter?.categories?.includes(selectedCategory) : true;
    });
  }, [selectedCategory]);

  const observer: IntersectionObserver = new IntersectionObserver((entries, observer) => {
    console.log(entries);
    if (!entries[0].isIntersecting) return;

    setCount(count + 1);
    observer.disconnect();
  });

  useEffect(() => setCount(1), [selectedCategory]);

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0
    ) {
      return;
    }

    observer.observe(containerRef.current.children[containerRef.current.children.length - 1]);
  }, [count, selectedCategory]);

  return { containerRef, postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE) };
};

export default useInfiniteScroll;
