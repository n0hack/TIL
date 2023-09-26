import * as React from 'react';
import { Layout } from '../../components/Layout';
import { Seo } from '../../components/Seo';
import { HeadProps, PageProps, graphql } from 'gatsby';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';

const BlogPost = ({ data: { mdx }, children }: PageProps<Queries.ReadMdxQuery>) => {
  const image = getImage(mdx?.frontmatter?.hero_image?.childImageSharp?.gatsbyImageData as IGatsbyImageData);

  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <p>{mdx?.frontmatter?.date}</p>
      <GatsbyImage image={image as IGatsbyImageData} alt={mdx?.frontmatter?.hero_image_alt ?? ''} />
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
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        hero_image_alt
      }
    }
  }
`;

export const Head = ({ data: { mdx } }: HeadProps<Queries.ReadMdxQuery>) => (
  <Seo title={mdx?.frontmatter?.title ?? ''} />
);

export default BlogPost;
