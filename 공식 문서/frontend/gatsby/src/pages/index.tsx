import { HeadFC, Link } from 'gatsby';
import React from 'react';
import { Layout } from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export const Head: HeadFC = () => <title>홈</title>;

export default IndexPage;
