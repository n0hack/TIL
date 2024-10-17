import axios from 'axios';
import { Platform } from 'react-native';

const axiosInstance = axios.create({
  // 안드로이드의 경우 localhost가 아닌, 10.0.2.2로 설정해야 함
  baseURL: Platform.OS === 'ios' ? 'http://localhost:3030' : 'http://10.0.2.2:3030',
  withCredentials: true,
});

export default axiosInstance;
