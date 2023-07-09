import { ToastContainer, toast } from 'react-toastify';
import observable from './observable';

const logger = (data) => {
  console.log(`${Date.now()} ${data}`);
};

const toastify = (data) => {
  toast(data);
};

observable.subscribe(logger);
observable.subscribe(toastify);

const Observer = () => {
  function handleClick() {
    observable.notify('User clicked button!');
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <ToastContainer />
    </div>
  );
};

export default Observer;
