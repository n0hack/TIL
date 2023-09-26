import { PageProps, graphql } from 'gatsby';
import React from 'react';

const PostTemplate = ({ data: { markdownRemark } }: PageProps<Queries.ReadMarkdownQuery>) => {
  return <div style={{ width: 800 }} dangerouslySetInnerHTML={{ __html: markdownRemark?.html! }} />;
};

export const query = graphql`
  query ReadMarkdown($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export default PostTemplate;
