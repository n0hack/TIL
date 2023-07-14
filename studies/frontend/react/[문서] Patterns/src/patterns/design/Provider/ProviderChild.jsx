import { useContext } from 'react';
import DataContext from './Provider';

const ProviderChild = () => {
  const { data } = useContext(DataContext);

  return <div>Context: {data}</div>;
};

export default ProviderChild;
