import { getFormDataImages } from '@/utils';
import ImageCropPicker from 'react-native-image-crop-picker';
import { useMutateImages } from './queries/useMutateImages';
import { useState } from 'react';
import { ImageUri } from '@/types/domain';
import { Alert } from 'react-native';
import { alerts } from '@/constants';

type useImagePickerProps = {
  initialImages: ImageUri[];
};

export const useImagePicker = ({ initialImages = [] }: useImagePickerProps) => {
  const [imageUris, setImageUris] = useState(initialImages);
  const uploadImages = useMutateImages();

  const addImageUris = (uris: string[]) => {
    if (imageUris.length + uris.length > 5) {
      Alert.alert(alerts.ADD_IMAGE_LIMIT.TITLE, alerts.ADD_IMAGE_LIMIT.DESCRIPTION);
      return;
    }

    setImageUris(prev => [...prev, ...uris.map(uri => ({ uri }))]);
  };

  const deleteImageUri = (uri: string) => {
    const newImageUris = imageUris.filter(imageUri => imageUri.uri !== uri);
    setImageUris(newImageUris);
  };

  const changeImageUrisOrder = (fromIndex: number, toIndex: number) => {
    const copyImageUris = [...imageUris];
    const [removedImage] = copyImageUris.splice(fromIndex, 1);
    copyImageUris.splice(toIndex, 0, removedImage);
    setImageUris(copyImageUris);
  };

  const handleChange = () => {
    ImageCropPicker.openPicker({
      mediaType: 'photo',
      multiple: true,
      includeBase64: true,
      maxFiles: 5,
      cropperChooseText: '완료',
      cropperCancelText: '취소',
    })
      .then(images => {
        const formData = getFormDataImages(images);
        // 이미지 업로드 API 추가
        uploadImages.mutate(formData, {
          onSuccess: data => {
            addImageUris(data);
          },
        });
      })
      .catch(e => {
        // 취소한 경우에도 에러로 잡힘
        if (e.code !== 'E_PICKER_CANCELLED') {
          // 에러 메시지 표시
        }
      });
  };

  return {
    imageUris,
    handleChange,
    delete: deleteImageUri,
    changeOrder: changeImageUrisOrder,
  };
};
