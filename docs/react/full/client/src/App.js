import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  useEffect(() => {
    const fn = async () => {
      const response = await fetch('/users');
      const json = await response.json();
      console.log(json);
    };
    fn();
  }, []);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const body = { username };
      const res = await axios({
        method: 'post',
        url: '/users?q=hi',
        data: body,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res.data.result);
    },
    [username]
  );

  const onChange = useCallback((e) => {
    setUsername(e.target.value);
  }, []);

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={username}
          name="username"
        />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}

export default App;
