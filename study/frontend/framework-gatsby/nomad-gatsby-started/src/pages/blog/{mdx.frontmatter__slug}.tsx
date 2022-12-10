import { graphql, PageProps } from 'gatsby';
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  StaticImage,
} from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

export default function BlogPost({
  data,
  children,
}: PageProps<Queries.PostDetailQuery>) {
  // 이미지 객체 생성
  const image = getImage(
    data.mdx?.frontmatter?.headerImage?.childrenImageSharp?.[0]
      ?.gatsbyImageData!
  );

  return (
    <Layout title="Blog Post">
      {children}
      {/* <GatsbyImage image={image as IGatsbyImageData} alt="header" /> */}
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        author
        category
        date
        title
        slug
        headerImage {
          childrenImageSharp {
            gatsbyImageData(height: 300, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

// MDX는 Head에서도 데이터를 받아올 수 있음
export const Head = ({ data }: PageProps<Queries.PostDetailQuery>) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);
