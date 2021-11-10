import React, { useCallback } from 'react';
import { getInvoices } from '../data';
import { NavLink, Link, Outlet, useSearchParams } from 'react-router-dom';

const Invoices = () => {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  const handleChange = useCallback(
    (e) => {
      let filter = e.target.value;
      if (filter) {
        setSearchParams({ filter });
      } else {
        setSearchParams({});
      }
    },
    [setSearchParams]
  );

  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
        <input
          value={searchParams.get('filter') || ''}
          onChange={handleChange}
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
              style={({ isActive }) => {
                return {
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? 'red' : '',
                };
              }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Invoices;
