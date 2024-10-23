import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: process.env.DB_PASSWORD,
  database: 'nestjs-full-course',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
