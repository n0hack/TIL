import express, { NextFunction, Request, RequestHandler, Response } from 'express';
import productRoutes from './routes';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const userId = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

mongoose
  .connect(`mongodb+srv://${userId}:${password}@cluster0.tmgmtym.mongodb.net/cluster0?retryWrites=true&w=majority`)
  .then(() => console.log('DB Connected'))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);
app.get('/', (req, res) => {
  res.send('Hello World');
});

// 비동기 에러 처리를 위한 에러 핸들러
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: error.message });
});

// const PORT = 52273;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

export default app;
