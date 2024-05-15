import { Body, Controller, Get, HttpCode, Post, Query, Redirect } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() dto: CreateCatDto) {
    this.catsService.create(dto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('change-http-code')
  @HttpCode(201)
  changeHttpCode(): string {
    return 'This action should return a status code of 201';
  }

  @Get('redirect')
  @Redirect(
    'https://www.google.com/search?newwindow=1&sca_esv=64bfd657b885de45&q=%EA%B3%A0%EC%96%91%EC%9D%B4&uds=ADvngMhpsojwKe5eIOqT5IDaiLbecCGeXmS6V8SFA4qpkrOcWjV3SgZm17FkJY8vgOmE3kWKqJ4BLRQeTx2W82Td34KSoBmn9F5ZaAUzU3BbXS83U7V35hRAI6PaYPFMcUPH-YELEYOyj00h_2O0i8z0OQmL0-j_VzRkQb2hzCxo-K-GTP1WhsGu7Vz55go1g_oPYVVm9SS22fWEH1oyD_PPYnUbJCLaltKjAN8kJ4Pp1XXFE1EAwkFQ1ykZGvpzxqk-eZTqMQeybUS5qfGOSc-V7nJ0ssYDijR15lVdr06N6AxRVjtBEx0&udm=2&prmd=ivsnmbz&sa=X&ved=2ahUKEwjUmuCClJCGAxV7plYBHaDLAoAQtKgLegQIDRAB&biw=1153&bih=1647&dpr=2',
    302,
  )
  getCatsRedirect(@Query('keyword') keyword: string) {
    if (keyword && keyword === '러시안블루') {
      return {
        url: 'https://www.google.com/search?q=%EB%9F%AC%EC%8B%9C%EC%95%88%EB%B8%94%EB%A3%A8&newwindow=1&sca_esv=64bfd657b885de45&udm=2&biw=1153&bih=1647&ei=d-1EZvmCB7zX2roPwdK4wAI&ved=0ahUKEwi5mruDlJCGAxW8q1YBHUEpDigQ4dUDCBA&uact=5&oq=%EB%9F%AC%EC%8B%9C%EC%95%88%EB%B8%94%EB%A3%A8&gs_lp=Egxnd3Mtd2l6LXNlcnAiD-ufrOyLnOyViOu4lOujqDIIEAAYgAQYsQMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI1hRQ9AVY5BNwBngAkAEDmAHPAaABsxCqAQYxLjEyLjK4AQPIAQD4AQGYAgqgAsAFqAIAwgILEAAYgAQYsQMYgwHCAgQQABgDwgIOEAAYgAQYsQMYgwEYigWYAwGIBgGSBwU2LjMuMaAH10M&sclient=gws-wiz-serp',
      };
    }
  }
}
