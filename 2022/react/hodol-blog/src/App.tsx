import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const [state, setState] = useState(0);

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
