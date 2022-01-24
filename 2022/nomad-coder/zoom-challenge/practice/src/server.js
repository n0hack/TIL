import http from 'http';
import WebSocket from 'ws';
import express from 'express';

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/public', express.static(__dirname + '/public'));
app.get('/', (req, res) => res.render('home'));
app.get('/*', (req, res) => res.redirect('/'));

const handleListen = () => console.log('Listening on http://localhost:3000');

// starting http and ws
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Vanilla JS같은 방법이라 추후 변경
// function handleConnection(socket) {
//   console.log(socket);
// }
// 이 방법이 더 명확함
wss.on('connection', (socket) => {
  console.log('Connected to Browser ✅');

  socket.on('close', () => {
    console.log('Disconnected from the Browser ❌');
  });

  socket.on('message', (message) => socket.send('ㅂㅇ'));

  socket.send('hello!');
});

server.listen(3000, handleListen);
