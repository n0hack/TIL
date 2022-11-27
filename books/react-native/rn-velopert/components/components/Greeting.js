import React from 'react';
import {Text, View} from 'react-native';

function Greeting({name, test}) {
  return (
    <View>
      <Text>안녕하세요, {name}</Text>
      <Text>{test}</Text>
    </View>
  );
}

Greeting.defaultProps = {
  test: 'hi',
};

export default Greeting;
