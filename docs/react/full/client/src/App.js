/* global kakao */
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import jsonData from './map_info.json';
import $ from 'jquery';

function App() {
  const [username, setUsername] = useState('');
  useEffect(() => {
    // const fn = async () => {
    //   const response = await fetch('/users');
    //   const json = await response.json();
    //   console.log(json);
    // };
    // fn();
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    const clusterer = new kakao.maps.MarkerClusterer({
      map: map,
      averageCenter: true,
      minLevel: 5,
    });

    const markers = $(jsonData.positions).map(function (i, position) {
      let imgSrc =
        position.finish === '완치'
          ? require(`./img/clearp0${i + 1}.png`)
          : require(`./img/hop0${i + 1}.png`);

      const imgSize = new kakao.maps.Size(60, 70);
      const imgOption = { offset: new kakao.maps.Point(27, 69) };
      const markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize, imgOption);

      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(position.lat, position.lng),
        image: markerImg,
      });

      var content =
        '<div class="overlaybox">' +
        '    <div class="boxtitle">' +
        position.num +
        '번째 확진자</div>' +
        '    <div class="boxtitle2" style="margin-left: 150px;"><font color="white"">닫기 버튼 [X]</font></div>' +
        '    <div class="first first_' +
        position.num +
        '">' +
        '        <div class="triangle text">' +
        position.num +
        '</div>' +
        '        <div class="movietitle text">' +
        position.comment +
        '</div>' +
        '    </div>' +
        '    <ul style = "overflow:scroll">' +
        '        <li class="up">' +
        '            <span class="number">격리:</span>' +
        '            <span class="title" style="font-weight:bold;color:white">' +
        position.date +
        '</span>' +
        '            <span class="number">완치:</span>' +
        '            <span class="title" style="font-weight:bold;color:white">' +
        position.finish_date +
        '</span>' +
        '        </li>' +
        '        <li class="up">' +
        '            <span class="number">성별:</span>' +
        '            <span class="title" style="font-weight:bold;color:white">' +
        position.gender +
        '</span>' +
        '            <span class="number">생년:</span>' +
        '            <span class="title" style="font-weight:bold;color:white">' +
        position.birth +
        '</span>' +
        '            <span class="number">국적:</span>' +
        '            <span class="title" style="font-weight:bold;color:white">' +
        position.nation +
        '</span>' +
        '        </li>' +
        '        <li class="up">' +
        '            <span class="number">접속자수:</span>' +
        '            <span class="title" style="font-weight:bold;color:white">' +
        position.contact +
        '</span>' +
        '            <span class="number">격리조치중:</span>' +
        '            <span class="title" style="font-weight:bold;color:white">' +
        position.Isolation +
        '</span>' +
        '        </li>' +
        '    </ul>' +
        '</div>';

      var lat = Number(position.lat);
      var lng = Number(position.lng);
      var lat_string = lat.toString();
      var lng_string = lng.toString();

      var customOverlay = new kakao.maps.CustomOverlay({
        position: new kakao.maps.LatLng(lat_string, lng_string),
        content: content,
        xAnchor: 0.25,
        yAnchor: 0.95,
      });

      var clickHandler1 = function (event) {
        customOverlay.setMap(map);

        $('.boxtitle2').click(function () {
          customOverlay.setMap(null);
        });

        $('.first_' + position.num).css({
          background: 'url(' + position.hospi_img + ')',
          'background-size': '247px 247px',
        });
      };

      kakao.maps.event.addListener(marker, 'click', clickHandler1);
      return marker;
    });

    clusterer.addMarkers(markers);
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
