import { StyleSheet, Text, View } from 'react-native';

type TabMessageScreenProps = {};

const TabMessageScreen = ({}: TabMessageScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>TabMessageScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TabMessageScreen;
