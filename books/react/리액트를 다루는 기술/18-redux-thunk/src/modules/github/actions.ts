import { GithubProfile } from "../../types/github";

export const GET_USER_PROFILE = "github/GET_USER_PROFILE";
export const GET_USER_PROFILE_SUCCESS = "github/GET_USER_PROFILE_SUCCESS";
export const GET_USER_PROFILE_FAILURE = "github/GET_USER_PROFILE_FAILURE";

export const getUserProfile = () => ({ type: GET_USER_PROFILE });
export const getUserProfileSuccess = (payload: GithubProfile) => ({
  type: GET_USER_PROFILE_SUCCESS,
  payload,
});
export const getUserProfileFailure = (payload: Error | unknown) => ({
  type: GET_USER_PROFILE_FAILURE,
  payload,
});

export type GithubActions =
  | ReturnType<typeof getUserProfile>
  | ReturnType<typeof getUserProfileSuccess>
  | ReturnType<typeof getUserProfileFailure>;
