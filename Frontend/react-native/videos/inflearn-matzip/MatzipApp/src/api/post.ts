import { ImageUri, Post } from '@/types/domain';
import axiosInstance from './axios';

export type RequestCreatePost = Omit<Post, 'id'> & { imageUris: ImageUri[] };

export type ResponsePost = Post & { images: ImageUri[] };

export const createPost = async (body: RequestCreatePost): Promise<ResponsePost> => {
  const { data } = await axiosInstance.post('/posts', body);

  return data;
};

export type ResponseSinglePost = ResponsePost & { isFavorite: boolean };

export const getPost = async (id: number): Promise<ResponseSinglePost> => {
  const { data } = await axiosInstance.get(`/posts/${id}`);
  return data;
};
