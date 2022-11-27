import React from 'react';
import {StyleSheet, View} from 'react-native';

const Box = ({rounded, size, color}) => {
  // 아래 두 코드드 같은 코드
  // return <View style={[styles.box, rounded ? styles.rounded : null]} />;
  return (
    <View
      style={[
        styles.box,
        rounded && styles.rounded,
        sizes[size],
        {backgroundColor: color},
      ]}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'black',
  },
  rounded: {
    borderRadius: 16,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {width: 64, height: 64},
  large: {width: 128, height: 128},
});

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

Box.defaultProps = {
  size: 'medium',
  color: 'black',
};

export default Box;
