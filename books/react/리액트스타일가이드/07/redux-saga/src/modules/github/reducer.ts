import { asyncState } from "../../lib/reducerUtils";
import { GithubState } from "./types";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";

const initialState: GithubState = {
  userProfile: asyncState.initial(),
};

const github = createReducer(initialState, (builder) => {
  builder.addCase(actions.request, (state, action) => ({ ...state, userProfile: asyncState.load() }));
  builder.addCase(actions.success, (state, action) => ({ ...state, userProfile: asyncState.success(action.payload) }));
  builder.addCase(actions.failure, (state, action) => ({ ...state, userProfile: asyncState.failure(action.payload) }));
});

export default github;
