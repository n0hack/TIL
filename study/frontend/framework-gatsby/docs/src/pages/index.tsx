import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const IndexPage = () => {
  useEffect(() => {
    (async () => {
      console.log(process.env.GATSBY_API_URL);
      const result = await fetch(`${process.env.GATSBY_API_URL}/users`);
      console.log(result);
    })();
  }, []);

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

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
