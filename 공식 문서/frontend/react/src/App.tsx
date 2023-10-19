// import './App.css';
import React from 'react';
import UseDebugValue from './hooks/UseDebugValue';
import UseDeferredValue from './hooks/UseDeferredValue';
import UseTransition from './hooks/UseTransition';
import UseSyncExternalStore from './hooks/UseSyncExternalStore';

function App() {
  return <UseSyncExternalStore />;
}

export default App;
