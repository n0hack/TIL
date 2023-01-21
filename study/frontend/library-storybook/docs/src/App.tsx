import { useState } from 'react';
import reactLogo from './assets/react.svg';
import tw, { css } from 'twin.macro';
import { ReactComponent as Icon } from '@static/svg/test.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      css={[
        css`
          color: green;
        `,
        tw`text-2xl`,
      ]}
    >
      ㅎㅇ
      <Icon className="text-blue-600" />
    </div>
  );
}

export default App;