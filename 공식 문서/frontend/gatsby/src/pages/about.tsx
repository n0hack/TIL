import { HeadFC, Link } from 'gatsby';
import React from 'react';
import { Layout } from '../components/Layout';

const About = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  );
};

export const Head: HeadFC = () => <title>About Me</title>;

export default About;
