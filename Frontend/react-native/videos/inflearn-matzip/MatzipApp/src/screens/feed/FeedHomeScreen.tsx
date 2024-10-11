import { StyleSheet, Text, View } from 'react-native';

type FeedHomeScreenProps = {};

const FeedHomeScreen = ({}: FeedHomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>FeedHomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default FeedHomeScreen;
