import React from 'react';
import { graphql, HeadFC, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default function IndexPage() {
  return (
    <Layout title="Welcome to DevStickers">
      <div></div>
    </Layout>
  );
}

export const Head: HeadFC = () => <Seo title="Home" />;
