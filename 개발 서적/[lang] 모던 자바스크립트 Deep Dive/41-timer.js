const debounce = (callback, delay = 300) => {
  let timerId;

  return (event) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(callback, delay, event);
  };
};

const throttle = (callback, delay = 300) => {
  let timerId;

  return (event) => {
    if (timerId) return;
    setTimeout(() => {
      callback(event);
      timerId = null;
    }, delay);
  };
};
