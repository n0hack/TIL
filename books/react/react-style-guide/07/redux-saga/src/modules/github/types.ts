import { AxiosError } from "axios";
import { GithubProfile } from "../../api/github";
import { AsyncState } from "../../lib/reducerUtils";

export type GithubState = {
  userProfile: AsyncState<GithubProfile, AxiosError>;
};
