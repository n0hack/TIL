import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: String,
  body: {
    type: String,
    required: true,
  },
  tags: [String],
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', PostSchema);

export default Post;
