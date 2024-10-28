import styles from './Skeleton.module.css';

type SkeletonProps = {};

export const Skeleton = ({}: SkeletonProps) => {
  return <div className={styles.skeleton} />;
};
