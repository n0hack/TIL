import './css/New.css';
import { Route, Routes } from 'react-router-dom';
import FloatingPopulationList from './components/FloatingPopulationList';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LoginForm from './components/LoginForm';
import Rechart from './components/Rechart';

function App() {
  return (
    <div className="App">
      <Rechart />
    </div>
  );
}

export default App;
