import { getMarkers } from '@/api';
import { queryKeys } from '@/constants';
import { UseQueryCustomOptions } from '@/types/common';
import { Marker } from '@/types/domain';
import { useQuery } from '@tanstack/react-query';

export const useGetMarkers = (queryOptions?: UseQueryCustomOptions<Marker[]>) => {
  return useQuery({ queryFn: getMarkers, queryKey: [queryKeys.MARKER, queryKeys.GET_MARKERS], ...queryOptions });
};
