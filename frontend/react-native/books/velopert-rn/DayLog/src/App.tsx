import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './screens/RootStack';
import { LogContextProvider } from './contexts/LogContext';
import { SearchContextProvider } from './contexts/SearchContext';

const App = () => {
  return (
    <NavigationContainer>
      <SearchContextProvider>
        <LogContextProvider>
          <RootStack />
        </LogContextProvider>
      </SearchContextProvider>
    </NavigationContainer>
  );
};

export default App;
