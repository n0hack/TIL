import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import styles from './Section.module.scss';

type SectionProps = {
  title?: string;
  className?: string;
};

const Section = ({
  children,
  className,
  title,
}: PropsWithChildren<SectionProps>) => {
  return (
    <section className={clsx(styles.container, className)}>
      {title !== null && <div className={styles.txt_title}>{title}</div>}
      {children}
    </section>
  );
};

export { Section };
