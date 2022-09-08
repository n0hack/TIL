import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ShowNumber from "./ShowNumber";

function App() {
  return (
    <div className="App">
      <ShowNumber defaultValue={0} label={"Hello World"} />
    </div>
  );
}

export default App;
