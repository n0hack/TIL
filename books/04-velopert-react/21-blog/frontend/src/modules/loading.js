import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

// 액션 타입을 payload로 설정
export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType,
);
export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType,
);

const initialState = {};

const loading = handleActions(
  {
    [startLoading]: (state, action) => ({ ...state, [action.payload]: true }),
    [startLoading]: (state, action) => ({ ...state, [action.payload]: false }),
  },
  initialState,
);

export default loading;
