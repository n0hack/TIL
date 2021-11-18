import {
  NavLink,
  Outlet,
  useSearchParams,
  useLocation,
} from 'react-router-dom';
import { getInvoices } from '../data';

export default function Invoices() {
  let invoices = getInvoices();
  let location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ borderRight: '1px solid', padding: '1rem' }}>
        <input
          type="text"
          value={searchParams.get('filter') || ''}
          onChange={(e) => {
            let filter = e.target.value;
            if (filter) setSearchParams({ filter });
            else setSearchParams({});
          }}
        />
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get('filter');
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
            <NavLink
              style={({ isActive }) => ({
                display: 'block',
                margin: '1rem 0',
                color: isActive ? 'red' : '',
              })}
              to={`/invoices/${invoice.number}${location.search}`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
