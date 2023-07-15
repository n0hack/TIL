import mongoose from 'mongoose';

// Note 스키마 정의
const noteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Note 모델 정의
const Note = mongoose.model('Note', noteSchema);

export default Note;
