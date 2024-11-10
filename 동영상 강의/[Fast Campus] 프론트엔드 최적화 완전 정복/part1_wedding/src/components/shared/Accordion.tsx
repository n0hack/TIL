import clsx from 'clsx';
import { PropsWithChildren, useState } from 'react';
import styles from './Accordion.module.scss';

type AccordionProps = {
  label: string;
};

const Accordion = ({ label, children }: PropsWithChildren<AccordionProps>) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={clsx(styles.accordion, expanded && styles.open)}>
      <div
        className={styles.wrap_header}
        onClick={() => setExpanded(!expanded)}
      >
        <span>{label}</span>
        <IconArrowDown className={styles.ico_arrow_down} />
      </div>
      <div className={styles.wrap_content}>{children}</div>
    </div>
  );
};

const IconArrowDown = ({ className }: { className: string }) => {
  return (
    <svg className={className} id="Layer_1" version="1.1" viewBox="0 0 512 512">
      <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 " />
    </svg>
  );
};

export { Accordion };
