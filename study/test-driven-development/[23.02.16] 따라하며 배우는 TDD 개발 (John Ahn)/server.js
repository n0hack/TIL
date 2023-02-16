const express = require('express');
const productRoutes = require('./routes/products');

const PORT = 52273;

const app = express();

app.use(express.json());
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
