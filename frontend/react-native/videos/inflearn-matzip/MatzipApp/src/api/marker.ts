import { Marker } from '@/types/domain';
import axiosInstance from './axios';

export const getMarkers = async (): Promise<Marker[]> => {
  const { data } = await axiosInstance.get('/markers/my');

  return data;
};
