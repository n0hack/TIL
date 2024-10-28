import styles from './Skeleton.module.css';

type ImageProps = {
  src: string;
};

export const Image = ({ src }: ImageProps) => {
  return (
    <div className={styles.skeleton}>
      <img src={src} />
    </div>
  );
};
