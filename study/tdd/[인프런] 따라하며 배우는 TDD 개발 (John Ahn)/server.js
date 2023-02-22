const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');

const PORT = 52273;

const app = express();

mongoose
  .connect('mongodb+srv://nohack:121234@cluster0.tmgmtym.mongodb.net/cluster0?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

app.use(express.json());
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

// 에러 핸들러 미들웨어를 추가해서 에러를 처리
app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

// app.listen(PORT, () => {
//   console.log(`Running on port ${PORT}`);
// });

module.exports = app;
