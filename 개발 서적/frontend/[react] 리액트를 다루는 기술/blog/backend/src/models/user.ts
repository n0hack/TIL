import mongoose, { Model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export interface IUser {
  username: string;
  hashedPassword: string;
}

interface IUserMethods {
  setPassword: (password: string) => Promise<void>;
  checkPassword: (password: string) => Promise<boolean>;
  serialize: () => Omit<IUser, 'hashedPassword'>;
  generateToken: () => string;
}

interface UserModel extends Model<IUser, {}, IUserMethods> {
  findByUsername(username: string): Promise<(IUser & IUserMethods) | null>;
}

const UserSchema: Schema<IUser, UserModel, IUserMethods> = new Schema({
  username: { type: String },
  hashedPassword: { type: String },
});

UserSchema.methods.setPassword = async function (password: string) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password: string) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result; // true or false
};

UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

UserSchema.methods.generateToken = function () {
  const token = jwt.sign(
    {
      _id: this.id,
      username: this.username,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: '7d',
    },
  );
  return token;
};

UserSchema.statics.findByUsername = function (username: string): Promise<IUser | null> {
  return this.findOne({ username });
};

const User = mongoose.model<IUser, UserModel>('User', UserSchema);

export default User;
