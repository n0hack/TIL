// AJAX는 클라이언트가 서버에게 비동기 요청을 보내기 위한 방법을 의미
// XMLHttpRequest: HTTP 요청을 위한 객체
// 페이로드(Payload): 서버로 보내는 데이터 (메타, 헤더는 미포함)
const xhr = new XMLHttpRequest();

// 전송할 요청 초기화
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

// 클라이언트가 서버로 전송할 데이터의 MIME 타입 명시
xhr.setRequestHeader('Content-Type', 'application/json');
// 서버가 클라이언트에게 응답할 데이터의 MIME 타입 명시
// xhr.setRequestHeader('Accept', 'application/json');

// open 메소드로 초기화된 HTTP 정보에 따라 요청
// GET, POST, PUT, PATCH, DELETE
// 주로 5가지의 메소드를 사용하여, CRUD를 구현
xhr.send();

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.response));
  } else {
    console.log('Error', xhr.status, xhr.responseText);
  }
};
