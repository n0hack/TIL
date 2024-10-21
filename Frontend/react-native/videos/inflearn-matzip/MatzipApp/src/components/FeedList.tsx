import { useGetInfinitePosts } from '@/hooks/queries/useGetInfinitePosts';
import { FlatList, StyleSheet } from 'react-native';
import { FeedItem } from './FeedItem';
import { useState } from 'react';

const FeedList = () => {
  const { data: posts, fetchNextPage, refetch, hasNextPage, isFetchingNextPage } = useGetInfinitePosts();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  const handleEndReached = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return (
    <FlatList
      data={posts?.pages.flat()}
      renderItem={({ item }) => <FeedItem post={item} />}
      keyExtractor={item => String(item.id)}
      numColumns={2}
      contentContainerStyle={styles.contentContainer}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.5}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      // ios의 경우 스크롤바가 위치가 갑자기 중앙에 오거나 하는 버그가 있을 수 있음
      scrollIndicatorInsets={{ right: 1 }}
      indicatorStyle="black"
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 15,
  },
});

export { FeedList };
