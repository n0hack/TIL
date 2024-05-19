import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  index() {
    return `
      <form action="/upload/profile" method="post" enctype="multipart/form-data" accept-charset="UTF-8">
        <input type="file" name="file" accept=".jpg, .jpeg, .png" />
        <button type="submit">업로드</button>
      </form>
    `;
  }
}
