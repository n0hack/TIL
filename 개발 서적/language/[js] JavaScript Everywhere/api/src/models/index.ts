import Note from './note';
import User from './user';

const models = {
  Note,
  User,
};

export type Models = typeof models;

export default models;
