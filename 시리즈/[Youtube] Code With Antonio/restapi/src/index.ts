import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';

const app = express();

app.use(
  cors({
    credentials: true,
  }),
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/', router());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});

const MONGO_URL = 'mongodb+srv://nohack:121234@cluster0.vklcz7o.mongodb.net/?retryWrites=true&w=majority';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL).then(() => {
  console.log('MongoDB connected');
});
mongoose.connection.on('error', (error: Error) => console.log(error));
