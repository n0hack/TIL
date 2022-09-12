import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { getUserProfileApi } from "../../libs/github";
import {
  getUserProfile,
  getUserProfileFailure,
  getUserProfileSuccess,
  GithubActions,
} from "./actions";

export function getUserProfileThunk(
  username: string
): ThunkAction<Promise<void>, RootState, null, GithubActions> {
  return async (dispatch) => {
    dispatch(getUserProfile());
    try {
      const userProfile = await getUserProfileApi(username);
      dispatch(getUserProfileSuccess(userProfile));
    } catch (e: Error | unknown) {
      dispatch(getUserProfileFailure(e));
    }
  };
}
