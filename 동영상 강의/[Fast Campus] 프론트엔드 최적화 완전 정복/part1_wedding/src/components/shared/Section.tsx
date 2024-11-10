import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import styles from './Section.module.scss';

type SectionProps = {
  className?: string;
};

const Section = ({ children, className }: PropsWithChildren<SectionProps>) => {
  return (
    <section className={clsx(styles.container, className)}>{children}</section>
  );
};

export { Section };
