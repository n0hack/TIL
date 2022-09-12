import axios from "axios";
import { Post } from "../types/post";
import { User } from "../types/user";

export const getPost = (id: number) =>
  axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers = () =>
  axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
