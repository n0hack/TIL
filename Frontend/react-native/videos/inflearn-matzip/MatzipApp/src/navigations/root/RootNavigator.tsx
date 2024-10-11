import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainDrawerNavigator from '../drawer/MainDrawerNavigator';

const RootNavigator = () => {
  const isLoggedIn = false;

  return <>{isLoggedIn ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
};

export default RootNavigator;
