import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native';

type AvatarProps = {
  source?: ImageSourcePropType;
  size?: number;
  style?: StyleProp<ImageStyle>;
};

const Avatar = ({ size = 32, source, style }: AvatarProps) => {
  return (
    <Image
      source={source || require('../assets/user.png')}
      resizeMode="cover"
      style={[
        style,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    />
  );
};

export { Avatar };
