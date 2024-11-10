import { useSuspenseQuery } from '@tanstack/react-query';
import { getWedding } from '../api/wedding';
import { Wedding } from '../models/wedding';

// App.tsx로부터 관심사 분리(렌더링부와 기능부)
function useWedding() {
  const { data, isLoading, error } = useSuspenseQuery<Wedding>({
    queryKey: ['wedding'],
    queryFn: () =>
      getWedding().then((response) => {
        if (!response.ok) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.');
        }
        return response.json();
      }),
  });

  return { wedding: data, loading: isLoading, error };
}

export { useWedding };
