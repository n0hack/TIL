import { MDXProvider } from '@mdx-js/react';
import { PageProps, graphql } from 'gatsby';
import React from 'react';

const PostTemplate = (props: PageProps<Queries.ReadMdxQuery>) => {
  console.log(props);
  return <>{/* <MDXProvider>{children}</MDXProvider> */}</>;
};

export const query = graphql`
  query ReadMdx($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;

export default PostTemplate;
