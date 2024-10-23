import { createStackNavigator } from '@react-navigation/stack';
import { mapNavigations } from '@/constants';
import MapHomeScreen from '@/screens/map/MapHomeScreen';
import AddPostScreen from '@/screens/map/AddPostScreen';
import { LatLng } from 'react-native-maps';

export type MapStackParamList = {
  [mapNavigations.MAP_HOME]: undefined;
  [mapNavigations.ADD_POST]: {
    location: LatLng;
  };
};

const Stack = createStackNavigator<MapStackParamList>();

const MapStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          backgroundColor: 'white',
          shadowColor: 'gray',
        },
        headerTitleStyle: {
          fontSize: 15,
        },
        headerTintColor: 'black',
      }}
    >
      <Stack.Screen
        name={mapNavigations.MAP_HOME}
        component={MapHomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={mapNavigations.ADD_POST}
        component={AddPostScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: '장소 추가',
        }}
      />
    </Stack.Navigator>
  );
};

export default MapStackNavigator;
