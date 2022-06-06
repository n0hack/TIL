import React, { useState } from "react";
import Hello from "./Hello";

export default function App() {
  const [flag, setFlag] = useState(false);
  const handleChange = () => {
    setFlag((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleChange}>Switch Flag</button>
      {`${flag}`}
      <Hello />
    </div>
  );
}
