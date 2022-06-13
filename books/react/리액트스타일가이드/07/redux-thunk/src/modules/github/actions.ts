import { createAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { IGithubProfile } from "../../api/github";

export const GET_USER_PROFILE = "github/GET_USER_PROFILE";
export const GET_USER_PROFILE_SUCCESS = "github/GET_USER_PROFILE_SUCCESS";
export const GET_USER_PROFILE_FAILURE = "github/GET_USER_PROFILE_FAILURE";

export const getUserProfile = createAction(GET_USER_PROFILE);
export const getUserProfileSuccess = createAction(
  GET_USER_PROFILE_SUCCESS,
  (data: IGithubProfile) => ({ payload: data })
);
export const getUserProfileFailure = createAction<AxiosError>(
  GET_USER_PROFILE_FAILURE
);
