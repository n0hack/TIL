import { useEffect, useRef, useState } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';

type CalendarScreenProps = {};

const CalendarScreen = ({}: CalendarScreenProps) => {
  const animation = useRef(new Animated.Value(1)).current;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: enabled ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [animation, enabled]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.rectangle,
          {
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 150],
                }),
              },
            ],
            opacity: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}
      />
      <Button title="Toggle" onPress={() => setEnabled(prev => !prev)} />
      <Button
        title="FadeIn"
        onPress={() => Animated.timing(animation, { toValue: 1, useNativeDriver: true }).start()}
      />
      <Button
        title="FadeOut"
        onPress={() => Animated.timing(animation, { toValue: 0, useNativeDriver: true }).start()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
});

export default CalendarScreen;
