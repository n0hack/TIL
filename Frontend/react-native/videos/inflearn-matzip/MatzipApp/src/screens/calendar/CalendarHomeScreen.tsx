import { StyleSheet, Text, View } from 'react-native';

type CalendarHomeScreenProps = {};

const CalendarHomeScreen = ({}: CalendarHomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>CalendarHomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CalendarHomeScreen;
