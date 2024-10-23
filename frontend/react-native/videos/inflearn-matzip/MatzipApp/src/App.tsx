import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigations/root/RootNavigator';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './api/queryClient';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
