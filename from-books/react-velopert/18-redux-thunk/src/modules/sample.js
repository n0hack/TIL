import { createSlice } from '@reduxjs/toolkit';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const sample = createSlice({
  name: 'sample',
  initialState: {
    // loading: {GET_POST:false, GET_USERS: false},
    post: null,
    users: null,
  },
  reducers: {
    GET_POST: (state) => {
      state.loading.GET_POST = true;
    },
    GET_POST_SUCCESS: (state, action) => {
      state.post = action.payload;
    },
    GET_USERS: (state) => {
      state.loading.GET_USERS = true;
    },
    GET_USERS_SUCCESS: (state, action) => {
      state.users = action.payload;
    },
  },
});

// thunk(나중에 실행되도록 한 번 감싼 함수) 함수 생성
// export const getPost = (id) => async (dispatch) => {
//   dispatch({ type: sample.actions.GET_POST.type });

//   try {
//     const response = await api.getPost(id);
//     dispatch({ type: sample.actions.GET_POST_SUCCESS, payload: response.data });
//   } catch (e) {
//     dispatch({
//       type: sample.actions.GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     });
//     // 나중에 컴포넌트 단에서 예외 조회 가능
//     throw e;
//   }
// };

// export const getUsers = () => async (dispatch) => {
//   dispatch({ type: sample.actions.GET_USERS.type });

//   try {
//     const response = await api.getUsers();
//     dispatch({
//       type: sample.actions.GET_USERS_SUCCESS,
//       payload: response.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: sample.actions.GET_USERS_FAILURE,
//       payload: e,
//       error: true,
//     });
//     // 나중에 컴포넌트 단에서 예외 조회 가능
//     throw e;
//   }
// };
export const getPost = createRequestThunk(
  sample.actions.GET_POST.type,
  api.getPost
);
export const getUsers = createRequestThunk(
  sample.actions.GET_USERS.type,
  api.getUsers
);

export default sample.reducer;
