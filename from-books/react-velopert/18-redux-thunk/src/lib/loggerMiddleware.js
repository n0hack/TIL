const loggerMiddleware = function loggerMiddleware(store) {
  // next 함수를 호출해야 다음 미들웨어 또는 리듀서 실행
  return function (next) {
    return function (action) {
      console.group(action && action.type);
      console.log('이전 상태: ', store.getState());
      console.log('발생 액션: ', action.type);
      next(action);
      console.log('액션 발생 후 상태: ', store.getState());
      console.groupEnd();
    };
  };
};

export default loggerMiddleware;
