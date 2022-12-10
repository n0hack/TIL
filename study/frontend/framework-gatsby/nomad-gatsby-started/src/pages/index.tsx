import React from 'react';
import { graphql, HeadFC, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { StaticImage } from 'gatsby-plugin-image';

export default function IndexPage() {
  return (
    <Layout title="Welcome to DevStickers">
      <StaticImage
        src="https://gamerbraves.sgp1.cdn.digitaloceanspaces.com/2022/11/Nikke-5.jpg"
        alt="Nikke"
        height={580}
      />
    </Layout>
  );
}

export const Head: HeadFC = () => <Seo title="Home" />;
