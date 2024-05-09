import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { EmailService } from 'src/email/email.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, EmailService],
})
export class UsersModule {}
