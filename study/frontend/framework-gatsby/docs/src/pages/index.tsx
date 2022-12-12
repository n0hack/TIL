import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        alt="Static"
      />
      <StaticImage src="../images/img.jpeg" alt="영복" />
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
