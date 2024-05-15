import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TaskService } from './task.service';
import { BatchController } from './batch.controller';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [BatchController],
  providers: [TaskService],
})
export class BatchModule {}
