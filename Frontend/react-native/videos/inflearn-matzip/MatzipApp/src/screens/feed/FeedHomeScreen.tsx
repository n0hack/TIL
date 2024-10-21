import { FeedList } from '@/components/FeedList';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

type FeedHomeScreenProps = {};

const FeedHomeScreen = ({}: FeedHomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <FeedList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FeedHomeScreen;
