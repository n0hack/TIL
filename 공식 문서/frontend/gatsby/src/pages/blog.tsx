import React from 'react';
import { Layout } from '../components/Layout';
import { HeadFC, PageProps, graphql } from 'gatsby';
import { Seo } from '../components/Seo';

const Blog = ({ data: { allMdx } }: PageProps<Queries.ReadAllMdxQuery>) => {
  return (
    <Layout pageTitle="My BLog Posts">
      {allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter?.title}</h2>
          <p>Posted: {node.frontmatter?.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query ReadAllMdx {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/contents/posts/.+/" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
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

export const Head: HeadFC = () => <Seo title="블로그" />;

export default Blog;
