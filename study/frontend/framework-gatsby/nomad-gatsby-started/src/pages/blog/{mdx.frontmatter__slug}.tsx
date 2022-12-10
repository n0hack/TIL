import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

export default function BlogPost({
  data,
  children,
}: PageProps<Queries.PostDetailQuery>) {
  return <Layout title="Blog Post">{children}</Layout>;
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        author
        category
        date
        slug
        title
      }
    }
  }
`;

export const Head = ({ data }: PageProps<Queries.PostDetailQuery>) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);
