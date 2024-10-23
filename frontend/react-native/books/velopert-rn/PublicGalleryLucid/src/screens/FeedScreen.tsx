import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import {
  getNewerPosts,
  getOlderPosts,
  getPosts,
  PAGE_SIZE,
  Post,
} from '../lib/posts';
import { PostCard } from '../components/PostCard';
import { useEffect, useState } from 'react';
import BootSplash from 'react-native-bootsplash';

type FeedScreenProps = {};

const renderItem = ({ item }: { item: Post }) => <PostCard {...item} />;

const FeedScreen = ({}: FeedScreenProps) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [noMorePost, setNoMorPost] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getPosts({})
      .then(setPosts)
      .finally(async () => await BootSplash.hide({ fade: true }));
  }, []);

  const onRefresh = async () => {
    if (!posts || posts.length === 0 || refreshing) {
      return;
    }
    const firstPost = posts[0];
    setRefreshing(true);
    const newerPosts = await getNewerPosts(firstPost.id);
    setRefreshing(false);
    if (newerPosts.length === 0) {
      return;
    }
    setPosts([...newerPosts, ...posts]);
  };

  const onLoadMore = async () => {
    if (noMorePost || !posts || posts.length < PAGE_SIZE) {
      return;
    }
    const lastPost = posts[posts.length - 1];
    const olderPosts = await getOlderPosts(lastPost.id);
    if (olderPosts.length < PAGE_SIZE) {
      setNoMorPost(true);
    }
    setPosts([...posts, ...olderPosts]);
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={({ id }) => id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.75}
      ListFooterComponent={
        noMorePost ? null : (
          <ActivityIndicator style={styles.spinner} size={32} color="#6200ee" />
        )
      }
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 48,
  },
  spinner: {
    height: 64,
  },
});

export default FeedScreen;
