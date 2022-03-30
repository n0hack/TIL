import PComponent from './components/PComponent';
import 'bootstrap/dist/css/bootstrap.css';
import Reactstrap from './components/Reactstrap';
import SweetAlert from './components/SweetAlert';
import Currying from './components/Currying';
import HOC from './components/HOC';
import ContextFirst from './components/ContextFirst';

function App() {
  return (
    <div className="App">
      <h1>Start React v18</h1>
      <p>CSS 적용하기</p>
      <ContextFirst />
    </div>
  );
}

export default App;
