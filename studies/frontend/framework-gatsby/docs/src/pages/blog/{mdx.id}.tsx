import React from 'react';
import { PageProps } from 'gatsby';

interface Props {}

const MdxId = (props: PageProps) => {
  console.log(props);
  return <div>MdxId</div>;
};

export default MdxId;
