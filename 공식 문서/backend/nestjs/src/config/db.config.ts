import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  user: process.env.DATABASE_USER,
  port: parseInt(process.env.DATABASE_PORT, 10),
}));
