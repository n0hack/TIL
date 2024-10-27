import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} errorTypes={[]} />
    </QueryClientProvider>
  );
}

export default App;
