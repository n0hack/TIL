const socket = io('http://localhost:3000/chat'); //
const roomSocket = io('http://localhost:3000/room');

//  chat 네임스페이스 연결
const nickname = prompt('닉네임을 입력해주세요');
let currentRoom = '';

socket.on('connect', () => {
  console.log('Connected to server');
});

function sendMessage() {
  if (currentRoom === '') {
    alert('방을 먼저 선택해주세요');
    return;
  }

  const message = $('#message').val();
  const data = { message, nickname, room: currentRoom };

  $('#chat').append(`<div>나: ${message}</div>`);

  roomSocket.emit('message', data);

  return false;
}

roomSocket.on('message', (data) => {
  $('#chat').append(`<div>${data.message}</div>`);
});

function createRoom() {
  const room = prompt('방 이름을 입력해주세요');
  roomSocket.emit('createRoom', { room, nickname });
}

roomSocket.on('rooms', (data) => {
  console.log(data);

  $('#rooms').empty(); // 채팅방 갱신 시 우선 비우기 작업

  data.forEach((room) => {
    $('#rooms').append(
      `<li>${room} <button onclick="joinRoom('${room}')">참여</button></li>`,
    );
  });
});

socket.on('notice', (data) => {
  $('#notice').append(`<div>${data.message}</div>`);
});

function joinRoom(room) {
  roomSocket.emit('joinRoom', { room, nickname, toLeaveRoom: currentRoom });
  $('#chat').html('');
  currentRoom = room;
}
