import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainTab } from './MainTab';
import WriteScreen from './WriteScreen';
import { Log } from '../contexts/LogContext';

export type RootStackParamList = {
  MainTab: undefined;
  Write?: { log: Log };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export { RootStack };
