import PComponent from './components/PComponent';
import 'bootstrap/dist/css/bootstrap.css';
import Reactstrap from './components/Reactstrap';
import SweetAlert from './components/SweetAlert';

function App() {
  return (
    <div className="App">
      <h1>Start React v18</h1>
      <p>CSS 적용하기</p>
      <SweetAlert />
    </div>
  );
}

export default App;
