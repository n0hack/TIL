import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import * as path from 'path';

export default (): PostgresConnectionOptions => ({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: process.env.DB_PASSWORD,
  database: 'nestjs-full-course',
  entities: [path.resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'],

  synchronize: false,
});
