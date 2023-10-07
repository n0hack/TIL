import React from 'react';
import './SassComponent.scss';

type SassComponentProps = {};

const SassComponent = ({}: SassComponentProps) => {
  return (
    <div className="container">
      <div className="box red"></div>
      <div className="box orange"></div>
      <div className="box yellow"></div>
      <div className="box green"></div>
      <div className="box blue"></div>
      <div className="box indigo"></div>
      <div className="box violet"></div>
    </div>
  );
};

export { SassComponent };
