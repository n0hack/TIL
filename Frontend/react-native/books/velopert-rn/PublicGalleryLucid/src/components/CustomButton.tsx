import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress?: () => void;
  hasMarginBottom?: boolean;
  theme?: 'primary' | 'secondary';
};

const CustomButton = ({
  onPress,
  title,
  hasMarginBottom,
  theme = 'primary',
}: CustomButtonProps) => {
  const isPrimary = theme === 'primary';

  return (
    <View style={[styles.overflow, hasMarginBottom && styles.margin]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.wrapper,
          isPrimary && styles.primaryWrapper,
          Platform.OS === 'ios' && pressed && { opacity: 0.5 },
        ]}
        android_ripple={{ color: isPrimary ? '#ffffff' : '#6200ee' }}
      >
        <Text
          style={[
            styles.text,
            isPrimary ? styles.primaryText : styles.secondaryText,
          ]}
        >
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  overflow: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  wrapper: {
    borderRadius: 4,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
  },
  margin: {
    marginBottom: 8,
  },
  primaryWrapper: {
    backgroundColor: '#6200ee',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: '#6200ee',
  },
});

export default CustomButton;
