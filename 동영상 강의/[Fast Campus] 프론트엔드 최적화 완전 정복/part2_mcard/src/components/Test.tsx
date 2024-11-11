import { useEffect, useState } from 'react';

const Test = () => {
  const [s, setS] = useState(1);

  useEffect(() => {
    console.log(s);
  }, [s]);

  return <div>Test</div>;
};

export default Test;
