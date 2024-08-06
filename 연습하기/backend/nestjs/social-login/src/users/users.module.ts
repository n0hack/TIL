import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User as UserEntity } from './user.entity';
import { UsersController } from './users.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersService, JwtService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
