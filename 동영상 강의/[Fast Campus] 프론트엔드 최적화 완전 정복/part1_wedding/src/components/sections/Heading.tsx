import { format, getDay, parseISO } from 'date-fns';
import { Section } from '../shared/Section';
import styles from './Heading.module.scss';

type HeadingProps = {
  date: string;
};

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const Heading = ({ date }: HeadingProps) => {
  const weddingDate = parseISO(date);

  return (
    <Section className={styles.container}>
      <div className={styles.txt_date}>{format(weddingDate, 'yy.MM.dd')}</div>
      <div className={styles.txt_day}>{DAYS[getDay(weddingDate)]}</div>
    </Section>
  );
};

export { Heading };
