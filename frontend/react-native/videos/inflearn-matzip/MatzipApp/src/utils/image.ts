import { Image } from 'react-native-image-crop-picker';

export const getFormDataImages = (images: Image[]) => {
  const formData = new FormData();

  images.forEach(({ path, mime }) => {
    const file = {
      uri: path,
      type: mime,
      name: path.split('/').pop(),
    };

    formData.append('images', file);
  });

  return formData;
};
