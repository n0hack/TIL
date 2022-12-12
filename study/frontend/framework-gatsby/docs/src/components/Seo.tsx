import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface Props {
  title: string;
}

const Seo = ({ title }: Props) => {
  const data = useStaticQuery<Queries.MetadataQuery>(graphql`
    query Metadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title} | {data.site?.siteMetadata?.title}
    </title>
  );
};

export default Seo;
