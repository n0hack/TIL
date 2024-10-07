import { useNavigation } from '@react-navigation/native';
import { Animated, Platform, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RootStackParamList } from '../screens/RootStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useRef } from 'react';

type FloatingWriteButtonProps = {
  hidden: boolean;
};

const FloatingWriteButton = ({ hidden }: FloatingWriteButtonProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const animation = useRef(new Animated.Value(0)).current;

  const onPress = () => {
    navigation.navigate('Write');
  };

  useEffect(() => {
    Animated.spring(animation, {
      toValue: hidden ? 1 : 0,
      useNativeDriver: true,
      tension: 45,
      friction: 5,
    }).start();
  }, [animation, hidden]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY: animation.interpolate({ inputRange: [0, 1], outputRange: [0, 88] }) }],
          opacity: animation.interpolate({ inputRange: [0, 1], outputRange: [1, 0] }),
        },
      ]}
    >
      <Pressable
        style={({ pressed }) => [
          styles.button,
          Platform.select({
            ios: {
              opacity: pressed ? 0.6 : 1,
            },
          }),
        ]}
        android_ripple={{ color: 'white' }}
        onPress={onPress}
      >
        <Icon name="add" size={24} style={styles.icon} />
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    // ios 그림자
    shadowColor: '#4d4d4d',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // android 그림자
    elevation: 5,
    overflow: Platform.select({ android: 'hidden' }),
    backgroundColor: 'white',
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#009688',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
});

export { FloatingWriteButton };
