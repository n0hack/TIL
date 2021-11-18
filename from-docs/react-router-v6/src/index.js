import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Expenses from './routes/Expenses.jsx';
import Invoice from './routes/Invoice.jsx';
import Invoices from './routes/Invoices.jsx';

const root = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* 반복되는 부분을 항상 다시 작성하기는 생산성이 떨어진다. 그래서 Outlet 사용 */}
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
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  root
);
