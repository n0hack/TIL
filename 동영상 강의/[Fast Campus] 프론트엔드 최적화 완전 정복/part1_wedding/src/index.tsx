import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ModalContextProvider } from './contexts/ModalContext';
import reportWebVitals from './reportWebVitals';
import { FullScreenMessage } from './components/shared/FullScreenMessage';

import './scss/global.scss';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <QueryClientProvider client={queryClient}>
    <ModalContextProvider>
      <Suspense fallback={<FullScreenMessage type="loading" />}>
        <App />
      </Suspense>
    </ModalContextProvider>
  </QueryClientProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
