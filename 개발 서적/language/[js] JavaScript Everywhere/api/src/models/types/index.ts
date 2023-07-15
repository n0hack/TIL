import mongoose from 'mongoose';

export interface INote {
  content: string;
  author: mongoose.Schema.Types.ObjectId;
  favoriteCount: number;
  favoritedBy: mongoose.Schema.Types.ObjectId[];
}

export interface IUser {
  _id: mongoose.Schema.Types.ObjectId;
  username: string;
  email: string;
  password: string;
  avatar: string;
}
