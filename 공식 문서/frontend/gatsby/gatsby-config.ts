import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'TIL Gatsby',
    siteUrl: 'https://www.gatsbyjs.com/',
    description: 'Gatsby를 공부하자',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `posts`,
        path: `${__dirname}/contents/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `about`,
        path: `${__dirname}/contents/about`,
      },
    },
  ],
};

export default config;
