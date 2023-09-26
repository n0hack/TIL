import { HeadFC, Link } from 'gatsby';
import React from 'react';
import { Layout } from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/icon.png"
      />
    </Layout>
  );
};

export const Head: HeadFC = () => <title>홈</title>;

export default IndexPage;
