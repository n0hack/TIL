import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';

const PostPage = ({ data }: PageProps<Queries.getPostQuery>) => {
  return (
    <Layout pageTitle={data.mdx?.frontmatter?.title!}>
      <p>My blog post contents will go here (eventually).</p>
    </Layout>
  );
};

export const query = graphql`
  query getPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export default PostPage;
