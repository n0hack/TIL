// 액션, 액션 생성 함수
const REQUEST_FETCH = 'request/REQUEST_FETCH';
const SUCCEEDED_FETCH = 'request/SUCCEEDED_FETCH';
const FAILED_FETCH = 'request/FAILED_FETCH';

export const requestFetch = () => ({ type: REQUEST_FETCH });
export const succeededFetch = (payload) => ({ type: SUCCEEDED_FETCH, payload });
export const failedFetch = (message) => ({ type: FAILED_FETCH });

// 리듀서
const request = (state, action) => {
  console.log(action);
  return state;
};

export default request;
