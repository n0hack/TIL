import { useQuery } from '@tanstack/react-query';
import { getUsers } from './api/restapi/user';
import Routes from '@pages/Routes';
import ApiErrorBoundary from '@components/helper/error/ApiErrorBoundary';

function App() {
  return <Routes />;
}

export default App;
