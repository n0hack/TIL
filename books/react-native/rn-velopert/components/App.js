import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Box from './components/Box';
import Greeting from './components/Greeting';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <Greeting name="함수 컴포넌트" />
      <Box rounded size="small" color="red" />
      <Box rounded size="medium" />
      <Box rounded size="large" />
    </SafeAreaView>
  );
};

export default App;
