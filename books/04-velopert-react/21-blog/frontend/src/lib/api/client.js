import axios from 'axios';

/* 
axios 인스턴스를 미리 만들어 두고, 클라이언트 안에서 공통된 설정으로 사용 
이렇게 하지 않으면 불필요하게 매 요청마다 인스턴스를 모든 요청에 대해 다시 설정하게 되고, 다른 API 서버를 사용할 때 곤란해질 수 있음
*/
const client = axios.create();

/*//  글로벌 설정 예시 

// API 주소를 다른 곳으로 사용
client.defaults.baseURL = 'https://external-api-server.com/';

// 헤더 설정
client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';

// 인터셉터 설정 (요청 성공/실패 시 작업)
axios.intercepter.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
); */

export default client;
