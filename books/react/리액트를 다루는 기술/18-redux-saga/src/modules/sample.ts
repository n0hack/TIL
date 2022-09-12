import { createAction, handleActions } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { startLoading } from "./loading";
import * as api from "../api/post";
import { AxiosResponse } from "axios";
import { Post } from "../types/post";
import { ActionType } from "@redux-saga/types";

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

export const getPost = createAction(GET_POST, (id: number) => id);
export const getUsers = createAction(GET_USERS);

function* getPostSaga(action: ReturnType<typeof getPost>): any {
  yield put(startLoading(GET_POST));
  console.log("들오나?");
  try {
    const post = yield call(api.getPost, action.payload);
    yield put({
      type: GET_POST_SUCCESS,
      payload: (post as AxiosResponse).data,
    });
  } catch (e: any) {
    yield put({
      type: GET_POST_FAILURE,
      payload: (e as Error).message,
      error: true,
    });
  }
  yield put;
}

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
}

type SampleState = {
  post: Post | null;
};

const initialState: SampleState = {
  post: null,
};

const sample = handleActions<any>(
  {
    [GET_POST_SUCCESS]: (state, action) => ({ ...state, post: action.payload }),
  },
  initialState
);
export default sample;
