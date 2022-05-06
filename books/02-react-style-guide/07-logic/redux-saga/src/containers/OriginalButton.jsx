import React from 'react';
import { useDispatch } from 'react-redux';
import { requestFetch } from '../modules/request';

const OriginalButton = () => {
  const dispatch = useDispatch();

  const sendAction = () => {
    dispatch(requestFetch());
  };

  return <button onClick={sendAction}>Hello, world!</button>;
};

export default OriginalButton;
