import PComponent from './components/PComponent';
import 'bootstrap/dist/css/bootstrap.css';
import Reactstrap from './components/Reactstrap';
import SweetAlert from './components/SweetAlert';
import Currying from './components/Currying';

function App() {
  return (
    <div className="App">
      <h1>Start React v18</h1>
      <p>CSS 적용하기</p>
      <Currying />
    </div>
  );
}

export default App;
