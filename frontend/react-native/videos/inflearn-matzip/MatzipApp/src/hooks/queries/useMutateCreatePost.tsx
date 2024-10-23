import { createPost } from '@/api';
import queryClient from '@/api/queryClient';
import { queryKeys } from '@/constants';
import { UseMutationCustomOptions } from '@/types/common';
import { Marker } from '@/types/domain';
import { useMutation } from '@tanstack/react-query';

export function useMutateCreatePost(mutateOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: createPost,
    onSuccess: newPost => {
      // [화면에 마커 갱신하는 방법 1] 쿼리 무효화 방법 - 네트워크 요청을 한 번 더 하게 됨
      // queryClient.invalidateQueries({
      //   queryKey: [queryKeys.MARKER, queryKeys.GET_MARKERS],
      // });

      // [화면에 마커 갱신하는 방법 2] 캐시를 업데이트하는 방법 - 반환값(newPost)를 이용해 데이터를 새로 만들기에 네트워크 요청을 한 번 덜 함
      queryClient.setQueryData<Marker[]>([queryKeys.MARKER, queryKeys.GET_MARKERS], existingMarkers => {
        const newMarker = {
          id: newPost.id,
          latitude: newPost.latitude,
          longitude: newPost.longitude,
          color: newPost.color,
          score: newPost.score,
        };
        return existingMarkers ? [...existingMarkers, newMarker] : [newMarker];
      });
    },
    ...mutateOptions,
  });
}
