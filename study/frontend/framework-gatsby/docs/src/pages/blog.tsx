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
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export const query = graphql`
  query getFiles {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
