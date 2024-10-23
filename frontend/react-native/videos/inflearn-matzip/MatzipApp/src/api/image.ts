import axiosInstance from './axios';

export const uploadImage = async (body: FormData): Promise<string[]> => {
  const { data } = await axiosInstance.post('/images', body, {
    headers: {
      // 업로드 통한 POST 요청 시 Content-Type을 multipart/form-data로 설정해야 함
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};
