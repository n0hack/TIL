// ㅅㅂ ㅈㄴ 어렵네
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post } from "../types/post";
import * as api from "../libs/api";
import { AxiosResponse } from "axios";
import { User } from "../types/user";

export const getPost = createAsyncThunk<Post, number>(
  "sample/GET_POST",
  async (id, { rejectWithValue }: { rejectWithValue: any }) => {
    try {
      const data = await (await api.getPost(id)).data;
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

interface SampleState {
  loading: {
    GET_POST: boolean;
    GET_USERS: boolean;
  };
  post: Post | null;
  users: User[] | null;
}

const initialState: SampleState = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
};

const sample = createSlice({
  name: "sample",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPost.pending, (state, action) => {
      state.loading.GET_POST = true;
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.loading.GET_POST = false;
      state.post = action.payload;
    });
    builder.addCase(getPost.rejected, (state, action) => {
      state.loading.GET_POST = false;
    });
  },
});

export default sample.reducer;

// import { Dispatch } from "redux";
// import * as api from "../libs/api";
// import { Post } from "../types/post";
// import { User } from "../types/user";

// const GET_POST = "sample/GET_POST";
// const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
// const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

// const GET_USERS = "sample/GET_USERS";
// const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
// const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

// const actionGetPost = () => ({ type: GET_POST });
// const actionGetPostSuccess = (payload: Post) => ({
//   type: GET_POST_SUCCESS,
//   payload,
// });
// const actionGetPostFailure = (payload: string, error: boolean) => ({
//   type: GET_POST_FAILURE,
//   payload,
//   error,
// });
// const actionGetUsers = () => ({ type: GET_USERS });
// const actionGetUsersSuccess = (payload: User[]) => ({
//   type: GET_USERS_SUCCESS,
//   payload,
// });
// const actionGetUsersFailure = (payload: string, error: boolean) => ({
//   type: GET_USERS_FAILURE,
//   payload,
//   error,
// });

// type SampleActions =
//   | ReturnType<typeof actionGetPost>
//   | ReturnType<typeof actionGetPostSuccess>
//   | ReturnType<typeof actionGetPostFailure>
//   | ReturnType<typeof actionGetUsers>
//   | ReturnType<typeof actionGetUsersSuccess>
//   | ReturnType<typeof actionGetUsersFailure>;

// export const getPost = (id: number) => async (dispatch: Dispatch) => {
//   dispatch(actionGetPost());
//   try {
//     const response = await api.getPost(id);
//     dispatch(actionGetPostSuccess(response.data));
//   } catch (e: Error | unknown) {
//     dispatch(actionGetPostFailure((e as Error).message, true));
//     throw e;
//   }
// };

// export const getUsers = () => async (dispatch: Dispatch) => {
//   dispatch(actionGetUsers());
//   try {
//     const response = await api.getUsers();
//     dispatch(actionGetUsersSuccess(response.data));
//   } catch (e: Error | unknown) {
//     dispatch(actionGetUsersFailure((e as Error).message, true));
//     throw e;
//   }
// };

// interface SampleState {
//   loading: {
//     GET_POST: boolean;
//     GET_USERS: boolean;
//   };
//   post: Post | null;
//   users: User[] | null;
// }

// const initialState: SampleState = {
//   loading: {
//     GET_POST: false,
//     GET_USERS: false,
//   },
//   post: null,
//   users: null,
// };

// function sample(state: SampleState = initialState, action: SampleActions) {
//   switch (action.type) {
//     case GET_POST:
//       return {
//         ...state,
//         loading: { ...state.loading, GET_POST: true },
//       } as SampleState;
//     case GET_POST_SUCCESS:
//       return {
//         ...state,
//         loading: { ...state.loading, GET_POST: false },
//         post: (action as ReturnType<typeof actionGetPostSuccess>).payload,
//       } as SampleState;
//     case GET_POST_FAILURE:
//       return {
//         ...state,
//         loading: { ...state.loading, GET_POST: false },
//       } as SampleState;
//     case GET_USERS:
//       return {
//         ...state,
//         loading: { ...state.loading, GET_USERS: true },
//       } as SampleState;
//     case GET_USERS_SUCCESS:
//       return {
//         ...state,
//         loading: { ...state.loading, GET_USERS: false },
//         users: (action as ReturnType<typeof actionGetUsersSuccess>).payload,
//       } as SampleState;
//     case GET_USERS_FAILURE:
//       return {
//         ...state,
//         loading: { ...state.loading, GET_USERS: false },
//       } as SampleState;
//   }
// }

// export default sample;
