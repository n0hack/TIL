import axios from "axios";
import { GithubProfile } from "../types/github";

export async function getUserProfileApi(username: string) {
  const response = await axios.get<GithubProfile>(
    `https://api.github.com/users/${username}`
  );
  return response.data;
}
