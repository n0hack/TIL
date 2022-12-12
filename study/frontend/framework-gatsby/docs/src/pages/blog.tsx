import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

// Gatsby는 원래 페이지에서만 쿼리를 받아올 수 있었지만,
// useStaticQuery Hook의 등장으로 컴포넌트에서도 쿼리를 받아올 수 있게 되었다.
const BlogPage = ({ data }: PageProps<Queries.getFilesQuery>) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter?.title}</h2>
            <p>Posted: {node.frontmatter?.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export const query = graphql`
  query getFiles {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`;

export default BlogPage;
