import React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

type SeoProps = {
  title: string;
};

const Seo = ({ title }: SeoProps) => {
  const data = useSiteMetadata();

  return (
    <title>
      {title} | {data?.title}
    </title>
  );
};

export { Seo };
