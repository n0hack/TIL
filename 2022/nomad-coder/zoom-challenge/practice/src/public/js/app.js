// host를 알아서 가져오도록
const socket = new WebSocket(`ws://${window.location.host}`);
const button = document.querySelector('button');

button.addEventListener('click', () => {
  socket.send('ㅎㅇ');
});

socket.addEventListener('open', () => {
  console.log('Connected to Browser ✅');
});

socket.addEventListener('message', (message) =>
  console.log('New message: ', message.data)
);

socket.addEventListener('close', () => {
  console.log('Disconnected from Server ❌');
});
