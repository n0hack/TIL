import React from 'react';
import { HeadFC } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

export default function IndexPage() {
  return (
    <Layout title="Welcome to DevStickers">
      <div></div>
    </Layout>
  );
}

export const Head: HeadFC = () => <SEO title="Home" />;
