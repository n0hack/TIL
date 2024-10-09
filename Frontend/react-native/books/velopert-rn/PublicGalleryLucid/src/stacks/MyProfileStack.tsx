import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyProfileScreen from '../screens/ProfileScreen';

export type MyProfileStackParamList = {
  MyProfile?: undefined;
};

const Stack = createNativeStackNavigator<MyProfileStackParamList>();

const MyProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyProfile" component={MyProfileScreen} />
    </Stack.Navigator>
  );
};

export default MyProfileStack;
