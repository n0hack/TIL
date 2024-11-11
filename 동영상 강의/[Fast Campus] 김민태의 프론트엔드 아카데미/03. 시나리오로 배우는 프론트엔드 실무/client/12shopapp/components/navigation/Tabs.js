import { StyleSheet } from 'react-native';
import { Image } from 'react-native-ui-lib';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Showcase from '../../screens/Showcase';
import Charge from '../../screens/Charge';
import Profile from '../../screens/Profile';
import HomeIconOn from '../../assets/tab-icon-home-on.png';
import HomeIconOff from '../../assets/tab-icon-home-off.png';
import ShowcaseIconOn from '../../assets/tab-icon-showcase-on.png';
import ShowcaseIconOff from '../../assets/tab-icon-showcase-off.png';
import ChargeIconOn from '../../assets/tab-icon-charge-on.png';
import ChargeIconOff from '../../assets/tab-icon-charge-off.png';
import ProfileIconOn from '../../assets/tab-icon-profile-on.png';
import ProfileIconOff from '../../assets/tab-icon-profile-off.png';

const Tab = createBottomTabNavigator();
const iconSize = 40;

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 50,
        padding: 20,
        left: 30,
        right: 30,
        elevation: 0,
        borderRadius: 25,
        backgroundColor: '#333',
        height: 90,
        ...styles.shadow,
      }
    }}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false,
        tabBarIcon: ({ focused }) => focused ? <Image source={HomeIconOn} width={iconSize} height={iconSize} /> : <Image source={HomeIconOff} width={iconSize} height={iconSize} />,
      }} />
      <Tab.Screen name="Showcase" component={Showcase} options={{ headerShown: false,
        tabBarIcon: ({ focused }) => focused ? <Image source={ShowcaseIconOn} width={iconSize} height={iconSize} /> : <Image source={ShowcaseIconOff} width={iconSize} height={iconSize} />,
      }} />
      <Tab.Screen name="Charge" component={Charge} options={{ headerShown: false,
        tabBarIcon: ({ focused }) => focused ? <Image source={ChargeIconOn} width={iconSize} height={iconSize} /> : <Image source={ChargeIconOff} width={iconSize} height={iconSize} />,
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false,
        tabBarIcon: ({ focused }) => focused ? <Image source={ProfileIconOn} width={iconSize} height={iconSize} /> : <Image source={ProfileIconOff} width={iconSize} height={iconSize} />,
      }} />
    </Tab.Navigator>
  )
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#222',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 15,
  }
});

export default Tabs;
