import React from 'react';
import { HeadFC } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default function Blog() {
  return (
    <Layout title="Blog">
      <p>The most recent news from my shop.</p>

      <article>
        <h4>My first post</h4>
      </article>
    </Layout>
  );
}

export const Head: HeadFC = () => <Seo title="Blog" />;
