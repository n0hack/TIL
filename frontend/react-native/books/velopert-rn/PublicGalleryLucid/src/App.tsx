import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './stacks/RootStack';
import { UserContextProvider } from './contexts/UserContext';

const App = () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </UserContextProvider>
  );
};

export default App;
