import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import HeaderlessScreen from './screens/HeaderlessScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerHomeScreen from './screens/DrawerHomeScreen';
import DrawerSettingScreen from './screens/DrawerSettingScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabHomeScreen from './screens/TabHomeScreen';
import TabSearchScreen from './screens/TabSearchScreen';
import TabNotificationScreen from './screens/TabNotificationScreen';
import TabMessageScreen from './screens/TabMessageScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Notification: undefined;
  Message: undefined;
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={TabHomeScreen}
          options={{
            title: '홈',
            tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={TabSearchScreen}
          options={{
            title: '검색',
            tabBarIcon: ({ color, size }) => <Icon name="search" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="Notification"
          component={TabNotificationScreen}
          options={{
            title: '알림',
            tabBarIcon: ({ color, size }) => <Icon name="notifications" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="Message"
          component={TabMessageScreen}
          options={{
            title: '메시지',
            tabBarIcon: ({ color, size }) => <Icon name="message" color={color} size={size} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// export type RootStackParamList = {
//   Home: undefined;
//   Setting: undefined;
// };

// const Drawer = createDrawerNavigator<RootStackParamList>();

// function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         screenOptions={{ swipeEnabled: false }}
//         drawerContent={({ navigation }) => (
//           <SafeAreaView>
//             <Text>A Custom Drawer</Text>
//             <Button onPress={() => navigation.closeDrawer()} title="Drawer 닫기" />
//           </SafeAreaView>
//         )}>
//         <Drawer.Screen name="Home" component={DrawerHomeScreen} options={{ title: '홈' }} />
//         <Drawer.Screen name="Setting" component={DrawerSettingScreen} options={{ title: '설정' }} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// export type RootStackParamList = {
//   Headerless: undefined;
//   Home: undefined;
//   Detail: { id: number };
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Headerless" component={HeaderlessScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Home" component={HomeScreen} options={{ title: '홈' }} />
//         <Stack.Screen
//           name="Detail"
//           component={DetailScreen}
//           options={({ route, navigation }: NativeStackScreenProps<RootStackParamList, 'Detail'>) => ({
//             title: `상세정보 - ${route.params.id}`,
//             headerBackVisible: false,
//             headerLeft: () => (
//               <TouchableOpacity
//                 onPress={() => {
//                   navigation.goBack();
//                 }}>
//                 <Text>Left</Text>
//               </TouchableOpacity>
//             ),
//             headerTitle: ({ children }) => (
//               <View>
//                 <Text>{children}</Text>
//               </View>
//             ),
//             headerRight: () => (
//               <View>
//                 <Text>Right</Text>
//               </View>
//             ),
//           })}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
