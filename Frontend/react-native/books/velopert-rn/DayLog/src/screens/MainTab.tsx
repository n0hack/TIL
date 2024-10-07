import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedsScreen from './FeedsScreen';
import SearchScreen from './SearchScreen';
import CalendarScreen from './CalendarScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

export type MainTabParamList = {
  Feeds: undefined;
  Calendar: undefined;
  Search: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

type MainTabProps = {};

const MainTab = ({}: MainTabProps) => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, tabBarActiveTintColor: '#009688' }}>
      <Tab.Screen
        name="Feeds"
        component={FeedsScreen}
        options={{
          title: '피드',
          tabBarIcon: ({ color, size }) => <Icon name="view-stream" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{ tabBarIcon: ({ color, size }) => <Icon name="event" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ tabBarIcon: ({ color, size }) => <Icon name="search" size={size} color={color} /> }}
      />
    </Tab.Navigator>
  );
};

export { MainTab };
