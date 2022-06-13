import { AxiosError } from "axios";
import { ActionType } from "typesafe-actions";
import { IGithubProfile } from "../../api/github";
import { AsyncState } from "../../lib/reducerUtils";
import * as actions from "./actions";

export type GithubAction =
  | ReturnType<typeof actions.getUserProfile>
  | ReturnType<typeof actions.getUserProfileSuccess>
  | ReturnType<typeof actions.getUserProfileFailure>;

export type GithubState = {
  userProfile: AsyncState<IGithubProfile, Error>;
};
