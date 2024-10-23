import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { Log } from '../contexts/LogContext';
import { FeedListItem } from './FeedListItem';
import { useState } from 'react';

type FeedListProps = {
  logs: Log[];
  onScrolledToBottom?: (isBottom: boolean) => void;
  ListHeaderComponent?: React.ReactElement;
};

const FeedList = ({ logs, onScrolledToBottom, ListHeaderComponent }: FeedListProps) => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(1);
      }, 2000);
    });
    setRefreshing(false);
  };

  return (
    <FlatList
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
      data={logs}
      style={styles.container}
      renderItem={({ item }) => <FeedListItem log={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
      onScroll={e => {
        if (!onScrolledToBottom) {
          return;
        }

        const { contentSize, layoutMeasurement, contentOffset } = e.nativeEvent;
        const distanceFromBottom = contentSize.height - (layoutMeasurement.height + contentOffset.y);

        if (distanceFromBottom < 72 && contentSize.height > layoutMeasurement.height) {
          onScrolledToBottom(true);
        } else {
          onScrolledToBottom(false);
        }
      }}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});

export { FeedList };
