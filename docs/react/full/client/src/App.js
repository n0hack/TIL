/* global kakao */
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

    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
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
      <div id="map" style={{ width: '500px', height: '400px' }}></div>
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
