import React from 'react';

interface Props {
  text: string;
}

const Text = ({ text }: Props) => {
  return <div>{text}</div>;
};

export default Text;
