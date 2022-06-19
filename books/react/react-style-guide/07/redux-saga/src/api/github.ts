import axios from "axios";

export async function getUserProfile(username: string) {
  const response = await axios.get<GithubProfile>(
    `https://api.github.com/users/${username}`
  );
  return response.data;
}

export interface GithubProfile {
  avatar_url: string;
  name: string;
  blog: string;
  bio: string;
}
