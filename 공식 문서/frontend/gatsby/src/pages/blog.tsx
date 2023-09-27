import React from 'react';
import { Layout } from '../components/Layout';
import { HeadFC, Link, PageProps, graphql } from 'gatsby';
import { Seo } from '../components/Seo';

const Blog = ({ data: { allMarkdownRemark } }: PageProps<Queries.ReadAllMarkdownQuery>) => {
  return (
    <Layout pageTitle="My BLog Posts">
      {allMarkdownRemark.nodes.map((node) => {
        const category = (node.fileAbsolutePath as string).match(/posts\/(\w+)\//)?.[1];

        return (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${category}/${node.frontmatter?.slug}`}>{node.frontmatter?.title}</Link>
            </h2>
            <p>Posted: {node.frontmatter?.date}</p>
            <p>{node.excerpt}</p>
          </article>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query ReadAllMarkdown {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }, sort: { frontmatter: { date: DESC } }) {
      totalCount
      nodes {
        id
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        fileAbsolutePath
        excerpt
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title="블로그" />;

export default Blog;
