import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import UserListPage from './UserListPage';
import UserPage from './UserPage';

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<MainPage />} />
      <Route path="/users" element={<UserListPage />} />
      <Route path="/users/:id" element={<UserPage />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
