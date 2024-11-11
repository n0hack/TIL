import { useEffect, useState } from 'react';

type TestProps = {};

const Test = ({}: TestProps) => {
  const [s, setS] = useState(1);

  useEffect(() => {
    console.log(s);
  }, [s]);

  return <div>Test</div>;
};

export default Test;
