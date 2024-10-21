import { createDrawerNavigator } from '@react-navigation/drawer';
import CalendarHomeScreen from '@/screens/calendar/CalendarHomeScreen';
import MapStackNavigator, { MapStackParamList } from '../stack/MapStackNavigator';
import { colors, mainNavigations } from '@/constants';
import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from 'react-native';
import { CustomDrawerContent } from './CustomDrawerContent';
import FeedStackNavigator from '../stack/FeedStackNavigator';

export type MainDrawerParamList = {
  [mainNavigations.HOME]: NavigatorScreenParams<MapStackParamList>;
  [mainNavigations.FEED]: undefined;
  [mainNavigations.CALENDAR]: undefined;
};

const Drawer = createDrawerNavigator<MainDrawerParamList>();

const DrawerIcons = (route: RouteProp<MainDrawerParamList, keyof MainDrawerParamList>, focused: boolean) => {
  let iconName = '';

  switch (route.name) {
    case mainNavigations.HOME:
      iconName = 'location-on';
      break;

    case mainNavigations.FEED:
      iconName = 'book';
      break;
    case mainNavigations.CALENDAR:
      iconName = 'event-note';
      break;
  }

  return <MaterialIcons name={iconName} size={18} color={focused ? colors.BLACK : colors.GRAY_500} />;
};

const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={({ route }) => ({
        drawerType: 'front',
        headerShown: false,
        drawerStyle: {
          width: Dimensions.get('screen').width * 0.6,
          backgroundColor: colors.WHITE,
        },
        drawerActiveTintColor: colors.BLACK,
        drawerInactiveTintColor: colors.GRAY_500,
        drawerActiveBackgroundColor: colors.PINK_200,
        drawerInactiveBackgroundColor: colors.GRAY_100,
        drawerLabelStyle: {
          fontWeight: '600',
        },
        drawerIcon: ({ focused }) => DrawerIcons(route, focused),
      })}
    >
      <Drawer.Screen
        name={mainNavigations.HOME}
        component={MapStackNavigator}
        options={{
          title: '홈',
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen
        name={mainNavigations.FEED}
        component={FeedStackNavigator}
        options={{
          title: '피드',
        }}
      />
      <Drawer.Screen
        name={mainNavigations.CALENDAR}
        component={CalendarHomeScreen}
        options={{
          title: '캘린더',
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigator;
