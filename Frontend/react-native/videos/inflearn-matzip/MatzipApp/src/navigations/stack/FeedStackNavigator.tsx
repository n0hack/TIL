import { createStackNavigator } from '@react-navigation/stack';
import { feedNavigations } from '@/constants';
import FeedHomeScreen from '@/screens/feed/FeedHomeScreen';
import { FeedHomeHeaderLeft } from '@/components/FeedHomeHeaderLeft';

export type FeedStackParamList = {
  [feedNavigations.FEED_HOME]: undefined;
  [feedNavigations.FEED_DETAIL]: undefined;
};

const Stack = createStackNavigator<FeedStackParamList>();

const FeedStackNavigator = () => {
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
        name={feedNavigations.FEED_HOME}
        component={FeedHomeScreen}
        options={({ navigation }) => ({
          title: '피드',
          headerLeft: () => FeedHomeHeaderLeft({ navigation }),
        })}
      />
      {/* <Stack.Screen
        name={feedNavigations.FEED_DETAIL}
        component={LoginScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: '로그인',
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default FeedStackNavigator;
