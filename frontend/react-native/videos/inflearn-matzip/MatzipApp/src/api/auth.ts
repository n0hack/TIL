import { Category, Profile } from '@/types/domain';
import { getEncryptStorage } from '@/utils';
import axiosInstance from './axios';

export type RequestUser = {
  email: string;
  password: string;
};

export const postSignup = async ({ email, password }: RequestUser): Promise<void> => {
  const { data } = await axiosInstance.post('/auth/signup', {
    email,
    password,
  });

  return data;
};

export type ResponseToken = {
  accessToken: string;
  refreshToken: string;
};

export const postLogin = async ({ email, password }: RequestUser): Promise<ResponseToken> => {
  const { data } = await axiosInstance.post('/auth/signin', {
    email,
    password,
  });

  return data;
};

export type ResponseProfile = Profile & Category;

export const getProfile = async (): Promise<ResponseProfile> => {
  const { data } = await axiosInstance.get('/auth/me');

  return data;
};

export const getAccessToken = async (): Promise<ResponseToken> => {
  const refreshToken = await getEncryptStorage('refreshToken');
  const { data } = await axiosInstance.get('/auth/refresh', {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  return data;
};

export const logout = async (): Promise<void> => {
  await axiosInstance.post('/auth/logout');
};
