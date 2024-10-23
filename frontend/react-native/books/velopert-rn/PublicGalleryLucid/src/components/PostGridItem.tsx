import {
  Image,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { Post } from '../lib/posts';

type PostGridItemProps = {
  post: Post;
};

const PostGridItem = ({ post }: PostGridItemProps) => {
  const dimensions = useWindowDimensions();
  const size = (dimensions.width - 3) / 3;

  const onPress = () => {
    // TODO 단일 포스트 조회 화면
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { opacity: pressed ? 0.6 : 1, width: size, height: size },
        styles.container,
      ]}
    >
      <Image
        source={{ uri: post.photoURL }}
        style={styles.image}
        resizeMode="cover"
        resizeMethod="resize"
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0.5,
  },
  image: {
    backgroundColor: '#bdbdbd',
    width: '100%',
    height: '100%',
  },
});

export { PostGridItem };
