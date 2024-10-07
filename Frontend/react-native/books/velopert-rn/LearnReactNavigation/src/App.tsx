import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import { Text, TouchableOpacity, View } from 'react-native';
import HeaderlessScreen from './screens/HeaderlessScreen';

export type RootStackParamList = {
  Headerless: undefined;
  Home: undefined;
  Detail: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Headerless" component={HeaderlessScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '홈' }} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ route, navigation }: NativeStackScreenProps<RootStackParamList, 'Detail'>) => ({
            title: `상세정보 - ${route.params.id}`,
            headerBackVisible: false,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),
            headerTitle: ({ children }) => (
              <View>
                <Text>{children}</Text>
              </View>
            ),
            headerRight: () => (
              <View>
                <Text>Right</Text>
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
