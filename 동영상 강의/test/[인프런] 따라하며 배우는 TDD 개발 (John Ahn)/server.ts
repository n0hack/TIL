import express from 'express';
import productRoutes from './routes';
import mongoose from 'mongoose';

mongoose
  .connect('mongodb+srv://nohack:121234@cluster0.tmgmtym.mongodb.net/cluster0?retryWrites=true&w=majority')
  .then(() => console.log('DB Connected'))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);
app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = 52273;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
