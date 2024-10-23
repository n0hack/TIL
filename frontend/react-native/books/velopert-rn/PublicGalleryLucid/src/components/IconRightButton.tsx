import { Platform, Pressable, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type IconRightButtonProps = {
  name: string;
  color?: string;
  onPress: () => void;
};

const IconRightButton = ({
  color = '#6200ee',
  name,
  onPress,
}: IconRightButtonProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.circle,
          Platform.OS === 'ios' && pressed && { opacity: 0.3 },
        ]}
        onPress={onPress}
        android_ripple={{ color: '#eee' }}
      >
        <Icon name={name} size={24} color={color} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: -8,
    borderRadius: 24,
    overflow: 'hidden',
  },
  circle: {
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { IconRightButton };
