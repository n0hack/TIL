import mongoose from 'mongoose';

export default {
  connect: (DB_HOST: string) => {
    mongoose.connect(DB_HOST).then(() => console.log('Notedly DB 연결 완료'));
    mongoose.connection.on('error', (err) => {
      console.error(err);
      console.log('MongoDB connection error. Please make sure MongoDB is running.');
      process.exit();
    });
  },
  close: () => {
    mongoose.connection.close();
  },
};
