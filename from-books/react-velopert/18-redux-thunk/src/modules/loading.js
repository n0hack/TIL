import { createSlice } from '@reduxjs/toolkit';

// 로딩 상태만 관리하는 리덕스 모듈
const loading = createSlice({
  name: 'loading',
  initialState: {},
  reducers: {
    START_LOADING: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    FINISH_LOADING: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
});

export const { START_LOADING, FINISH_LOADING } = loading.actions;
export default loading.reducer;
