import express from 'express';
import morgan from 'morgan';
import path from 'path';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import multer from 'multer';

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, path.resolve(__dirname, 'uploads'));
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

dotenv.config();

const app = express();

app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    // 이렇게도 호출 가능
    morgan('combined')(req, res, next);
  } else {
    morgan('dev')(req, res, next);
  }
});

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET!,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: 'session-cookie',
  }),
);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/data/multipart.html'));
});

app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file, req.body);
  res.send('ok');
});

app.listen(8080, () => {
  console.log('Server is running');
});
