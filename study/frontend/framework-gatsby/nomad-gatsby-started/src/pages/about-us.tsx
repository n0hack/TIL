import React from 'react';
import { HeadFC } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

export default function AboutUs() {
  return (
    <Layout title="About Us">
      <p>We are the happies sticker store.</p>
    </Layout>
  );
}

export const Head: HeadFC = () => <SEO title="About Us" />;
