import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
});

// 인스턴스 메소드를 통해 비밀번호를 해싱하고, 검증함
// 인스턴스 메소드는 인스턴스를 만들어 사용해야 하고,
// 스태틱 메소드는 DB를 참조하는 식으로 모델에서 바로 사용 가능
// 문서(this)를 가리켜야 하므로, 일반 함수 형태로 사용해야 함
UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result; // true or false
};

UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

UserSchema.methods.generateToken = function () {
  // 넣고 싶은 값, 비밀키, 유효기간
  const token = jwt.sign(
    { _id: this.id, username: this.username },
    process.env.JWT_SECRET,
    { expiresIn: '7d' },
  );
  return token;
};

UserSchema.statics.findByUsername = async function (username) {
  // 스태틱 메소드의 this는 문서가 아닌, 모델(콜렉션)을 가리킴
  return this.findOne({ username });
};

const User = mongoose.model('User', UserSchema);
export default User;
