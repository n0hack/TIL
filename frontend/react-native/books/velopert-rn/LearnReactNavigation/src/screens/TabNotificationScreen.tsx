import { StyleSheet, Text, View } from 'react-native';

type TabNotificationScreenProps = {};

const TabNotificationScreen = ({}: TabNotificationScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>TabNotificationScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TabNotificationScreen;
