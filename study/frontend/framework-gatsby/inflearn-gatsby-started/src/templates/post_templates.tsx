import { graphql } from 'gatsby';
import React from 'react';

interface Props {}

const PostTemplates = (props: Props) => {
  console.log(props);
  return <div>Post_templates</div>;
};

export default PostTemplates;

export const queryMarkdownDataBySlug = graphql`
  query MyQuery($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      nodes {
        frontmatter {
          title
          summary
          date(formatString: "YYYY.MM.DD.")
          categories
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
