import { HeadFC, Link } from 'gatsby';
import React from 'react';
import { Layout } from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Seo } from '../components/Seo';
import { Search } from '../components/Search';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://static.wikia.nocookie.net/nichijou/images/b/be/Rhinoceros_Beetle.png/revision/latest?cb=20160611064345"
      />
      <Search />
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title="홈" />;

export default IndexPage;
