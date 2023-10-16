import React from 'react';

const RenderPropsComponent = (props) => {
  console.log(props);
  return <div>{props.children({ data: 5 })}</div>;
};

export default RenderPropsComponent;
