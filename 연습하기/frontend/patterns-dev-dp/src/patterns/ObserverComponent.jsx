import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Observable from './observer';

const observer = new Observable();

const logger = (data) => {
  console.log(`Log: ${data}`);
};

const toastify = (data) => {
  toast(data, { autoClose: 1000 });
};

observer.subscribe(logger);
observer.subscribe(toastify);

const ObserverComponent = () => {
  const handleButtonClick = () => {
    observer.notify('Hello World');
  };

  return (
    <div>
      <button onClick={handleButtonClick}>click me</button>
      <ToastContainer />
    </div>
  );
};

export default ObserverComponent;
