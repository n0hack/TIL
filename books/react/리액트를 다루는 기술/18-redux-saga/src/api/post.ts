import axios from "axios";
import { Post } from "../types/post";

export const getPost = (id: number) => {
  return axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
};
