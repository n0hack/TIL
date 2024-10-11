import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigations/root/RootNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
