import { client } from './client';

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  website: string;
  company: { name: string; catchPhrase: string; bs: string };
};

export const getPost = (id: number) => client.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers = () => client.get<User[]>('https://jsonplaceholder.typicode.com/users');
