import React from 'react';
import { useDispatch } from '../../node_modules/react-redux/es/exports';

const ControllerButton = () => {
  const dispatch = useDispatch();
  const clickHandle = (flag) => dispatch({ type: 'SET_VISIBLE', flag });
  return (
    <div>
      <button onClick={() => clickHandle('ALL')}>ALL</button>
      <button onClick={() => clickHandle('ACTIVE')}>ACTIVE</button>
      <button onClick={() => clickHandle('INACTIVE')}>INACTIVE</button>
    </div>
  );
};

export default ControllerButton;
