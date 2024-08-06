import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';

type ErrorData = {
  message: string;
  error: string;
  statusCode: number;
};

const apiClient = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const accessToken = cookies().get('BLISS_ATOKEN_V1')?.value;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// apiClient.interceptors.response.use(
//   (response) => response,
//   async (error: AxiosError<ErrorData>) => {
//     const errorData = error.response?.data;
//     const originalConfig: any = error.config;

//     console.log('[Intercepter] 에러', errorData);

//     if (errorData?.statusCode === 401 && errorData.message === '액세스 토큰이 필요합니다.') {
//       const refreshToken = cookies().get('BLISS_RTOKEN_V1')?.value;
//       try {
//         const res = await apiClient.post(
//           '/auth/refresh',
//           {},
//           {
//             headers: {
//               Authorization: `Refresh ${refreshToken}`,
//             },
//           },
//         );
//         console.log('재발급 성공', res.headers);

//         // apiClient.defaults.headers?.['cookie'] = res.headers['set-cookie']?.join(',');
//         originalConfig.headers.Authorization = `Bearer ${res.data.accessToken}`;

//         return apiClient(originalConfig);
//       } catch (e: any) {
//         console.log(e.response.data);
//         return Promise.reject(error);
//       }
//     }

//     return Promise.reject(error);
//   },
// );

export { apiClient };
