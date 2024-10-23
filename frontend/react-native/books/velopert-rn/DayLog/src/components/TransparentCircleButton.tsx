import { Platform, Pressable, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type TransparentCircleButtonProps = {
  name: string;
  color: string;
  hasMarginRight?: boolean;
  onPress?: () => void;
};

const TransparentCircleButton = ({ color, name, onPress, hasMarginRight }: TransparentCircleButtonProps) => {
  return (
    <View style={[styles.iconButtonContainer, hasMarginRight && styles.marginRight]}>
      <Pressable
        style={({ pressed }) => [
          styles.iconButton,
          Platform.OS === 'ios' &&
            pressed && {
              backgroundColor: '#efefef',
            },
        ]}
        android_ripple={{ color: '#ededed' }}
        onPress={onPress}
      >
        <Icon name={name} size={24} color={color} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconButtonContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  marginRight: {
    marginRight: 8,
  },
});

export { TransparentCircleButton };
