import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Text, Image, Assets, Button, TabController } from 'react-native-ui-lib';
import * as Linking from 'expo-linking';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './components/navigation/Tabs';

const prefix = Linking.createURL('/');

export default function App() {
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Home: 'home',
        ShowcaseStack: 'showcase',
        Charge: 'charge',
        Profile: 'profile',
      }
    }    
  };

  // useEffect(() => {
  //   Linking.addEventListener('url', (event) => {
  //     console.log(Linking.parse(event.url));
  //   });
  // })

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Tabs /> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
