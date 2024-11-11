
export const buildCDNUrl = (photo, size, cdn) => {
  const [zone, imagePath] = photo.url.split(',');
  const imageUrl = `${cdn}/${zone}/${size}/${imagePath}`;

  return imageUrl;
}