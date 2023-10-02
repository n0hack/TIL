import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../api/sample';

type SampelState = {
  loading: {
    GET_POST: boolean;
    GET_USERS: boolean;
  };
  post: api.Post | null;
  users: api.User[] | null;
};

const NAME = 'sample';

export const getPost = createAsyncThunk<api.Post, number>(`${NAME}/getPost`, async (postId) => {
  const { data } = await api.getPost(postId);
  return data;
});

export const getUsers = createAsyncThunk<api.User[]>(`${NAME}/getUsers`, async () => {
  const { data } = await api.getUsers();
  return data;
});

const initialState: SampelState = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
};

export const sampleSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getPost.pending, (state) => {
        state.loading.GET_POST = true;
      })
      .addCase(getPost.fulfilled, (state, { payload: post }) => {
        state.loading.GET_POST = false;
        state.post = post;
      })
      .addCase(getPost.rejected, (state) => {
        state.loading.GET_POST = false;
      })
      .addCase(getUsers.pending, (state) => {
        state.loading.GET_USERS = true;
      })
      .addCase(getUsers.fulfilled, (state, { payload: users }) => {
        state.loading.GET_USERS = false;
        state.users = users;
      })
      .addCase(getUsers.rejected, (state) => {
        state.loading.GET_USERS = false;
      }),
});

export const {} = sampleSlice.actions;

export default sampleSlice.reducer;
