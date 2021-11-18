import { Link, Outlet } from 'react-router-dom';

export default function App() {
  const navStyle = { borderBottom: '1px solid', paddingBottom: '1rem' };
  return (
    <div>
      <h1>Bookkeeper!</h1>
      {/* 괄호 범위를 몰라도 알아서 잡아 줌 */}
      <nav style={navStyle}>
        <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}
