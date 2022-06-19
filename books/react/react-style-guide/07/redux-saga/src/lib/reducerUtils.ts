import { AxiosError } from "axios";

export type AsyncState<T, E = any> = {
  loading: boolean;
  data: T | null;
  error: E | AxiosError | null;
};

export const asyncState = {
  initial: <T, E = any>(initialData?: T): AsyncState<T, E> => ({ loading: false, data: initialData || null, error: null }),
  load: <T, E = any>(data?: T): AsyncState<T, E> => ({ loading: true, data: data || null, error: null }),
  success: <T, E = any>(data: T): AsyncState<T, E> => ({ loading: false, data, error: null }),
  failure: <T, E = any>(error: E): AsyncState<T, E> => ({ loading: false, data: null, error }),
};
