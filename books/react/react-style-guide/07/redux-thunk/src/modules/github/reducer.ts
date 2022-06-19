import { AxiosError } from "axios";
import { createReducer } from "@reduxjs/toolkit";
import {
  getUserProfile,
  getUserProfileFailure,
  getUserProfileSuccess,
  GET_USER_PROFILE,
  GET_USER_PROFILE_FAILURE,
  GET_USER_PROFILE_SUCCESS,
} from "./actions";
import { GithubAction, GithubState } from "./types";
import { action } from "typesafe-actions";
import { statement } from "@babel/template";
import { asyncState } from "../../lib/reducerUtils";

const initialState: GithubState = {
  userProfile: asyncState.initial(),
};

const github = createReducer(initialState, (builder) => {
  builder.addCase(getUserProfile, (state, action) => ({
    ...state,
    userProfile: asyncState.load(),
  }));

  builder.addCase(getUserProfileSuccess, (state, action) => ({
    ...state,
    userProfile: asyncState.success(action.payload),
  }));
  builder.addCase(getUserProfileFailure, (state, action) => ({
    ...state,
    userProfile: asyncState.error(action.payload),
  }));
});

export default github;
