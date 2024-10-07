import { StyleSheet, Text, View } from 'react-native';

type TabHomeScreenProps = {};

const TabHomeScreen = ({}: TabHomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>TabHomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TabHomeScreen;
