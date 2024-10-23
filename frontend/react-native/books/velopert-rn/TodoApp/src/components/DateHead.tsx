import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  date: Date;
};

const DateHead = ({ date }: Props) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formatted = `${year}년 ${month}월 ${day}일`;

  const { top } = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.statusBarPlaceholder, { height: top }]} />
      <StatusBar backgroundColor="#26a69a" barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.dateText}>{formatted}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#26a69a',
  },
  container: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export { DateHead };
