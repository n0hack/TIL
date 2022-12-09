import React from 'react';
import { graphql, HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default function Blog({ data }: PageProps<Queries.BlogTitlesQuery>) {
  console.log(data);
  return (
    <Layout title="Blog">
      <ul>
        {data.allFile.nodes.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query BlogTitles {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title="Blog" />;
