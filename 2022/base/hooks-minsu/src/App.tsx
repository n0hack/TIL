import { useEffect, useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <h1>{count}</h1>
      <button ref={ref}>-1</button>
    </div>
  );
};

export default App;
