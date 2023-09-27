import { GatsbyNode } from 'gatsby';
import path from 'path';

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(__dirname, 'src/templates/PostTemplate.tsx');

  const postResult = await graphql<Queries.ReadAllMarkdownForCreatePageQuery>(`
    query ReadAllMarkdownForCreatePage {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }) {
        nodes {
          id
          frontmatter {
            slug
          }
          fileAbsolutePath
        }
      }
    }
  `);

  if (postResult.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query');
  }

  postResult.data?.allMarkdownRemark.nodes.forEach((node) => {
    const category = node.fileAbsolutePath?.match(/posts\/(\w+)\//)?.[1];
    createPage({
      path: `blog/${category}/${node.frontmatter?.slug}`,
      component: postTemplate,
      context: { id: node.id },
    });
  });
};
