import { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';

export default function usePromise<T>(
  promiseCreator: () => Promise<AxiosResponse<T, any>>,
  deps: any[]
): [boolean, T | undefined, Error | unknown] {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState<T>();
  const [error, setError] = useState<Error | unknown>(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = (await (await promiseCreator()).data) as T;
        setResolved(resolved);
      } catch (e: Error | unknown) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolved, error];
}
