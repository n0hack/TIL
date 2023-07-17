import mongoose, { Model } from 'mongoose';

type Post = {
  title: string;
  body: string;
  author: string;
  date: Date;
};

// 인스턴스 메소드에 대한 타입
type PostMethods = {
  instanceHi(): void;
};

// 모델에 대한 타입 (스태틱 메소드 포함)
type PostModel = Model<Post, {}, PostMethods> & {
  staticHi(): void;
};

async function schemas() {
  await mongoose.connect('mongodb://localhost:27017/test');

  // 스키마 정의
  const postSchema = new mongoose.Schema<Post, PostModel, PostMethods>({
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, default: Date.now },
  });

  // 인스턴스 메소드 추가 (화살표 함수를 사용하면, this가 도큐먼트를 가리키지 않음)
  postSchema.methods.instanceHi = function () {
    console.log('instanceHi');
    console.log(this);
  };

  // 모델 생성
  const Post = mongoose.model<Post, PostModel>('Post', postSchema);

  // 스태틱 메소드 추가
  Post.staticHi = function () {
    console.log('staticHi');
    console.log(this);
  };

  const post = new Post({ title: '안녕', body: '테스트 게시물입니다', author: 'Lucid' });
  post.instanceHi();
  Post.staticHi();

  // 스키마 타입
  const numberSchema = new mongoose.Schema({
    integerOnly: {
      type: Number,
      get: (v: number) => Math.round(v),
      set: (v: number) => Math.round(v),
      alias: 'i',
    },
  });

  const Num = mongoose.model('Num', numberSchema);
  const doc = new Num();
  doc.integerOnly = 2.001;
  console.log(doc.integerOnly);
  console.log((doc as any).i);
}

export default schemas;
