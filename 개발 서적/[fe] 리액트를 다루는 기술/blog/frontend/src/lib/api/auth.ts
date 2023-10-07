import client from './client';

type LoginParams = {
  username: string;
  password: string;
};

export const login = ({ username, password }: LoginParams) => client.post('/api/auth/login', { username, password });

export const register = ({ username, password }: LoginParams) =>
  client.post('/api/auth/register', { username, password });

export const check = () => client.get('/api/auth/check');
