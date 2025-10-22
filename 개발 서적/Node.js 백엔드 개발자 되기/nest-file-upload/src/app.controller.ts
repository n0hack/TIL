import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from './multer.options';

@Controller()
export class AppController {
  @Post('file-upload')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  fileUpload(@UploadedFile() file: Express.Multer.File) {
    // 한글 파일명 깨짐 방지
    const originalFileName = Buffer.from(file.originalname, 'latin1').toString(
      'utf-8',
    );

    return `${originalFileName} 파일 업로드 완료! http://localhost:3000/uploads/${file.filename}`;
  }
}
