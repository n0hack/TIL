import { GithubProfile } from "../../types/github";
import {
  getUserProfileFailure,
  getUserProfileSuccess,
  GET_USER_PROFILE,
  GET_USER_PROFILE_FAILURE,
  GET_USER_PROFILE_SUCCESS,
  GithubActions,
} from "./actions";

interface GithubState {
  userProfile: {
    loading: boolean;
    error: Error | null;
    data: GithubProfile | null;
  };
}

const initialState: GithubState = {
  userProfile: {
    loading: false,
    error: null,
    data: null,
  },
};

function github(state: GithubState = initialState, actions: GithubActions) {
  switch (actions.type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        userProfile: { loading: true, data: null, error: null },
      } as GithubState;
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: {
          loading: false,
          data: (actions as ReturnType<typeof getUserProfileSuccess>).payload,
          error: null,
        },
      } as GithubState;
    case GET_USER_PROFILE_FAILURE:
      return {
        ...state,
        userProfile: {
          loading: false,
          data: null,
          error: (actions as ReturnType<typeof getUserProfileFailure>).payload,
        },
      } as GithubState;
  }
}

export default github;
