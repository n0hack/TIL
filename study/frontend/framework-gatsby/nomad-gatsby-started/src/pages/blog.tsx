import React from 'react';
import { HeadFC } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

export default function Blog() {
  return (
    <Layout title="Blog">
      <p>The most recent news from my shop.</p>
    </Layout>
  );
}

export const Head: HeadFC = () => <SEO title="Blog" />;
