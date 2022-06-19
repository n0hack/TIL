import { AxiosError } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getUserProfile, GithubProfile } from "../../api/github";
import * as actions from "./actions";

function* getUserProfileSaga(action: ReturnType<typeof actions.request>) {
  try {
    const userProfile: GithubProfile = yield call(getUserProfile, action.payload);
    yield put(actions.success(userProfile));
  } catch (e) {
    yield put(actions.failure(e as AxiosError));
  }
}

export function* githubSaga() {
  yield takeEvery(actions.GET_USER_PROFILE, getUserProfileSaga);
}
