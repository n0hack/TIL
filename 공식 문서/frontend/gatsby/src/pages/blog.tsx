import React, { FC } from 'react';
import { Layout } from '../components/Layout';
import { HeadFC, PageProps, graphql } from 'gatsby';
import { Seo } from '../components/Seo';

const Blog = ({ data: { allFile } }: PageProps<Queries.ReadAllFileQuery>) => {
  return (
    <Layout pageTitle="My BLog Posts">
      <ul>
        {allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query ReadAllFile {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title="블로그" />;

export default Blog;
