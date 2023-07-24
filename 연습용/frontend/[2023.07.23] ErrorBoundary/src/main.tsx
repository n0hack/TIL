import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { suspense: true, useErrorBoundary: true, retry: 1, cacheTime: 0 },
  },
});

const apolloClient = new ApolloClient({
  uri: 'https://jsonplaceholder.ir/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ApolloProvider client={apolloClient}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ApolloProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
