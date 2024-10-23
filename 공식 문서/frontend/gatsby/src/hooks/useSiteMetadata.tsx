import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const useSiteMetadata = () => {
  const data = useStaticQuery<Queries.ReadSiteMetadataQuery>(graphql`
    query ReadSiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return data.site?.siteMetadata;
};

export { useSiteMetadata };
