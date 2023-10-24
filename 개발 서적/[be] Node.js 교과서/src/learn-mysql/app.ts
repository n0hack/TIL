import express from 'express';
import morgan from 'morgan';
import db from '../../models';
import User from '../../models/user';

const app = express();

db.sequelize
  ?.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan('dev'));
app.use(express.json());

app.get('/', async (req, res) => {
  const users = await User?.findAll({});
  console.log(users);
  res.send('hello express');
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
