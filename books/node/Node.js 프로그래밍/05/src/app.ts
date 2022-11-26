import express from 'express';
import http from 'http';
import path from 'path';
import multer from 'multer';

const app = express();
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'upload');
    },
  }),
});

app.use('/', express.static('public'));
app.use('/upload', express.static('upload'));

app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file, req.body);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<img src="${req.file?.path}" />`);
  res.end();
});

app.listen(52273, () => {
  console.log('server running at http://127.0.0.1:52273/');
});
