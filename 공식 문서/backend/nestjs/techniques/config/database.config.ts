import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
}));
