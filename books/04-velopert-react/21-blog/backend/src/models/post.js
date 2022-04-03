import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishData: {
    type: Date,
    default: Date.now,
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

// 스키마 이름은 Post지만, 이를 통해 만들어지는 컬렉션은 posts (컨벤션임)
const Post = mongoose.model('Post', PostSchema);
export default Post;
