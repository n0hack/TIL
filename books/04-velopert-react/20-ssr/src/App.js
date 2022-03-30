import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import loadable from '@loadable/component';
const BluePage = loadable(() => import('./pages/BluePage'));
const RedPage = loadable(() => import('./pages/RedPage'));
const UserPage = loadable(() => import('./pages/UserPage'));
const UsersPage = loadable(() => import('./pages/UsersPage'));

function App() {
  return (
    <div className="App">
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
        <Route path="/users" element={<UsersPage />}>
          <Route path=":id" element={<UserPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
