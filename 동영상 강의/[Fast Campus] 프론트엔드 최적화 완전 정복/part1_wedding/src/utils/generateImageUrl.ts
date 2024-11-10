export function generateImageUrl({
  filename,
  format,
  option = 'q_auto,c_fill',
}: {
  filename: string;
  format: 'jpg' | 'webp';
  option?: string;
}) {
  return `https://res.cloudinary.com/ds2kluqdi/image/upload/${option}/v1692027253/${format}/${filename}.${format}`;
}
