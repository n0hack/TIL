import client from '.';
import { User } from 'types/user';

export const getUsers = async () => {
  return client.get<User[]>(`${import.meta.env.VITE_REST_API}/users`);
};

export const getUser = async (id: string) => {
  return client.get<User>(`${import.meta.env.VITE_REST_API}/users/${id}`);
};
