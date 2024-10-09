import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Post } from '../lib/posts';
import { useMemo } from 'react';
import { Avatar } from './Avatar';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../stacks/HomeStack';

type PostCardProps = Post & {};

const PostCard = ({
  user,
  createdAt,
  description,
  photoURL,
}: PostCardProps) => {
  const date = useMemo(() => {
    return createdAt ? new Date(createdAt.seconds * 1000) : new Date();
  }, [createdAt]);
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList, 'Profile'>>();

  const onOpenProfile = () => {
    navigation.navigate('Profile', {
      userId: user.id,
      displayName: user.displayName,
    });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.head, styles.paddingBlock]}>
        <Pressable style={styles.profile} onPress={onOpenProfile}>
          <Avatar source={user.photoURL ? { uri: user.photoURL } : undefined} />
          <Text style={styles.displayName}>{user.displayName}</Text>
        </Pressable>
      </View>
      <Image
        source={{ uri: photoURL }}
        style={styles.image}
        resizeMethod="resize"
        resizeMode="cover"
      />
      <View style={styles.paddingBlock}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.date}>{date.toLocaleString()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  paddingBlock: {
    paddingHorizontal: 16,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  displayName: {
    lineHeight: 16,
    fontSize: 16,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  image: {
    backgroundColor: '#bdbdbd',
    width: '100%',
    aspectRatio: 1,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  date: {
    color: '#757575',
    fontSize: 12,
    lineHeight: 18,
  },
});

export { PostCard };
