import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { App, store } from './common';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';


const domContainer = ReactDOM.createRoot(document.getElementById('root'));

domContainer.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Provider store={store}>
          <RecoilRoot>
            <React.Suspense>
              <App />
            </React.Suspense>
          </RecoilRoot>
        </Provider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
