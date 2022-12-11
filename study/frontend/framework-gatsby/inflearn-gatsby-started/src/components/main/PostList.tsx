import React from 'react';
import styled from '@emotion/styled';
import PostItem from './PostItem';
import { PageProps } from 'gatsby';
import { useMemo } from 'react';
import useInfiniteScroll from '@hooks/useInfiniteScroll';

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

interface Props {
  selectedCategory: string;
  posts: Queries.getPostListQuery['allMarkdownRemark']['edges'];
}

const PostList = ({ selectedCategory, posts }: Props) => {
  const { containerRef, postList } = useInfiniteScroll(selectedCategory, posts);

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(({ node: { id, fields, frontmatter } }) => (
        <PostItem
          key={id}
          title={frontmatter?.title!}
          categories={frontmatter?.categories as string[]}
          date={frontmatter?.date!}
          summary={frontmatter?.summary!}
          thumbnail={frontmatter?.thumbnail?.childrenImageSharp?.[0]?.gatsbyImageData!}
          link={fields?.slug!}
        />
      ))}
    </PostListWrapper>
  );
};

export default PostList;

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;
