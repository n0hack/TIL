const express = require('express');
const app = express();
const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
};

const unexpectedErrorHandler = (error) => {
  console.error(error);
  exitHandler();
};

app.use(express.static('public'));

app.get('/ping', (req, res) => {
  res.send('OKay');
});

const server = app.listen(process.env.PORT || 1203, () => {
  console.log('ready to server');
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  console.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
