import { AxiosError } from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { getUserProfile } from "../../api/github";
import {
  getUserProfile as request,
  getUserProfileSuccess as success,
  getUserProfileFailure as failure,
} from "./actions";
import { GithubAction } from "./types";

export function getUserProfileThunk(
  username: string
): ThunkAction<void, RootState, unknown, GithubAction> {
  return async (dispatch) => {
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (e) {
      dispatch(failure(e as AxiosError));
    }
  };
}
