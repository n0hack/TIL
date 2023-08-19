import express from 'express';
import productRoutes from './routes.js';

const PORT = 52273;

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
