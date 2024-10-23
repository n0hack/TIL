import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { getPosts, Post } from '../lib/posts';
import { User } from '../contexts/UserContext';
import { getUser } from '../lib/users';
import { Avatar } from './Avatar';
import { PostGridItem } from './PostGridItem';

type ProfileProps = {
  userId: string;
};

const renderItem = (item: Post) => <PostGridItem post={item} />;

const Profile = ({ userId }: ProfileProps) => {
  const [user, setUser] = useState<User>();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getUser(userId).then(setUser);
    getPosts({ userId }).then(setPosts);
  }, [userId]);

  if (!user || !posts) {
    return (
      <ActivityIndicator style={styles.spinner} size={32} color="#6200ee" />
    );
  }

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => renderItem(item)}
      numColumns={3}
      keyExtractor={({ id }) => id}
      style={styles.container}
      ListHeaderComponent={
        <View style={styles.userInfo}>
          <Avatar
            source={user.photoURL ? { uri: user.photoURL } : undefined}
            size={128}
          />
          <Text style={styles.username}>{user.displayName}</Text>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
  },
  container: { flex: 1 },
  userInfo: {
    paddingTop: 80,
    paddingBottom: 64,
    alignItems: 'center',
  },
  username: {
    marginTop: 8,
    fontSize: 24,
    color: '#424242',
  },
});

export { Profile };
