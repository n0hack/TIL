import { uploadImage } from '@/api';
import { UseMutationCustomOptions } from '@/types/common';
import { useMutation } from '@tanstack/react-query';

export const useMutateImages = (mutationOptions?: UseMutationCustomOptions) => {
  return useMutation({ mutationFn: uploadImage, ...mutationOptions });
};
