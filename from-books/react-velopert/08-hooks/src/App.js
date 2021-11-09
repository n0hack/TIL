import { useCallback, useState } from 'react';
import './App.css';
import CounterReducer from './CounterReducer';
import Info from './Info';
import Info2 from './Info2';
import InfoReducer from './InfoReducer';
import Memo from './Memo';
import UseCallbacks from './UseCallbacks';

function App() {
  return <Info />;
  // const [visible, setVisible] = useState(false);
  // return (
  //   <>
  //     <button onClick={() => setVisible(!visible)}>
  //       {!visible ? '보이기' : '숨기기'}
  //     </button>
  //     {visible && <Info2 />}
  //   </>
  // );
}

export default App;
