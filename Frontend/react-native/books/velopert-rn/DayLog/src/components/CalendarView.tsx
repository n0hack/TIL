import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { MarkedDates } from 'react-native-calendars/src/types';

type CalendarViewProps = {
  markedDates: MarkedDates;
  selectedDate: string;
  onSelectDate: (date: string) => void;
};

const CalendarView = ({ markedDates, onSelectDate, selectedDate }: CalendarViewProps) => {
  const markedSelectedDate: MarkedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };

  return (
    <Calendar
      style={styles.calendar}
      markedDates={markedSelectedDate}
      theme={{
        selectedDayBackgroundColor: '#009688',
        arrowColor: '#009688',
        dotColor: '#009688',
        todayTextColor: '#009688',
      }}
      onDayPress={day => onSelectDate(day.dateString)}
    />
  );
};

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

export default CalendarView;
