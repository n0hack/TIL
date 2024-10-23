import { useContext, useMemo, useState } from 'react';
import CalendarView from '../components/CalendarView';
import { LogContext } from '../contexts/LogContext';
import { MarkedDates } from 'react-native-calendars/src/types';
import { format } from 'date-fns';
import { FeedList } from '../components/FeedList';

type CalendarScreenProps = {};

const CalendarScreen = ({}: CalendarScreenProps) => {
  const { logs } = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));

  const markedDates: MarkedDates = useMemo(
    () =>
      logs.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
        acc[formattedDate] = { marked: true };
        return acc;
      }, {} as MarkedDates),
    [logs],
  );

  const filtededLogs = logs.filter(log => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate);

  return (
    <FeedList
      logs={filtededLogs}
      ListHeaderComponent={
        <CalendarView markedDates={markedDates} selectedDate={selectedDate} onSelectDate={setSelectedDate} />
      }
    />
  );
};

export default CalendarScreen;
