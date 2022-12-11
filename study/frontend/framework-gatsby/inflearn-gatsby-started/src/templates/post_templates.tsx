import Template from '@components/common/Template';
import PostContent from '@components/post/PostContent';
import PostHead from '@components/post/PostHead';
import { graphql, PageProps } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

const PostTemplates = ({ data, location: { href } }: PageProps<Queries.getMarkdownDataBySlugQuery>) => {
  const { title, date, categories, summary, thumbnail } = data.allMarkdownRemark.nodes[0].frontmatter!;

  return (
    <Template title={title!} description={summary!} url={href} image={thumbnail?.publicURL!}>
      <PostHead
        title={title!}
        date={date!}
        categories={categories! as string[]}
        thumbnail={thumbnail?.childImageSharp?.gatsbyImageData as IGatsbyImageData}
      />
      <PostContent html={data.allMarkdownRemark.nodes[0].html!} />
    </Template>
  );
};

export default PostTemplates;

export const getMarkdownDataBySlug = graphql`
  query getMarkdownDataBySlug($slug: String) {
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
            publicURL
          }
        }
        html
      }
    }
  }
`;
