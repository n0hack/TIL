import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import styles from './Dimmed.module.scss';

type DimmedProps = {};

const Dimmed = ({ children }: PropsWithChildren<DimmedProps>) => {
  return <div className={clsx(styles.dimmed)}>{children}</div>;
};

export { Dimmed };
