import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchConfig } from '../common/store/features/config';
import { Showcase, ProductDetail } from '../pages';
import { AppLogger } from 'app-logger';

export const App = () => {
  const dispatch = useDispatch();

  AppLogger.setup({
    service: '12shop',
    application: 'showcase',
  });

  useEffect(() => {
    dispatch(fetchConfig());
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<React.Suspense children={ <Showcase /> } />} />
        <Route path='/detail/:id' element={<React.Suspense children={ <ProductDetail /> } /> } />
      </Routes>
    </>
  );
};
