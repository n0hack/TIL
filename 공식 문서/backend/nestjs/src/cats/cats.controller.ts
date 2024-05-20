import {
  Body,
  Controller,
  Get,
  HttpCode,
  Inject,
  Param,
  Post,
  UseGuards,
  Version,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guard/roles.guard';
import { UniqueCat } from 'src/common/decorators/cat.decorator';
import { ConfigType } from '@nestjs/config';
import dbConfig from '../config/db.config';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CatCreatedEvent } from 'src/cats/events/cat-created.event';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@UseGuards(RolesGuard)
@Controller('cats')
@ApiTags('고양이 관련 API 모음')
export class CatsController {
  constructor(
    private catsService: CatsService,
    private schedulerRegistry: SchedulerRegistry,
    @Inject(dbConfig.KEY) private databaseConfig: ConfigType<typeof dbConfig>,
    @Inject('CUSTOM_PROVIDER') private readonly test: any,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  @Post()
  @Roles(['admin'])
  @ApiOperation({
    description: '새로운 고양이를 만드는 API입니다.',
    summary: '고양이 생성',
  })
  @ApiBody({
    type: CreateCatDto,
    description: '새로운 고양이에 대한 정보를 입력해주세요.',
    examples: {
      루시_추가: {
        value: {
          name: '루시',
          age: 3,
          breed: '코숏',
        },
      },
    },
  })
  create(@Body() dto: CreateCatDto) {
    this.eventEmitter.emit('cat.created', new CatCreatedEvent(dto.name));
    this.catsService.create(dto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Version('2')
  @Get()
  async findAllV2(): Promise<Array<unknown>> {
    return ['버전 2입니다.'];
  }

  @Get('unique')
  async findUniqueCat(@UniqueCat('name') cat) {
    console.log(process.env);
    return cat;
  }

  @Get('change-http-code')
  @HttpCode(201)
  changeHttpCode(): string {
    return 'This action should return a status code of 201';
  }

  @Get('add-cron-job')
  async addCronJob() {
    // 1초마다 실행되는 CronJob
    const job = new CronJob('*/1 * * * * *', () => {
      console.log('addCronJob 호출로 인한 cron!');
    });
    this.schedulerRegistry.addCronJob('cron-job', job);
    job.start();

    return 'CronJob 추가 완료!';
  }

  @Get('remove-cron-job')
  async removeCronJob() {
    this.schedulerRegistry.deleteCronJob('cron-job');

    return 'CronJob 삭제 완료!';
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Cat> {
    return this.catsService.findOne(id);
  }
}
