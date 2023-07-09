import DataContext from './patterns/design/Provider/Provider';
import ProviderChild from './patterns/design/Provider/ProviderChild';
import './App.css';

function App() {
  return (
    <DataContext.Provider value={{ data: 123 }}>
      <ProviderChild />
    </DataContext.Provider>
  );
}

export default App;
