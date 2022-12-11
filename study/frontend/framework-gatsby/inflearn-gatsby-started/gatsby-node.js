/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const queryAllMarkdownData = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // GraphQL Error
  if (queryAllMarkdownData.errors) {
    reporter.panicOnBuild(`Error while running query`);
    return;
  }

  const PostTemplateComponent = path.resolve(__dirname, `src/templates/post_templates.tsx`);

  const generatePostPage = ({
    node: {
      fields: { slug },
    },
  }) => {
    const pageOptions = {
      path: slug,
      component: PostTemplateComponent,
      context: { slug },
    };
    createPage(pageOptions);
  };

  queryAllMarkdownData.data.allMarkdownRemark.edges.forEach(generatePostPage);
};

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
      },
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({ node, name: 'slug', value: slug });
  }
};
