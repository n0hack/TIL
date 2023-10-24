import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import sqlConfig from '../config/config.json';
import User from './user';
import Comment from './comment';

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const config = sqlConfig[env as keyof typeof sqlConfig];
const db = {
  sequelize: new Sequelize(config.database, config.username, config.password, config as any),
};

export default db;
