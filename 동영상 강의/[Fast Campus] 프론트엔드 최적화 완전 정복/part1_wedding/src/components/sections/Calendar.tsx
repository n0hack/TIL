import { format, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Section } from '../shared/Section';

import 'react-day-picker/style.css';

import styles from './Calendar.module.scss';
import { DayPicker } from 'react-day-picker';
import React from 'react';

type CalendarProps = {
  date: string;
};

const css = `
  .rdp-month_caption, .rdp-nav {
    display: none;
  }

  .rdp-day {
    cursor: default;
  }

  .rdp-weekdays .rdp-weekday {
    font-weight: bold;
    font-size: 14px;
  }

  .rdp-day.rdp-selected {
    background-color: var(--red);
    border-radius: 100%;

    .rdp-day_button {
      color: white;
      border: 0;
    }
  }
`;

const Calendar = ({ date }: CalendarProps) => {
  const weddingDate = parseISO(date);

  return (
    <Section
      title={
        <div className={styles.wrap_header}>
          <span className={styles.txt_date}>
            {format(weddingDate, 'yyyy.MM.dd')}
          </span>
          <span className={styles.txt_time}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={styles.wrap_calendar}>
        <style>{css}</style>
        <DayPicker
          mode="single"
          locale={ko}
          month={weddingDate}
          selected={weddingDate}
          formatters={{ formatCaption: () => '' }}
        />
      </div>
    </Section>
  );
};

export default React.memo(Calendar);
