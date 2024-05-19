import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('upload')
export class UploadController {
  @Post('profile')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          // 파일명 한글 깨짐 현상 해결
          // https://github.com/mscdex/busboy/issues/20#issuecomment-1003622855
          const filename = Buffer.from(file.originalname, 'latin1').toString(
            'utf8',
          );
          return cb(null, `${uniqueSuffix}_${filename}`);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return file;
  }
}
