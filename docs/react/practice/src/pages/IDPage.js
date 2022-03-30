import React from 'react';
import { useParams } from 'react-router-dom';

const IDPage = () => {
  const { id } = useParams();

  return <div> 입력 ID: {id}</div>;
};

export default IDPage;
