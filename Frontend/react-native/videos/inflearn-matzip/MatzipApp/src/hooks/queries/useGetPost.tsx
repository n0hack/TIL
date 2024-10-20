import { getPost, ResponseSinglePost } from '@/api';
import { queryKeys } from '@/constants';
import { UseQueryCustomOptions } from '@/types/common';
import { useQuery } from '@tanstack/react-query';

export const useGetPost = (id: number | null, queryOptions?: UseQueryCustomOptions<ResponseSinglePost>) => {
  return useQuery({
    queryFn: () => getPost(Number(id)),
    queryKey: [queryKeys.POST, queryKeys.GET_POST, id],
    enabled: !!id,
    ...queryOptions,
  });
};
