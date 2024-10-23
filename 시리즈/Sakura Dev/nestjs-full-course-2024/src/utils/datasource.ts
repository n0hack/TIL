import * as path from 'path';
import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: process.env.DB_PASSWORD,
  database: 'nestjs-full-course',
  entities: [path.resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'],
  synchronize: false,

  migrationsRun: false,
  migrations: [path.resolve(__dirname, '..') + '/**/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations_typeorm',
});
