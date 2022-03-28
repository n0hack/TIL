import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

// 액션 타입 선언, 한 요청당 3개씩
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';
const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

// thunk 함수 생성 (액션 생성 함수와 달리 각 처리에 따라 다른 함수를 내부에서 호출)
// export const getPost = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST });
//   try {
//     const response = await api.getPost(id);
//     dispatch({ type: GET_POST_SUCCESS, payload: response.data });
//   } catch (e) {
//     dispatch({ type: GET_POST_FAILURE, payload: e, error: true });
//     throw e; // 나중에 다른 컴포넌트단에서 에러 캐치 가능
//   }
// };
export const getPost = createRequestThunk(GET_POST, api.getPost);

// export const getUsers = () => async (dispatch) => {
//   dispatch({ type: GET_USERS });
//   try {
//     const response = await api.getUsers();
//     dispatch({ type: GET_USERS_SUCCESS, payload: response.data });
//   } catch (e) {
//     dispatch({ type: GET_USERS_FAILURE, payload: e, error: true });
//     throw e;
//   }
// };
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// 초기 상태
const initialState = {
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: { ...state.loading, GET_POST: false },
      post: action.payload,
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: { ...state.loading, GET_USERS: false },
      users: action.payload,
    }),
  },
  initialState
);

export default sample;
