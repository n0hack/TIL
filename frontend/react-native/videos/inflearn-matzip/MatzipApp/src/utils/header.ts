import axiosInstance from '../api/axios';

export function setHeader(key: string, value: string) {
  axiosInstance.defaults.headers.common[key] = value;
}

export function removeHeader(key: string) {
  if (!axiosInstance.defaults.headers.common[key]) {
    return;
  }
  delete axiosInstance.defaults.headers.common[key];
}
