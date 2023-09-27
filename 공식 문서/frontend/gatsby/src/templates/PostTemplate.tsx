import { HeadProps, PageProps, graphql } from 'gatsby';
import React from 'react';
import { Seo } from '../components/Seo';
import * as styles from './PostTemplate.module.scss';

const PostTemplate = ({ data: { markdownRemark } }: PageProps<Queries.ReadMarkdownQuery>) => {
  return <div className={styles.container} dangerouslySetInnerHTML={{ __html: markdownRemark?.html! }} />;
};

export const query = graphql`
  query ReadMarkdown($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export const Head = ({ data: { markdownRemark } }: HeadProps<Queries.ReadMarkdownQuery>) => (
  <Seo title={markdownRemark?.frontmatter?.title ?? ''} />
);

export default PostTemplate;
