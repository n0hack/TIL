import * as React from 'react';
import { Layout } from '../../components/Layout';
import { Seo } from '../../components/Seo';
import { HeadProps, PageProps, graphql } from 'gatsby';

const BlogPost = ({ data: { mdx }, children }: PageProps<Queries.ReadMdxQuery>) => {
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <p>{mdx?.frontmatter?.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ReadMdx($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = ({ data: { mdx } }: HeadProps<Queries.ReadMdxQuery>) => (
  <Seo title={mdx?.frontmatter?.title ?? ''} />
);

export default BlogPost;
