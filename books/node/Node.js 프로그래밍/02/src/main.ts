import dotenv from 'dotenv';
import { add } from '@libs/test';
import os from 'os';
import path from 'path';

dotenv.config();

console.log('hello world');

const obj = {
  name: 'ming',
  age: 29,
};

process.on('uncaughtException', (err, origin) => {
  console.log('에러');
  console.log(err);
  console.log(origin);
});
console.log(os.arch());
console.log(path.join(__dirname, 'test'));
