import mongoose from 'mongoose';
import { INote } from './types';

// Note 스키마 정의
const noteSchema = new mongoose.Schema<INote>(
  {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    favoriteCount: { type: Number, default: 0 },
    favoritedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

// Note 모델 정의
const Note = mongoose.model('Note', noteSchema);

export default Note;
