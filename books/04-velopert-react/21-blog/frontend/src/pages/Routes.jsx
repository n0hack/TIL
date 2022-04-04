import { Routes as ReactRoutes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import PostListPage from './PostListPage';
import RegisterPage from './RegisterPage';
import WritePage from './WritePage';
import PostPage from './PostPage';

const MultiRoute = ({ element: Element, paths, ...rest }) =>
  paths.map((path) => (
    <Route key={path} path={path} {...rest} element={Element} />
  ));

export const Routes = () => {
  return (
    <ReactRoutes>
      {MultiRoute({ paths: ['/', '/@:username'], element: <PostListPage /> })}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/@:username/:postId" element={<PostPage />} />
    </ReactRoutes>
  );
};
