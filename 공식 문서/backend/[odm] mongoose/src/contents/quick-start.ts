import mongoose, { Model } from 'mongoose';

interface IKitty {
  name: string;
}

interface IKittyMethods {
  speak(): void;
}

type KittyModel = Model<IKitty, {}, IKittyMethods>;

async function quickStart() {
  await mongoose.connect('mongodb://localhost:27017/test');

  // 스키마
  const kittySchema = new mongoose.Schema<IKitty, KittyModel, IKittyMethods>({
    name: String,
  });

  // 메소드 추가
  // Model의 프로토타입으로 컴파일되어, 문서 생성 시 메소드를 사용할 수 있음
  kittySchema.methods.speak = function speak() {
    const greeting = this.name ? `안녕! 내 이름은 ${this.name}` : `난 이름이 없어`;
    console.log(greeting);
  };

  // 모델 (Document를 구성하는 클래스)
  const Kitten = mongoose.model('Kitten', kittySchema);

  const lucid = new Kitten({ name: 'Lucid' });
  lucid.speak();

  // DB에 저장
  // await lucid.save();

  const kittens = await Kitten.find({ name: /^Lucid/ });
  console.log(kittens);
}

export default quickStart;
