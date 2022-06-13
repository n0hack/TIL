import { AxiosError } from "axios";
import { createAction } from "@reduxjs/toolkit";
import { GithubProfile } from "../../api/github";

export const GET_USER_PROFILE = "github/GET_USER_PROFILE";
export const GET_USER_PROFILE_SUCCESS = "github/GET_USER_PROFILE_SUCCESS";
export const GET_USER_PROFILE_FAILURE = "github/GET_USER_PROFILE_FAILURE";

const getUserProfile = createAction<string>(GET_USER_PROFILE);
const getUserProfileSuccess = createAction<GithubProfile>(GET_USER_PROFILE_SUCCESS);
const getUserProfileFailure = createAction<AxiosError>(GET_USER_PROFILE_FAILURE);

export { getUserProfile as request, getUserProfileSuccess as success, getUserProfileFailure as failure };
