import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Invoices from './routes/Invoices';
import Expenses from './routes/Expenses';
import Invoice from './routes/Invoice';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="expenses" element={<Expenses />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
