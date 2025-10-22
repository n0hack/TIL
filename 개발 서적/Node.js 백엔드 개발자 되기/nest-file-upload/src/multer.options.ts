import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { randomUUID } from 'crypto';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

export const multerOptions: MulterOptions = {
  // 기본값은 memoryStorage이며, diskStorage는 buffer를 가지고 있지 않음
  storage: diskStorage({
    // 최상단 경로의 uploads 폴더에 파일 저장
    destination: join(__dirname, '..', 'uploads'),
    filename: (req, file, cb) => {
      cb(null, randomUUID() + extname(file.originalname));
    },
  }),
};
