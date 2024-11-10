import { useState } from 'react';
import { ImageViewer } from '../imageViewer';
import { Section } from '../shared/Section';
import styles from './ImageGallery.module.scss';

type ImageGalleryProps = {
  images: string[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const open = selectedIndex > -1;

  const handleSelectedImage = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(-1);
  };

  return (
    <>
      <Section title="사진첩">
        <ul className={styles.wrap_images}>
          {images.map((src, index) => (
            <li
              key={index}
              className={styles.wrap_image}
              onClick={() => handleSelectedImage(index)}
            >
              <img src={`/assets/images/${src}.jpg`} alt={`사진첩 이미지`} />
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIndex={selectedIndex}
        onClose={handleClose}
      />
    </>
  );
};

export { ImageGallery };
