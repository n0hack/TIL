import React from 'react';
import { graphql, HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default function Blog({ data }: PageProps<Queries.BlogPostQuery>) {
  return (
    <Layout title="Blog">
      <section>
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <h3>{file.frontmatter?.title}</h3>
            <h5>
              {file.frontmatter?.author} in {file.frontmatter?.category}
            </h5>
            <h6>{file.frontmatter?.date}</h6>
            <hr />
            <p>{file.excerpt}</p>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPost {
    allMdx {
      nodes {
        frontmatter {
          category
          title
          date(formatString: "YYYY.MM.DD")
          author
        }
        body
        excerpt(pruneLength: 50)
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title="Blog" />;
